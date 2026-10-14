// PDF에서 원본 이미지 객체를 추출한 자료입니다. 전체 PDF는 웹사이트에 포함하지 않습니다.
// 이미지 교체 시 width/height, alt와 캡션도 함께 갱신하세요.
const source = (page) => `제공 포트폴리오 ${page}쪽 수록 자료`;
const media = (file,width,height,alt,caption,page) => ({src:`assets/images/${file}`,width,height,alt,caption,source:source(page)});
const thesisMedia = (file,width,height,alt,caption,figure,page) => ({src:`assets/images/${file}`,width,height,alt,caption,source:`석사학위논문 Fig. ${figure} · 본문 ${page}쪽`});
const clip = (id,title,duration,bytes,alt,caption) => ({id,title,duration,bytes,src:`assets/motion/${id}.gif`,poster:`assets/images/${id}-poster.jpg`,width:600,height:338,alt,caption});
const robotLayout = media('robot-layout.png',945,499,
  'LiDAR, Jetson, Raspberry Pi와 전원 장치의 배치를 표시한 교육용 이동 로봇 3D 구성도',
  '교육용 이동 로봇의 전체 구성도. 팀 시스템을 보여주는 자료이며, 제 담당은 기구·전원 구성과 Raspberry Pi 계측·제어, MQTT 연동입니다.',4);
const agvDashboard = media('agv-dashboard.png',1086,860,
  '카메라, 거리 센서, 방향과 목적지 설정을 함께 표시한 AGV 모니터링 대시보드',
  'AGV 상태 모니터링과 목적지·제어모드 설정 화면. 주행 안정화의 정량 성능 그래프가 아닌, 프로젝트에서 구현한 모니터링 화면입니다.',9);
const plcRig = media('plc-test-rig.png',1216,411,
  '배관, 센서와 제어 장치가 배치된 LNG 연료공급 연구용 시험 장치',
  'LNG 연료공급 연구의 시험 장치. 센서 신호 수집, PLC 프로그래밍, 통신과 HMI 통합에 참여했습니다.',11);
const cntExperiment = thesisMedia('cnt-gauge-setup.jpg',1500,774,
  '클램프로 고정한 CNT 센서 시편, 3D 프린팅 스토퍼와 멀티미터가 보이는 게이지 계수 측정 구성',
  '센서 시편에 일정한 변형량을 주고 멀티미터로 변형 전후의 저항을 측정한 구성입니다. 형상·조성과 감도의 관계를 분석하는 데 사용했습니다.','IV-3',37);
const robotPhoto = {src:'assets/images/robot-turn-poster.jpg',width:600,height:338,alt:'LiDAR와 제어 보드, 배선과 구동부가 조립된 교육용 이동 로봇',caption:'제공한 로봇 동작 영상의 첫 장면',source:'사용자 제공 시연 영상'};

