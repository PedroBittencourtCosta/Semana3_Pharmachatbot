
function agruparTicketsAbertosPorFila(tickets: { id: number; status: string; fila: string }[]): Record<string, number> {

    const ticketsApertosPorFilas = tickets.filter((ticket) => ticket.status === 'aberto').reduce<Record<string, number>>((qtd, ticket) => {

        if (ticket.fila !== ' ' && ticket.fila !== '') {

            qtd[ticket.fila] = (qtd[ticket.fila] ?? 0) + 1;
        }

        return qtd;
    }, {});

    return ticketsApertosPorFilas;
}


console.log(agruparTicketsAbertosPorFila([]));
console.log(agruparTicketsAbertosPorFila([{ id: 1, status: "aberto", fila: "suporte" }, { id: 2, status: "aberto", fila: "vendas" }, { id: 3, status: "fechado", fila: "suporte" }, { id: 4, status: "aberto", fila: "suporte" }]));
console.log(agruparTicketsAbertosPorFila([{ id: 1, status: "aberto", fila: "" }, { id: 2, status: "aberto", fila: "vendas" }]));
console.log(agruparTicketsAbertosPorFila([{ id: 1, status: "Aberto", fila: "suporte" }]));

