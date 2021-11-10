/* let info = {
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
    }q
  } */

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  
//console.log("O livro favorito de "+ leitor.nome+ " "+ leitor.sobrenome+ " é: "+ leitor['livrosFavoritos'][0]['titulo'] + '"');

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  },
);
//console.table(leitor);

console.log("Julia tem" + leitor.livrosFavoritos.length + " livros favoritos");