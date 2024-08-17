const express = require('express');
const app = express();

// requiring module here 
const userModel = require('./usermodel')

app.get('/',(req,res)=>{
 res.send("Hello Shaikh");
})

app.get('/create',async (req,res)=>{
  let createdUser = await userModel.create({              // 
    name:"Alyan",              //       this all code is asynchronous code 
    username:"Alyan shaikh",  //
    email:"Alyan@gmail.com" //   
  })                          //
  res.send(createdUser);     //           this is synchronous code 
  // and we must know that synchronous code pehly chlta h asynchronous bad mai 
  // monhoDB say related mongoose kay through karnyt wala koi bh code jo hoga woh asynchronous he hoga so mongoose ka future mai jo bh code hoga na woh sab asynchronous hoga he hoga bcz its asynchronous we can use async await  
  // 3 bytes its a time stamp machine ki info network info etc id mai hoti h  
 }) 

app.get('/update',async (req,res)=>{ 
  let updatedUser = await userModel.findOneAndUpdate({name:"Ali"},{name:"M.Ali"},{new:true});
  res.send(updatedUser);
  })

app.get('/read', async (req,res) => { 
      let users = await userModel.find(); // find say sab aa jata h array dyta h findone obj dayta h or pehla banda search kar kay dyta h 
      res.send(users);
  })  
  
  app.get('/delete', async (req,res) => { 
    let users = await userModel.findOneAndDelete({name:"M.Ali"});
    res.send(users);
  })  

app.listen(3000);