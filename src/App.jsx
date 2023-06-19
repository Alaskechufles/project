import { Fragment } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Geo from './icons/Geo'
import SearchIcon from './icons/SearchIcon'
/* import Face from "./face/Face"; */
import Logo from "./face/Logo";
import Tarjeta from "./face/tarjeta/Tarjeta";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
      setContenedor(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  //conteo de personas
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
  let numGuest = countA + countC
  let numG = numGuest >= 0 ? parseInt(countA + countC) : "Add guests"

  //cambio de location
  const input = document.getElementById("locationInput")
  const [location, setLocation] = useState("")

  function insertLocation(parameter, el = input) {
    setLocation(parameter)
    el.value = location
  }
  //mostrar y ocultar opciones
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  }
  //desplegar barra
  const claseElemento = isActive ? "bar active" : "bar search"
  //background difuminado
  const backg = isActive ? "b noBack" : "b back"



  //options
  const [isActiveO, setIsActiveO] = useState(false);
  const toggleClassO = () => {
    setIsActiveO(!isActiveO);
  }
  const claseOption = isActiveO ? "location-options" : "active-op"
  const claseGuests = isActiveO ? "guests-options" : "active-op"
  /*
  * aqui podemo agregar mostrar las opciones de busqueda
   */

  //filtro

  /* const [data, setData] = useState([]) 
  *Este esta declarado en la parte de arriba linea 13
  */
  const [contenedor, setContenedor] = useState([])
  const [filtro, setFiltro] = useState("")
  const [filtroCamas, setFiltroCamas] = useState(0)

  console.log(typeof (filtroCamas))

  //capturar lo que escribe el ususario en el input
  const busqueda1 = (e) => {
    setFiltro(e.target.value)


    /*   filtrado1(e.target.value, e.target.value) */
    /* console.log(e.target.value) */
  }
  const busqueda2 = (e) => {
    /* let pastel = parseInt(e.target.value) */
    let pastel = numG
    setFiltroCamas(pastel)
    /*  filtrado1(e.target.value, e.target.value) */
    console.log(typeof (e.target.value))

  }


  const valL = document.getElementById("locationInput") ? document.getElementById("locationInput").value : ""
  const valC = document.getElementById("camas") ? document.getElementById("camas").value : ""


  const filtrado1 = (texto, camas) => {
    console.log(typeof (camas))
    let pastel = parseInt(camas)
    console.log(typeof (pastel))
    const elementosFiltrados = contenedor.filter((elemento) => {
      if (elemento.city.toString().toLowerCase().match(texto.toLowerCase()) && elemento.maxGuests >= pastel) {
        /* if (elemento.maxGuests === pastel) {
          return elemento
        } */
        return elemento;
      }

    });
    setData(elementosFiltrados)
    console.log(typeof (camas))
  }
  return (
    <Fragment>

      <div id="box">
        <div className={backg} onClick={toggleClass}></div>
        <div className={claseElemento} id="search-bar-t">
          <div className="search-bar">
            <div className="location-area">
              <div className="location-head" onClick={toggleClassO}>
                <h2>LOCATION</h2>
                <input id="locationInput" type="text" placeholder="Add location" value={filtro} onChange={busqueda1} autoComplete="off" />
              </div>
              <div className={claseOption} >
                <div className="option">
                  <div className="box-icon-search">
                    <Geo />
                  </div>
                  <h2 onClick={() => insertLocation("Helsinki")}>Helsinki, Finland</h2>
                </div>
                <div className="option">
                  <div className="box-icon-search">
                    <Geo />
                  </div>
                  <h2 onClick={() => insertLocation("Turku")}>Turku, Finland</h2>
                </div>
                <div className="option">
                  <div className="box-icon-search">
                    <Geo />
                  </div>
                  <h2 onClick={() => insertLocation("Oulu")} >Oulu, Finland</h2>
                </div>
                <div className="option">
                  <div className="box-icon-search">
                    <Geo />
                  </div>
                  <h2 onClick={() => insertLocation("Vaasa")}>Vaasa, Finland</h2>
                </div>
              </div>
            </div>
            <div className="guests-area">
              <div className="guests-head" onClick={toggleClassO}>
                <h2>Guests</h2>
                <input id="camas" type="number" placeholder="Add guests" value={numG} onChange={busqueda2} />
              </div>
              <div className={claseGuests}>
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
                <button className="search-button-cont" onClick={() => { toggleClass(); filtrado1(valL, valC)/* ; filtrado2() */ }} >
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
      {/*  <Face toggle={toggleClass} filter={inputValueChanged} applyFilter={aplicarFiltro} ele={elementosFiltrados} /> */}
      <nav className='nav'>
        <div className='box-icon'>
          <Logo />
        </div>
        <button className='buscador' onClick={toggleClass} >
          <p className='location'>Add location</p>
          <p className='guests'>Add guests</p>
          <div className='box-lupa'>
            <SearchIcon />
          </div>
        </button>
      </nav>
      <div className="head-face">
        <h1 className="subtitle-face">Stays in Finland</h1>
        <p className="number-face">12+ stays</p>
      </div>
      <div className="tarjetas">
        {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
        {data && data.map((el, i) => {
          return (
            <div className="tarjeta" key={i}>
              <Tarjeta imgs={el.photo} content={el.type} rate={el.rating} descript={el.title} super={el.superHost} bed={el.beds} />
            </div>
          )
        })}
      </div>
    </Fragment>
  );
}

export default App;
