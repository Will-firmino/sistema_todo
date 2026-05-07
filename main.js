// Criação das constantes do HTML


const criarTarefa = () => {

    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const button = document.querySelector("[data-form-button]");
    const value = input.value;

    // Estou criando uma const chamada task que está acessando o index.html e falando para ele que eu vou querer uma <li></li>.
    const task = document.createElement('li'); // <li></li>
    // Aqui eu acesso a minha task(<li></li>), utilizo a propriedade classList para acessar a área de classes da tag que eu criei e uso o método add('task') passando a classe task para a minha tag <li></li>.
    task.classList.add('task');                // <li class="task"> </li>

    // Aqui eu estou chamando a const list que guarda a <ul></ul> e 
    // inserindo a const task nessa tag.
    list.appendChild(task);





}





// function somar(numero1, numero2) {
//     console.log(numero1 + numero2)
// }

// const somar = (numero1, numero2) => console.log(numero1 + numero2); 


