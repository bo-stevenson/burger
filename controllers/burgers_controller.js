let express = require("express");

let burger = require("../models/burger.js");

let router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    let hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//add 
router.post("/api/burgers", (req, res) => {
  burger.insertOne("burger_name", req.body.burger_name, (result) => {
    res.json({ id: result.insertId });
  });
});
//update
router.put("/api/burgers/:id", (req, res) => {
  let condition = `id = ${req.params.id}`;
  burger.updateOne("devoured", 1, condition, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ result });
  });
});
//delete
router.delete("/api/burgers/:id", (req, res) => {
  let condition = `id = ${req.params.id}`;
  burger.deleteOne(condition, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ result });
  });
});
// Export 
module.exports = router;