export const projectMedia = {
  robot: {cover:robotPhoto,coverLabel:'교육 프로젝트 · 실제 로봇 시연',gallery:[robotLayout],clips:[
    clip('robot-remote','원격 조작과 이동',6100,9965845,
      '태블릿 조작 화면과 시험 구역에서 이동하는 교육용 로봇',
      '원격 조작 화면과 로봇의 이동을 함께 보여주는 시연입니다. 저는 Raspberry Pi 계측·제어 SW와 MQTT 연동을 담당했습니다.'),
    clip('robot-mapping','매핑 화면과 로봇 이동',12200,12790308,
      '매핑 화면과 실제 시험 구역에서 이동하는 로봇을 나란히 보여주는 시연',
      'ROS·LiDAR SLAM을 포함한 팀 시스템의 동작 기록입니다. SLAM 알고리즘 직접 개발 성과가 아닌, 로봇 시스템 연동 맥락으로 제시합니다.'),
    clip('robot-actuator','구동부 근접 시연',5900,10669602,
      '교육용 로봇의 제어 보드와 배선, 구동부 동작을 가까이에서 보여주는 시연',
      '조립한 기구와 전장 구성을 가까이에서 확인할 수 있습니다. 제 담당은 기구 제작·전원 구성과 구동기 제어입니다.'),
    clip('robot-turn','로봇 회전 동작',7700,13815669,
      '시험 구역에서 방향을 바꾸는 교육용 이동 로봇의 전체 모습',
      '실제 로봇의 회전 동작을 보여줍니다. 주행 오차나 안정성 향상률을 측정한 자료는 아닙니다.')
  ]},
  agv: {cover:agvDashboard,coverLabel:'교육 프로젝트 · 모니터링 화면',gallery:[agvDashboard]},
  plc: {cover:plcRig,coverLabel:'연구 프로젝트 · 실제 시험 장치',gallery:[
    plcRig,
    media('plc-system.png',1044,575,'센서 입력, PLC, HMI와 IoT 원격 모니터링 연결을 표시한 LNG 시스템 구성도',
      'PLC, HMI와 IoT 모듈을 연결한 연구 시스템 구성도. 도식에 표현된 전체 장비의 단독 개발을 의미하지 않습니다.',10)
  ]},
  cnt: {cover:cntExperiment,coverLabel:'석사 연구 · 센서 계측 실험',gallery:[
    cntExperiment,
    thesisMedia('cnt-model-comparison-thesis.jpg',992,771,'DNN, LSTM, XGBoost, LightGBM의 RMSE와 MAE를 비교한 막대그래프. 제시된 비교에서 LightGBM이 가장 낮음.',
      '모델별 RMSE·MAE 비교. 해당 비교는 학습 500개·테스트 50개 조건이며, 전체 수집량 약 2,400개와 구분합니다. 지표값을 백분율 오차율로 해석하지 않습니다.','IV-4',40),
    media('cnt-shap-importance.jpg',725,300,'CNT 함량, 너비, 길이 순으로 평균 절대 SHAP 값이 큰 변수 기여도 그래프',
      '평균 절대 SHAP 값에 따른 예측 기여도. 원본의 weight는 CNT 함량(wt%)을 뜻합니다. 기여도는 물리적 인과관계의 입증이 아닙니다.',13),
    media('cnt-shap-distribution.png',798,300,'CNT 함량, 너비, 길이의 SHAP 값 분포와 입력값의 높고 낮음을 표시한 그래프',
      '변수별 SHAP 값 분포. 색은 입력값의 상대적 크기를, 가로축은 모델 출력에 대한 기여를 나타냅니다. 분석한 데이터 범위 내에서 해석합니다.',13)
  ], research:{
    title:'온도 보상, 회로 구성으로 비교하다.',
    intro:'20~80℃의 보상 실험에서 Quarter, Half, Full bridge의 출력 변화를 비교했습니다. 보상 실험 중 온도를 별도로 실시간 측정하지 않았으며, 시간에 따른 선형 온도 변화를 가정했습니다.',
    figures:[
      thesisMedia('cnt-bridge-circuits.jpg',1369,453,'Quarter, Half, Full Wheatstone bridge의 센서 저항 배치를 비교한 회로도',
        '온도 보상에 사용한 세 가지 브리지 구성. 센서 저항과 온도에 따른 저항 변화가 같다는 가정에서 회로 구성을 비교했습니다.','V-2',48),
      thesisMedia('cnt-temperature-setup.jpg',926,1039,'CNT 센서, Wheatstone bridge, DC 증폭기와 DAQ를 연결한 온도 보상 계측 구성도',
        '센서를 오븐에서 20~80℃로 가열하고, 브리지 출력을 1,000배 증폭·필터링한 뒤 DAQ로 수집했습니다.','V-3',49),
      {...thesisMedia('cnt-bridge-comparison.jpg',1018,772,'가로축 시간(s), 세로축 출력(mV/V)에 Quarter sample 1, Half sample 3, Full sample 3을 비교한 그래프',
        '타입별로 가장 성능이 좋은 데이터를 선택한 비교이며, 전체 평균이 아닙니다. 선택된 시편은 Quarter_sample_1, Half_sample_3, Full_sample_3입니다. 가로축은 시간(s), 세로축은 Voltage Output(mV/V)입니다.','V-7',53),wide:true}
    ],
    supplementary:[
      thesisMedia('cnt-quarter-results.jpg',994,778,'Quarter bridge 시편 3개의 시간에 따른 출력 변동 그래프',
        'Quarter: 시편 3개 각각의 결과. 가로축은 시간(s), 세로축은 출력(mV/V)입니다.','V-4',50),
      thesisMedia('cnt-half-results.jpg',987,772,'Half bridge 시편 3쌍의 시간에 따른 출력 변동 그래프',
        'Half: 3쌍, 총 6개 시편을 사용했습니다. 같은 시편을 3회 반복한 결과가 아닙니다.','V-5',51),
      thesisMedia('cnt-full-results.jpg',950,773,'Full bridge 시편 3세트의 시간에 따른 출력 변동 그래프',
        'Full: 3세트, 총 12개 시편을 사용했습니다. 잔여 출력 변동은 센서별 온도 응답 편차로 해석했으며, 원인을 독립적으로 확정한 결과는 아닙니다.','V-6',52)
    ]
  }},
  loadcell: {gallery:[
    media('loadcell-prototype.png',535,472,'CNT 센서가 부착된 3D 프린팅 원형 로드셀 시제품',
      '3D 프린팅 CNT 로드셀 시제품. 센서를 설계·제작하고 계측회로 구성과 출력 신호 계측을 수행했습니다.',14),
    media('loadcell-measurement.jpg',950,623,'Wheatstone bridge, DAQ, 계측 지그와 비교용 로드셀을 연결한 계측 구성',
      'Wheatstone bridge와 DAQ를 이용한 신호 계측 구성. 상용 로드셀과 신호를 비교 평가했으며, 제품과 동등한 성능을 주장하는 자료는 아닙니다.',15)
  ]}
};
