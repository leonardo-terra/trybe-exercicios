function palindromo(palavra){
  for(let i in palavra){
    if (palavra[i] !=palavra[(palavra.length-1)-i]){
      return false;
    }else
    return(true);
  }
}
//console.log(palindromo("arara"));

function maiorIndice(array){
  var maior=0;

  for(let i = 0; i < array.length; i++){
    if (array[i]>maior){
      maior=i;
    }
  }
return maior;
}
//console.log(maiorIndice([2, 3, 6, 7, 10, 100]));

function menorIndice(array){
   let menor=array[0];
  for(let i = 0; i < array.length; i++){
    if ( array[i] < menor ){
      menor=i;
    }
  }
return menor;
}
console.log(menorIndice([45, 3, 16, 1, 10, 100]));