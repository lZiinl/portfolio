// 공개 화면에 쓰는 정보만 관리합니다. 변경 후 npm run build를 실행하세요.
export const profile = {
  name: '조정훈', englishName: 'Cho Jeonghun', role: 'Embedded Software Engineer',
  updated: '2026.10.14',
  intro: '센서와 계측 시스템 연구를 바탕으로 차량용 MCU SW를 개발하고 검증합니다. 코드뿐 아니라 HW와의 인터페이스까지 살피며 시스템의 동작을 확인합니다.',
  about: '기계설계에서 시작해 센서와 계측을 연구하고, 임베디드 SW로 다루는 범위를 넓혔습니다. 물리적인 신호가 코드의 판단을 거쳐 실제 동작으로 이어지는 과정을 이해하고 구현합니다.',
  email: null, github: null, resume: null
};

export const projects = [
  {
    id: 'mcu', number: '01', category: '실무', type: 'work', featured: true,
    title: '차량용 MCU SW,\n구현에서 검증까지.',
    fullTitle: '차량용 램프 MCU SW 개발 및 검증',
    period: '2025.02 — 현재', periodNote: '금호HT 업무 기간 · 2026.10.14 기준',
    label: 'AUTOMOTIVE / EMBEDDED SOFTWARE',
    summary: '제어·진단 로직을 구현하고, 실제 HW에서 요구한 동작이 이루어지는지 확인합니다.',
    role: 'C 기반 MCU SW 구현, 정적 분석, 단위·통합시험, HW 연동 시험',
    result: '기능 구현과 시험 수행, 검출 항목 수정 및 재검증',
    tags: ['Embedded C', 'NXP / PIC', 'Polyspace', 'VectorCAST'],
    diagram: ['요구사항', '설계·구현', 'SW 시험', 'HW 연동'],
    background: '차량용 램프 제어 SW는 제어·진단 기능의 구현과 함께 실제 HW와의 동작 확인이 필요합니다. 요구사항 분석부터 설계, 구현, 정적 분석과 시험에 참여했습니다.',
    actions: [
      ['제어·진단 구현', 'NXP Kinetis, S32K144, PIC 기반으로 C 제어·진단 로직을 구현했습니다. ADC로 전압과 진단 신호를 계측하고 GPIO와 PWM 출력을 제어했습니다.'],
      ['정적 분석과 SW 시험', 'Polyspace로 MISRA-C와 CWE 분석 결과를 검토하고 코드를 수정·재검증했습니다. VectorCAST 기반 단위시험과 통합시험을 수행했습니다.'],
      ['인터페이스와 추적성', 'CAN, LIN, UART 관련 개발과 HW 연동 시험을 수행했습니다. Codebeamer로 요구사항, 설계, 검증 항목 사이의 추적성을 구축·관리했습니다.']
    ],
    verification: '구현한 기능을 단위·통합시험과 실제 HW 연동 시스템 시험으로 확인했습니다. 검출된 항목은 수정 후 다시 시험했습니다.',
    scope: '여러 업무와 프로젝트에서 수행한 내용을 정리했습니다. A-SPICE 공식 담당 범위는 한 프로젝트의 SWE.4~SWE.6, 사내 Pilot Project의 SWE.3~SWE.5입니다.',
    details: [['개발 환경과 협업', 'Git 기반 소스 형상관리, 사내 형상관리 프로그램 유지보수, 팀 형상관리 가이드 개정에 참여했습니다. MATLAB/Simulink 기반 MBD 선행개발도 수행했습니다.']]
  },
  {
    id: 'robot', number: '02', category: '교육', type: 'education', featured: true,
    title: '코드 밖의 원인까지.\n이동 로봇의 동작 안정화.',
    fullTitle: '교육용 이동 로봇 제어 및 원격 모니터링',
    period: '2024.07 — 2024.08', periodNote: '2024.07.08~08.16 · 6주 · 6인 팀',
    label: 'ROBOTICS / SYSTEM INTEGRATION',
    summary: '계측·제어 SW와 전원 구성을 함께 살펴, 로봇 구동과 원격 모니터링을 연결했습니다.',
    role: 'PM, 기구·전원 구성, Raspberry Pi 계측·제어, MQTT 연동',
    result: '원격 모니터링·제어 구현 · SSAFY 공통 프로젝트 우수상',
    tags: ['Python', 'Raspberry Pi', 'MQTT', 'UART'],
    diagram: ['센서 수집', '계측·제어', '원격 연동'],
    background: '6인 팀으로 센서와 카메라, 이동 기능, 원격 모니터링·제어를 결합한 교육용 로봇을 제작했습니다. 저는 일정과 역할을 조율하고 기구 제작, 전원 구성, Raspberry Pi 계측·제어 SW를 담당했습니다.',
    actions: [
      ['증상에서 출발', '솔레노이드가 작동할 때 시스템이 종료되는 현상이 발생했습니다. SW 점검 후 분석 범위를 전원 계통으로 넓혔습니다.'],
      ['전원 구성 재검토', 'DC-DC 컨버터의 표시 전압이 순간적으로 떨어지는 현상을 관찰했습니다. 별도 배터리와 DC-DC 컨버터를 사용해 전원을 분리했습니다.'],
      ['기능 연결과 반복시험', '센서 데이터 수집, 구동기 제어, MQTT 연동을 구현하고 반복시험으로 동작 안정화를 확인했습니다.']
    ],
    verification: '로봇 구동과 원격 모니터링·제어 기능을 구현했습니다. 팀 프로젝트는 2024년 8월 16일 SSAFY 공통 프로젝트 우수상을 받았습니다.',
    scope: 'ROS와 LiDAR SLAM 기반 이동 기능은 팀 시스템의 일부이며, 제 역할은 계측·제어 SW와 시스템 연동입니다. 전압 변화는 DC-DC 컨버터 표시값으로 관찰했습니다.',
    details: []
  },
  {
    id: 'agv', number: '03', category: '교육', type: 'education', featured: true,
    title: '주행의 문제를,\n데이터에서 다시 찾다.',
    fullTitle: '영상 학습 기반 AGV 주행 안정화',
    period: '2024.05', periodNote: 'SSAFY 교육 프로젝트 · 2024.05.06~05.24 · 3주 · 2인 팀',
    label: 'AGV / DATA ANALYSIS',
    summary: '제어값 조정으로 해결되지 않은 지그재그 주행. 판단의 근거가 되는 이미지부터 다시 확인했습니다.',
    role: '학습 데이터 검토·증강·재학습, Raspberry Pi 계측·제어, Node-RED 모니터링',
    result: '추가 현장 데이터 수집 없이 직선 주행 안정화',
    tags: ['Python', '데이터 증강', 'MQTT', 'Node-RED'],
    diagram: ['데이터 검토', '구성 조정', '재학습·확인'],
    background: '카메라 이미지 학습 기반 AGV가 직선에서도 지그재그로 주행했습니다. 제어 파라미터를 조정해도 해결되지 않아, 제어 판단의 근거인 학습 데이터 구성을 확인했습니다.',
    actions: [
      ['약 2,500장 전수 확인', '학습 이미지를 전수 검토해 특정 각도·조건의 데이터가 70% 이상으로 편중된 점을 발견했습니다.'],
      ['제약에 맞춘 데이터 조정', '추가 촬영이 어려운 일정에서 데이터 비중을 조절하고 이미지 반전, 노이즈 추가 등으로 데이터를 증강했습니다.'],
      ['재학습 후 주행 확인', '조정한 데이터로 재학습한 뒤 직선 주행 안정화를 확인했습니다. 이후 시간을 차량 상태 모니터링과 제어 기능 개발에 활용했습니다.'],
      ['상태 모니터링과 제어 연동', 'Raspberry Pi로 센서 데이터를 수집하고 MQTT로 연동했습니다. Node-RED 대시보드에서 상태 확인과 목적지·제어모드 변경 기능을 구현하고 Firebase와 CSV로 데이터를 기록했습니다.']
    ],
    verification: '추가 현장 데이터 수집 없이 직선 주행을 안정화했습니다. 제어 파라미터뿐 아니라 입력 데이터의 구성까지 분석 범위를 넓혀 해결했습니다.',
    scope: '약 2,500장과 70% 이상은 검토한 데이터 수와 편중 비율입니다. 정확도나 주행 성능의 향상률을 의미하지 않습니다.',
    details: []
  },
  {
    id: 'plc', number: '04', category: '연구', type: 'research', featured: true,
    title: '센서에서 화면까지.\n하나로 연결한 제어 시스템.',
    fullTitle: 'PLC 기반 LNG 연료공급 모니터링·제어',
    period: '2020.05 — 2021.12', periodNote: '연구 프로젝트 참여 기간',
    label: 'INDUSTRIAL / MEASUREMENT & CONTROL',
    summary: '센서, PLC, 통신, HMI를 통합해 현장 제어와 IoT 기반 원격 모니터링을 구현했습니다.',
    role: '신호 수집·제어 회로, 센서 보정, PLC 프로그래밍, HMI 통합',
    result: '현장 제어와 IoT 기반 원격 모니터링·제어 시스템 구성',
    tags: ['XGT PLC', 'XG5000', 'RS232 / 485', 'HMI'],
    diagram: ['센서', 'PLC', 'HMI · IoT'],
    background: 'LNG 연료공급 시스템의 상태를 계측하고 현장과 원격에서 모니터링·제어할 수 있도록 센서와 제어 장치를 통합하는 연구에 참여했습니다.',
    actions: [
      ['신호 수집과 출력 제어', '압력센서, 열전대, 로드셀의 신호 수집 회로와 DO·릴레이 제어 회로를 구성했습니다.'],
      ['보정과 PLC 프로그래밍', '센서를 보정하고 XG5000에서 XGT 계열 PLC 프로그램을 개발했습니다.'],
      ['통신과 화면 통합', 'PLC와 Vitcon IoT 모듈 사이의 통신, RS232·RS485 연결, eXP-40/TTA HMI를 활용한 모니터링·제어 인터페이스를 구성했습니다.']
    ],
    verification: '센서, PLC, 통신, HMI를 통합해 현장 제어와 IoT 기반 원격 모니터링·제어가 가능한 시스템을 구성했습니다.',
    scope: '직접 수행한 범위는 계측·제어 시스템 구성과 PLC 프로그램 개발입니다. 선박 탑재나 상용화 성과를 의미하지 않습니다.',
    details: []
  },
  {
    id: 'cnt', number: '05', category: '연구', type: 'research', featured: true,
    title: '센서의 형상과 온도,\n측정값의 이유를 찾다.',
    fullTitle: 'CNT 센서의 형상 영향 분석과 온도 보상',
    period: '2021.09 — 2023.02', periodNote: '기계설계공학 석사 연구 기간',
    label: 'SENSOR / MASTER’S RESEARCH',
    summary: '센서의 형상·조성과 감도 사이의 관계를 분석하고, 브리지 회로에 따른 출력 변동을 비교했습니다.',
    role: '센서 시편 제작, 모델 비교·SHAP 분석, 브리지 회로 구성·계측',
    result: '변수별 예측 기여도 분석 및 브리지 구성별 출력 변동 비교',
    tags: ['LightGBM', 'SHAP', 'Wheatstone bridge', 'DAQ'],
    diagram: ['시편 제작', '계측', '분석·비교'],
    background: 'CNT/Epoxy 센서의 형상과 조성에 따라 감도가 어떻게 달라지는지, 온도에 따른 출력 변동을 회로 구성으로 줄일 수 있는지 연구했습니다.',
    actions: [
      ['직접 제작하고 계측', '몰딩과 브러싱을 결합해 약 100개의 센서 시편을 제작하고 전체 약 2,400개의 데이터를 수집했습니다. CNT 함량, 길이, 너비를 입력으로 게이지 계수를 분석했습니다.'],
      ['모델 비교와 기여도 분석', 'DNN, LSTM, XGBoost, LightGBM을 비교했습니다. 제공된 비교에서 LightGBM의 RMSE와 MAE가 가장 낮았으며, SHAP 평균 절대값 기여도는 CNT 함량, 너비, 길이 순이었습니다.'],
      ['회로 구성에 따른 출력 비교', 'Quarter, Half, Full Wheatstone bridge를 구성했습니다. 신호를 1,000배 증폭·필터링한 뒤 DAQ로 수집해 출력 변동을 비교했습니다.']
    ],
    verification: '분석 범위에서 센서 너비가 작을수록 예측 감도가 증가하는 경향을 확인했습니다. 온도 보상 실험에서는 Half와 Full의 출력 변동이 Quarter보다 작았으며, 해당 실험에서 Half가 상대적으로 안정적이었습니다.',
    scope: 'SHAP 기여도는 모델 예측에 대한 설명이며 물리적 인과관계의 입증이 아닙니다. 관찰 결과는 해당 시편과 실험 조건의 범위에서 해석했습니다.',
    details: [
      ['데이터와 모델 비교 조건', '전체 수집 데이터는 약 2,400개이며, 개별 모델 비교에 사용된 학습 데이터 500개와 테스트 데이터 50개와는 구분됩니다.'],
      ['온도 보상 실험 조건', '사전 온도 의존성 실험은 20~90℃, 브리지 보상 실험은 20~80℃에서 진행했습니다. Quarter는 시편 3개, Half는 3쌍(6개), Full은 3세트(12개)를 비교했습니다. 보상 실험에서는 별도 실시간 온도 측정 없이 시간에 따른 선형 온도 변화를 가정했습니다.'],
      ['비교 그래프의 선정 기준', '논문 Fig. V-7은 각 타입에서 가장 성능이 좋은 데이터를 선택한 결과로, Quarter_sample_1, Half_sample_3, Full_sample_3을 비교했습니다. 전체 평균이나 모든 조건에 대한 성능을 의미하지 않습니다.'],
      ['학위논문', '머신러닝-SHAP value를 활용한 탄소 나노 전왜성 센서의 형상설계 및 온도보상 연구. 부경대학교 대학원 기계설계공학과, 공학석사 학위논문, 2023년 2월.']
    ]
  },
  {
    id: 'loadcell', number: '06', category: '연구', type: 'research', featured: false,
    title: '3D 프린팅 CNT 로드셀', fullTitle: '3D 프린팅 CNT 로드셀',
    period: '2021.11 — 2022.10', periodNote: '센서 연구 프로젝트', label: 'SENSOR / FABRICATION',
    summary: '설계와 제작, 계측회로 구성을 거쳐 센서의 출력 신호를 비교 평가했습니다.',
    role: '3D 프린팅 센서 설계·제작, 계측회로 구성, 신호 계측',
    result: '로드셀 제작 및 상용 로드셀과 신호 비교 평가',
    tags: ['ANSYS', '3D 프린팅', 'DAQ', 'MATLAB'],
    diagram: ['설계·해석', '센서 제작', '신호 비교'],
    background: '3D 프린팅과 CNT 센서를 활용하는 로드셀 연구에서 구조 설계와 제작, 출력 신호 계측을 수행했습니다.',
    actions: [
      ['설계와 제작', 'ANSYS 구조해석과 3D 프린팅을 활용해 센서를 설계·제작했습니다.'],
      ['계측과 신호처리', 'Wheatstone bridge, LPF, DAQ로 계측회로를 구성하고 MATLAB으로 신호를 처리했습니다.']
    ],
    verification: '로드셀을 제작해 출력 신호를 계측하고 상용 로드셀과 비교 평가했습니다.',
    scope: '상용 제품과의 신호 비교 평가 경험이며, 동등한 성능이나 상용화 완료를 의미하지 않습니다.', details: []
  },
  {
    id: 'wind', number: '07', category: '연구', type: 'research', featured: false,
    title: '빌딩풍 분석과 3D 프린팅 풍력발전기', fullTitle: '빌딩풍 분석과 3D 프린팅 풍력발전기',
    period: '2020', periodNote: '부경대학교 실전문제연구단', label: 'DESIGN / EXPERIMENT',
    summary: '빌딩풍 문제를 분석한 팀에서 풍력발전기 제작과 성능 평가를 담당했습니다.',
    role: '풍력발전기 제작·시험, 동료의 2D 유동 해석 지원',
    result: '풍력발전기 제작·성능 평가 및 관련 대회 수상',
    tags: ['3D 프린팅', 'CFD', '제작·시험'],
    diagram: ['문제 분석', '제작·보완', '성능 평가'],
    background: '교내 공학관 천장재 이탈 문제를 계기로 팀에서 빌딩풍을 분석했습니다. 관련 논문 약 20편을 검토하고 벤투리 효과에 따른 압력 저하 가설을 2D·3D CFD로 검토했습니다.',
    actions: [
      ['제작과 해석 지원', '풍력발전기 제작과 시험을 맡고, 어려움을 겪는 동료의 2D 해석을 지원했습니다.'],
      ['파손 원인에 따른 보완', '3D 프린팅 블레이드가 층간 강도 문제로 파손되어 아세톤 훈증 표면처리 후 다시 시험했습니다.']
    ],
    verification: '풍력발전기 제작과 성능 평가를 수행했습니다. 관련 프로젝트로 2020 X-CORPS 경진대회 금상(PKNU실전문제연구단) 등을 수상했습니다.',
    scope: 'CFD 분석은 팀의 접근이며, 제가 수행한 해석 역할은 동료의 2D 해석 지원입니다.', details: []
  }
];

