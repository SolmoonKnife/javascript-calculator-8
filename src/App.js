import { Console } from "@woowacourse/mission-utils"
import { calculator } from "./Calculator.js";

class App {
  async run() {
    //Input & Print Test
    const inputString = await Console.readLineAsync("덧셈할 문자열을 입력해주세요.");
    Console.print(`입력 문자열: ${inputString}`);

    //Calculator Test
  }
}

export default App;
