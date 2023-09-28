import Link from "next/link"
import "./oferta.css"
import { Footer } from "../../../components/Pie"

export default function Oferta(){
    return(
        <>
            <header>
                <nav>
                    <div id="img">
                        <img src="/logo-upch.png" alt="" />
                    </div>
                    <div id="texto">
                        <Link id="a" href="/">Inicio</Link>
                        <Link id="a" href="#">Ingenierías</Link>
                        <Link id="a" href="#">Maestrías</Link>
                        <Link id="a" href="#">Doctorado</Link>
                    </div>
                    <div id="iconos">
                        <img src="/logo-facebook.png" alt="" />
                        <img src="/logo-instragam.png" alt="" />
                    </div>
                </nav>
            </header>
            <div className="style-38">
                <div className="style-39">
                    <div className="style-40">
                        <h1 className="style-41">Oferta Educativa</h1>
                    </div>
                </div>
            </div>
            <div className="style-42">
                <div className="style-43">
                    <div className="style-44">
                        <nav className="style-45">
                            <div className="style-46">
                                <button className="style-47" type="button" data-bs-toggle="collapse" data-bs-target="#navBarCarreras" aria-controls="navBarCarreras" aria-expanded="false" aria-label="">
                                    <span className="style-48"></span> </button>
                                <div className="style-49">
                                    <ul className="style-50">
                                        <li className="style-51">
                                            <Link id="a" href="Ingenieria_Mecatronica" className="style-52" aria-current="page">Ingeniería Mecatrónica</Link>
                                        </li>
                                        <li className="style-53">
                                            <Link id="a" href="Ingenieria_Agroindustrial" className="style-54" aria-current="page">Ingeniería Agroindustrial</Link>
                                        </li>
                                        <li className="style-55">
                                            <Link id="a" href="Ingenieria_en_Tecnologia_Ambiental" className="style-56" aria-current="page">Ingeniería en Tecnología Ambiental</Link>
                                        </li>
                                        <li className="style-57">
                                            <Link id="a" href="Ingenieria_Biomedica" className="style-58" aria-current="page">Ingeniería Biomédica</Link>
                                        </li>
                                        <li className="style-59">
                                            <Link id="a" href="Ingenieria_en_Software" className="style-60" aria-current="page">Ingeniería en Software</Link>
                                        </li>
                                        <li className="style-61">
                                            <Link id="a" href="Ingenieria_en_Energia" className="style-62" aria-current="page">Ingeniería en Energía</Link>
                                        </li>
                                        <li className="style-63">
                                            <Link id="a" href="Ingenieria_en_Tecnologias_de_Manufactura" className="style-64" aria-current="page">Ingeniería en Tecnologías de Manufactura</Link>
                                        </li>
                                        <li className="style-65">
                                            <Link id="a" href="Ingenieria_Petrolera" className="style-66" aria-current="page">Ingeniería Petrolera</Link>
                                        </li>
                                        <li className="style-67">
                                            <Link id="a" href="Licenciatura_Administracion_Gestion_PYMES" className="style-68" aria-current="page">Licenciatura en Administración y Gestión Empresarial</Link>
                                        </li>
                                        <li className="style-69">
                                            <Link id="a" href="Ingenieria_en_Nanotecnologia" className="style-70" aria-current="page">Ingeniería en Nanotecnología</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="style-71">
                        <div className="style-72">
                            <div className="style-73">
                                <img className="style-74" src="https://www.upchiapas.edu.mx/oferta_educativa/banner2x8.png" />
                            </div>
                        </div>
                        <h2 className="style-75"></h2>
                        <div className="style-76">
                            <ul className="style-77" role="tablist">
                            </ul>
                            <div className="style-78">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>           
    )
}