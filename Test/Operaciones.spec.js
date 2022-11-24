const assert = require('assert');
const op = require('../SRC/Operaciones');

describe('Caja de operaciones básicas', () =>{
    var a=10;
    var b=10;
    var results=0;

    it('Suma de dos números', () =>{
        results = op.suma(a,b);
        assert.equal(results,20);
    })
    it('Resta de dos números', () =>{
        results = op.resta(a,b);
        assert.equal(results,0);
    })
    it('Multiplicación de dos números', () =>{
        results = op.multiplicacion(a,b);
        assert.equal(results,100);
    })
    it('División de dos números', () =>{
        results = op.division(a,b);
        assert.equal(results,1);
    })

})