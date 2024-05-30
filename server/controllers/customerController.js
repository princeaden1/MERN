const Customer = require('../models/Customer');
const mongoose = require('mongoose');


// Get Homepage
exports.homepage = async (req, res) => {


        // res.send('Hello World');

        const locals = {
            title: "NodeJs", //
            description: "Free description"
        };
        res.render("index", locals);


}

exports.addCustomer = async (req, res) => {
  // res.send('Hello World');

  const locals = {
    title: "Add New Customer", //
    description: "Free description",
  };
    
    
    // try {
    //     await Customer.insertMany([
    //       {
    //         firstName: "John",
    //         lastName: "Doe",
    //         details: "John is a software developer",
    //         tel: "1234567890",
    //         email: "john.doe@example.com",
    //         createdAt: Date.now(),
    //         updatedAt: Date.now()
    //       },

    //       {
    //         firstName: "Feranmi",
    //         lastName: "Adigun",
    //         details: "Lanrer",
    //         tel: "0101202030003403",
    //         email: "johsn.doe@example.com",
    //         createdAt: Date.now(),
    //         updatedAt: Date.now()
    //         },
            
           
    //     ]);
    // } catch (error) {
        
    // }
    
    
  res.render("customer/add", locals);
};



// Create Customer
exports.postCustomer = async (req, res) => {
  // res.send('Hello World');
    console.log(req.body);
    

    const newCustomer = new Customer({ firstName: req.body.firstName, lastName: req.body.lastName, details: req.body.details, tel: req.body.tel, email: req.body.email });
    
    try {
        await Customer.create(newCustomer);
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
  
};