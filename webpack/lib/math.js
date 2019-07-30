export function add() {
    console.log("이것은 더하기!");
    var sum = 0, i = 0, args = arguments, l = args.length;
    while (i < l) {
        sum += args[i++];
    }
    return sum;
}

export function multiply() {
    console.log("이것은 곱하기!");
    var product = 1, i = 0, args = arguments, l = args.length;
    while (i < l) {
        product *= args[i++];
    }
    return product;
}
 
export function list() {
    console.log("이것은 리스트!");
    return Array.from(arguments);
}