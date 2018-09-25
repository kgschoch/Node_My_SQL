var inquirer = require ("inquirer");
var mysql = require ("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "Bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId + "\n");
});

prompt();


function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res, null, 2));
    connection.end();
    readProducts();
  });
}

function prompt() {
  inquirer.prompt([
    {
    name: "item",
    type: "input",
    message: "Which item would you like to buy?"
  },
  {
    name: "units",
    type: "input",
    message: "How many items would you like to buy?"
  }
  ])
  .then(function(answer) {
    connection.query(
      "UPDATE products SET ? WHERE ?",
      [
      {
        item_id: answer.item
      },
      {
        stock_quantity: answer.units
      },
      ],
      function(err) {
        if (err) throw err;
        if (answer.units) {
        }
      }
    );
  });
}



