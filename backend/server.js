const cors = require('cors');
const express = require('express');

//Connexion to Mongo database
require("./config/database").connect();
const {getBackendFilter, sortResults} = require('./utils/helper');

//Student Model
const Student = require('./model/Student');

const PORT = 8090;
const HOST = '0.0.0.0';

const app = express();

app.use(cors());
app.use(express.json());


/**
 * Get all students (we can also filter by field with query parameters)
 */
app.get('/', (req, res) => {
    const filter = getBackendFilter(req.query);
    Student.find(filter).then((data) => {
        let results = data;
        if ('sort' in req.query) {
            if (req.query.sort === 'desc') {
                results = sortResults(data, 'desc');
            } else {
                results = sortResults(data, 'asc');
            }
        }
        res.send({status: 'success', data: results});
    }).catch((err) => {
        res.status(400).send({status: 'error', error: err});
    });
});

/**
 * Initiate database with some records
 */
app.post('/init', (req, res) => {
    const students = [
        {firstName: 'John', lastName: 'Doe', age: 24, nationality: 'English'},
        {firstName: 'Jan', lastName: 'Dewaele', age: 27, nationality: 'Belgian'},
        {firstName: 'Jonatham', lastName: 'Van Driessen', age: 33, nationality: 'Belgian'},
        {firstName: 'Antony', lastName: 'Lamot', age: 30, nationality: 'Belgian'},
        {firstName: 'Tim', lastName: 'Ferris', age: 36, nationality: 'American'},
        {firstName: 'Melinda', lastName: 'Gates', age: 63, nationality: 'American'},
        {firstName: 'Jan', lastName: 'De Hollander', age: 13, nationality: 'Dutch'},
        {firstName: 'Maarten', lastName: 'De Vriendt', age: 47, nationality: 'Dutch'},
        {firstName: 'Furkan', lastName: 'Kursun', age: 23, nationality: 'Turkish'}
    ];
    Student.deleteMany().then(() => {
        Student.counterReset('id', function() {
            Student.create(students)
                .then((data) => res.send({status: 'success', data: data}))
                .catch(() => res.status(500).send({status: 'error', error: {message:  'internal server error'}}));  
            });
    }).catch(() => {
        res.status(500).send({status: 'error', error: {message:  'internal server error'}});
    });
    

});

/**
 * Add new student
 */
app.post('/new', (req, res) => {
    const {firstName, lastName, age, nationality} = req.body;

    Student.create({firstName, lastName, age, nationality}).then((data) => {
        res.send({status: 'success', data: data});
    }).catch((err) => {
        res.status(400).send({status: 'error', error: err});
    });
});

app.listen(PORT, HOST);
console.log(`Th server is unning on http://${HOST}:${PORT}`);