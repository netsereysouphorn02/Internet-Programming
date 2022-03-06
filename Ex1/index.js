const express = require('express')
const app = express()
const fs = require('fs')

app.get('/', function (req, res) {

    fs.readFile('./book.html', 'utf8' , (err, data) => {
        if (err) {
            // console.error(err)
            res.status(500).send(err)
            return
        }
        res.send(data)
    })

})

app.listen(3000, ()=>{
    console.log("Your app is running on http://localhost:3000");
})