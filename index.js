var express = require('express');
var app = new express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')))
app.use("/audio-worklet",express.static(path.join(__dirname, 'public/audioworklet.html')));
app.use("/latency",express.static(path.join(__dirname, 'public/latency.html')));
app.use("/compare",express.static(path.join(__dirname, 'public/compare.html')));
app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running at',process.env.PORT || 4000);
});