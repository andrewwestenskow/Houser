const express = require('express')
const app = express()
const massive = require('massive')
require('dotenv').config()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const houseCtrl = require ('./controllers/houseController')

app.use(express.json())

app.get('/api/houses', houseCtrl.getAll)
app.post('/api/house', houseCtrl.addNew)
app.delete('/api/house/:id', houseCtrl.delete)

massive(CONNECTION_STRING).then(db =>{
  app.set('db', db)
  console.log(`DB Connected`)
  app.listen(SERVER_PORT, ()=>console.log(`Listening on port ${SERVER_PORT}`))
})
