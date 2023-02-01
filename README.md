
## 실행 
`npm install`
`npm run start`

## CORS 이슈 해결
- 클라이언트 딴에서 proxy를 경유하여 api 호출처리
- `http-proxy-middleware` 라이브러리를 활용

## 디자인
- MUI를 처음 사용해봤으나, 이전에 업무용으로 Antd를 사용해본 경험이 있어 비슷한부분이 많았음

## HTML Parse 
- 데이터중 detail항목에 html형태의 string이 내려옴을 확인함.
- react에서 `dangerouslySetInnerHTML`가 있지만 `XXS`에 취약하다는 내용을 인지함. 따라서 `html-react-parser`의 parse함수를 사용하여 파싱처리.
