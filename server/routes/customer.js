const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customerController");



router.get("/", customerController.homepage);
router.get("/add", customerController.addCustomer);
router.post("/add", customerController.postCustomer);





// router.get("/", (req, res) => {
//   // res.send('Hello World');

//   const locals = {
//     title: "NodeJs", //
//     description: "Free description",
//   };
//   res.render("index", locals);
// });

module.exports = router;

