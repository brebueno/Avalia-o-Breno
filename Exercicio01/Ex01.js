


document.querySelector('#btn-calcular').addEventListener('click',()=>{
    var numero01 = parseInt (document.querySelector('#txtNumero01').value);
    var numero02 = parseInt (document.querySelector('#txtNumero02').value);
    var numero03 = parseInt (document.querySelector('#txtNumero03').value);

// Calculo do numero 1
if (numero01 %2==0 ){

    alert(numero01 * 3);

}

else {alert(numero01 + 7);}

// Calculo do numero 2
if (numero02 %2==0 ){

    alert(numero02 * 3);
}

else {alert(numero02 + 7);}


// Calculo do numero 3
if (numero03 %2==0 ){

    alert(numero03 * 3);

}

else {alert(numero03 + 7)}
       
    });

//> maior/ < menor/ >= maior igual/ <= menor igual 