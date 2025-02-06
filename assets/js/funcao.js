function texto(a){
    let texto = a;
    console.log(texto);
    console.log("Olá michel");
}
//texto("paremetro passado");

function soma(n1, n2){
    let somar = n1 + n2;
    return somar;

}
//console.log(soma(5,10));




function retornaIdade(i){
    let alert;
    if(i <= 18){
        alert = "você é menor de idade";
    }else{
        alert = "acesso liberado";

    }
    return alert;
    

}
//console.log(retornaIdade(25));


function porcentagem(x, y){
    let calt = (x * y)/100;
    let retorno = `O resultado da porcentagem de ${y} de ${x} é ${calt} `;
    return retorno;
}

//console.log(porcentagem(30,10));

//========== Função arrow function ==========//

// const somar = (x, y) => {

//     return x+ y;

// }


// forma reduzida para fazer um arrow function que retorna só uma linha
const somar = (x,y) => x+y;
//console.log(somar(10,10));
//==========================================//




//================== array =================//
let ingredientes =[
    'Farinha',
    'Ovos',
    'Oleo',
    'Leite',
];

//push adiciona um valor dentro do array
//console.log(ingredientes.push('Chocolate'));

//função pop() remove a ultimo valor do array
//ingredientes.pop();
//função shift() remove o primeiro valor do array
//ingredientes.shift();


//console.log(ingredientes);
//==========================================//

//===============Exercico array ============//
let carros = ['BMW', 'Ferrari', 'Mercedes'];
carros.push('Volvo');
carros[1]= ('Audi');
// console.log(carros.length);
// console.log(carros);
// console.log(carros[1]);
//==========================================//


//===============Objeto dentro de outro objeto============//

let personagem = {
    nome: 'Michel',
    idade: 26,
    pais: 'brasil',
    tipo:{
        vilão: 'coringa',
        heroi:'homem aranha'
    }
}
//console.log(personagem.tipo.vilão);

//=====================================================//

//===============Função dentro de um objeto============//

let pessoa = {
    nome: 'Michel',
    sobrenome: 'Alcantara',
    idade: 26,
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }

}
//console.log(pessoa.nomeCompleto());
//=====================================================//

//====Varias maneiras de se usar for no javascript===============//

// let cores = [
//     {nome: 'Preto', qt: 10},
//     {nome: 'Branco', qt: 20},
//     {nome: 'Azul', qt: 30}
// ]

// for(let n = 0; n < ingredientes.length; n++){
//     console.log(ingredientes[n]);

// }

// for(let i in ingredientes){
//     console.log(ingredientes[i]);

// }

// for(let ingre of ingredientes){
//     console.log(ingre);
// }

// for(let cor of cores){
//     console.log(`${cor.nome} ${cor.qt} `);
// }
//=====================================================//

//===========================While===============//
// let numb = 0;

// while(numb < 10){
//     console.log(numb++);

// }
//=====================================================//

let frutas = [
    'Maça',
    'Banana',
    'Uva',
    'Abacaxi'
];

// for(let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);

// }

// for(frut of frutas){
//     console.log(frut);
// }

// let numb = 0;

// while(numb <= 100){

//     console.log(numb++);

// }
//ele gera um separador para seu array, retorno console abaixo: Maça,Banana,Uva,Abacaxi
// console.log(frutas.join(','));

//função sort ordena o array
frutas.sort()

//função de reverte o array
frutas.reverse()
// console.log(frutas);

let cars = [
    {marca: 'Audi', ano: 2025},
    {marca: 'Fiat', ano: 2015},
    {marca: 'BMW', ano: 2022},
  
];


// cars.sort((a, b) => a.ano - b.ano);
console.log(cars);

