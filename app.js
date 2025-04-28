const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
var methodOverride = require("method-override");

var app = express();
var port = process.env.Port || 3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));
const countmap = {};
let other=0,rent=0,travel=0,food=0;
let db 

//////////////////////////////////////////////////////////////////////file handling

let file= require("./file");


const success= (data)=>{
  // console.log(data);
   db = data;

//////////////////////////////////////////////////////hash maping
   for( let post of db){
    if(countmap[post.category]==undefined){
      countmap[post.category]=1;
    } else{
      countmap[post.category]++;
    }
}
other = countmap["other"];
rent = countmap["rent"];
travel = countmap["travel"];
food = countmap["food"];

// console.log(` food  ${food} rent ${rent} travel ${travel} other ${other}`);
///////////////////////////////////////////////////////////////////////
};
const failure=(error)=>{
  console.log(error);
  };
///////////////////reading
file.read()
.then(success)
.catch(failure);
///////////////////////////////////////////////////////// new data 

app.get("/",(req,res)=>{
res.render('index.ejs',{port,db,other,rent,travel,food});
});

app.post("/",(req,res)=>{
// res.send("working ");
// console.log(req.body);
let id =uuidv4();
let{amount,discription,category}=req.body;
let mydate = new Date()
let date = mydate.toLocaleDateString();
// db.push({id,amount,discription,date});
file.write({id,discription,date,amount,category})
.then(success)
.catch(failure);

res.redirect('/all');
});
/////////////////////////////////////////////delete

app.delete("/delete/:id",(req,res)=>{
  let {id}=req.params;
file.del(id)
.then(success)
.catch(failure)

  console.log("deleated"+id);
   res.redirect("/all");

});
//////////////////////////////////////////////update
app.get("/edit/:id",(req,res)=>{
  let {id} =req.params;
  res.render("edit.ejs",{id});
  file.del(id)
  .then(success)
  .catch(failure);
  
});

app.post("/edit/:id",(req,res)=>{
  let {id}=req.params;
  let mydate = new Date()
  let date = mydate.toLocaleDateString();
  let {amount,discription,category}=req.body;


file.write({id,discription,date,amount,category})
.then(success)
.catch(failure);



  res.redirect("/all")
});

/////////////////////////////////////////////////all transactions
app.get("/all",(req,res)=>{
// res.send(hii);
try {res.render("all.ejs",{db,port});}
catch(err){
  console.log(err);
  res.redirect("");
}
});




////////////////////////////////////////////////////listening server
app.listen(port,()=>{
console.log("server working on port : "+port);
});