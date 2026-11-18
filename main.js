function tabl() {
    let num1 = parseFloat(document.getElementById("upper").value);
    let num2 = parseFloat(document.getElementById("down").value);
    let num3 = parseFloat(document.getElementById("rangelevel").value);
    let num4 = parseFloat(document.getElementById("rangepart").value);
    let display = document.getElementById("result1");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        display.value = 'Заполните все поля...';
        return;
    }

    let result = num1 - ((num1 - num2) / num3) * num4;
    
    display.value = result.toFixed(2); // Если нужно округление
}

function elevation() {
    let num1 = parseFloat(document.getElementById("own").value);
    let num2 = parseFloat(document.getElementById("target").value);
    let display = document.getElementById("result2");

    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Заполните все поля...';
        return;
    }

    let result = num2 - num1;
    
    display.value = result.toFixed(2); // Если нужно округление
}

function correction() {
    let num1 = parseFloat(document.getElementById("result2").value);
    let num2 = 100;
    let num3 = parseFloat(document.getElementById("tablevalue").value);
    let display = document.getElementById("result3");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        display.value = 'Заполните все поля...';
        return;
    }

    let result = num1 / num2 * num3;
    
    display.value = result.toFixed(2); // Если нужно округление
    lastResult();
}

function lastResult() {
    let num1 = parseFloat(document.getElementById("result1").value);
    let num2 = parseFloat(document.getElementById("result3").value);
    let display = document.getElementById("result4");

    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Заполните все поля...';
        return;
    }

    let result = num1 + num2;

    display.value = result.toFixed(2); // Округление результата до двух знаков после запятой
}   

function wind() {
    let num1 = parseFloat(document.getElementById("windforce").value);
    let num2 = parseFloat(document.getElementById("tablevaluewind").value);
    let num3 = parseFloat(document.getElementById("direction").value);
    let display = document.getElementById("result5");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        display.value = 'Заполните все поля...';
        return;
    }

    let result = (num1 * num2) / num3;
    
    display.value = result.toFixed(2); // Если нужно округление
}