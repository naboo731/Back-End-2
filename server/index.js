
const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

const ctrl = require("./controller.js")

app.get("/api/houses", ctrl.getHouses)
app.delete("/api/houses/:id", ctrl.deleteHouses)
app.post("/api/houses", ctrl.createHouses)
app.put("/api/houses/:id", ctrl.updateHouses)







app.listen(4004, () => {
    console.log("Up and running on 4004")
})