/**
 * JavaScript
 */

const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

const win = winners.map((winner, index) => ({
  name: winner,
  race,
  place: index + 1,
}));

console.table(win);

const ages = [23, 62, 45, 234, 2, 62, 234, 62, 34];
const old = ages.filter(age => age >= 60);
console.log(old);
