import { Fragment } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Geo from './icons/Geo'
import SearchIcon from './icons/SearchIcon'
/* import Face from "./face/Face"; */
import Logo from "./face/Logo";
import Tarjeta from "./face/tarjeta/Tarjeta";

function App() {

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
      // Aquí gurdo los datos tambien en el contenedor
      setContenedor(resJson);
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
  //filtro de busqueda

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
  /* let numG = parseInt(countA + countC) */
  /* let numGuest = numG ? `${numG} guests` : "Add guests"; */
  //cambio de location
  //! no permite buscar correctamente por eso esta inhabilitado
  /* const input = document.getElementById("locationInput")
  const [location, setLocation] = useState("")

  function insertLocation(parameter, el = input) {
    setLocation(parameter)
    el.value = location
  } */


  //mostrar y ocultar opciones

  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  }
  const claseElemento = isActive ? "bar active" : "bar search"

  const backg = isActive ? "b noBack" : "b back"

  /*
  * aqui podemo agregar mostrar las opciones de busqueda
   */

  //filtro
  /* const [data, setData] = useState([]) 
  *Este esta declarado en la parte de arriba linea 13
  */
  const [contenedor, setContenedor] = useState([])
  const [filtro, setFiltro] = useState("")
  const [filtroCamas, setFiltroCamas] = useState("")



  //capturar lo que escribe el ususario en el input
  const busqueda1 = (e) => {
    setFiltro(e.target.value)


    filtrado1(e.target.value)
    /* console.log(e.target.value) */
  }
  const busqueda2 = (e) => {

    setFiltroCamas(e.target.value)
    filtrado2(e.target.value)
    console.log(e.target.value)
  }


  /* const valL = document.getElementById("locationInput")
  const valC = document.getElementById("camas") */


  const filtrado1 = (texto) => {
    const elementosFiltrados = contenedor.filter((elemento) => {
      if (elemento.city.toString().toLowerCase().includes(texto.toLowerCase())
      ) {
        return elemento;
      }

    });
    setData(elementosFiltrados)
  }
  const filtrado2 = (camas) => {
    let elementosFiltrados = contenedor.filter((elemento2) => {
      if (

        elemento2.maxGuests == camas
      ) {
        return elemento2;
      }
    });
    setData(elementosFiltrados)
  }

  return (
    <Fragment>

      <div id="box">
        <div className={backg} onClick={toggleClass}></div>
        <div className={claseElemento} id="search-bar-t">
          <div className="search-bar">
            <div className="location-area">
              <div className="location-head">
                <h2>LOCATION</h2>
                <input id="locationInput" type="text" placeholder="Add location" value={filtro} onChange={busqueda1} />
              </div>
              <div className="location-options">
                <div className="option">
                  <div className="box-icon-search">
                    <Geo />
                  </div>
                  <h2 >Helsinki, Finland</h2>
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
                  <h2 >Oulu, Finland</h2>
                </div>
                <div className="option">
                  <div className="box-icon-search">
                    <Geo />
                  </div>
                  <h2 >Vaasa, Finland</h2>
                </div>
              </div>
            </div>
            <div className="guests-area">
              <div className="guests-head">
                <h2>Guests</h2>
                <input id="camas" type="text" placeholder="Add guests" value={filtroCamas} onChange={busqueda2} />
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
                <button className="search-button-cont" onClick={() => { toggleClass(); /* filtrado1(valL, valC) *//* ; filtrado2() */ }} >
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
