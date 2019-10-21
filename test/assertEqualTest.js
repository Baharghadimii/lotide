const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');

// assertEqual("Lighthouse Labs", "Bootcamp");
const result = tail([1,2,3]);
assertEqual(tail([1,2]),[2]);
assertEqual(result[0],2);
