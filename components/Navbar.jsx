import Link from "next/link";
import "./Navbar.css";

export default function Navbar(){
    return(
        <header>
            <nav>
              <div id="img">
                  <img src="/logo-upch.png" alt="" />
              </div>
              <div id="texto">
                  <Link id="a" href="/">INICIO</Link>
                  <Link id="a" href="./ofertaEducativa.html">OFERTA EDUCATIVA</Link>
                  <Link id="a" href="./alumnos.html">ALUMNOS</Link>
                  <Link id="a" href="./aspirantes.html">ASPIRANTES</Link>
                  <Link id="a" href="./egresados.html">EGRESADOS</Link>
                  <Link id="a" href="./transparencia.html">TRANSPARENCIA</Link>
              </div>
              <div id="iconos">
                  <img src="/logo-facebook.png" alt="" />
                  <img src="/logo-instragam.png" alt="" />
              </div>
            </nav>
        </header>
    )
}