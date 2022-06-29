console.log( 'Hello Node' );

const fs = require( 'fs' );
const express = require( 'express' );


let app = express();
let server = app.listen( 5001, ()=>{
        console.log( 'Server running' );
} );

app.get( '/', (req,res)=>{
    res.send( 'Hallo Server' );
});




//fs.writeFile( './test.json', JSON.stringify({x:1}), (err)=>{ });

fs.readFile( './test.json', (err,data)=>{
    y=1;
    if (!err) {
        let x;
        var y;
        console.log( 'async', JSON.parse(data) );
    }
});

let data = fs.readFileSync( './test.json'); 
console.log( 'sync', JSON.parse(data) );

// JS Promises, async/await
let pro = new Promise( (resolve,reject) => {
    fs.readFile( './test.json', (err,data)=>{
        if ( !err ) {
            resolve(data);
        } else {
            reject('file not exists');
        }
    });
})

pro.then( (data)=>{
    console.log( 'mein Promise', JSON.parse( data) );
}).catch( (err)={

})


let testF = async function() {
    //pro().then()

    let data = await pro;
    console.log( 'asnyc/await', JSON.parse( data ))
}
testF();