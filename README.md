

###API REST simples para gerenciar tarefas utilizando Node.js e Express.

##🚀 Tecnologias
Node.js
Express
JavaScript
##⚙️ Instalação
npm i
##▶️ Como executar
node index.js

##Servidor disponível em:
http://localhost:3000

##📌 Rotas da API
#📋 Tarefas
|Método|	Rota | Descrição
|GET	| /tarefas	|  Lista todas as tarefas
|GET	| /tarefas/:id	| Buscar tarefa por ID
|POST	| /tarefas	| Criar uma nova tarefa
|PUT	| /tarefas/:id	| Atualizar uma tarefa
|DELETE	| /tarefas/:id	| Remover uma tarefa
##⚠️ Regras de Negócio
Não permite criar tarefa com título vazio
Não permite alterar tarefa já concluída
Não permite concluir tarefa que já está concluída
Cada tarefa possui ID único
Retorna códigos HTTP corretos
##📝 Notas

Os dados são armazenados em memória
(Reiniciar o servidor apaga todas as tarefas)

 
---

 
 
