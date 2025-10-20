import App from "./App.js";

const app = new App();
// run() 함수 실행 과정에서 일어날 수 있는 각종 비동기 에러를 처리합니다.
await app.run().catch((e) => {
    console.log(e.message);
});
