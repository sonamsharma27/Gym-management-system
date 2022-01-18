const express = require('express');;
const pkg = require('body-parser');

const cors = require('cors');
const knex = require('knex');
const { response } = require('express');
const app = express();

const {json} = pkg;
const  postgres = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
    //   port : 5432,
      user : 'postgres',
      password : 'divinesoul',
      database : 'postgres'
    }
  });

//  console.log(postgres.select('*').from('users'));

app.use(json()); //to parse req from front end which is in json form
// bodyparser is a middleware

app.use(cors());

app.get('/', (req, res)=> {
    res.send("Root route");
    //res,json("Root route");
})

// app.get('/login', (req, res)=> {
//     const { username, password} = req.body.value;
//     // const username = req.body.value.username;
//     // const password = req.body.value.password;
//     const password= 123;
//     console.log(username+" "+password);

// if(username== db[0].username && password == db[0].password){
//     res.json("Success loging in");
// }
// else
//   res.json("error logging in");

//   })


app.post('/register_customer', (req,res)=> {
    let { name, contact, gender, address,  age,   } = req.body;
  
      // console.log(getAllUsers("postgres"));
    postgres('customer')
    .returning('*')
    .insert({ 
        name: name,
        age: age,
        contact: contact,
        address: address,
        gender: gender
    }).then(response=>{res.json(response)})
    .catch(err=> res.status(400).json(err));
})

app.post('/register_trainer', (req,res)=> {
  let { name, contact, gender, address, age, fees  } = req.body;

  postgres('trainer')
  .returning('*')
  .insert({ 
      name: name,
      age: age,
      contact: contact,
      address: address,
      fees: fees,
      gender: gender
  }).then(response=>{res.json(response)})
  .catch(err=> {
     console.log(err);
    res.status(400).json(err)}
  );
})

app.post('/membership', (req,res)=> {
  let { name, contact, duration  } = req.body;
    // console.log("member")
  postgres('membership')
  .returning('*')
  .insert({ 
      trainer_name: name,
      start_date: new Date(),
      customer_contact: contact,
      duration: duration
  })
  .then(response=>{res.json(response)})
  .catch(err=> {
    console.log(err);
    res.status(400).json(err)});
  // postgres('trained_by')
  //   .returning('*')
  //   .insert({ 
  //       trainer_contact: "8082649344",
  //       customer_contact: contact,
  //   }).then(response=>{res.json(response)});

    // .catch(err=> console.log(err));
    // console.log(knex('postgres').select('contact').from('trainer').whereRaw('trainer.name = name'));

    
  })



app.listen(3005, () => {
    console.log("Running on port 3005");
})

// POST whenever we want to add data to DB (create record)
// PUT to update
// GET to read
// we get req in the form of a 