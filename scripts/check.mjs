import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { projects } from '../data/portfolio.mjs';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const pages=['index.html',...projects.map(p=>`projects/${p.id}.html`)];
const problems=[];
for (const page of pages) {
  const html=await readFile(join(root,page),'utf8');
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  if(new Set(ids).size!==ids.length) problems.push(`${page}: duplicate IDs`);
  if((html.match(/<h1\b/g)||[]).length!==1) problems.push(`${page}: expected one h1`);
  if(!/<title>[^<]+<\/title>/.test(html)) problems.push(`${page}: missing page title`);
  if(!html.includes('lang="ko"')) problems.push(`${page}: missing language`);
  for(const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
    const url=match[1];
    if(/^(?:https?:|mailto:|data:)/.test(url)) continue;
    const [file,hash]=url.split('#');
    const destination=file?resolve(dirname(join(root,page)),file):join(root,page);
    try {
      await access(destination);
      if(hash){const target=await readFile(destination,'utf8');if(!target.includes(`id="${hash}"`)) problems.push(`${page}: missing anchor ${url}`);}
    } catch {problems.push(`${page}: missing target ${url}`);}
  }
  for(const banned of ['TODO','이미지 준비 중','99%','20+ Projects','mailto:null','1997.05.05','EA1c','QY2i','9BQB','NI1i','OVP','ZOOX']) {
    if(html.includes(banned)) problems.push(`${page}: unexpected text ${banned}`);
  }
}
if(problems.length){console.error(problems.join('\n'));process.exitCode=1;}else console.log(`PASS: ${pages.length} pages; local links, anchors, IDs, titles and content exclusions.`);
