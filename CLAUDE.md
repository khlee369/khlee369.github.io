# CLAUDE.md

GitHub Pages CV 프로젝트 (`khlee369.github.io`)

## 프로젝트 구조

- `cv-app/` — React 19 + Vite 7 + TypeScript 소스 코드
- `CV/` — Vite 빌드 산출물 (GitHub Pages가 서빙). **직접 수정 금지**
- `index.html` (루트) — `/` 접속 시 `/CV`로 리다이렉트

## 가이드 문서

- CV 내용 수정: `cv-app/docs/DEVELOPMENT.md`
- 배포 방법: `cv-app/docs/DEPLOYMENT.md`

## 핵심 규칙

- `CV/` 디렉토리는 빌드 산출물이므로 절대 직접 수정하지 않는다
- 다국어 텍스트는 `cv-app/src/i18n/translations.ts`에서 관리하며, en/ko 양쪽을 반드시 동시에 수정한다
- 이미지/영상 등 정적 에셋 경로는 반드시 `baseUrl` 유틸(`cv-app/src/utils/baseUrl.ts`)을 사용한다
- 에셋 파일은 `cv-app/public/assets/`에 배치한다

## 빌드 & 배포

```bash
cd cv-app && ./deploy-cv.sh   # npm run build → CV/로 복사
cd .. && git add CV/ && git commit -m "deploy: update CV" && git push
```

## 개발 서버

```bash
cd cv-app && npm install && npm run dev
# http://localhost:5173/CV/ 로 접속
```
