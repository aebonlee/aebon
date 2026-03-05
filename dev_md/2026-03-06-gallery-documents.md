# 개발일지 - 2026-03-06

## 갤러리 개선 + 자료실 게시판 추가

### 작업 내용

#### 1. Lightbox 컴포넌트 신규 생성
- `src/components/ui/Lightbox.jsx` + `Lightbox.css`
- 이미지 클릭 시 풀스크린 오버레이로 확대 표시
- 좌우 화살표 버튼으로 같은 카테고리 내 이전/다음 이미지 탐색
- ESC 키 또는 오버레이 클릭으로 닫기
- 하단에 제목, 카테고리, 설명 표시
- 다크 오버레이 + backdrop blur 글라스 효과
- 모바일 반응형 대응

#### 2. Gallery 섹션 개선
- `src/components/sections/Gallery.jsx` + `Gallery.css` 수정
- 카테고리 탭 필터 추가: 전체 / 상장 / 자격증 / 활동 / 강의
- galleryItems 데이터를 12개로 확장 (상장 4, 자격증 4, 활동 2, 강의 2)
- 각 아이템에 description 필드 추가
- 이미지 클릭 시 Lightbox 연동
- 탭 활성 상태에 그라디언트 스타일 적용
- hover 시 카드 상승 효과 추가

#### 3. Documents (자료실) 섹션 신규 생성
- `src/components/sections/Documents.jsx` + `Documents.css`
- 이력서, 포트폴리오, 강의계획서, 훈련과정 소개서 등 6개 문서 카드
- 파일 타입별 아이콘 (PDF/DOC/LINK) 및 컬러 구분
- 날짜 표시 + 타입 뱃지 + 다운로드 버튼
- 기존 Card 컴포넌트 재사용
- 2열 그리드 → 모바일 1열 반응형

#### 4. 데이터 구조 변경 (`portfolioData.js`)
- `galleryItems`: category를 상장/자격증/활동/강의로 재분류, image/description 필드 추가
- `documents`: 새로운 export 추가 (id, title, description, type, date, url)
- `navLinks`: gallery(갤러리), documents(자료실) 항목 추가

#### 5. App.jsx 업데이트
- Documents 컴포넌트 import 추가
- 렌더링 순서: Teaching → Testimonials → Gallery → Documents → Contact

### 신규 파일
- `src/components/ui/Lightbox.jsx`
- `src/components/ui/Lightbox.css`
- `src/components/sections/Documents.jsx`
- `src/components/sections/Documents.css`

### 수정 파일
- `src/components/sections/Gallery.jsx`
- `src/components/sections/Gallery.css`
- `src/data/portfolioData.js`
- `src/App.jsx`

### 빌드 결과
- `npm run build` 성공 (84 modules, 1.26s)
- 에러 없음
