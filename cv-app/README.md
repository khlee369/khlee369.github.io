# CV (React + Vite)

## 시작하기

```bash
cd cv-app
npm install
npm run dev
```

개발 서버는 `http://localhost:5173/CV/`에서 확인한다.

## 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | Vite 개발 서버를 실행한다. |
| `npm run build` | TypeScript를 검사하고 프로덕션 빌드를 `dist/`에 생성한다. |
| `npm run preview` | `dist/`의 프로덕션 빌드를 로컬에서 미리 본다. 기본 주소는 `http://localhost:4173/CV/`이다. |
| `npm run lint` | ESLint 검사를 실행한다. |
| `npm run pdf` | 영문·국문 CV를 연속 페이지와 A4 형식으로 각각 생성한다. 결과는 `exports/`에 저장된다. |
| `npm run pdf:portfolio` | `portfolio/`의 모든 Markdown 문서를 PDF로 생성한다. 결과는 `exports/portfolio/`에 저장된다. |
| `npm run pdf:portfolio -- wcai` | `portfolio/wcai.md`처럼 지정한 문서 하나만 PDF로 생성한다. |
| `./deploy-cv.sh` | 앱을 빌드하고 결과를 상위 `CV/` 디렉토리에 복사한다. |

## PDF 사전 준비

CV PDF는 Playwright Chromium을 사용하므로 최초 한 번 브라우저를 설치한다.

```bash
npx playwright install chromium
npm run pdf
```

포트폴리오 PDF는 Python 3와 `venv`가 필요하다. 최초 실행 시 전용 가상환경과 WeasyPrint 의존성을 자동으로 설치한다.

```bash
npm run pdf:portfolio
```

생성된 PDF와 `exports/`는 Git에서 제외된다.

## 배포

```bash
./deploy-cv.sh
cd ..
git add CV/
git commit -m "deploy: update CV"
git push
```

`CV/`는 빌드 산출물이므로 직접 수정하지 않는다.

자세한 내용은 [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md)와
[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)를 참고한다.
