const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://selvafortis:pass2004@cluster0.t5dnb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
   console.log("connected to mongodb")
})