export function calculator(inputString) {
    if (!inputString || typeof inputString !== 'string') {
        throw new Error("[ERROR] 문자열이 잘못 입력되었습니다.");
    }
    // 의도치 않은 공백과 개행 문자에 역슬래시(\)가 추가되는 문제를 확인하여 제거하는 로직 추가
    const trimmedInput = inputString.trim().replace(/\\n/g, '\n');

    const customSlicerRegex = /^\/\/(.)\n/; // '//'로 시작해야 하며, '// /n' 사이의 문자 1개 캡쳐
    const normalSlicerRegex = /,|:/; // 기본 구분자 , 혹은 : 를 찾습니다

    const match = trimmedInput.match(customSlicerRegex);

    let numbers = [];
    if (match) {
        const customSlicer = match[1]; // ex) ';'
        const numbersPart = trimmedInput.substring(match[0].length); // ex) '//;\n' 이후부터 취한다

        numbers = numbersPart.split(customSlicer).map(Number);
    } else {
        numbers = trimmedInput.split(normalSlicerRegex).map(Number);
    }

    return numbers.reduce((acc, number) => acc + number, 0)
}