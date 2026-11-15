# 🌏 I-Friend International Day — Boarding Pass Guide

외국인 유학생 교류 프로그램 **I-Friend**의 International Day(2026-05-14, 부경대학교 종합운동장)
현장에서 참가자에게 배포하는 모바일 안내 웹앱입니다. "I-Friend Airlines" 보딩패스 콘셉트로
행사 참여 순서를 3단계로 안내합니다.

🔗 **가이드 페이지:** https://yj2da.github.io/ifriend-guide/

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
</p>

---

## 화면 구성

| 섹션 | 내용 |
| :--- | :--- |
| Hero | `Welcome to I-Friend Airlines!` — 행사명과 보딩패스 안내 |
| Step 1 | 등록 부스에서 보딩패스를 받기 |
| Step 2 | 국가별 부스를 돌며 스탬프 수집 (4개 이상 모아야 메인 이벤트 입장) |
| Step 3 | 4개 이상 스탬프를 가지고 등록 부스로 돌아와 가챠 추첨 + 최우수 부스 투표 |
| SNS 이벤트 | 포토존 사진을 인스타그램 스토리에 올리고 `@i_friend_pknu` 태그 → 스태프 확인 후 럭키드로우 |
| 안내 | 장소(부경대학교 종합운동장), 일시(2026-05-14 14:00–17:00) |

상품·장소·시간 문구는 모두 `src/locales/*.json`의 번역 파일에서 관리하므로, 다음 행사에서도
JSON 값만 바꾸면 재사용할 수 있습니다.

## 다국어

`i18next` + `react-i18next`로 **영어(EN) · 일본어(JP) · 중국어(CN)** 3개 언어를 지원하며,
우측 상단 버튼으로 즉시 전환됩니다. 기본 언어는 영어(`src/i18n.ts`의 `lng: 'en'`)입니다.
※ 현재 저장소에는 한국어 로케일 파일이 없습니다. 한국어 안내도 필요하면 `src/locales/ko.json`을
추가하고 `src/i18n.ts`의 `resources`에 등록하면 됩니다.

## 기술 스택

- **UI**: React 19, TypeScript, Vite
- **스타일**: Tailwind CSS 4 (`@tailwindcss/postcss`), 브랜드 색상은 `tailwind.config.js`의
  `ifriend-blue`(#1e3a8a) · `ifriend-red`(#dc2626)
- **아이콘**: `lucide-react`
- **다국어**: `i18next`, `react-i18next`
- **배포**: GitHub Pages (`gh-pages` 패키지)

모바일 우선 레이아웃(`max-w-md` 중앙 정렬, 상단 고정 헤더)으로 설계되어 QR 코드로 접속한
휴대폰 화면에 맞춰 표시됩니다.

## 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 타입 체크 + 빌드
npm run deploy   # 빌드 후 GitHub Pages 배포
```

## 파일 구조

```
src/
├── App.tsx              # 전체 화면(헤더·히어로·3단계·SNS 이벤트·안내)
├── i18n.ts              # i18next 초기화 (en / ja / zh)
├── locales/{en,ja,zh}.json
├── index.css
└── main.tsx
```

## 참고

- 행사 정보(일시·장소·상품)를 바꾸려면 `src/locales/en.json`, `ja.json`, `zh.json`의
  `date`, `location`, `prizes`, `sns_desc` 값을 함께 수정하세요.
- 같은 I-Friend 행사용으로 오리엔테이션 미션 가이드(`ifriend-guide-opening`), 수료식 안내
  (`ifriend-guide-closing`), 점수 집계 툴(`ifriend-guide-counting`)이 별도 저장소로 있습니다.
