const express = require('express');
const users = require('./users');
const app = express();

app.get("/api", (req, res) =>{
    res.status(200).send({users});
}); 
//start controller

 const PORT = process.env.PORT || 4000

//listening to the port
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
    
});
