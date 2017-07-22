// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// Array for tables

var customers = [{
    customerName : "test",
phoneNumber: "4444444444",
customerEmail: "gg@124.com",
customerID: "test table",
routeName: "test"
}, 
{
    customerName : "talat",
phoneNumber: "adsada444",
customerEmail: "gs@124.com",
customerID: "222",
routeName: "talat"
},
{
    customerName : "hola",
phoneNumber: "4533333",
customerEmail: "hola@124.com",
customerID: "212le",
routeName: "hola"
}

];

// Array wait list

var waitList = [{
    customerName : " ",
phoneNumber: "",
customerEmail: "",
customerID: "",
routeName: ""
}];


//Routes

app.get("/", function (req, res) {
    
    res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/reserve", function (req, res) {
    
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    
 res.sendFile(path.join(__dirname, "tables.html"));
}
    
);


// CREATING API FOR CUSTOMERS
app.get("/api/tables", function (req, res) {
    
var uniqueId = req.param.customers;

for (var i = 0; i < customers.length; i++) {
return res.json(customers);
}
    
});





// CREATING API FOR WAIT LIST
app.get("/api/wait", function (req, res) {
    
var uniqueId = req.param.waitList;

for (var i = 0; i < waitList.length; i++) {
return res.json(waitList);
}
 
});

//POST

app.post("/api/new", function (req , res) {
    var newCustomer = req.body;
    // newCustomer.routeName = newCustomer.customerName.replace(/\s+/g, "").toLowerCase;
console.log(newCustomer);

   if(customers.length < 3){
    customers.push(newCustomer)
     res.json(newCustomer)
    }else{
        waitList.push(newCustomer);
        res.json(newCustomer);
    }
});


//APP LISTENER

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT)
    
});

