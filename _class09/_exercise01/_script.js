let _number = document.querySelector("input#_num");
let _select = document.getElementById("_select01");
let _result = document.querySelector("div#res");
let _values = [];


    /* Função criada para verificar se um número é 
    maior ou igual a 1 ou menor ou igual a 100 */

    function isNumber(n) {

        if(Number(n) >= 1 && Number(n) <= 100) {
            return true;
        } else {
            return false;
        }

    }

    /* Função criada para verificar se o número 
    está presente na array _values */

    function inList(n, l) {

        if(l.indexOf(Number(n)) != -1) {
            return true;
        } else {
            return false;
        }
    }

    /* Adiciona o número no array _values e adiciona ele 
    no campo select */

    function add() {

        /* Bloco de condição, chama a função isNumber passando 
        o valor de _number, também chama a função inList passando os
        valores de _number e _values. Utiliza o operador lógico E, 
        caso as duas funções retornem true funciona. Vale lembrar, 
        o operador de negação no !inList, para ser TRUE, ele precisa passar o FALSE */

        if(isNumber(_number.value) && !inList(_number.value, _values)) {

            // Adiciona o valor _number no array _values

            _values.push(Number(_number.value));

            // Cria o campo option e adiciona ele no _select

            let item = document.createElement(`option`);
            item.text = `Value add is ${_number.value}`;
            _select.appendChild(item);

            _result.innerHTML = ``

        } else { // Caso não aconteça o de cima 
            window.alert("Value already entered or invalid value");
        }

        _number.value = "";
        _number.focus();
    }



    /* Analisa a array e adiciona as informações 
       na div res, utilizando paragrafós. */

    function finish() {


        if(_values.length == 0) {

            window.alert(`Insert a number`);

        } else {

            let _total = _values.length;
            let _lower = _values[0]
            let _higher = _values[0]
            let _sum = 0; 
            let  _median = 0;

                for(let control in _values) {

                    _sum += _values[control];


                    if(_values[control] > _higher) {
                        _higher = _values[control];
                    } 

                    if ((_values[control]) < _lower) {
                        _lower = _values[control];
                    }
                
                }  

            _median = _sum / _total;

            _result.innerHTML = `<p>We have ${_total} registered numbers in all </p>`;
            _result.innerHTML += `<p>The sum is equal to ${_sum}</p>`;
            _result.innerHTML += `<p>The higher number is ${_higher}</p>`;
            _result.innerHTML += `<p>The lower number is ${_lower}</p>`;
            _result.innerHTML += `<p>The median is ${_median}`;
            
        }

        
    }