# 쿨피스 (SchoolFitness) 

프론트엔드 React + 백엔드 협업 성적관리 프로젝트

## 🖥️ 프로젝트 소개
고등학교 3학년 학생들을 위한 체력 관리 서비스입니다.

`Target` 
고등학교 3학년

`기대효과`
1. 공부하느라 운동량이 부족한 고3 학생 체력향상
2. 게임 스탬프 이벤트를 통해 재미 부여
3. 남/여, 웨이터/다이어터 타입에 따른 운동 효과 상승

### 🎥 시연영상

<img src="https://user-images.githubusercontent.com/118712262/" width="300" height="600"/>

## 🕰️ 개발 기간

- 23.03.06 - 23.04.05

### 🧑‍🤝‍🧑 맴버구성

- 프론트엔드 팀장 : 이예은 - typescript 셋팅, 게임 성적, 게임 영상제출, 스탬프찍기, 게임 공지사항
- 프론트엔드 팀원1 : 김주영 - 피그마 UI 작업, 전체적 디자인 
- 프론트엔드 팀원2 : 손현지 - 헬스리포트, 더보기페이지, Navigation기능
- 프론트엔드 팀원3 : 하경미 - 개인 운동 기록, 레벨별 운동기록 
- 프론트엔드 팀원4 : 허강현 - 회원 가입, 로그인, 로그아웃, 회원탈퇴, 회원정보수정, 메인페이지 

- PM : 류승지 - 개인 운동 CRUD, 공지사항 CRUD,레벨별 운동 조회
- 백엔드 팀장 : 이호진 - 회원 페이지
- 백엔드 팀원1 : 김한수 - 상세 페이지
- 백엔드 팀원2 : 정인원 - 게임 성적 관리 기능, 스탬프 정보 관리 기능, 날짜/종목 별 합산 기능, 몸무게 정보 관리 기능

### 💻 사용 기술

- `Html`
- `Css` : Tailwind, emotion 
- `JavaScript`
- `React`
- **Libraries** : Redux-persist, nivo, MUI, React-Cookie

### ⚙️ 개발 환경

- `Java 8`
- `JDK 1.8.0`
- **IDE** : STS 3.9
- **Framework** : Springboot(2.x)
- **Database** : Oracle DB(11xe)
- **ORM** : Mybatis

### 📅 프로젝트 관리

- GitHub
- Slack
- Figma
- Notion
- Swagger

## 📌 주요 기능

#### 로그인

- SNS 로그인 (카카오 API 연동)
- Redux-persist 로 카카오에서 받은 user정보 담아 사용
- 로그인시 쿠키(Cookie) 및 localstorage이용해 JWT 담아 사용

#### 지출 입력

- 간편입력
- 상세입력(맛, 원두, 카페분위기, 사진, 메모)
- 텀블러 유무 ⇒ 전체 사용자 통계로 랭킹순위 확인 가능

#### 지출 내역

- 지출 내역 조회 및 상세 내역 확인
- 지출 내역 수정 및 삭제
- 커뮤니티 등록 기능

#### 통계

- 이번달 목표 및 지출
- 월별 카테고리 및 메뉴 통계

#### 커뮤니티
- 커뮤니티 글 조회
- 좋아요 기능
- 댓글 기능
- 페이지네이션

<br/>

** 본 readme는 프론트엔드의 입장에서만 작성되었습니다. 
