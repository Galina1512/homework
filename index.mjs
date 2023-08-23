import { transformObject } from './node_modules/mypackage/chart.js';

const inputObject = {
  name: 'максим лескин',
  dateBirth: '10.03.1987',
  purpose: 'карьерный рост'
};

const outputObject = transformObject(inputObject);
console.log(outputObject);
