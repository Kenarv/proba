import React from "react";
import getData from "../util/getData";
import { useState } from "react";

export const Main = () => {
  const [cikk, setCikk] = useState([]);
  const [showResult, setShowResult] = useState(Boolean);
  const [barCode, setBarCode] = useState("");
  console.log(showResult);

  return (
    <div className="flex flex-col gap-2 w-[250px] md:w-[400px] mx-auto form-animation p-20 bg-gradient-to-r items-center from-sky-300/50 via-sky-600/50 to-sky-500/50 rounded-xl shadow-2xl">
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
        <div className="flex flex-col gap-3 rounded-lg p-6 text-center font bg-sky-500">
          <div className="bg-sky-600 p-3 rounded-sm">
            <h1>tervezett darab: </h1>
            <p>{cikk[0].tervezettDB}</p>
          </div>
          <div className="bg-sky-600 p-3 rounded-sm">
            <h1>jelentett darab:</h1>
            <p>{cikk[0].jelentettDB}</p>
          </div>
          <div className="bg-sky-600 p-3 rounded-sm">
            <h1>kihozatalai mutato:</h1>
            <p>{cikk[0].kihozataliMutato}</p>
          </div>
          <div className="bg-sky-600 p-3 rounded-sm">
            <h1>jelszám:</h1>
            <p>{cikk[0].jelSzam}</p>
          </div>
          <div className="bg-sky-600 p-3 rounded-sm">
            <h1>Gyártási rendelési szám:</h1>
            <p>{cikk[0].gyRsz}</p>
          </div>
          <div className="bg-sky-600 p-3 rounded-sm">
            <h1>leiras:</h1>
            <p>{cikk[0].leiras}</p>
          </div>
          <div className="bg-sky-600 p-3 rounded-sm">
            <h1>tf:</h1>
            <p>{cikk[0].tf}</p>
          </div>
        </div>
      )}
    </div>
  );
};
