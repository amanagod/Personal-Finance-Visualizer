const { json } = require("express");
const fs = require("fs");
let filepath ="./db.json";

const read =()=>{
    const promise = new Promise((resolve,reject)=>{
        fs.readFile(filepath,(error,data)=>{
            if(error){
                reject (error);
            }
            resolve(JSON.parse(data));
        });
    

    });


return promise;
    
}
const write =(product)=>{
    const promise = new Promise((resolve,reject)=>{
        read()
        .then((data)=>{
            const products = data;
            products.push(product);
            fs.writeFile(filepath, JSON.stringify(products),(error)=>{
                if(error){
                    reject(error);
                }
                resolve(products)
            })
        })

        
        .catch((error)=>{
            reject(error);
        })
        

    });
return promise;   
} 

const del = (id)=>{
const promise = new Promise((resolve,reject)=>{
read()
.then((data)=>{
    let products = data;
    products=products.filter((p)=>id !==p.id);
    fs.writeFile(filepath,JSON.stringify(products),(error)=>{
        if(error){
            reject(error);
        }
        resolve(products);
    })
})
.catch((error)=>{
    reject(error);
})
});
return promise;
}

const productRepo ={
    read:read,
    write:write,
    del:del
}

module.exports=productRepo;