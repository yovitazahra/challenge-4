const express = require('express');
const path = require('path');
const {car} = require('./models');
const app = express();
const PORT = 8000;

app.use(express.json());

app.set("views", __dirname + "/views")
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.render("index")
})

app.get('./cars', (req, res) => {
    const cars = cars.findAll();
    res.send(cars)
})

app.get('/admin/car/create', (req, res) => {
    res.render("cars/create")
})


app.post('/cars', (req, res) => {
    const { car_name, price, size} = req.body
    car.create({
        car_name,
        price,
        size
    })
    console.log(`Sukses menambahkan data baru`)
})


app.listen(PORT, () => {
    console.log(`App Running on http://localhost:${PORT}`)
})