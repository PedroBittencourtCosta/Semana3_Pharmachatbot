# Parte T

## T1

**Código:**
```javascript
const precos = [10, 20, 30];
const comDesconto = precos.map((preco) => {
  preco * 0.9;
});
```

**Pergunta:** O que fica guardado em `comDesconto` depois desse código rodar? Por quê? (Dica: repare que a arrow function usa chaves `{ }` — o que isso muda em relação a escrever `preco => preco * 0.9`, sem chaves?)

**R:** O resultado que fica é um undefined, já que não foi definido um return dentro do map. Sem ele o codigo não sabe oq retornar e acaba retornando undefined. 
caso ele não usase as chaves ele retornaria um array com os valores com desconto.

---

## T2

**Pergunta:** Você tem uma lista de tickets e precisa fazer duas coisas diferentes: (1) pegar só os tickets com status "aberto", sem mudar mais nada neles; (2) transformar cada ticket num texto tipo "Ticket #12 - aberto", mantendo a lista do mesmo tamanho.
Qual método (map ou filter) você usaria em cada caso, e por quê usar o outro método no lugar errado daria um resultado estranho (não um erro, um resultado estranho)?

**R:** Para pegar os ticketes com status aberto eu usaria o filter e para transformar cada ticket em um texto tipo "Ticket #12 - aberto" eu usaria o map, caso eu usasse o map no lugar do filter eu teria que adicionar uma condição dentro do map e dar um return, para esse caso não seria legal porque o filter cumpre perfeitamente esse papel.

---

## T3

**Pergunta:** O método reduce aceita um segundo argumento opcional: o valor inicial do acumulador (o mesmo que você já usava manualmente com let total = 0 na Semana 2).
O que acontece se você chamar `[].reduce((a, b) => a + b)` — sem passar valor inicial — numa lista vazia? Por que isso é diferente de somarCarrinho da Semana 2, que devolvia 0 tranquilamente pra lista vazia?

**R:** Ele acaba disparando um erro porque se a gente não passar um valor para o acumulador e pega o primeiro item do vetor como o valor do acumulador porem se esse vetor estiver vazio ele não consegue pegar o valor e acaba disparando um erro. 

---
---

# Parte C

## Cenário 1 

**Contexto:** O dashboard usa agruparTicketsAbertosPorFila para decidir, em tempo real, em qual fila colocar mais atendentes agora. Só que a fila "geral" recebe todo ticket que ainda não foi triado manualmente por um humano — na prática, é uma fila-limbo, não uma fila de atendimento de verdade.

**Pergunta:** Isso pode enganar a decisão de onde alocar atendentes? O que você sugeriria mudar — na função, no dado, ou em como o resultado é lido — antes de confiar nesse número?

**R:** sim, isso pode interferir no resultado final, já que essa fila geral deveria ser uma fila de aguardando e não de atendimento. 

primeiro eu não consideraria ela como uma fila de atendimento, logo ela não entraria no calculo para separar em qual fila deve entrar mais atendentes.

---

## Cenário 2

**Contexto:** Um colega "otimiza" ticketsAbertos: em vez de devolver um array novo com filter, ele percorre o array original com forEach e apaga direto os elementos que não são "aberto", pra "economizar memória, já que não precisa de duas listas".

**Pergunta:** Que problema essa mudança pode causar em outro lugar do sistema que também usa essa mesma lista de tickets? Você aceitaria essa "otimização" nesse ponto do código? Por quê?

**R:** Eu não aceitaria essa mudança, já que ela acabaria interferindo em outra parte do codigo como na parte de visualizar todos os tickets como é feito no dasboard, caso implementassemos essa mudança não conseguiriamos ver os tickes que já foram encerrados e nem saber o total verdadeiro de tickets que já entraram na fila.

---

## Cenário 3

**Contexto:** Uma função parecida com valorTotalPedidos (soma o valor de uma lista de pedidos com reduce) roda todo fim de mês num relatório automático. Num mês sem nenhum pedido novo (loja nova, ainda sem venda), o relatório quebra com um erro no servidor, na hora de gerar o total.

**Pergunta:** Dado o que você aprendeu essa semana sobre reduce, qual é a causa mais provável desse erro? O que você mudaria no código para evitar isso sem esconder um bug real (ou seja, sem só colocar um try/catch genérico que engole qualquer erro)?

**R:** provavelmente a causa desse erro pode ser a implementaçao do reduce sem iniciar o acumulador com um valor, fazendo com que a função tente somar o primeiro item do array com ele mesmo, para evitar isso é importante sempre passar o segundo argumento que seria o acumulador inicial como 0.

Outro problema poderia ser o array vindo com algum erro de serializaçao em vez de pegar um vetor [] vazio ele veria como um undefined, nesse caso o try/catch seria aceitavel.

