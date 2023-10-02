'use client'

import "@/app/inicio.css"
import Link from "next/link"
import { Suspense } from "react"
import Carrusel from "../../components/Carrusel"
import { Slider } from "../../components/Carrusel"
import Sitios from "../../components/SitiosDeInteres"
import Pie from "../../components/Pie"
import Navbar from "../../components/Navbar"
import { useState, useEffect } from "react"

export default function Home() {
    const [slides1, setSlides1] = useState();

    useEffect(() => {
      async function fetchData(){
        const res = await fetch('/api');
        const data = await res.json();
        console.log(data);
        setSlides1(data);
      }

      fetchData();
    }, [])

    const slides = [
        {        
            url: "http://localhost:3000/banner.png"
        },
        {        
            url: "http://localhost:3000/Banner1.png"
        },
        {        
            url: "http://localhost:3000/banner2.png"
        },
        {        
            url: "http://localhost:3000/banner3.png"
        }
    ]

    if(slides1 === undefined){
        setSlides1(slides);
    }

  return (
    <>
      <Navbar />
      <main>
        <Carrusel slides={slides1} />
        <div id="mainNav">
          <Link href={"#"}>NOSOTROS</Link>
          <Link href={"#"}>SERVICIOS</Link>
          <Link href={"#"}>VINCULACIÓN UNIVERSITARIA</Link>
          <Link href={"#"}>INCUBADORA</Link>
          <Link href={"#"}>INVESTIGACIÓN</Link>
        </div>
      </main>
      <section className="news-container">
        <h2>Noticias</h2>
        <div className="con-tlt">
          <div className="grid-7lw" style={{width:"100%"}}>
                <div className="column-1" style={{width:"25%"}}>
                    <article className="cen-6z3">
                        <table className="fa-89o">
                            <tbody>
                                <tr>
                                    <td className="img-news">
                                        <img src="https://www.upchiapas.edu.mx/media/3858/images/thumbs/639f83fff9d4e948bebc7b7c40225928e39c8872.jpg" />
                                        <div className="fic-p2r style-25X8s">
                                            <p>1er Congreso en Ciencias y Desarrollo Tecnológico (CCDT) y el 2nd International Materials and Systems Congress for Renewable Energy Applications (IMSCREA)</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fic-mr3 aco-dxf cen-6z3 style-yfbWn" id="style-yfbWn">08 de septiembre de 2023</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                    <article className="cen-6z3">
                        <table className="fa-89o">
                            <tbody>
                                <tr>
                                    <td className="img-news">
                                        <img src="https://www.upchiapas.edu.mx/media/3799/images/thumbs/e362310503aeff147432d536b059c1a905946492.jpg" />
                                        <div className="fic-p2r style-fjXHT"><p>Capacitación y evaluación del sistema capacitador EC 1165 a profesores de tiempo completo de la UPChiapas</p></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fic-mr3 aco-dxf cen-6z3 style-ybreD" id="style-ybreD">11 de agosto de 2023</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                </div>
                <div className="column-1" style={{width:"25%"}}>
                    <article className="cen-6z3">
                        <table className="fa-89o">
                            <tbody>
                                <tr>
                                    <td className="img-news">
                                        <img src="https://www.upchiapas.edu.mx/media/3857/images/thumbs/f406b8b5d44e638d8fd0ef17254f2335b6965430.jpg" />
                                        <div className="fic-p2r style-OdNiM"><p>BIENVENIDOS AL TERRITORIO UP</p></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fic-mr3 aco-dxf cen-6z3 style-4mozX" id="style-4mozX">07 de septiembre de 2023</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                    <article className="cen-6z3">
                        <table className="fa-89o">
                            <tbody>
                                <tr>
                                    <td className="img-news">
                                        <img src="https://www.upchiapas.edu.mx/media/3806/images/thumbs/4287a6b93e150d235c6f32b63aeb4e6b424f9e94.jpg" />
                                        <div className="fic-p2r style-kwFKD"><p>Re-acreditación del Programa Académico de Ingeniería Agroindustrial</p></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fic-mr3 aco-dxf cen-6z3 style-xbozB" id="style-xbozB">11 de agosto de 2023</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                </div>
                <div className="column-1" style={{width:"25%"}}>
                    <article className="cen-6z3">
                        <table className="fa-89o">
                            <tbody>
                                <tr>
                                    <td className="img-news">
                                        <img src="https://www.upchiapas.edu.mx/media/3808/images/thumbs/3e604bf122f5dcfc175cf8059e909b4f05c47365.jpg" />
                                        <div className="fic-p2r style-Hcs6K"><p>Exitoso inicio de cuatrimestre a nuestros estudiantes de ingenierías</p></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fic-mr3 aco-dxf cen-6z3 style-DzqER" id="style-DzqER">31 de agosto de 2023</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                    <article className="cen-6z3">
                        <table className="fa-89o">
                            <tbody>
                                <tr>
                                    <td className="img-news">
                                        <img src="https://www.upchiapas.edu.mx/media/3798/images/thumbs/97222444a975c14b18187895852ee37b8e01ebf2.jpg" />
                                        <div className="fic-p2r style-KS59d"><p>Curso de Inducción en la UPChiapas</p></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fic-mr3 aco-dxf cen-6z3 style-Q5bcG" id="style-Q5bcG">08 de agosto de 2023</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                </div>
                <div className="column-1" style={{width:"25%"}}>
                    <article className="cen-6z3">
                        <table className="fa-89o">
                            <tbody>
                                <tr>
                                    <td className="img-news">
                                        <img src="https://www.upchiapas.edu.mx/media/3807/images/thumbs/1e32ec31bb45e359572b88fa30f901439afece9c.jpg" />
                                        <div className="fic-p2r">
                                            <p>Segunda Reunión Nacional 2023 de rectoras y rectores del subsistema tecnológico</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fic-mr3 aco-dxf cen-6z3 style-mn8GK" id="style-mn8GK">30 de agosto de 2023</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                    <article className="cen-6z3">
                        <table className="fa-89o">
                            <tbody>
                                <tr>
                                    <td className="img-news">
                                        <img src="https://www.upchiapas.edu.mx/media/3780/images/thumbs/a76a7eab7a8fc490802fb8d91fa5f6d05a9f5e54.jpg" />
                                        <div className="fic-p2r">
                                            <p>Mantenimiento preventivo y correctivo a los equipos médicos</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fic-mr3 aco-dxf cen-6z3 style-pl1zL" id="style-pl1zL">07 de agosto de 2023</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                </div>
            </div>
        </div>
        <div className="a-Noticias">
          <a href="/noticias">Ver más noticias</a>
        </div>
      </section>
      <div style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
          margin: "0 auto",
          width: "90%",
          height: "200px"
      }}>
        <h1 style={{textAlign: "center"}}>Alianzas estratégicas</h1>
        <Slider />
      </div>
      <Sitios />
      <Pie />
    </>
  )
}
