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
