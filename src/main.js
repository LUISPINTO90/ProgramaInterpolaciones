function lineal() {
    let FX0 = parseFloat(document.getElementById('fx0').value);
    let FX1 = parseFloat(document.getElementById('fx1').value);
    let X0 = parseFloat(document.getElementById('x0').value);
    let X1 = parseFloat(document.getElementById('x1').value);
    let X = parseFloat(document.getElementById('x').value);

    let result = (FX0 + (FX1 - FX0) / (X1 - X0)) * (X - X0);

    parseFloat(document.getElementById('resultado').value = result);
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
}

function lagrangePrimerOrden() {
    let FX0 = parseFloat(document.getElementById('fx000').value);
    let FX1 = parseFloat(document.getElementById('fx001').value);
    let X0 = parseFloat(document.getElementById('x000').value);
    let X1 = parseFloat(document.getElementById('x001').value);
    let X = parseFloat(document.getElementById('00x').value);

    let result = (((X - X1) / (X0 - X1)) * FX0) + (((X - X0) / (X1 - X0)) * FX1);

    parseFloat(document.getElementById('resultado3').value = result);
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
}

function refresh() {
    location.reload(true);
}