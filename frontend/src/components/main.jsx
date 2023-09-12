import React from "react";
import getData from "../util/getData";
import { useState } from "react";

export const Main = () => {
  const [cikk, setCikk] = useState([]);
  const [showResult, setShowResult] = useState(Boolean);
  const [barCode, setBarCode] = useState("");
  console.log(showResult);

  return (
    <div className="flex flex-col gap-2 w-[390px] md:w-[800px] mx-auto form-animation p-20 bg-gradient-to-r from-sky-300/50 via-sky-600/50 to-sky-500/50 rounded-xl shadow-2xl">
      <input
        name="barCode"
        id="barCode"
        className="bg-slate-200"
        value={barCode}
        onChange={(event) => setBarCode(event.target.value)}
      />
      <input
        type="button"
        value="keres"
        onClick={() =>
          getData({ jelSzam: parseInt(barCode, 10) }, setCikk, setShowResult)
        }
        className="bg-sky-400 w-20"
      />

      {showResult && (
        <div>
          <p>tervezett darab:{cikk[0].tervezettDB}</p>
          <p>jelentett darab:{cikk[0].jelentettDB}</p>
          <p>kihozatalai mutato:{cikk[0].kihozataliMutato}</p>
          <p>jelszám: {cikk[0].jelSzam}</p>
          <p>Gyártási rendelési szám: {cikk[0].gyRsz}</p>
          <p>leiras: {cikk[0].leiras}</p>
          <p>tf: {cikk[0].tf}</p>
          <p></p>
        </div>
      )}
    </div>
  );
};
