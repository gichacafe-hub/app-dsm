# 데이터베이스 구조 (DB Structure)

본 프로젝트는 `json-server`를 사용하여 `db.json` 파일을 NoSQL 스타일의 데이터베이스로 활용합니다.

## 1. 엔드포인트
- **Resource**: `sugarData`
- **URL**: `https://app-dsm.onrender.com/sugarData`

## 2. 데이터 스키마 (sugarData)

각 기록은 다음과 같은 필드를 가진 객체로 구성됩니다.

| 필드명 | 타입 | 설명 | 예시 |
| :--- | :--- | :--- | :--- |
| `id` | Number | 고유 식별자 (자동 생성) | `1` |
| `deviceId` | String | 기기별 고유 키 (격리용) | `dev_a1b2c3d4...` |
| `name` | String | 사용자 이름 | `james` |
| `date` | String | 측정 날짜 (YYYY-MM-DD) | `2026-06-01` |
| `time` | String | 측정 시간 (HH:mm) | `08:30` |
| `type` | String | 측정 종류 (`fasting`, `postprandial`) | `fasting` |
| `level` | Number | 혈당 수치 (mg/dL) | `120` |
| `medication` | Boolean | 약 복용 여부 | `true` |
| `insulin` | Boolean | 인슐린 투여 여부 | `false` |
| `memo` | String | 추가 메모 (식단 등) | `아침 식전 공복` |

## 3. 예시 데이터 (`db.json`)

```json
{
  "sugarData": [
    {
      "deviceId": "dev_zxcv1234",
      "name": "james",
      "date": "2026-06-01",
      "time": "07:30",
      "type": "fasting",
      "level": 95,
      "memo": "컨디션 좋음",
      "id": 1
    }
  ]
}
```
