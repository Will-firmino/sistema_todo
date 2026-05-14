// Função responsável por guardar a lógica da li/task
const criarTarefa = (evento) => {

    evento.preventDefault();

    const list = document.querySelector('[data-ul]');
    const input = document.querySelector('[data-form-input]');
    const values = input.value;

    const task = document.createElement('li'); 
   
    task.classList.add('task');      // <li class="task"> </li>      
    const content = `<p class="content">${values}</p>`   // <p class="content">values</p>
    task.innerHTML = content           // <li class="task"><p class="content">values</p></li>                                      
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


