# CV 배포 가이드

## 배포 아키텍처

```
khlee369.github.io (GitHub Pages)
│
├── index.html          ← "/" 접속 시 JS로 "/CV"로 리다이렉트
├── CV/                 ← Vite 빌드 산출물 (실제 CV 앱)
│   ├── index.html        React SPA 엔트리
│   ├── assets/           번들된 JS/CSS + 정적 에셋
│   └── ...
└── LPMM/               ← 별도 정적 페이지 (논문 프로젝트)
```

GitHub Pages가 레포 루트를 서빙하고, 루트 `index.html`이 `/CV`로 리다이렉트하여 `CV/` 디렉토리의 Vite 빌드 산출물이 실제 앱으로 동작한다.

### 경로(base) 설정이 동작하는 원리

1. `cv-app/vite.config.ts`에서 `base: '/CV/'`를 설정
2. Vite가 빌드 시 모든 에셋 참조에 `/CV/` 접두사를 자동 부여
3. `src/utils/baseUrl.ts`가 `import.meta.env.BASE_URL` (= `/CV/`)을 export
4. 컴포넌트에서 이미지/영상 경로에 `baseUrl`을 사용하여 런타임에도 올바른 경로 보장

## 빠른 배포 (스크립트 한 줄)

```bash
cd cv-app && ./deploy-cv.sh
```

### deploy-cv.sh가 수행하는 작업

```bash
#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
npm run build          # tsc 타입체크 + vite build → dist/ 생성
rm -rf ../CV/*         # 기존 빌드 산출물 제거
cp -r dist/. ../CV/    # 새 빌드 결과를 CV/로 복사
```

### 배포 후 커밋 & 푸시

스크립트 실행 후 변경된 `CV/` 디렉토리를 커밋하고 푸시한다:

```bash
cd ..  # 레포 루트로 이동 (cv-app에서 실행했다면)
git add CV/
git commit -m "deploy: update CV"
git push
```

푸시 후 GitHub Pages가 자동으로 새 정적 파일을 서빙한다.

## 로컬에서 빌드 결과 확인

배포 전에 빌드 결과를 로컬에서 미리 확인할 수 있다:

```bash
cd cv-app
npm run build
npm run preview
```

`http://localhost:4173/CV/` 로 접속하여 프로덕션 빌드를 확인한다.

## PDF로 내보내기 (이력서 파일)

CV를 제출용 PDF로 뽑으려면:

```bash
cd cv-app && npm run pdf
```

`exports/`에 EN/KO 각각 2개씩 생성된다 (`*.pdf` = 단일 연속 페이지, `*_A4.pdf` = A4 분할본). 브라우저 인쇄(Ctrl+P)는 A4 폭에서 Bootstrap이 모바일 레이아웃으로 무너지므로, 이 스크립트는 headless Chromium으로 **데스크톱 레이아웃**을 렌더한다(`scripts/export-pdf.mjs`). 언어 토글·푸터·영상은 제거되고, 상단에 클릭 가능한 "원본 CV 링크"가 삽입된다.

- 최초 1회 브라우저 설치 필요: `npx playwright install chromium`
- `exports/`와 모든 `*.pdf`는 루트 `.gitignore`로 커밋에서 제외된다

## 포트폴리오 PDF (프로젝트 상세 · 인터뷰용)

이력서 프로젝트의 심층 설명(마크다운)을 CV와 같은 톤의 PDF로 뽑으려면:

```bash
cd cv-app
npm run pdf:portfolio            # portfolio/ 의 모든 .md
npm run pdf:portfolio -- wcai    # 특정 파일만 (portfolio/wcai.md)
```

- **원본**: `cv-app/portfolio/*.md` — 내부 지표가 담겨 있어 `.gitignore`로 커밋 제외한다(공개 레포이므로 **절대 커밋 금지**, 로컬 소스 전용). → **출력**: `exports/portfolio/`
- **엔진**: CV용 `npm run pdf`(Chromium)와 달리 **WeasyPrint**로 렌더한다(`scripts/portfolio-pdf/`). Chromium의 PDF는 폰트를 Type3로 임베드해 일부 뷰어에서 흐릿하지만, WeasyPrint는 **Type0 TrueType 벡터**로 임베드해 모든 뷰어에서 선명하다. CV와 동일한 Pretendard·`#54b689` 톤.
- **최초 1회**: `python3`만 있으면 첫 실행 시 로컬 venv(`scripts/portfolio-pdf/.venv`)를 자동 생성·설치한다(venv·폰트 캐시는 gitignore).

## 경로 설정 주의사항

### base 경로 변경 시 체크리스트

`/CV/` 이외의 경로로 변경해야 할 경우, 다음을 모두 수정한다:

| 파일 | 수정 내용 |
|------|----------|
| `cv-app/vite.config.ts` | `base: '/새경로/'` |
| `index.html` (레포 루트) | 리다이렉트 대상 경로 변경 |
| `deploy-cv.sh` | `../CV/*` → `../새경로/*`, `../CV/` → `../새경로/` |

### 에셋 경로 규칙

컴포넌트에서 이미지, 영상 등 정적 에셋을 참조할 때는 반드시 `baseUrl` 유틸을 사용한다:

```tsx
import { baseUrl } from '../utils/baseUrl';
<img src={`${baseUrl}assets/images/photo.jpg`} />
```

하드코딩 경로(`/CV/assets/...` 또는 `./assets/...`)는 사용하지 않는다.

## CI/CD

현재 GitHub Actions 등의 자동 배포 파이프라인은 설정되어 있지 않다.
배포는 수동으로 `deploy-cv.sh` 실행 → `CV/` 커밋/푸시 방식으로 진행한다.
