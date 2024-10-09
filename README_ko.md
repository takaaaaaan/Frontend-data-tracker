# Frontend Data Tracker API

프론트엔드에서 전송된 데이터를 처리하고 로그를 기록하기 위한 Next.js 프로젝트입니다. 이 저장소는 API 엔드포인트의 테스트 및 디버깅을 위해 설계되었습니다.

- [English](./README.md)
- [日本語 (Japanese)](./README_ja.md)

## 목차

- [개요](#개요)
- [기능](#기능)
- [시작하기](#시작하기)
- [설치](#설치)
- [사용 방법](#사용-방법)
- [API 엔드포인트](#api-엔드포인트)
- [기여하기](#기여하기)
- [라이선스](#라이선스)

## 개요

이 프로젝트는 Next.js를 사용하여 프론트엔드에서 전송된 데이터를 처리하는 API 엔드포인트를 제공하고, 서버 측에서 로그를 기록하는 것을 목표로 합니다. API 통신 테스트 및 다양한 요청 유형을 처리하는 데 적합합니다.

## 기능

- POST 및 GET 요청을 테스트하기 위한 간단한 API 제공.
- 프론트엔드에서 전송된 메시지를 디버깅 목적으로 로그.
- Next.js를 사용하여 쉽게 배포 및 확장이 가능.
- JSON 데이터를 통한 구조화된 통신 지원

.

## 시작하기

다음 지침에 따라 개발 및 테스트를 위한 로컬 환경을 설정하십시오.

### 필수 사항

- Node.js (v18)
- npm

### 설치

1. 저장소를 복제합니다:

   ```bash
   git clone https://github.com/takaaaaaan/Frontend-data-tracker.git
   cd frontend-data-tracker
   ```

2. 종속성을 설치합니다:

   ```bash
   npm install
   ```

### 서버 실행

개발 서버를 시작하려면:

```bash
npm run dev
```

서버는 `http://localhost:3000`에서 실행됩니다.

## 사용 방법

### 테스트 메시지 전송

프론트엔드에서 테스트 메시지를 전송하려면 다음 JavaScript 함수를 사용하십시오:

```javascript
const test_message = async (message) => {
  try {
    const response = await fetch('/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API 에러:', errorData.error);
    } else {
      console.log('메시지가 성공적으로 전송되었습니다.');
    }
  } catch (error) {
    console.error('메시지 전송 중 오류 발생:', error);
  }
};
```

### API 엔드포인트

- **POST `/api/log`**  
  요청 본문에 포함된 메시지를 로그에 기록합니다.

  - 요청 본문 예시:

    ```json
    {
      "message": "안녕하세요, 이것은 테스트 메시지입니다."
    }
    ```

  - 응답 예시 (테스트용으로 500 오류를 시뮬레이션):

    ```json
    {
      "error": "테스트용으로 시뮬레이션된 내부 서버 오류입니다."
    }
    ```

## 기여하기

기여는 환영합니다! 아래의 절차를 따르십시오:

1. 저장소를 포크합니다.
2. 새 브랜치를 만듭니다 (`git checkout -b feature/your-feature`).
3. 변경 사항을 적용합니다.
4. 브랜치에 푸시합니다 (`git push origin feature/your-feature`).
5. Pull Request를 만듭니다.

## 라이선스

이 프로젝트는 MIT 라이선스에 따라 제공됩니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하십시오.
