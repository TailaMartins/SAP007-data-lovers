import data from './data/rickandmorty/rickandmorty.js';
import {filterGenero, filterStatus, filterEspecie, sortByName,filterNome, computeStats} from './data.js';


function aparecerCards(data) {
  document.getElementById("lista-cards").innerHTML = data.map((personagens) => ` 
  <div class="card">
    <div class="mostrar-cards">
      <div class="cards-frente">
        <img src="${personagens.image}">
        <p>Nome:${personagens.name}</p>
      </div>
      <div class="card-costa">
          <p>Genero:${personagens.gender}</p>
          <p>Status:${personagens.status}</p>
          <p>Especie:${personagens.species}</p>
          <p>Origem:${personagens.origin.name}</p>
          <p>Episodios que aparecem:${personagens.episode.length}</p>
          <p>Local onde vive:${personagens.location.name}</p>
          <p>Data de criação: ${personagens.created}</p>  
      </div>
    </div>
  </div>
     
` ).join(''); 
}
aparecerCards(data.results);


function filtroGenero(e) {
  e.preventDefault();
  const genero = document.getElementById("selectGenero").value;  
  const mostrarGenero = filterGenero(data.results, genero);
  document.getElementById("percentualTotal").innerHTML = `o total de personagens nessa categoria é ${computeStats(mostrarGenero)}`
  aparecerCards(mostrarGenero);
}

function filtroStatus(e) {
  e.preventDefault();
  const status = document.getElementById("selectStatus").value;
  const mostrarStatus = filterStatus(data.results, status)
  document.getElementById("percentualTotal").innerHTML = `o total de personagens nessa categoria é ${computeStats(mostrarStatus)}`
  aparecerCards(mostrarStatus);
}

function filtroEspecie(e) {
  e.preventDefault();
  const especie = document.getElementById("selectEspecie").value;
  const mostrarEspecie = filterEspecie(data.results, especie)
  document.getElementById("percentualTotal").innerHTML = `o total de personagens nessa categoria é ${computeStats(mostrarEspecie)}`
  aparecerCards(mostrarEspecie);
}

function ordenarPersonagens(e) {
    e.preventDefault();
    const selectOrdem = document.getElementById("selectOrdem").value;
    const mostrarOrdem = sortByName(data.results, selectOrdem);
    aparecerCards(mostrarOrdem);
}

function pesquisarNome(e) {
    e.preventDefault();
    const pesquisaNome = document.getElementById("pesquisarNome").value
    const devolveNome = filterNome(data.results, pesquisaNome)
    aparecerCards(devolveNome);
}

function limparFiltros() {
    window.location.reload();
}

  function voltarTopo() {
    window.scrollTo(0, 0);
}

  document.getElementById("selectOrdem").addEventListener("change", ordenarPersonagens);
  document.getElementById("selectStatus").addEventListener("change", filtroStatus);
  document.getElementById("selectGenero").addEventListener("change", filtroGenero);
  document.getElementById("selectEspecie").addEventListener("change", filtroEspecie);
  document.getElementById("pesquisarNome").addEventListener("keyup", pesquisarNome);
  document.getElementById("limparFiltro").addEventListener("click", limparFiltros);
  document.getElementById("voltar-ao-topo").addEventListener("click", voltarTopo);
















