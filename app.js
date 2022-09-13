const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

let app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const items = [];
const workList = [];


app.get("/", function(req, res){
    let day = date.getDate();
    res.render("index", {pageTitle: "Home", listTitle: day, listItems: items})
})


app.post("/", function(req, res){
    if(req.body.index === "work"){
        let item = req.body.newItem;
        workList.push(item);
        res.redirect("/work");
    }else{
        let item = req.body.newItem;

        items.push(item);
        res.redirect("/");
    };
   
    
   
   
});

app.get("/work", function(req, res){
    res.render("index", {listTitle: "work list", pageTitle: "work page", listItems: workList} );
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workList.push(item);
    res.redirect("/");
})


app.listen("3000", function(){
    console.log("Server is live on PORT 3000")
});