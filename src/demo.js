exports.add=function(a,b){
    return a+b
}
exports.addCallback =function(a,b,callback){
    setTimeout(()=>{
        return callback(null,a+b);
    },300);
}

exports.addPromise= function (a,b){
    // return Promise.reject('fake');
    return Promise.resolve(a+b)
}


exports.foo=()=>{
    console.log('log was called');
    console.warn('warn was called');
    return;
}