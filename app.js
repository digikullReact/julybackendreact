const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
app.use(express.json());

const port=8090
let  data=[
    {
      "_id": "6374e91f8266a57210d00222",
      "age": 54,
      "name": "Watts Dejesus",
      "address": "287 Nolans Lane, Sardis, West Virginia, 4427"
    },
    {
      "_id": "6374e91fb0d03d57f27dfe78",
      "age": 26,
      "name": "Kimberley Bradley",
      "address": "280 Barbey Street, Sisquoc, Federated States Of Micronesia, 279"
    },
    {
      "_id": "6374e91f25bcc01f2dfdc557",
      "age": 45,
      "name": "Susana Zamora",
      "address": "159 Ridge Court, Bloomington, Tennessee, 1366"
    },
    {
      "_id": "6374e91f2a6cdae1921cf1db",
      "age": 54,
      "name": "Wilkinson Jarvis",
      "address": "965 Clarendon Road, Salix, Virgin Islands, 9932"
    },
    {
      "_id": "6374e91fc3d44a1e313deb08",
      "age": 90,
      "name": "Hampton Medina",
      "address": "450 Bedford Avenue, Fairfield, New Mexico, 4237"
    },
    {
      "_id": "6374e91ff4fe43a173258fef",
      "age": 91,
      "name": "Deanna King",
      "address": "866 Manhattan Court, Croom, Northern Mariana Islands, 4564"
    }
  ]

  // Get api to get the data
app.get("/",(req,res)=>{
    res.json(data);

})

app.post("/add",(req,res)=>{
    data.push(req.body);
    res.json({
        message:"Success"
    }).status(200)

})

app.delete("/delete/:id",(req,res)=>{

    data=data.filter(ele=>ele._id!=req.params.id);
    res.json({
        message:"SuccessFully Deleted"
    }).status(200)

})


app.listen(port,()=>{
    console.log(`Server Running at Port ${port}`)
})