var mysql = require('mysql');
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
	promptUser();
});

//customer vew
//In promptUser function
// 1- display the aval products with their ID #'s - show your inventory from DB
function promptUser() {
	connection.query('SELECT * FROM products', function(err, res) {
		if (err) throw err;
		console.log(res);
	});
}
//end of prompt user function

//2 - Use inquirer to ask the user for their ID# of the product they want
//check if) their response is "Q" or "q" run connection.end

//inquirer function
function userPrompt() {
	inquirer
		.prompt({
			name: 'userChoice',
			message: 'What is the ID of the product?',
			type: 'input'
		})
		.then(function(userResponse) {});
}

//3-else)query the DB to check if the ID# corresponds to an existing ID in the products
// 3a)select * from products where ID = user response
//4) once we get a response from database, check if the length of the response is > 0
//4a) if not tell user the item does not exist and call the promptUser function again (kinda like recursion)

//make var for ID + user response

//5) use inquirer again to ask the user for how many they want
//6) check the quantity from the DB query response, see if it's >= the # that the user wants (if statement)
//6a) if the user request is > the aval quantity tell the user it is not in stock and cal prompt user function again

//7)if there are enough in stock, calculate what the new quantity will be by subtracting the users purchase quantity from the current quantity(store this value in a variable)
//7a) query the DB to update the quantity using UPDATE quantity to new quantity where ID is the ID the user chose
//7b) tell the user their purchase was successful, and tell them how much they paid
//7c) multiply the quantity by the price of the product

//8) call promptUser again
