//Idoso maior 60
//Adulto entre 18 e 59
//Adolescente entre 12 e 17
//Criança entre 0 e 11

const idade = 1;

if(idade >= 60){
    console.log("Idoso");
} else if(idade < 60 && idade >= 18) {
    console.log("Adulto");
} else if(idade < 18 && idade >= 12){
    console.log("Adolescente");
} else if(idade < 12 && idade >= 0){
    console.log("Criança");
} else {
    console.log("Idade inválida")
}

const pontos = 1999;
const anosDeCliente = 3;

if (pontos > 0 &&  pontos <= 99) {
} else if(pontos  >= 100 && pontos <= 499) {
    console.log("Prata");
} else if(pontos >= 500 && pontos <= 999){
    console.log("Ouro");
} else if(pontos > 1000 && anosDeCliente >= 1){
    console.log("Diamante");
}


// Loops

for(let i = 0; i <= 10; i++) {
    console.log(i)
}


for(let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
         console.log(i)
    } else {
        console.log("entrosa")
    }
}

let j = 1;
for( let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${j} X ${i} = ${j * i}`)
    }
}

// Funções

