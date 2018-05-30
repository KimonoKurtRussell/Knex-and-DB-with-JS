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

var query =  knex.select('first_name','last_name','birthdate').from("famous_people");

var name = process.argv[2];

if(name) {
  query = query.where({"first_name": name}).orWhere({"last_name": name})
}
query.then(function(rows) {
  console.log(rows);
  knex.destroy();
});