export const experience = [
  {kind:'경력', period:'2025.02 — 현재', title:'금호HT', subtitle:'전자2팀 SW파트 · 연구원', text:'차량용 램프 MCU 제어·진단 SW 설계 및 검증. 요구사항과 설계, 시험을 연결하고 실제 HW 동작을 확인합니다.', link:'mcu'},
  {kind:'교육', period:'2024.01 — 2024.12', title:'SSAFY 11기', subtitle:'광주 임베디드 트랙 · 1,600시간', text:'C/C++, Python, Linux와 MCU 환경을 학습하고 AMR·AGV 프로젝트에서 계측, 제어, 시스템 연동을 수행했습니다.', link:'robot'},
  {kind:'경력', period:'2023.06 — 2023.10', title:'이노스페이스', subtitle:'전자제어팀 · 인턴', text:'NI DAQ와 센서 인터페이스 기반 계측·제어 HW를 구성하고 LabVIEW 데이터 수집·제어 프로그램을 개발했습니다.'},
  {kind:'학력', period:'2021.09 — 2023.02', title:'부경대학교 대학원', subtitle:'기계설계공학 · 공학석사', text:'CNT 센서의 형상 영향 분석과 Wheatstone bridge 회로 기반 온도 보상을 연구했습니다.', link:'cnt'},
  {kind:'학력', period:'2016.03 — 2021.08', title:'부경대학교', subtitle:'기계설계공학 · 공학사', text:'설계·계측을 학습하고 2020.05~2021.08 NSML 학부연구생으로 CNT 기반 센서 제작과 IoT 모니터링 시스템 개발에 참여했습니다.', link:'plc'}
];

