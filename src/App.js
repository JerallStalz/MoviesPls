import {useEffect, useState} from 'react'
import loaderBakcground from './images/loader-background.png'
function App() {

const [ load, setLoad ] = useState(true)
  window.onload = () =>  setLoad(false)

  const idk = () => { 
    if(load === false ) {
    const loader = document.getElementById('loader')
    loader.classList.add('hide')
    console.log('hola')
  }
}

  useEffect( () => {
    const timeot = setTimeout( () => idk(), 3000)
    return () => clearTimeout(timeot)
  },[load])

  return (
      <div className="main-container">
        <div id="loader" className={`loader ${ load ? 'loading' : 'noloading'}`}>
          <img alt="i love you" src={loaderBakcground}/>
          <span>Cargando...</span>
        </div>
      </div>
  );
}

export default App;
