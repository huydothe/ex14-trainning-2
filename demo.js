const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'huydo',
    password: 'Huydothe1999@',
    database: 'demo2',
    charset: 'utf8_general_ci'
});

connection.connect(function (err){
    if(err){
        throw err.stack;
    }else {
        console.log('Connect success')
    }
});

const sqlSelect = 'select*from products'
connection.query(sqlSelect,(err,results,fields)=>{
    if(err){
        throw err
    }
    console.log(results,"select")
})

const whereSelect = 'select*from products where productName = "iphone5"';
connection.query(whereSelect,(err,results,fields)=>{
    if(err){
        throw err
    }
    console.log(results,"where")
})

const sqlLimit = "select*from products limit 3";
connection.query(sqlLimit, (err, results, fields) => {
    if (err) throw err;
    console.log(results, "limit");
});