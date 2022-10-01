const path = require('path');
const express = require('express');
 const app = express();
const hbs = require('hbs')
 //define path for express config
const publicDirectoryPath = path.join(__dirname,"../public")
const viewPath = path.join(__dirname,'../Template/views')
const partialPath = path.join(__dirname,'../Template/partials')

//sets up handle bar engines and view ocation
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPath)


//set static directory
app.use(express.static(publicDirectoryPath))

 app.get('', (req ,res)=>{
            res.render('index',{
                title:"Anand",
                age:20
            })
 })
 
app.get('/about',(req,res)=>{
    res.render('about',{
        title:"about",
        age:20
    })
})


app.get('/help',(req,res)=>{
  if(!req.query.address){
    return res.send({error:'please provide valid help'})
  }

    res.send({
        title:"help",
        age:20,
        address:req.query.address
    })
})


app.get('/products',(req,res)=>{
    console.log(req.query);
    if(!req.query.search){
          return  res.send({erro:"Please provide the valid search term"})
    }
    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res)=>{
   res.send('Help page not found')
})


app.get('*',(req,res)=>{
    res.render('404',{
        title:"404",
        age:20,
        errorMessage:"Page not found"
    })
})

 app.listen(3000)