const mysql=require('mysql');

const mysqlconnect=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '3912481@Vv',
    port:  3306,
    database: 'tienda'
  
});

mysqlconnect.connect(function(err){
    if(err) {
        console.log(err)
        console.log("Error conexcion")
        console.log({
            host:process.env.DB_HOST,
            user: process.env.user,
            password: process.env.DB_PASSWORD,
            port: process.env.PORT,
            database: process.env.DB_NAME
          
        })
    
    } else {
        console.log('Database is conected')
    }
    return
})

module.exports=mysqlconnect;
