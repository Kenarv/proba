import axios from "axios";

const getData = async (sendToBackend, setCikk, setShowResult) => {
  //if (sendToBackend.mennyiseg > 0) {
  console.log("cikkadat elküldve");
  try {
    await axios
      .post("http://localhost:30000/cikkAdatLekerdez", sendToBackend)
      .then((res) => setCikk(res.data.rows))
      .then(() => setShowResult(true))
      .catch((err) => console.log(err));

    console.log("cikkadat elküldve");
  } catch (error) {
    alert("nem sikerült, próbáld újra később");
  }
};
export default getData;
