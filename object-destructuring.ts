interface Cliente {
    nome: string;
    idade: number;
    dataNasc: string;
    estadoAtivo: boolean;
}

const cliente: Cliente = {
    nome: "Felipe da Silva Santos",
    idade: 19,
    dataNasc: "2001-11-18",
    estadoAtivo: true,
};

// console.log(cliente);

// const nome = cliente.nome;
// const idade = cliente.idade;
// const dataNasc = cliente.dataNasc;
// const estadoAtivo = cliente.estadoAtivo;

// console.log(nome, idade, dataNasc, estadoAtivo);

// const { nome } = cliente;
// const { idade } = cliente;
// const { dataNasc } = cliente;
// const { estadoAtivo } = cliente;

// console.log(nome, idade, dataNasc, estadoAtivo);

// const { nome, idade, dataNasc, estadoAtivo } = cliente;

// console.log(nome, idade, dataNasc, estadoAtivo);

// function imprimirCliente(
//     { nome, idade, dataNasc, estadoAtivo }: Record<string, any>) {
//     console.log(nome, idade, dataNasc, estadoAtivo);
// }

// imprimirCliente(cliente);

// function imprimirCliente({ nome, idade, dataNasc, estadoAtivo }: Cliente) {
//     console.log(nome, idade, dataNasc, estadoAtivo);
// }

// imprimirCliente(cliente);

function infoCliente({ nome: nomeDoCliente, idade: idadeDoCliente } = cliente) {
    console.log(nomeDoCliente, "tem", idadeDoCliente, "anos de idade.");
}

infoCliente(cliente);
