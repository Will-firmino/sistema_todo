// Função responsável por guardar a lógica da li/task
const criarTarefa = (evento) => {

    evento.preventDefault();

    const list = document.querySelector('[data-ul]');
    const input = document.querySelector('[data-form-input]');
    // const button = document.querySelector("[data-form-button]");
    const values = input.value;

    // Estou criando uma const chamada task que está acessando o index.html e falando para ele que eu vou querer uma <li></li>.
    const task = document.createElement('li'); // <li></li>
    // Aqui eu acesso a minha task(<li></li>), utilizo a propriedade classList para acessar a área de classes da tag que eu criei e uso o método add('task') passando a classe task para a minha tag <li></li>.
    task.classList.add('task');                // <li class="task"> </li>

    // Aqui eu estou chamando a const list que guarda a <ul></ul> e 
    // inserindo a const task nessa tag.
    list.appendChild(task);
    input.value = " ";
}

// Evento da criação da tarefa - Onde/Quando/O que
// onde -> botão
// quando -> clicar
// o que -> criarTarefa()
const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click',criarTarefa);

// onde_vai_acontecer.addEventListener('qual_e_o_evento', o_que).













// function somar(numero1, numero2) {
//     console.log(numero1 + numero2)
// }

// const somar = (numero1, numero2) => console.log(numero1 + numero2); 


