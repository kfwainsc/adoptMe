/* Sorts all pets with pics at front, then by alpha 
   Original data NOT mutated  */
export const sortPetData = (data) => {
  const pics = [];
  const noPics = [];
  let sorted = data;
  sorted.sort(alphaSort);
  sorted.forEach((pet) => {
    pet.photos[0] ? pics.push(pet) : noPics.push(pet);
  });
  sorted = pics.concat(noPics);
  return sorted;
};

const alphaSort = (a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};
