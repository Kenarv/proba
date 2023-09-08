import React from "react";
import getData from "../util/getData";
import { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";

export const Main = () => {
  const [cikk, setCikk] = useState([]);
  const [cikkek, setCikkek] = useState([]);
  const [newMove, setNewMove] = useState(false);
  const [result, setResult] = useState("");

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  useEffect(() => {
    getData(setCikkek, setCikk);
  }, []);
  console.log(cikkek);
  return (
    <div className="bg-red-400 w-full h-full">
      <div className="bg-lime-600 w-30 h-20">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      </div>
      <input type="text" name="barCode" id="barCode" />
    </div>
  );
};
