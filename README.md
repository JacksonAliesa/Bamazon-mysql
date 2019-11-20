# Bamazon-mysql

What is Bamazon?

Bamazon is an application that is set up like an e-commerce store. The store's inventory is displayed on a table that the user can view in the terminal. The table shows the item's ID, product name, department name, price, and the stock quantity. The user is then prompted with a statement advising them to enter the item ID # for the item they would like to purchase. If the item ID matches an item ID that the store carries the user's request will go through sucessfully. If not, they will be notified that "the item does not exist". They are then asked "How many of these items would you like to purchase". If the succesfully identified item ID is in stock the user will be notified that their request is successful, and it will let them know that the item is in stock, how many are avaliable, and the total cost. Otherwise, the user will be alerted that the item is not in stock.

Technical Information: 
This application is a way to display an e-commerce store by using a computer terminal to display the store's inventory. The store's inventory is stored using mySQL where I created a table of products that stores item's I inserted into the database. The table of products has five columns (itemID, product name, dept name, price, stock quantity). This database can store many more items, but for the sake of this assignment I stored only 10. 
 
Inside the terminal you will have to go to the directory of where my folder/files are stored for this application. Once you are inside that folder you will talk to my javascript file by using nodeJS. The table information from mySQL is then populated to the screen by using javascript and connections query from mySQL. The connection queries allow us to receive the table information from the database. Javascript is then used to go through the table's information. I had to require mySQL and inquirer's npm packages to get the connections needed. The inquirer package allows me to promt user's with questions and get a response. 


Technologies Used:
-mySQL
-JavaScript

Author + Contributor:
Aliesa Jackson