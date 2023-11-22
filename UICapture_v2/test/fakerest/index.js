var express = require('express');
var app = express();
var apiRoutes = require('./routes');

app.use('/api', apiRoutes);

// Set port we'll run on
app.set('port', "1234");

// Crank it up!
var server = app.listen(app.get('port'), function() {
    console.log('Congrats, your fake REST services are running on port ' + server.address().port);
});
