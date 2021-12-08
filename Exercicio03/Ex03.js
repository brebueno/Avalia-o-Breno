


document.querySelector('#btn-calcular').addEventListener('click',()=>{
   
    let Numero01 = parseInt (document.querySelector('#txtNumero01').value); 
    let Numero02 = parseInt (document.querySelector('#txtNumero02').value);
    
    [Numero01, Numero02] = [Numero02,Numero01]
    

    alert("O inverso do Numero " + Numero01 + ' é o Numero' + Numero02);
    alert("O inverso do Numero " + Numero02 + ' é o Numero' + Numero01);


});

//> maior/ < menor/ >= maior igual/ <= menor igual 