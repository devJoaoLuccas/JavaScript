
function count() {

    let _start = document.querySelector("input#_startNum");
    let _end = document.querySelector("input#_endNum");
    let _count = document.querySelector("input#_countNum");
    let _text = document.querySelector("div#_countText");


    if(_start.value.length == 0 || _end.value.length == 0 || _count.value.length == 0) {
        window.alert(`[ERROR]!Check the numbers`)

    } else { 

        _text.innerHTML = `Counting... <br><br>`

        let _startNumber = Number(_start.value)
        let _endNumber = Number(_end.value)
        let _countNumber = Number(_count.value)

        for(_startNumber; _startNumber < _endNumber; _startNumber += _countNumber) {
            _text.innerHTML += `<strong> ${_startNumber} </strong>`
        }

    }

}