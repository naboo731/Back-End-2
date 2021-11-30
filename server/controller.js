const houses = require("./db.json")
let globalId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    }, 
    deleteHouses: (req, res) => {
        let {id} = req.params
        let index = houses.findIndex(house => +house.id === +id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    }, 
    createHouses: (req, res) => {
        const {address, price, imageURL} = req.body
        let newHouse = {
            id: globalId,
            address, 
            price, 
            imageURL
            
        }
            houses.push(newHouse)
            res.status(200).send(houses)
            globalId++
    },
    updateHouses: (req, res) => {
        const {id} = req.params
        const {type} = req.body
        let index = houses.findIndex(house => +house.id === +id)
        if (houses[index].price === 0 && type === 'minus'){
            res.status(400).send("Man, that house is CHEAP! Can't be any cheaper though.")
        } else if (type === 'plus'){
            houses[index].price + 10000
            res.status(200).send(houses)
        } else if (type === 'minus'){
            houses[index].price - 10000
            res.status(200).send(houses)
        }
    }
}