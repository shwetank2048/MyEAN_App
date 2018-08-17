import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import mysql from 'mysql'


const app=express();
const router=express.Router();
app.use(cors());
app.use(bodyParser.json());


var connection = mysql.createConnection({
  host     : 'localhost',
  port:'3308',
  user     : 'root',
  password : 'root123',
  database : 'imagedb',
  insecureAuth :true
});

connection.connect((err)=>{
	if (err)
		console.log("error occured while connecting ",err);
	console.log("connected to db");
	
 });

let user=0;

app.post('/canvas/add',(req,res)=>{
	user=user+1;
	let query= "INSERT INTO `tablename` SET ?",
	values={
		image:req.body,
		user:`user${user}`
	};
    connection.query(query,values, function (err, result) {
		  if (err) throw err

		  console.log("Saved to db")
		  res.status(200).json({message:'image added to db',id:result.insertId});
		})   

		
});



app.listen(3003);
console.log("Express server listening on port 3003 %s mode",  app.settings.env);