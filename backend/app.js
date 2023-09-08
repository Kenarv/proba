const oracledb = require("oracledb");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
let connection;
let conn;

try {
  connection = oracledb.getConnection({
    user: "infor",
    password: "sysm",
    connectString: "itestmmf",
  });
  connection.then((c) => {
    conn = c;
  });
  console.log("Connetion succsess! ");
} catch {
  console.log(err);
}

app.get("/test", async (req, res) => {
  let result = await conn.execute(`SELECT 
	GR1.MENG_4 AS "tervezett db"
	,GR1.MENG_5 AS "jelentett szám"
	,GR1.LPROZ AS "kihozatali mutato"
	,GR1.RNR AS "jelentési szám"
	,GR1.ANR AS "gyártási rendelési szám"
	,GR1.KTXT AS "leiras"
	,GR1.SAINT AS "tf" 
FROM RELDB GR1
WHERE 
GR1.ANR = (SELECT GR2.ANR 
 				FROM RELDB GR2
 				WHERE GR2.RNR = 3989094)
AND GR1.SAINT = 10`);

  res.json(result.rows);
});

app.listen(30000);
