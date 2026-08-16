# Parte C

Cenário 1 
O dashboard usa agruparTicketsAbertosPorFila para decidir, em tempo real, em qual fila colocar mais atendentes agora. Só que a fila "geral" recebe todo ticket que ainda não foi triado manualmente por um humano — na prática, é uma fila-limbo, não uma fila de atendimento de verdade.

Isso pode enganar a decisão de onde alocar atendentes? O que você sugeriria mudar — na função, no dado, ou em como o resultado é lido — antes de confiar nesse número?

R: sim, isso pode interferir no resultado final, já que essa fila geral deveria ser uma fila de aguardando e não de atendimento. 

primeiro eu nao consideraria ela como uma fila de atendimento, logo ela nao entraria no calculo para separar em qual fila deve entrar mais atendentes.


Cenário 2

Um colega "otimiza" ticketsAbertos: em vez de devolver um array novo com filter, ele percorre o array original com forEach e apaga direto os elementos que não são "aberto", pra "economizar memória, já que não precisa de duas listas".

Que problema essa mudança pode causar em outro lugar do sistema que também usa essa mesma lista de tickets? Você aceitaria essa "otimização" nesse ponto do código? Por quê?

R: Eu não aceitaria essa mudança, já que ela acabaria interferindo em outra parte do codigo como na parte de visualizar todos os tickets como é feito no dasboard, caso implementassemos essa mudança não conseguiriamos ver os tickes que já foram encerrados e nem saber o total verdadeiro de tickets que já entraram na fila.

Cenário 3
Uma função parecida com valorTotalPedidos (soma o valor de uma lista de pedidos com reduce) roda todo fim de mês num relatório automático. Num mês sem nenhum pedido novo (loja nova, ainda sem venda), o relatório quebra com um erro no servidor, na hora de gerar o total.

Dado o que você aprendeu essa semana sobre reduce, qual é a causa mais provável desse erro? O que você mudaria no código para evitar isso sem esconder um bug real (ou seja, sem só colocar um try/catch genérico que engole qualquer erro)?

R: provavelmente a causa desse erro pode ser a implementaçao do reduce sem iniciar o acumulador com um valor, fazendo com que a função tente somar o primeiro item do array com ele mesmo, para evitar isso é importante sempre passar o segundo argumento que seria o acumulador inicial como 0.

Outro problema poderia ser o array vindo com algum erro de serializaçao em vez de pegar um vetor [] vazio ele veria como um undefined, nesse caso o try/catch seria aceitavel.
