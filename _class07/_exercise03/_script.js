function check() {
    let _number = document.querySelector("input#_num");
    let _userNumber = Number(_number.value);
    var _result = document.querySelector("div#_multiTable");

    if (_userNumber == 0) {
        window.alert(`[ERROR]`)
    } else { 
        _result.innerHTML = ``
        for(let _control = 1; _control <= 10; _control++) {
            let _multResult = _control * _userNumber;

            _result.innerHTML += `${_userNumber} * ${_control} = ${_multResult}<br>`;
        }
    }
}