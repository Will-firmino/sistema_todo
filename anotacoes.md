# Anotações JS
1. data- -> é um seletor utilizado no html que marca uma tag. Com isso, você chama esse seletor no js e consegue ter acesso a tag.
estrutura: data-button // kebab-case 
2. As variáveis e constantes em JS, são cammelCase. Ex: nomeUsuario, nomeCompletoUsuario.
3. As funções em JS também são cammelCase. Ex: criarTarefa().
4. Os componentes em JS são PascalCase. Ex: BotaoConcluir().

# Métodos do JS
.createElement() -> Método que cria um novo elemento.
.appendChild() -> Método que insere uma tag filha na tag pai.
.add() -> Método que adiciona algo no contexto.
.addEventListener() -> Método que cria um evento para ser escutado.
.remove() -> Remove algo do DOM.
.preventDefault() -> Método que impede o comportamento padrão do formulário que iria "enviar" os dados quando o botão fosse clicado. 


# Propriedades do JS
.innerHtml -> Propriedade que insere um elemento dentro de outro elemento.Ex: class, tag.
.classList -> Propriedade que acessa a lista de classes da tag.
.value -> Propriedade que acessa o valor digitado no input.
.innerText -> Propriedade que inclui um texto em uma tag.
.parentElement -> Propriedade que acessa o elemento pai.

# Evento da criação da tarefa - Onde/Quando/O que
onde_vai_acontecer.addEventListener('qual_e_o_evento', o_que).
.addEventListener() -> Aqui esse método adiciona um ouvinte de evento ao botão. Caso o botão seja clicado, a função será chamada, permitindo que o código responda à ação do usuário e crie uma nova tarefa na lista.
