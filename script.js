function mostrarSecao(id) {
    const secoes = document.querySelectorAll('.conteudo');
    secoes.forEach(secao => {
      secao.classList.add('oculto');
    });
    document.getElementById(id).classList.remove('oculto');
  }
  