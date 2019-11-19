var mysql = require('mysql');
var inquirer = require('inquirer');
require('dotenv').config();

//making connection to our database
//test if the connections work
//connection was successful, make a promt user function
var connection = mysql.createConnection({
	host: 'localhost',

	// Your port; if not 3306
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: process.env.MY_SQL_PASS,
	//the database name
	database: 'bamazon_db'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log('connected as id ' + connection.threadId);
	//this function will display all of the items aval in the bamazon store for user to see
	promptUser();
});
//In promptUser function it will display the aval products with their ID #'s - show your inventory from DB
function promptUser() {
	connection.query('SELECT * FROM products', function(err, res) {
		if (err) throw err;
		console.table(res);
		askUser();
	});
}
//end of prompt user function

//inquirer function
//2 - Use inquirer to ask the user for their ID# of the product they want
function askUser() {
	inquirer
		.prompt([
			{
				//2 - Use inquirer to ask the user for their ID# of the product they want
				name: 'itemID',
				message: 'Please enter the ID of the product you would like to purchase: [Q to quit]',
				type: 'input'
			},
			{
				name: 'quantity',
				message: 'How many would you like to purchase? [Q to quit]',
				type: 'input'
			}
		])
		.then(function(promptResponse) {
			//check if) their response is "Q" or "q" run connection.end
			var productID = promptResponse.itemID;
			var productQuantity = promptResponse.quantity;

			//3-else)query the DB to check if the ID# corresponds to an existing ID in the products
			// 3a)select * from products where ID = user response
			console.log("Product ID: " + productID);
			console.log("Quantity: " + productQuantity);
		
			connection.query('SELECT * FROM products WHERE id = ' + productID, function(err, res) {
				if (err) throw err;
				if(res.length > 0) {
					console.log(res);
                if(res[0].stockQuantity >= productQuantity){
					var oldQuant = res[0].stockQuantity;
					var newStockQuantity = res[0].stockQuantity - productQuantity;
					console.log("New quant:" + newStockQuantity);
					console.log("Old: " + oldQuant)
					connection.query("UPDATE products SET stockQuantity = ? WHERE id = ?",
					[ newStockQuantity, productID ], function(err, res){
						console.log(err)
						
						console.log("Sucessful! The item with the ID of " + productID + " is in stock. There are " + newStockQuantity + " avaliable")
						promptUser();
					})
					

				}
				else if (res[0].stockQuantity < productQuantity) {
					console.log("Sorry, the item with the ID of " + productID + " is not in stock")
					promptUser();

				}
	
				} else{
						console.log('Item does not exist!');
						promptUser();
					}
				
			});

			
		});
}
//end of askUser function


//5) use inquirer again to ask the user for how many they want
//6) check the quantity from the DB query response, see if it's >= the # that the user wants (if statement)
//6a) if the user request is > the aval quantity tell the user it is not in stock and cal prompt user function again

//7)if there are enough in stock, calculate what the new quantity will be by subtracting the users purchase quantity from the current quantity(store this value in a variable)
//7a) query the DB to update the quantity using UPDATE quantity to new quantity where ID is the ID the user chose
//7b) tell the user their purchase was successful, and tell them how much they paid
//7c) multiply the quantity by the price of the product

//8) call promptUser again
