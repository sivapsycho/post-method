const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=3000;
app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())

app.use(cors())

const student={rollno:44,cls:"bcom",name:"kamesh mani"}

app.get("/",(req,res)=>{
	res.send(student)
})

app.post("/newData",(req,res)=>{
	const {username,password,cars}=req.body
	console.log(req.body)
	res.send("respond send sucessfully")
})
app.listen(port,()=>console.log("server is running on port"))