export const skills = [
  {number:'01', title:'개발', tags:'C · C++ · Python', text:'MCU 제어·진단 로직과 Raspberry Pi 센서 수집·구동기 제어를 구현합니다.', link:'mcu', detail:'NXP Kinetis / S32K144 / PIC / ADC / GPIO / PWM / CAN / LIN / UART'},
  {number:'02', title:'검증과 프로세스', tags:'Polyspace · VectorCAST · Codebeamer', text:'분석 결과를 코드 수정과 재검증으로 연결하고 요구사항·설계·시험의 추적성을 관리합니다.', link:'mcu', detail:'MISRA-C / CWE / A-SPICE / Git'},
  {number:'03', title:'계측과 시스템', tags:'NI DAQ · LabVIEW · PLC', text:'센서, 제어 장치, 통신과 모니터링 화면을 실제 시스템으로 연결합니다.', link:'plc', detail:'XGT / XG5000 / RS232·485 / HMI / MQTT / Node-RED / Linux'},
  {number:'04', title:'연구와 설계', tags:'MATLAB · LightGBM · SHAP', text:'시편 제작부터 신호 계측, 데이터 분석까지 수행하고 관찰 결과를 비교합니다.', link:'cnt', detail:'Simulink / CATIA / ANSYS / 3D 프린팅 / Wheatstone bridge'}
];

