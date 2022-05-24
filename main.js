const bigInt = require("big-integer");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What is the length(bite) of the key? ', length => {
    let a = length
    let number = numberOfKeys(a);
    console.log("Number of keys with this length: " + number)
    let b = randomKey(a)
    console.log("Random key: 0x" + b)
    console.log("Guessing key...")
    bruteForce(a, bigInt(b, 16).value)
    readline.close();
});

let digits = ['0', '1','2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

let numberOfKeys = (a) => bigInt("2", 16).pow(a).value.toString()

let randomKey = (a) => {
    let rand = ""
    for (let i = 0; i < a / 4; i++) rand += digits[Math.floor(Math.random() * digits.length)]
    return rand
}

let bruteForce = (a, key) => {
    console.time('time')
    let i = bigInt("0", 16)
    while (true){
        if (key === i.value) {
            console.timeEnd('time')
            break;
        }
        else i.value++
    }
}



