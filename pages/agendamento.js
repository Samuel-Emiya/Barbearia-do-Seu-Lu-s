// Começando a fazer uma página usando js
function validarFormulario(event) {
    event.preventDefault();

    const formulario = document.forms["agendaMento"];

    const dados = {
        nome: formulario.nome.value,
        telefone: formulario.telefone.value,
        servico: formulario["serviço"].value,
        data: formulario.data.value,
        hora: formulario.hora.value
    };

    localStorage.setItem("agendamento", JSON.stringify(dados));

    window.location.href = "receba.html";
}