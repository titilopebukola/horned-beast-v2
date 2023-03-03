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
  const [hornsFilter, setHornsFilter] = useState("");
  // const [formData, setFormData] = useState({
  //   colour: "",
  //   dinosaur: "",
  //   number: "",
  // });

  function handleModal(beast) {
    // switch modalShow value from true to false and vice versa
    setModalShow(!modalShow);
    setTheBeast(beast);
    // console.log(beast);
  }
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // send an email with the form data here
  // }

  // function handleChange(event) {
  //   // setFormData(event.target.value);
  //   let newFormData = { ...formData, [event.target.name]: event.target.value };
  //   setFormData(newFormData);
  // }

  return (
    <div className="App">
      <Header hornsFilter={hornsFilter} setHornsFilter={setHornsFilter} />
      <Main data={data} handleModal={handleModal} hornsFilter={hornsFilter} />
      {modalShow && <SelectedBeast theBeast={theBeast} handleModal={handleModal} />}

      {/* <div className="form">
        <form onSubmit={handleSubmit}>
          <input name="colour" type="text" placeholder="Colour" value={formData.colour} onChange={handleChange} />
          <input name="dinosaur" type="text" placeholder="Dinosaur" value={formData.dinosaur} onChange={handleChange} />

          <select name="Number" onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select name="Colour" onChange={handleChange}>
            <option value="green">green</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </form>

        <h3>Colour: {formData.colour}</h3>
        <h3>Dinosaur: {formData.dinosaur}</h3>
        <h3>Number: {formData.number}</h3>
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
