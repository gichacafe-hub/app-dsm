# 당뇨 혈당 관리 매니저 PRO

이 프로젝트는 로컬 스토리지 기반의 데이터를 `db.json` 백엔드 시스템으로 전환하고, Git을 통한 버전 관리 및 서비스 배포가 가능하도록 구성되었습니다.

## 🚀 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 백엔드 서버 실행 (json-server)
```bash
npm start
```
기본적으로 `http://localhost:3000`에서 서버가 실행됩니다.

### 3. 프론트엔드 접속
`index.html` 파일을 브라우저로 엽니다. (또는 Live Server 사용 권장)

## 📂 주요 구성 요소

- `index.html`: 프론트엔드 UI 및 로직 (Chart.js 사용)
- `db.json`: 데이터베이스 역할을 하는 JSON 파일
- `package.json`: 프로젝트 설정 및 의존성 관리
- `.gitignore`: Git 제외 파일 설정

## 🛠 데이터 마이그레이션
기존 브라우저의 `localStorage`에 저장되어 있던 데이터는 페이지 접속 시 백엔드(`db.json`)가 비어있을 경우 자동으로 마이그레이션됩니다.

## 🌐 배포 가이드

1. **GitHub 저장소 생성**: 코드를 GitHub에 푸시합니다.
2. **백엔드 배포**: `json-server`를 배포하려면 Heroku, Railway, 또는 Glitch와 같은 서비스를 이용할 수 있습니다.
3. **프론트엔드 배포**: Vercel, Netlify, GitHub Pages 등을 통해 정적 파일(`index.html`)을 배포합니다.
   - 배포 후 `index.html` 내의 `API_URL` 상수를 배포된 백엔드 주소로 변경해야 합니다.

## 🔧 형상 관리 (Git)

- 변경 사항 저장: `git add .` -> `git commit -m "메시지"`
- 히스토리 확인: `git log`
