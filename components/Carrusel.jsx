import "./Carrusel.css";
import { useState } from "react";

const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "1%",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "1%",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  
  const sliderStyles = {
    position: "relative",
    height: "80vh",
    backgroundColor: "rgb(44, 44, 44)",
    paddingTop: "6%",
    paddingBottom: "1.5%"
  };
  
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  
  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "1.2vw",
  };

  export function Slider(){
    return(
      <div id="Slider">                
        <div className="contenidoSlider-contenedor">                                            
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/logo_conacyt.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/logo_utyp.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/anuies-65.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/iaip.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/roboDK1.png" />                                                                            
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/pnt.png" />                                                                            
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/obligaciones.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/logo_conacyt.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/logo_utyp.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/anuies-65.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/logo_red.png" />                                                                            
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/ETSLogo.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/iso-9001.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/LabVIEW_logo.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/contraloria_social.png" />                                                                            
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/inai.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/LogoPlataforma.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/SIPOT.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/iaip.png" />                        
        </div>
        <div className="contenidoSlider-contenedor">                                            
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/logo_conacyt.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/logo_utyp.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/anuies-65.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/iaip.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/roboDK1.png" />                                                                            
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/pnt.png" />                                                                            
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/obligaciones.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/logo_conacyt.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/logo_utyp.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/anuies-65.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/logo_red.png" />                                                                            
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/ETSLogo.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/iso-9001.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/LabVIEW_logo.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/contraloria_social.png" />                                                                            
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/inai.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/LogoPlataforma.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/SIPOT.png" />                                                
          <img src="https://www.upchiapas.edu.mx/images/ext_gray/iaip.png" />                        
        </div>
        <button className="slider-izq" type="button">
          <img src="/left-arrow-svg-white.svg" alt="" srcSet="" />
        </button>
        <button className="slider-der" type="button">
          <img src="/right-arrow-svg-white.svg" alt="" srcSet="" />
        </button>
      </div>
    );
  }
  
  export default function Carrusel ({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    const slideStylesWidthBackground = {
      ...slideStyles,
      backgroundImage: `url(${slides[currentIndex].url})`,    
    };
  
    return (
      <div style={sliderStyles}>
        <div>
          <div onClick={goToPrevious} style={leftArrowStyles} className="button">
            <img src="/chevron-thin-left-white.svg"/>
          </div>
          <div onClick={goToNext} style={rightArrowStyles} className="button">
            <img src="/chevron-thin-right-white.svg"/>
          </div>
        </div>
        <div style={slideStylesWidthBackground} id="imagenes"></div>
        <div style={dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              style={dotStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    );
  };