const projetos = document.getElementById('projetos')
const sobre = document.getElementById('sobre')

function projetosView() {
    projetos.style.display = 'block';
    sobre.style.display = 'none';
}
function sobresView() {
    sobre.style.display = 'block';
    projetos.style.display = 'none';
}
