let _number = [14,10,17,21,22,0];

for(let pos in _number) {
    _number.sort();
    console.log(`The order in vector is ${_number[pos]} in ${pos} `);
}

console.log(`The number 14 is in vector?`)

let _testNumber = _number.indexOf(14)

if (_testNumber != -1) {
    console.log(`Yes! The number is in ${_testNumber} position`)
} else {
    console.log(`No!`)
}