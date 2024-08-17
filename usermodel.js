const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/firstDB`); //database bnaya h 
 //it's a method jo kay accept karta h aik object ko 
const userSchema = mongoose.Schema({   // schema matlb h kay har user kay pass kia kia                                       details hongi 
  name:String,
  username:String,
  email:String
})
//model kia karta h? asal mai woh collections bnata h & model ki base p he hm CRUD opperations ko kar skty hain 

module.exports = mongoose.model("user",userSchema) ; // yeh model (collection) bna abhi

//jo bh hm name dyty hain uska pluralized version ban jata h jaisy user => users
// hmy yeh bh btana hota h kay schma konsa use karna h so we use UserSchema here 
// agar hm kisi or route p kam karna chahty hain so that hm is module ko export kiyay baghair use nh kar skty 
// exports is a propert and we export model 
