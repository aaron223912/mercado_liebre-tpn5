const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.listen(port,() =>console.log('server running in http://localhost:' +port))

/* RECURSOS ESTATICOS */
app.use(express.static('public'));

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','home.html')))