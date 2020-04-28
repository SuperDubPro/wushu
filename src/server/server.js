const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('./mongooseInit')

const createMeridian = require('./Meridians/create');
const getListMeridian = require('./Meridians/getList');

const createMeridianBranch = require('./MeridianBranches/create')
const getListMeridianBranch = require('./MeridianBranches/getList')
const getMeridianBranch = require('./MeridianBranches/get')

const createFile = require('./Files/create');
const getFile = require('./Files/get');

const createPoint = require('./Points/create');
const getPoint = require('./Points/getList');

const app = express();
app.use( bodyParser.json() );
app.use(express.static(path.join(__dirname, '../../build')));



app.use('/ping', function (req, res) {
    return res.send({point:123});
});

app.post('/meridian/create', createMeridian);
app.post('/meridian/list', getListMeridian);

app.post('/meridianBranch/create', createMeridianBranch);
app.post('/meridianBranch/list', getListMeridianBranch);
app.post('/meridianBranch/get', getMeridianBranch);

app.post('/file/create', createFile);
app.get('/file/get', getFile);

app.post('/point/create', createPoint);
app.post('/point/getList', getPoint);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
