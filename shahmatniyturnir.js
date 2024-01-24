const express = require("express")
const app = express()
const port = 3000
const federation = [
    {
        id: 1,
        federationName: "Шахматная федерация Хабаровский края",
        country: "Россия",
    },
    {
        id: 2,
        federationName: "Шахматная федерация Амурской области",
        country: "Россия",
    },
    {
        id: 3,
        federationName: "Шахматная федерация Якутии",
        country: "Россия",
    }
]


app.get('/', (req, res) => {
    res.set({
        "Content-Type": "application/json",
    })
    res.json(JSON.stringify(federation))
})

app.listen(port, () => {
    console.log(`Мы начали прослушивать ${port} порт.`)
})
