const path= require('path')
const express= require('express');

const app = express();
const publicDir=path.join(__dirname,'../public');
const viewsPath= path.join(__dirname,'../templates')
app.set('view engine','hbs');
app.set('views',viewsPath)
app.get('',(req,res)=>{
    res.render('index',{
        name:'Devsur',
        title:'Weather App'
    })
})

app.use(express.static(publicDir));




app.get('',(req,res)=>{
   res.send("Hello Express")
});
app.get('/help',(req,res)=>{
    res.send([{name:'Devsur'},{name:'Test1'},{name:'test3'}])
});
app.get('/weather',(req,res)=>{
    if(!req.query.address) {
    return res.send('Please provide address params')
    }
    req.send({
        
    })
}
});
app.get('/products',(req,res)=>{
    console.log(req.query)
    res.send({
        products:[]
    })
});
app.get('/about',(req,res)=>{
    res.send("about Page")
});
app.listen(3000,()=>{
    console.log("the server is listening on port 3000")
})