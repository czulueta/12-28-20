const express = require("express")
const  mongoose  = require("mongoose")
const app = express()

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/dec28drinksdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("connected to the database")
    )

app.use("/drinks", require("/routes/drinkRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.use(9000, () => {
    console.log("successfully running on port 9000")
})