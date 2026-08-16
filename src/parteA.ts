// A1
function nomesDosContatos(contatos: { nome: string; telefone: string }[]): string[] {

  return contatos.map((contato) => contato.nome);
}

const contatos: { nome: string; telefone: string }[] = [
  { nome: "Ana Silva", telefone: "(11) 98765-4321" },
  { nome: "Carlos Oliveira", telefone: "(21) 99876-5432" },
  { nome: "Mariana Costa", telefone: "(31) 97654-3210" },
  { nome: "João Santos", telefone: "(41) 96543-2109" },
  { nome: "Beatriz Souza", telefone: "(81) 95432-1098" }
];

console.log(nomesDosContatos(contatos));
console.log(nomesDosContatos([]));

// A2
function ticketsAbertos(tickets: { id: number; status: string }[]): { id: number; status: string }[] {
  return tickets.filter((ticket) => ticket.status === "aberto");
}

console.log(ticketsAbertos([]))
console.log(ticketsAbertos([{ id: 1, status: "aberto" }, { id: 2, status: "fechado" }, { id: 3, status: "aberto" }]))
console.log(ticketsAbertos([{ id: 1, status: "Aberto" }]))


// A3
function contarProdutosProximosDoVencimento(produtos: { nome: string; diasParaVencer: number }[]): number {

  return produtos.reduce((qtd, produto) => {

    if(produto.diasParaVencer <= 30){
      qtd += 1;
    }

    return qtd;
  }, 0);
}

// outra maneira de fazer sem o reduce, mais direta 
// function contarProdutosProximosDoVencimento(produtos: { nome: string; diasParaVencer: number }[]): number {

//   return produtos.filter((produto) => produto.diasParaVencer <= 30).length;
// }

console.log(contarProdutosProximosDoVencimento([]))
console.log(contarProdutosProximosDoVencimento([{ nome: "a", diasParaVencer: 30 }]))
console.log(contarProdutosProximosDoVencimento([{ nome: "a", diasParaVencer: 31 }]))
console.log(contarProdutosProximosDoVencimento([{ nome: "a", diasParaVencer: -5 }]))
console.log(contarProdutosProximosDoVencimento([{ nome: "a", diasParaVencer: 30 }, { nome: "a", diasParaVencer: 100 }, { nome: "a", diasParaVencer: -1 }]))

// A4
function precosComDesconto(precos: number[], percentual: number): number[] {

  return precos.map((preco) => {
  
    const desconto = preco * (percentual/100);

    return Number((preco - desconto).toFixed(2));
  });
}

console.log(precosComDesconto([], 10));
console.log(precosComDesconto([100], 0));
console.log(precosComDesconto([100], 100));
console.log(precosComDesconto([19.9, 5.5], 10));
console.log(precosComDesconto([9.99], 15));