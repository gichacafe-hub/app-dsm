# 소스코드 상세 설명 (Code Explanation)

`index.html` 파일에 포함된 주요 JavaScript 로직 및 구조에 대한 설명입니다.

## 1. 기술 스택
- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (ES6+)
- **Library**: [Chart.js](https://www.chartjs.org/) (그래프 렌더링)
- **Backend**: [json-server](https://github.com/typicode/json-server) (REST API 지원)

## 2. 핵심 함수 설명

### `getDeviceId()`
사용자 브라우저에 고유한 키가 있는지 확인하고, 없으면 새로 생성합니다. 이 키는 다른 사용자와 내 데이터를 구분하는 유일한 기준이 됩니다.

### `loadData()`
가장 중요한 함수로, 서버에서 `deviceId`를 쿼리 파라미터로 전달하여 **내 기기의 데이터만** 가져옵니다. 데이터를 가져온 후 통계 업데이트(`updateStats`), 목록 렌더링(`renderHistory`), 그래프 업데이트(`renderChart`)를 순차적으로 실행합니다.

### `migrateToBackend()`
초기 로컬 저장소 버전을 쓰던 사용자를 위한 배려 코드입니다. `localStorage`에 데이터가 남아있다면, 현재 기기 ID를 입혀 서버로 안전하게 이관합니다.

### `getStatus(level, type)`
혈당 수치와 종류에 따라 '정상', '주의', '위험' 상태를 판별하고 적절한 색상 클래스를 반환합니다.

## 3. UI/UX 디자인 요소
- **반응형 레이아웃**: 모바일 환경을 최우선으로 고려한 Flexbox 및 Media Query 설계.
- **상태 시각화**: 혈당 수치에 따라 녹색(정상), 황색(주의), 적색(위험) 배지를 사용하여 직관성을 높임.
- **인쇄 최적화**: 월간 보고서 생성 시 불필요한 UI를 숨기고 보고서 내용만 출력되도록 `@media print` 설정.
