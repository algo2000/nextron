# 소개

Electron + Next

## 프로젝트 생성 방법

아래의 템플릿을 사용했습니다.

```shell
npx create-nextron-app onesemicon-front --example with-typescript-material-ui
```

## Next 폴더 구조

```text
./
├── assets
├── components
├── data
├── hooks
├── layouts
├── libs
├── pages
├── public
├── states
├── styles
└── theme
```

- assets : icon 등 여러 에셋
- components : 컴포넌트
- data : 임시 json 데이터
- hooks : 모든 커스텀 훅
- layouts : 모든 레이아웃 컴포넌트
- libs : 기능 메소드들 (axios 포함)
- pages : 외부 노출 페이지
- public : static 에셋
- states : recoil 전역 상태
- styles : 스타일
- theme : 테마 스타일

# Commit message 컨벤션

history를 트래킹 할 수 있도록 큰 이벤트마다 여러 번 구분하여 커밋하도록 합니다.

> 핵심 가치는 `commit type`만으로 해당 커밋을 유추할 수 있어야 합니다.

| type     | 내용                                                                   |
| -------- | ---------------------------------------------------------------------- |
| init     | hello, world 수준의 동작이 검증된 첫 파일을 추가할 때                  |
| add      | 코드나 테스트, 예제, 문서 등의 추가가 있을 때                          |
| del      | 파일 또는 코드, 리소스 제거                                            |
| up       | 원래도 정상동작 하지만 추가 보안 하는 개념                             |
| refactor | 코드 리팩토링 (변수명 수정 등) 기능에는 변함이 없어야합니다            |
| style    | 코드 인덴트 변경으로 인한 코드 스타일 변경, 코드 자체 변경이 없는 경우 |
| fix      | 올바르지 않은 동작을 고친 경우에                                       |
| move     | 코드 및 파일의 이동이 있을 때                                          |
| rename   | 파일명이 변경될 때                                                     |
| package  | package.json 수정                                                      |
| docs     | 문서 수정                                                              |
