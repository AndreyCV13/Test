var assert = require('assert');

describe('Caja de operaciones básicas', () =>{
    var a=10;
    var b=10;
    var results=0;

    it('Suma de dos números', () =>{
        results=a+b;
        assert.equal(results,20);
    })
    it('Resta de dos números', () =>{
        results=a-b;
        assert.equal(results,0);
    })
    it('Multiplicación de dos números', () =>{
        results=a*b;
        assert.equal(results,100);
    })
    it('División de dos números', () =>{
        results=a/b;
        assert.equal(results,1);
    })
    it('Suma tres números', () =>{
        results=a+a+b;
        assert.equal(results,30);
    })

})