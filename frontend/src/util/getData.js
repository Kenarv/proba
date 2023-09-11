import axios from "axios";

const getData = async (setCikkek, setCikk) => {
  // ide kell mark magyarazat hogy miért van két setter és mit kéne berakni hogy kapja a vonalkod atatot es adja a cikkAdatokat
  try {
    const currentData = await axios.get(
      "http://localhost:30000/cikkAdatLekerdez"
    );
    setCikkek(currentData.data);
    let temp = [];

    for (let elem of currentData.data) {
      if (!temp.includes(elem.cikk)) {
        temp.push(elem.cikk);
      }
    }
    setCikk(temp);
  } catch (error) {
    alert("nem sikerült adatot lekérnem az adatbázistól");
  }
};

export default getData;
