var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sing_up",(req,res)=>{
    var name = req.body.name;
    var phno = req.body.phno;
    var table_no = req.body.table_no;
    var order_name = req.body.order_name;

    var data = {
        "name": name,
        "phno" : phno,
        "table_no": table_no,
        "order_name" : order_name
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('success.html')
    

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('order.html');
}).listen(3000);


console.log("Listening on PORT 3000");