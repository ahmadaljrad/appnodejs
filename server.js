const mysql = require('mysql');
const express = require('express');
const path = require("path");
// declare react files in build as static
app.use(express.static(path.join(__dirname, "build")));

// serve index.html from the build folder
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const db = mysql.createConnection({
    host : 'localhost',
    user :'root',
    password:'',
    database : 'scs'
});

const app = express();


// Select single post
app.get('/getpost/:userName', (req, res) => {
    let sql = `SELECT * FROM userInfo WHERE userName = ${req.params.userName}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post fetched...');
    });
});

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("mysql conccet");
});


app.listen(3000,()=>console.log("loading......"));


/*app.get('/',(req ,res )=>{
    let sql;
    //sql ='CREATE DATABASE scsDB';
    //sql='Create table userInfo (id int,userName varchar(50), password varchar(50),exprieDate varchar(10), speed varchar(5),cost varchar(10),totalQuota varchar(5),currentQuota varchar(5),balance varchar(50) )';
    sql =''
    db.query(sql,(err , result)=>{
        if(err) throw err;
        console.log(result);
        res.send("database created......");

    });
});*/
