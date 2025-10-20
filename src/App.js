import { Console } from "@woowacourse/mission-utils"
import { calculator } from "./Calculator.js";

class App {
  async run() {
    //Input
    const inputString = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.\n");

    //Calculator & Print Test
    const sum = calculator(inputString);
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
