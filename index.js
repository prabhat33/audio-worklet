var express = require('express');
var app = new express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')))
app.use("/audio-worklet",express.static(path.join(__dirname, 'public')));
app.listen(8080,()=>{
    console.log("App started on 8080");
})