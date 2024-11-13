import express from "express";
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";
import Grid from "gridfs-stream"
import courseroute from "./Route/Course.route.js"
import paperroute from "./Route/Papers.route.js"
import cors from "cors"
import bodyParser from "body-parser";
import axios from "axios";
import syllabusroute from "./Route/Syllabus.route.js"
import searchroute from "./Route/Search.route.js"
import messageroute from "./Route/Message.route.js"


const app = express()
app.use(bodyParser.json());
app.use(cors())


const PORT = process.env.PORT || 3000
const Mongo = process.env.Mongo

app.get('/api/', function (req, res) {
    res.send('Hello World')
})

try {
    mongoose.connect(Mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("connected to Mongo");

} catch (error) {
    console.log(error);

}

let postData = null

app.post('/api/course',bodyParser.text(), (req, res, next) => {
    postData = req.body
    res.status(201).send({ message: 'Course created successfully' });
});

app.use('/api/notes', (req, res, next) => {
    const name = postData || "BCA";
    req.name = name;
    next();
});

app.use('/api/notes', courseroute);


app.use("/api/papers", (req, res, next) => {
    const name = postData || "All"
    req.name = name;
    next()
}
)

app.use("/api/papers", paperroute)

app.use("/api/syllabus", (req, res, next) => {
    const name = postData
    req.name = name;
    next()
}
)

app.use("/api/syllabus", syllabusroute)

app.use("/api/search", searchroute)


let message = null

app.post('/api/contact', (req, res,next) => {
    app.use(bodyParser.json())
    message = req.body
    console.log(req.body);
    console.log(message);
    res.status(201).send({ message: 'Message sent successfully' });
})

app.use("/api/contact", messageroute)

app.use("/api/search",searchroute)

app.listen(PORT)    