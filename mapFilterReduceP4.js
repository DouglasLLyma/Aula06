function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    }, 0);
}


const arr = [1, 2]

console.log(somaNumeros(arr));

//Exe.02

const lista = [
    {
        nome:'sabao em po',
        preco: 30,
    },

    {
        nome:'cereal',
        preco: 12,
    },

    {
        nome: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));