let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'christimas in blabla',
    nota: 'Very rich :)',
    recorrente: 'sim',
  };


  info.recorrente="sim";

  //console.log("Bem vinda,"+ info.personagem);
  
  for (let key in info){
    if (info[key] == 'sim' && info2[key] == 'sim'){
      console.log("Ambos são");
    }else{
    console.log(info[key]+" e " + info2[key]);
    }
  }