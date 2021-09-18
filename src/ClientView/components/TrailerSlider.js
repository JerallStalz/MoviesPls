import React, { useRef, useEffect, useState } from "react";
import Trailer from "./Trailer";
import "./TrailerSlider.css"
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri"

const datos = [
  {
    name:"Spider-Man: Sin camino a casa",
    description: "El trepamuros vuelve a la gran pantalla en 2021 con 'Spider-Man: Sin camino a casa', tercera de las aventuras en solitario del superhéroe interpretado por Tom Holland dentro del universo cinematográfico de Marvel. Poco más de dos años han pasado desde 'Spider-Man: Lejos de casa', cuyo final es evidente que tendrá un gran impacto en esta película dirigida por Jon Watts.",
    source: "https://www.youtube.com/embed/rl0EZCJcrGc"
  },
  {
    name:"Spider-Man: Sin camino a casa",
    description: "El trepamuros vuelve a la gran pantalla en 2021 con 'Spider-Man: Sin camino a casa', tercera de las aventuras en solitario del superhéroe interpretado por Tom Holland dentro del universo cinematográfico de Marvel. Poco más de dos años han pasado desde 'Spider-Man: Lejos de casa', cuyo final es evidente que tendrá un gran impacto en esta película dirigida por Jon Watts.",
    source: "https://www.youtube.com/embed/rl0EZCJcrGc"
  },
  {
    name:"Eternals (2021)",
    description: "Hace millones de años, los seres cósmicos conocidos como los Celestiales comenzaron a experimentar genéticamente con los humanos. Su intención era crear individuos superpoderosos que hicieran únicamente el bien, pero algo salió mal y aparecieron los Desviantes, destruyendo y creando el caos a su paso. Ambas razas se han enfrentado en una eterna lucha de poder a lo largo de la historia. En medio de esta guerra, Ikaris (Richard Madden) y Sersi (Gemma Chan) tratarán de vivir su propia historia de amor. Esta película está basada en los cómics de Marvel creados por Jack Kirby. A lo largo de los años, nunca hemos interferido, hasta ahora. Mira el nuevo teaser tráiler para #Eternos de Marvel Studios y vive la experiencia en los cines en noviembre.",
    source: "https://www.youtube.com/embed/iH20gw2wpyg"
  },
  {
    name:"Free Guy (2021)",
    description: "Guy (Ryan Reynolds) trabaja como cajero de un banco, es un tipo alegre y solitario que viste impecable, y al que nada va a amargarle su día. Da igual que le le pisoteen, le atropellen, o le utilicen como rehén durante un atraco a su banco, él sigue sonriendo como si nada. Claro que un día, se va a dar cuenta de que Free City no es exactamente la ciudad que él creía. Guy va a descubrir que en realidad es un personaje no jugable dentro de un brutal videojuego de mundo abierto. Ahora que sabe que es un personaje de videojuego, Guy, acompañado por Molotov Girl (Jodie Comer), decidirá enfrentarse a todos los villanos que asolan la ciudad. Esta comedia de acción la dirige Shawn Levy, productor de la serie Stranger Things y director de la trilogía de películas de Noche en el museo.",
    source: "https://www.youtube.com/embed/X2m-08cOAbc"
  },
  {
    name:"Venom 2",
    description: "Regreso de Eddie Brock (Tom Hardy), el astuto periodista y reportero que, después de quedar infectado, experimentará radicales cambios en su cuerpo y adquirirá los poderes del simbionte Venom, que usa a Brock como huésped y le convertirá en un despiadado y peligroso súpervillano. En esta ocasión, Venom se reencontrará con Cletus Cassady, más conocido como Carnage, el enemigo más sangriento de la historia de Spider-Man. Esta secuela sobre el simbionte de Marvel es la continuación de Venom (2018), el spin-off del universo de Spider-Man sobre el personaje de Venom, creado a principios de los años 80 por los autores de cómics David Michelinie y Todd McFarlane.",
    source: "https://www.youtube.com/embed/cBeY8YS1O94"
  },
  {
    name:"ENCANTO Tráiler Español (Disney 2021)",
    description: "El trepamuros vuelve a la gran pantalla en 2021 con 'Spider-Man: Sin camino a casa', tercera de las aventuras en solitario del superhéroe interpretado por Tom Holland dentro del universo cinematográfico de Marvel. Poco más de dos años han pasado desde 'Spider-Man: Lejos de casa', cuyo final es evidente que tendrá un gran impacto en esta película dirigida por Jon Watts.",
    source: "https://www.youtube.com/embed/cC0mC_YKbE4"
  },
];

const TrailerSlider = () => {
  const ref = useRef(null)
  const trailerRef = useRef(null)
  
  const [scroll, setScroll] = useState(0)
  useEffect(()=> {
    ref.current.scroll({left: scroll, top: 0 , behavior: "smooth"})
    console.log(scroll)
    console.log(trailerRef)
},[scroll])

  const moveSlider = (type) => {
    if( ref.current.scrollWidth ) {
    if( type === "next") {
      if( scroll >= ref.current.scrollWidth - ref.current.offsetWidth) {
        setScroll( ref.current.scrollWidth - ref.current.offsetWidth )
        } else {
          setScroll(scroll + ref.current.offsetWidth )
        }
    }
    if(type === "prev") {
      if( scroll <= 0 ) {
        setScroll(0)
      } else {
        setScroll(scroll - ref.current.offsetWidth)
      }
    }
  }}

  return (
    <div  ref={trailerRef} className="trailer-slider__container">
          <RiArrowLeftSLine onClick={() => moveSlider("prev")} className="arrow arrow-left" />
          <RiArrowRightSLine onClick={() => moveSlider("next")} className="arrow arrow-right"/>
      <div  className="trailer-slider" ref={ref}>
            {datos.map((data, index) => (
              <Trailer  key={index} {...data}/>
            ))}
      </div>
    </div>
  )
}

export default TrailerSlider