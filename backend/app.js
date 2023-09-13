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

app.post("/cikkAdatLekerdez", async (req, res) => {
  //console.log("ittjartam");

  let jelSzam = req.body.jelSzam;

  console.log("lekért jelszám: ", jelSzam);

  //tartalék RNR GR2.RNR = 3989094

  let result = await conn.execute(`SELECT 
	GR1.MENG_4 AS "tervezettDB"
	,GR1.MENG_5 AS "jelentettDB"
	,GR1.LPROZ AS "kihozataliMutato"
	,GR1.RNR AS "jelSzam"
  ,GR1.MNR AS "cikkszam"
	,GR1.ANR AS "gyRsz"
	,GR1.KTXT AS "leiras"
	,GR1.SAINT AS "tf" 
FROM RELDB GR1
WHERE 
GR1.ANR = (SELECT GR2.ANR 
 				FROM RELDB GR2
 				WHERE GR2.RNR = ${jelSzam})
AND GR1.SAINT = 10`);

  res.json(result);
});

app.listen(30000);
