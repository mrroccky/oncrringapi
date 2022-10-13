const { create } = require('domain');
const express = require('express');
const mysql = require('mysql');


// create connction
const db = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'crring'
})


//connect to the mysql database
db.connect(err=>{
	if(err){
		throw err
	}
	console.log("mysql connected");
})

const app= express()


//create database 
app.get('/createdb',(req, res)=>{
	let sql = 'CREATE DATABASE crring'
	db.query(sql,err=>{
		if (err) {
			throw err
		}
		res.send('DATABASE CREATED')
	})
})

//create table 
app.get('/createuser',(req, res)=>{
	let sql = 'CREATE TABLE user(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255))'
	db.query(sql,err=>{
		if (err) {
			res.send("TABLE ALRDY EXIST")
			throw err

		}
		res.send("USER TEBALE CREATED")
		console.log('TABEL CREATED')

	})
})

//insert data into table 
app.post('/insertuser',(req,res)=>{
	let post ={name:'rakesh1', email:'rakeshbhure4@gmail.com', password:'roccky'};
	let sql = "INSERT INTO user SET ?";
	db.query(sql,post,err =>{
		if (err) {
			res.send("some error in insert user ")
			throw err
		}
		res.send("user was created");
	})

	// let sql ="INSERT INTO user(name, email, password) VALUES('rakesh', 'rakeshbhure4@gmail.com', 'roccky')"; //method 1
	
	// db.query(sql,err=>{
	// 	if (err) {
	// 		res.send("some error in insert user ")
	// 		throw err
	// 	}
	// 	res.send("user was created")
	// })
})

//get data from user table 
app.get('/getuser',(req,res)=>{
let sql ="SELECT * FROM user"

db.query(sql,(err,results)=>{
	if (err) {
		res.send("some error in getting user");
		throw err;
	}
	res.send(results);
})
})

//update users information

app.get("/updateuser/:id", function(req , res){
	var user_id = req.params.id;
	sql.connect(config, function() {
		 const request = new sql.Request();
		  request.query("UPDATE table SET name = 'rakesh',email ='test.db',password ='pass', WHERE user_name= '"+user_id +"'", (err, recordset) => {
		   res.end(JSON.stringify(recordset));
		});
	});
});



 
app.listen('3000',()=>{
console.log('server started on port 3000')
})

































// var http = require("http");
// var mysql = require('mysql');
// var datem = require("./src/module/module")

// // var con = mysql.createConnection({
// // 	host: "localhost",
// // 	user: "",
// // 	password: ""
// //   });
  
// //   con.connect(function(err) {
// // 	if (err) throw err;
// // 	console.log("Connected!");
// //   });


// const port=process.env.PORT ||9000;

// const server = http.createServer((req,res)=>{
// 	res.statusCode =200;
// 	res.setHeader('content-type','text/html');
// 	res.write("The date and time are currently: " + datem.myDateTime());
// 	res.end();
// })

// server.listen(port,()=>{
// 	console.log('server is on port ',port);
// })