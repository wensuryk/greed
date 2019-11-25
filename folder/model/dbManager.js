const mysql = require("mysql");

// MYSQL Server
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog"
});

db.connect(err => {
  if (err) {
    throw err;
    console.log("Connection error => ", err);
  }
  console.log("Mysql server connected...");
});

CheckUser = (username, callback) => {
  let sql = "SELECT login FROM users WHERE login LIKE '" + username + "'";
  db.query(sql, (err, result) => {
    if (err) {
    } else if (result.length != 0) {
      console.log("true");
      return callback("true");
    } else {
      console.log("false");
      return callback("false");
    }
  });
};

CreateUser = (formData, callback) => {
  const sql = "INSERT INTO `users` SET ?";
const data = {
  login: formData.username,
  email: formData.email,
  password: formData.password
}
db.query(sql,data,(err,result)=>{
  if(err){
    throw err;
  }else{
    console.log(result);
    return callback('created');
  }
})

};

SigIn = (formData,callback)=>{
  let sql = "SELECT `login`, `password` FROM `users` WHERE login=\'" + formData.login + "\'" + "and password=\'" + formData.password + "\'";
db.query(sql,(err,result)=>{
  if(err){
    throw err;
  }
  else if(result.length != 0 ){
    console.log(result);
    let res = `<h2>Welcome, ${formData.login}</h2>`;
    return callback(res);
  }
  else{
    let res = `<h2>Login or password incorect</h2>`;

    return callback(res);
  };
})

}

DeleteUser = (formData, callback)=>{
  console.error("Heare!");
  let sql = "DELETE FROM `users` WHERE `login`=\'" + formData.login + "\'";
db.query(sql,(err,result)=>{
  if(err){
    throw err;
  }
  else if(result.length != 0 ){
    console.log("test1", result);
    let res = `<h2>Delete, ${formData.login}</h2>`;
    return callback(res);
  }else{
    let res = `<h2>Login does not exist </h2>`;
    return callback(res);
  };
})

};

module.exports = {
  CheckUser,
  CreateUser,
  SigIn,
  DeleteUser
};
