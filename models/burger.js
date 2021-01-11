//require orm
let orm = require("../config/orm.js");


let burger = {
    
    selectAll: function (cb) {
      orm.selectAll("burgers", function (res) {
        cb(res);
      });
    },
    // Add a new burger 
    insertOne: function (cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function (res) {
        cb(res);
      });
    },
    // Change status to devoured
    updateOne: function (objColVals, boolean, condition, cb) {
      orm.updateOne("burgers", objColVals, boolean, condition, function (res) {
        cb(res);
      });
    },
    // Delete a burger
    deleteOne: function (condition, cb) {
      orm.delete("burgers", condition, function (res) {
        cb(res);
      });
    },
  };
  
  // Export 
  module.exports = burger;