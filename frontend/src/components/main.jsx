import React from "react";
import getData from "../util/getData";
import { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";

export const Main = () => {
  const [cikkAdat, setCikkAdat] = useState([]);
  // const [cikkek, setCikkek] = useState([]);
  // const [newMove, setNewMove] = useState(false);
  const [result, setResult] = useState("");

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  // useEffect(() => {
  //   getData(setCikkek, setCikk);
  // }, []);
  console.log(cikkAdat);
  return (
    <div className="flex flex-col gap-2 w-[390px] md:w-[800px] mx-auto form-animation p-20 bg-gradient-to-r from-sky-300/50 via-sky-600/50 to-sky-500/50 rounded-xl shadow-2xl">
      <div className="bg-sky-600">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "50%" }}
        />
      </div>
      <input
        type="text"
        name="barCode"
        id="barCode"
        className="bg-slate-200"
        value={result}
      />
      <input
        type="button"
        value="keres"
        onClick={() => ""}
        className="bg-sky-400 w-20"
      />
    </div>
  );
};
