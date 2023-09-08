import React from "react";
import getData from "../util/getData";
import { useState, useEffect } from "react";

export const Main = () => {
  const [cikk, setCikk] = useState([]);
  const [cikkek, setCikkek] = useState([]);
  const [newMove, setNewMove] = useState(false);

  useEffect(() => {
    getData(setCikkek, setCikk);
  }, []);
  console.log(cikkek);
  return (
    <div className="bg-red-400 w-full h-full">
      <div>
        <p>cicas</p>
      </div>
    </div>
  );
};
