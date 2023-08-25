import chartJsModule from 'mypackage';

const inputObject = {
  name: 'максим лескин',
  dateBirth: '10.03.1987',
  purpose: 'карьерный рост'
};

const outputObject = chartJsModule.transformObject(inputObject);
console.log(outputObject);
