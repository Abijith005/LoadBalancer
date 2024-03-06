import express from "express"
import morgan from "morgan"
import "dotenv/config"


const app=express()
const port=process.env.PORT

if (!port) {
    throw new Error("port not defined")
}

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

app.get('/',(req,res)=>{
res.status(200).send(`application running in port ${port}`)
})


app.listen(port,()=>{
    console.log(`application runnig in port ${port}`);
})