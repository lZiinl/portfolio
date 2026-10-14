// Progressive enhancement: all content and links work without JavaScript.
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
if (menuButton && nav) {
  menuButton.hidden = false;
  const closeMenu = () => { menuButton.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); };
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(expanded));
    nav.classList.toggle('is-open', expanded);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); menuButton.focus(); }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.nav-shell')) closeMenu(); });
  matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
}

const descriptions = [
  '센서와 HW의 특성을 이해하고, 신호의 흐름을 살핍니다.',
  '요구사항을 C 기반 MCU 제어·진단 로직으로 구현합니다.',
  'SW 시험과 실제 HW 연동으로 의도한 동작을 확인합니다.'
];
document.querySelectorAll('[data-system]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-system]').forEach(other => {
      other.classList.toggle('selected', other === button);
      other.setAttribute('aria-pressed', String(other === button));
    });
    document.querySelector('.system-description').textContent = descriptions[Number(button.dataset.system)];
    document.querySelector('.hero-system').dataset.stage = button.dataset.system;
  });
});

const filterBar = document.querySelector('.filter-bar');
if (filterBar) {
  filterBar.hidden = false;
  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
      let count = 0;
      document.querySelectorAll('[data-category]').forEach(card => {
        card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
        if (!card.hidden) count++;
      });
      document.querySelector('.filter-result').textContent = `${count}개의 대표 프로젝트`;
    });
  });
}

if ('IntersectionObserver' in window && document.querySelector('.hero')) {
  const sectionLinks = [...document.querySelectorAll('#site-nav a')];
  const observer = new IntersectionObserver(entries => {
    const current = entries.filter(x => x.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (!current) return;
    sectionLinks.forEach(a => {
      const active = a.hash === `#${current.target.id}`;
      a.classList.toggle('active', active);
      if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
  window.addEventListener('scroll', () => {
    if (window.scrollY < 200) sectionLinks.forEach(a => { a.classList.remove('active'); a.removeAttribute('aria-current'); });
  }, { passive: true });
}

// Print all records, including details collapsed by the visitor; restore afterwards.
let closedDetails = [];
window.addEventListener('beforeprint', () => {
  closedDetails = [...document.querySelectorAll('details:not([open])')];
  closedDetails.forEach(detail => { detail.open = true; });
});
window.addEventListener('afterprint', () => { closedDetails.forEach(detail => { detail.open = false; }); });

// GIF originals are requested only after a click. Stop restores the still frame.
const motionPlayers = [...document.querySelectorAll('[data-motion]')].map(figure => {
  const img = figure.querySelector('img');
  const button = figure.querySelector('.motion-toggle');
  const status = figure.querySelector('.motion-status');
  let playing = false;
  let timer;
  const stop = (message = '') => {
    clearTimeout(timer);
    playing = false;
    img.onload = null;
    img.onerror = null;
    img.setAttribute('src', img.dataset.poster);
    button.textContent = '▶ 재생';
    button.setAttribute('aria-pressed','false');
    button.setAttribute('aria-label',`${figure.dataset.title} 재생`);
    status.textContent = message;
    figure.classList.remove('is-playing');
  };
  button.hidden = false;
  button.setAttribute('aria-label',`${figure.dataset.title} 재생`);
  button.addEventListener('click', () => {
    if (playing) { stop('정지'); return; }
    motionPlayers.forEach(player => player.stop());
    playing = true;
    button.textContent = '■ 정지';
    button.setAttribute('aria-pressed','true');
    button.setAttribute('aria-label',`${figure.dataset.title} 정지`);
    status.textContent = '불러오는 중…';
    figure.classList.add('is-playing');
    img.onload = () => {
      if (!playing) return;
      status.textContent = '재생 중';
      clearTimeout(timer);
      timer = setTimeout(() => stop('재생 완료'), Number(figure.dataset.duration));
    };
    img.onerror = () => stop('불러오지 못했습니다. 원본 GIF를 확인해 주세요.');
    img.setAttribute('src',img.dataset.animation);
  });
  figure.closest('details')?.addEventListener('toggle', event => { if (!event.target.open) stop(); });
  return {stop};
});
const stopAllMotion = () => motionPlayers.forEach(player => player.stop());
document.addEventListener('visibilitychange', () => { if (document.hidden) stopAllMotion(); });
window.addEventListener('beforeprint', stopAllMotion);
window.addEventListener('pagehide', stopAllMotion);
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', event => { if (event.matches) stopAllMotion(); });
