
const chai=require('chai')
const expect = chai.expect;
const sinon=require('sinon')
const demo =require('../src/demo.js')

describe('demo test',()=>{
    it("test the add methos",()=>{
        expect(demo.add(4,5)).to.be.equal(9)
    })
    it("test the call back add",(done)=>{
        expect(demo.addCallback(1,2,(err,res)=>{
            expect(err).to.not.exist;
            expect(res).to.equal(3);
            done();
        })
        )
    })

    it('test the promise',(done)=>{
        demo.addPromise(1,2).then((result)=>{
            expect(result).to.equal(3)
            done();
        }).catch((exception)=>{
            console.log('not equal')
            done();
        })
    })

    // it("spy the add method",()=>{
    //     var spy=sinon.spy(demo);
    //     var arg1 =10,arg2=20;
    //     demo.callAnotherFn(arg1,arg2);
    //     sinon.assert.calledOnce(spy);
    // })
     it('spy on log',()=>{
         let spy=sinon.spy(console,'log');
         demo.foo();
         expect(spy.calledOnce).to.be.lessThanOrEqual;
     })
})