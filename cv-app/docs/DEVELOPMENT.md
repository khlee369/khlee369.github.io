# CV 개발 가이드

## 기술 스택

- **React 19** + **TypeScript 5.9** + **Vite 7**
- **Bootstrap** (SCSS via `public/assets/scss/`) + 커스텀 CSS
- **Font Awesome 7** (아이콘)
- **i18n**: 자체 구현 (React Context + `translations.ts`, en/ko)

## 디렉토리 구조

```
cv-app/
├── src/
│   ├── components/          # CV 섹션별 컴포넌트
│   │   ├── ResumeHeader.tsx   # 이름, 연락처, 언어 전환 버튼
│   │   ├── ResumeIntro.tsx    # 프로필 사진 + 자기소개
│   │   ├── ResumeMain.tsx     # 메인 영역 (아래 3개 조합)
│   │   ├── WorkExperiences.tsx  # 경력사항
│   │   ├── PublicProjects.tsx   # 프로젝트
│   │   ├── Publications.tsx     # 논문
│   │   ├── ResumeAside.tsx    # 사이드바 (학력, 스킬 등)
│   │   ├── Footer.tsx         # 푸터
│   │   └── index.ts           # barrel export
│   ├── contexts/
│   │   └── LangContext.tsx    # 언어(en/ko) 상태 관리
│   ├── i18n/
│   │   └── translations.ts   # 다국어 텍스트 데이터
│   ├── utils/
│   │   └── baseUrl.ts        # Vite BASE_URL export
│   ├── styles/
│   │   ├── devresume.css      # 기본 테마 스타일
│   │   └── style.css          # 커스텀 오버라이드
│   ├── App.tsx                # 루트 컴포넌트
│   └── main.tsx               # 엔트리포인트
├── public/                    # 정적 에셋 (빌드 시 dist/로 복사)
│   └── assets/
│       ├── images/            # 프로필 사진, 로고 등
│       └── *.mp4, *.gif, ...  # 프로젝트 미디어
├── vite.config.ts             # base: '/CV/' 설정
├── deploy-cv.sh               # 빌드 + 배포 스크립트
└── package.json
```

## 로컬 개발 환경

```bash
cd cv-app
npm install
npm run dev
```

브라우저에서 `http://localhost:5173/CV/` 로 접속한다. (`/CV/` 경로 필수)

## CV 내용 수정 가이드

### 수정 위치 요약

| 섹션 | 구조(레이아웃) 수정 | 텍스트 수정 |
|------|-------------------|------------|
| 헤더 (이름, 연락처) | `ResumeHeader.tsx` | `ResumeHeader.tsx` (직접) |
| 자기소개 | `ResumeIntro.tsx` | `translations.ts` → `intro` |
| 경력사항 | `WorkExperiences.tsx` | `translations.ts` → `work` |
| 프로젝트 | `PublicProjects.tsx` | `translations.ts` → `projects` |
| 논문 | `Publications.tsx` | `Publications.tsx` (직접) |
| 사이드바 | `ResumeAside.tsx` | `ResumeAside.tsx` (직접, i18n 미적용) |

### 헤더 (이름, 연락처, 위치)

`src/components/ResumeHeader.tsx`에서 직접 수정한다.

```tsx
<h2 className="resume-name ...">Kwangho Lee</h2>
<div className="resume-tagline ...">AI Research Engineer</div>
// 연락처
<a className="resume-link" href="tel:#">(+82)10-xxxx-xxxx</a>
<a className="resume-link" href="mailto:#">email@example.com</a>
// 위치
Pangyo, S.Korea
```

### 자기소개

`src/i18n/translations.ts`의 `intro` 섹션에서 en/ko 텍스트를 수정한다.
텍스트 사이에 링크(`<a>`)가 삽입되는 구조이므로, `beforeNaver`, `afterNaver` 등의 키가 링크 앞뒤 텍스트를 담당한다. 링크 자체를 변경하려면 `ResumeIntro.tsx`를 수정한다.

### 경력사항 추가/수정

1. **텍스트**: `translations.ts` → `work` 섹션에서 en/ko 설명 수정
2. **새 경력 추가**: `WorkExperiences.tsx`에 새 `<div className="item">` 블록 추가 + `translations.ts`에 해당 키 추가
3. **로고 이미지**: `public/assets/images/`에 로고 파일 추가 후 `baseUrl` 활용

```tsx
import { baseUrl } from '../utils/baseUrl';
// ...
<img src={`${baseUrl}assets/images/company_logo.png`} alt="Logo" />
```

### 프로젝트 추가/수정

경력사항과 동일한 패턴:

1. `translations.ts` → `projects`에 새 키 추가 (en/ko 모두)
2. `PublicProjects.tsx`에 새 `<div className="item">` 블록 추가
3. 이미지/영상은 `public/assets/`에 배치 후 `baseUrl` 활용

### 논문 추가/수정

`src/components/Publications.tsx`에서 직접 수정한다. 각 논문은 `<div className="item">` 블록 단위이다.

```tsx
<div className="item">
  <div className="item-heading row align-items-center mb-1">
    <h4 className="item-title col-12 col-md-9 col-lg-9 mb-0">논문 제목</h4>
    <div className="item-meta col-12 col-md-3 col-lg-3 text-muted text-start text-md-end">
      학회 2024
    </div>
  </div>
  <div className="item-content">
    <p style={{ opacity: 0.8 }}>저자1, <strong>저자2</strong>, 저자3</p>
  </div>
</div>
```

### 사이드바 (학력, 스킬, 언어, 관심사)

`src/components/ResumeAside.tsx`에서 직접 수정한다. 현재 i18n이 적용되어 있지 않으므로 영문 텍스트를 직접 편집한다.

## 에셋(이미지/영상) 관리

1. 파일을 `cv-app/public/assets/` 아래에 배치한다
2. 컴포넌트에서 참조할 때 반드시 `baseUrl` 유틸을 사용한다

```tsx
import { baseUrl } from '../utils/baseUrl';

// 이미지
<img src={`${baseUrl}assets/images/photo.jpg`} alt="..." />

// 영상
<video controls>
  <source src={`${baseUrl}assets/video.mp4`} type="video/mp4" />
</video>
```

`baseUrl`은 Vite의 `import.meta.env.BASE_URL` (= `/CV/`)을 반환하며, 빌드 후 GitHub Pages에서 경로가 올바르게 동작하도록 보장한다.

## 다국어(i18n) 텍스트 추가 패턴

`translations.ts`는 `Record<Lang, {...}>` 구조이며, 새 키를 추가할 때 3곳을 수정한다:

1. **타입 정의** (파일 상단의 제네릭 타입): 새 키 추가
2. **`en` 객체**: 영문 텍스트 추가
3. **`ko` 객체**: 한국어 텍스트 추가

en/ko 양쪽을 반드시 동시에 수정해야 타입 에러가 발생하지 않는다.

## 스타일 수정

- `src/styles/devresume.css`: 기본 테마 스타일 (DevResume 테마 기반)
- `src/styles/style.css`: 커스텀 오버라이드 및 추가 스타일
- `public/assets/scss/`: Bootstrap SCSS 소스 (직접 수정할 일은 거의 없음)
