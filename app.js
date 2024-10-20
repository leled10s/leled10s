let express = require('express')
const app = express()
const path = require('path')

const publicPath = path.resolve(__dirname,'public')

const port = process.env.PORT || 3000;

app.use(express.static(publicPath))

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "views/index.html"))
})

app.listen(port, () =>{
    console.log("Servidor corriendo");
})