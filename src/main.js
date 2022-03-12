function lineal() {
    let FX0 = parseFloat(document.getElementById('fx0').value);
    let FX1 = parseFloat(document.getElementById('fx1').value);
    let X0 = parseFloat(document.getElementById('x0').value);
    let X1 = parseFloat(document.getElementById('x1').value);
    let X = parseFloat(document.getElementById('x').value);

    let result = (FX0 + (FX1 - FX0) / (X1 - X0)) * (X - X0);

    parseFloat(document.getElementById('resultado').value = result);
    return result;
}

function cuadratica() {
    let FX0 = parseFloat(document.getElementById('fx00').value);
    let FX1 = parseFloat(document.getElementById('fx01').value);
    let FX2 = parseFloat(document.getElementById('fx02').value);
    let X0 = parseFloat(document.getElementById('x00').value);
    let X1 = parseFloat(document.getElementById('x01').value);
    let X2 = parseFloat(document.getElementById('x02').value);
    let X = parseFloat(document.getElementById('0x').value);

    let b0 = FX0;
    let b1 = (FX1 - FX0) / (X1 - X0);
    let b2 = (((FX2 - FX1) / (X2 - X1)) - (b1)) / (X2 - X0);
    let result = (b0 + (b1 * (X - X0)) + (b2 * (X - X0) * (X - X1)));

    parseFloat(document.getElementById('resultado2').value = result);
    return result;
}

function lagrangePrimerOrden() {
    let FX0 = parseFloat(document.getElementById('fx000').value);
    let FX1 = parseFloat(document.getElementById('fx001').value);
    let X0 = parseFloat(document.getElementById('x000').value);
    let X1 = parseFloat(document.getElementById('x001').value);
    let X = parseFloat(document.getElementById('00x').value);

    let result = (((X - X1) / (X0 - X1)) * FX0) + (((X - X0) / (X1 - X0)) * FX1);

    parseFloat(document.getElementById('resultado3').value = result);
    return result;
}

function lagrangeSegundoOrden() {
    let FX0 = parseFloat(document.getElementById('fx0000').value);
    let FX1 = parseFloat(document.getElementById('fx0001').value);
    let FX2 = parseFloat(document.getElementById('fx0002').value);
    let X0 = parseFloat(document.getElementById('x0000').value);
    let X1 = parseFloat(document.getElementById('x0001').value);
    let X2 = parseFloat(document.getElementById('x0002').value);
    let X = parseFloat(document.getElementById('000x').value);

    let segmentoA = (((X - X1) / (X0 - X1)) * ((X - X2) / (X0 - X2))) * FX0;
    let segmentoB = (((X - X0) / (X1 - X0)) * ((X - X2) / (X1 - X2))) * FX1;
    let segmentoC = (((X - X0) / (X2 - X0)) * ((X - X1) / (X2 - X1))) * FX2;
    let result = segmentoA + segmentoB + segmentoC;

    parseFloat(document.getElementById('resultado4').value = result);
    return result;
}

function errorPorcentualLineal() {
    let valorReal = parseFloat(document.getElementById('fxLineal').value);
    let errorVerdadero = valorReal - lineal();
    let errorPorcentual = ((errorVerdadero / valorReal) * 100);

    parseInt(document.getElementById('errorPorcLin').value = errorPorcentual);
}

function errorPorcentualCuadratica() {
    let valorReal = parseFloat(document.getElementById('fxCuad').value);
    let errorVerdadero = valorReal - cuadratica();
    let errorPorcentual = ((errorVerdadero / valorReal) * 100);

    parseInt(document.getElementById('errorPorcCuad').value = errorPorcentual);
}

function errorPorcentualLag1() {
    let valorReal = parseFloat(document.getElementById('fxLag1').value);
    let errorVerdadero = valorReal - lagrangePrimerOrden();
    let errorPorcentual = ((errorVerdadero / valorReal) * 100);

    parseInt(document.getElementById('errorPorcLag1').value = errorPorcentual);
}

function errorPorcentualLag2() {
    let valorReal = parseFloat(document.getElementById('fxLag2').value);
    let errorVerdadero = valorReal - lagrangeSegundoOrden();
    let errorPorcentual = ((errorVerdadero / valorReal) * 100);

    parseInt(document.getElementById('errorPorcLag2').value = errorPorcentual);
}

function switchLineal() {
    let FX = document.getElementById('switchLineal');
    let fxLineal = document.getElementById('fxLineal');
    fxLineal.disabled = true;

    if (FX.checked == true) {
        fxLineal.disabled = false;
    }
}

function switchCuadratica() {
    let FX = document.getElementById('switchCuadratica');
    let fxLineal = document.getElementById('fxCuad');
    fxLineal.disabled = true;

    if (FX.checked == true) {
        fxLineal.disabled = false;
    }
}

function switchLag1() {
    let FX = document.getElementById('switchLag1');
    let fxLineal = document.getElementById('fxLag1');
    fxLineal.disabled = true;

    if (FX.checked == true) {
        fxLineal.disabled = false;
    }
}

function switchLag2() {
    let FX = document.getElementById('switchLag2');
    let fxLineal = document.getElementById('fxLag2');
    fxLineal.disabled = true;

    if (FX.checked == true) {
        fxLineal.disabled = false;
    }
}

function refresh() {
    location.reload(true);
}