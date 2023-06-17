import { Fragment } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Geo from './icons/Geo'
import SearchIcon from './icons/SearchIcon'
import Face from "./face/Face";


function App() {
  const [countA, setCount] = useState(0);
  const buttonSum = () => {
    setCount(countA + 1);
  };
  const buttonRed = () => {
    setCount(countA - 1);
  };
  const [countC, setCountC] = useState(0);
  const buttonSumC = () => {
    setCountC(countC + 1);
  };
  const buttonRedC = () => {
    setCountC(countC - 1);
  };
  let numG = countA + countC
  let numGuest = numG ? `${numG} guests` : "Add guests";




  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  }
  const claseElemento = isActive ? "bar active" : "bar search"

  const backg = isActive ? "b noBack" : "b back"
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);
  return (
    <Fragment>

      <div id="box">
        <div className={backg} onClick={toggleClass}></div>
        <div className={claseElemento} id="search-bar-t">
          <div className="search-bar">
            <div className="location-area">
              <div className="location-head">
                <h2>LOCATION</h2>
                <input type="text" placeholder="Add location" list="options" />
                <datalist id="options">
                  <option value="Helsinki, Finland"></option>
                  <option value="Turku, Finland"></option>
                  <option value="Oulu, Finland"></option>
                  <option value="Vaasa, Finland"></option>
                </datalist>
              </div>
              <div className="location-options">
                <div className="option">
                  <div className="box-icon-search">
                    <Geo />
                  </div>
                  <h2>Helsinki, Finland</h2>
                </div>
                <div className="option">
                  <div className="box-icon-search">
                    <Geo />
                  </div>
                  <h2>Turku, Finland</h2>
                </div>
                <div className="option">
                  <div className="box-icon-search">
                    <Geo />
                  </div>
                  <h2>Oulu, Finland</h2>
                </div>
                <div className="option">
                  <div className="box-icon-search">
                    <Geo />
                  </div>
                  <h2>Vaasa, Finland</h2>
                </div>
              </div>
            </div>
            <div className="guests-area">
              <div className="guests-head">
                <h2>Guests</h2>
                <input type="text" placeholder="Add guests" defaultValue={numGuest} />
              </div>
              <div className="guests-options">
                <div className="adults">
                  <h2>Adults</h2>
                  <h3>Ages 13 or above</h3>
                  <div className="counter">
                    <button className="minus" onClick={buttonRed}>_</button>
                    <p>{countA}</p>
                    <button onClick={buttonSum}>+</button>
                  </div>
                </div>
                <div className="children">
                  <h2>Children</h2>
                  <h3>Ages 2 to 12</h3>
                  <div className="counter">
                    <button className="minus" onClick={buttonRedC}>_</button>
                    <p>{countC}</p>
                    <button onClick={buttonSumC}>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-area">
              <div className="search-button">
                <button className="search-button-cont" onClick={toggleClass} >
                  <div className="lupa-search">
                    <SearchIcon />
                  </div>
                  <p>Search</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Face toggle={toggleClass} />
      {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
      {/* {data.map((el, i) => {
        return <h1 key={i}>{el.city}</h1>;
      })} */}
    </Fragment>
  );
}

export default App;
