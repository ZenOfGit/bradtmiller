const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const middleware = require('./middleware');

const School = require('./models/school');
const Employer = require('./models/employer');
const Hobby = require('./models/hobby')

const app = express();

mongoose.connect('mongodb+srv://USERNAME:PASSWORD@cluster0-pukju.mongodb.net/DATABASE?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to database.');
  })
  .catch(() => {
    console.log('Connection to database failed.');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(middleware.enableCORS);

app.get('/api/schools', (req, res, next) => {
  School.find()
    .then(documents => {
      res.status(200).json({
        message: 'Schools fetched successfully.',
        schools: documents
      });
    });
});

app.post('/api/schools', (req, res, next) => {
  const school = new School({
    name: req.body.name,
    state: req.body.state,
    degree: req.body.degree,
    description: req.body.description
  });
  school.save();
  res.status(201).json({
    message: 'School added successfully.'
  });
});

app.delete('/api/schools/:id', (req, res, next) => {
  School.deleteOne({_id: req.params.id}).then(result => {
    res.status(200).json({ message: 'School deleted.'});
  });
});

app.get('/api/employers', (req, res, next) => {
  Employer.find()
    .then(documents => {
      res.status(200).json({
        message: 'Employers fetched successfully.',
        employers: documents
      });
    });
});

app.post('/api/employers', (req, res, next) => {
  const employer = new Employer({
    name: req.body.name,
    city: req.body.city,
    stateAbr: req.body.stateAbr,
    title: req.body.title,
    description: req.body.description
  });
  employer.save();
  res.status(201).json({
    message: 'Employer added successfully.'
  });
});

app.delete('/api/employers/:id', (req, res, next) => {
  Employer.deleteOne({_id: req.params.id}).then(result => {
    res.status(200).json({ message: 'Employer deleted.'});
  });
});

app.get('/api/hobbies', (req, res, next) => {
  Hobby.find()
    .then(documents => {
      res.status(200).json({
        message: 'Hobbies fetched successfully.',
        hobbies: documents
      });
    });
});

app.post('/api/hobbies', (req, res, next) => {
  const employer = new Hobby({
    name: req.body.name,
    sinceAge: req.body.sinceAge,
    level: req.body.level,
    description: req.body.description
  });
  employer.save();
  res.status(201).json({
    message: 'Hobby added successfully.'
  });
});

app.delete('/api/hobbies/:id', (req, res, next) => {
  Hobby.deleteOne({_id: req.params.id}).then(result => {
    res.status(200).json({ message: 'Hobby deleted.'});
  });
});

module.exports = app;
