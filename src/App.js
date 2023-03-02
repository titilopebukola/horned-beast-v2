import "./App.css";
import { useState } from "react";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Footer from "./Component/Footer";
import data from "./data.json";
import SelectedBeast from "./Component/SelectedBeast";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [theBeast, setTheBeast] = useState({});

  function handleModal(beast) {
    // switch modalShow value from true to false and vice versa
    setModalShow(!modalShow);
    setTheBeast(beast);
    console.log(beast);
  }
  return (
    <div className="App">
      <Header />
      <Main data={data} handleModal={handleModal} />
      {modalShow && <SelectedBeast theBeast={theBeast} handleModal={handleModal} />}
      <Footer />
    </div>
  );
}

export default App;
