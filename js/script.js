/**
 * JavaScript
 */

const names = ['Satvinder Jeet Singh', 'Lovely', 'Harman Singh', 'Ashmeet Singh'];
const fullNames = names.map((name)  => `${name} Manchanda`);
console.log(fullNames);

const sayMyName = (name) => {
  console.log(`Hello ${name}`);
}

sayMyName('Harry');
