'use strict';

calculateCost(
  {
    display: 20,
    wheel: 100,
    cpu: 40,
  },
  {
    amazobot: {
      wheel: 12.5,
    },
    robozetka: {
      display: 56.2,
      cpu: 150,
    },
  }
);

function calculateCost(bucket, products) {
  // write code here
  const bucketEntries = Object.entries(bucket);
  console.log(bucketEntries);
  const productsValues = Object.values(products);
  console.log(productsValues);
  let copyProductsValues = {};
  let sumCost = 0;

  for (let i = 0; i < productsValues.length; i++) {
    copyProductsValues = Object.assign(copyProductsValues, productsValues[i]);
    console.log(copyProductsValues);
  }
  console.log(copyProductsValues);

  const copyProductsValuesEnteries = Object.entries(copyProductsValues);
  console.log(copyProductsValuesEnteries);
  for (const [key1, value1] of copyProductsValuesEnteries) {
    
    console.log(`${key1}: ${value1}`);
    for (const [key2, value2] of bucketEntries) {
      console.log(`${key2}: ${value2}`);
      if (key1 === key2) {
        sumCost += value1 * value2;
      }
    }
  }
  console.log(sumCost);
}