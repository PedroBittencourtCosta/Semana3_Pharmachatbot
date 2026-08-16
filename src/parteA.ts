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



