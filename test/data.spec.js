import { filterData } from '../src/data.js';
//, sortByName, computeStats//
 const personagens = [
 { "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "gender": "Male",
},
{
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male"
},
{ "id": 3,
  "name": "Summer Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Female",
},

]



describe('filtrar objetos dos selects',() => {
  it('should be a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('retornar filtrado a opção selelecionada', () => {
    expect(filterData(personagens.gender == personagens.Female)).toBe('Summer Smith');
  });
});


// describe('sortByName', () => {
//   it('is a function', () => {
//     expect(typeof sortByName).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

// describe('computeStats', () => {
//   it('is a function', () => {
//     expect(typeof computeStats).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
