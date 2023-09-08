
const oracledb = require('oracledb');
const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
let connection;
let conn;

try {
    connection = oracledb.getConnection({user:"infor", password: "sysm", connectString: "itestmmf"});
    connection.then((c) =>{
        conn = c 
    })
    console.log("Connetion succses! ")
} catch {
    console.log(err);
}





app.get('/test', async (req, res)=>{

    let result = await conn.execute(`SELECT 
	MENG_4 AS "tervezett gyártási szám",
	MENG_5 AS "jelentett szám",
	LPROZ AS "kihozatali mutato",
	RNR AS "jelentési szám",
	ANR AS "gyártási rendelési szám",
	KTXT 
	SAINT 
FROM RELDB
WHERE SAINT = 60 AND ANR = 'GR22-01997/01N1'`);

res.json(result.rows)
})





app.listen(30000);