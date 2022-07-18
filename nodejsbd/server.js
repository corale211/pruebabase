console.log("hello word");
const oracledb = require('oracledb')
var password = 'temp4now13'

// checkConnection asycn function
async function checkConnection() {
    try {
        connection = await oracledb.getConnection({
            user: "CLUNICO",
            password: password,
            connectString: "172.22.164.19,172.22.164.20,172.22.164.21:16161/QA34"
        });
        console.log('connected to database');
    } catch (err) {
        console.error(err.message);
        console.log('no connected to database');
    } 
}
checkConnection();
