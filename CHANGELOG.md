# Changelog

## 2026-03-26 — CI 빌드 수정

### 수정 내용
- **package-lock.json**: `npm install`로 lock 파일 동기화 (package.json과 불일치 해결)
- **.github/workflows/deploy.yml**: `node-version: '20'` → `'22'`로 업그레이드

### 원인
이전 커밋에서 `gh-pages`를 package.json에 추가했지만 `npm install`을 실행하지 않아 package-lock.json이 동기화되지 않았음. CI의 `npm ci`는 lock 파일과 package.json 불일치 시 즉시 실패.

### 검증
- `npm ci` 정상 실행 확인
- GitHub Actions 빌드 성공 확인 필요 (push 후)
