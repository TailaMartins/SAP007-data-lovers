export const filterGenero = (data, genero) => data.filter (personagens => {
  return personagens.gender === genero;
})

export const filterStatus = (data, condition) => data.filter (personagens =>{
  return personagens.status === condition;
})

export const filterEspecie = (data, especie) => data.filter (personagens =>{
  return personagens.species === especie;
})

export const filternome =  (data, buscaNome) => data.filter (personagens => {
  return personagens.name.toLowerCase().includes(buscaNome.toLowerCase());
});

export const sortByName = (data, order) => {
  if (order === "ordenarAZ") {
  return data.sort((a, b) => a.name < b.name ? -1 : 1)
} else {
    return data.sort((a, b) => a.name > b.name ? -1 : 1)
} 
};

export const computeStats = (data) => {
  return data.length;
}





 
 