export const credentials = [
 ['2026.08.22', 'OPIc IH', 'ACTFL'],
 ['2026.07.15', 'ISTQB CTFL', 'KSTQB'],
 ['2024.09.06', 'ADsP 데이터분석준전문가', '한국데이터산업진흥원']
];
export const awards = [
 ['2024.08.16', 'SSAFY 공통 프로젝트 우수상', '삼성전자'],
 ['2021.02.25', '공과대학 표창장 최우수상', '부경대학교 공과대학'],
 ['2021.02.23', '부경대학교 표창장', '부경대학교'],
 ['2020.12.22', '제4회 X-Corps 경진대회 장려상', '엑스코어실전문제연구단'],
 ['2020.12.18', '2020 X-CORPS 경진대회 금상', 'PKNU실전문제연구단'],
 ['2020.12.18', '유체공학경진대회 장려상', '대한기계학회'],
 ['2020.08.11', '제10회 EDISON SW 활용 경진대회 장려상', '한국과학기술정보연구원']
];
export const training = [
 ['2026.07', 'SW Testing Foundation', '광주정보문화산업진흥원'],
 ['2025.09', 'Trace32 입문/고급', 'MDStech · 교육 이수'],
 ['2023.11 — 12', '데이터분석 기초 완주반', '패스트캠퍼스 · 40시간'],
 ['2023.03 — 04', '우주기술전문연수 우주기기과정', '한국우주기술진흥협회 · 240시간']
];
export const publications = [
 {year:'2023', title:'나노 탄소 필라멘트 기반 3D 프린팅 압저항 센서 개발 연구', journal:'대한기계학회논문집 A권 47(8), 643–649', role:'공동저자'},
 {year:'2021', title:'3D 프린팅 센서 연구 동향 소개 — 전왜성 변형/로드셀 센서 중심으로', journal:'Journal of Sensor Science and Technology 30(6), 388–394', role:'공동 제1저자'}
];
