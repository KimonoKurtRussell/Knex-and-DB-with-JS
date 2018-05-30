const settings = require("./settings")
const pg = require("pg");

var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});


var name = process.argv[2];

if (process.argv.length < 5){
  return console.log("Enter first name, last name and D.O.B")
} else {
  console.log("Adding: " + name + " to database");
};


knex('famous_people').insert([{first_name: process.argv[2], last_name: process.argv[3], birthdate: process.argv[4]}]).then(function(rows) {
  console.log(rows)
  knex.destroy();
});





