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
                  <Link href="/">INICIO</Link>
                  <Link href="./ofertaEducativa.html">OFERTA EDUCATIVA</Link>
                  <Link href="./alumnos.html">ALUMNOS</Link>
                  <Link href="./aspirantes.html">ASPIRANTES</Link>
                  <Link href="./egresados.html">EGRESADOS</Link>
                  <Link href="./transparencia.html">TRANSPARENCIA</Link>
              </div>
              <div id="iconos">
                  <img src="/logo-facebook.png" alt="" />
                  <img src="/logo-instragam.png" alt="" />
              </div>
            </nav>
        </header>
    )
}