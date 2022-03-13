import data from './data/rickandmorty/rickandmorty.js';
import { filterData, sortByName,filterNome, computeStats} from './data.js';

const devolvePersonagens = data.results;

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
aparecerCards(devolvePersonagens);

function filtrarGenero(e) {
e.preventDefault();
const genero = document.getElementById("selectGenero").value;  
const mostrarGenero = filterData(devolvePersonagens,"gender",genero);
document.getElementById("percentualTotal").innerHTML = `o total de personagens nessa categoria é ${computeStats(mostrarGenero)}`
aparecerCards(mostrarGenero);
}

function filtrarStatus(e) {
e.preventDefault();
const status = document.getElementById("selectStatus").value;
const mostrarStatus = filterData(devolvePersonagens,"status", status)
document.getElementById("percentualTotal").innerHTML = `o total de personagens nessa categoria é ${computeStats(mostrarStatus)}`
aparecerCards(mostrarStatus);
}

function filtrarEspecie(e) {
e.preventDefault();
const especie = document.getElementById("selectEspecie").value;
const mostrarEspecie = filterData(devolvePersonagens,"species",especie)
document.getElementById("percentualTotal").innerHTML = `o total de personagens nessa categoria é ${computeStats(mostrarEspecie)}`
aparecerCards(mostrarEspecie);
}

function ordenarPersonagens(e) {
e.preventDefault();
const selectOrdem = document.getElementById("selectOrdem").value;
const mostrarOrdem = sortByName(devolvePersonagens, selectOrdem);
aparecerCards(mostrarOrdem);
}

function pesquisarNome(e) {
e.preventDefault();
const pesquisaNome = document.getElementById("pesquisarNome").value
const devolveNome = filterNome(devolvePersonagens, pesquisaNome)
aparecerCards(devolveNome);
}

document.getElementById("selectOrdem").addEventListener("change", ordenarPersonagens);
document.getElementById("selectStatus").addEventListener("change", filtrarStatus);
document.getElementById("selectGenero").addEventListener("change", filtrarGenero);
document.getElementById("selectEspecie").addEventListener("change", filtrarEspecie);
document.getElementById("pesquisarNome").addEventListener("keyup", pesquisarNome);
document.getElementById("limparFiltro").addEventListener("click", () => {window.location.reload()});
document.getElementById("voltar-ao-topo").addEventListener("click", () => {window.scrollTo(0, 0);});
















