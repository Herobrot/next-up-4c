"use client"

import "./transparencia.css"
import Link from "next/link"
import { Footer } from "../../../components/Pie";
import { useState } from "react";

export default function Transparencia(){
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(true);
    const [show3, setShow3] = useState(true);
    const [show4, setShow4] = useState(true);
    const [show5, setShow5] = useState(true);
    const [show6, setShow6] = useState(true);
    const [show7, setShow7] = useState(true);
    const [show8, setShow8] = useState(true);
    const [show9, setShow9] = useState(true);
    const [show10, setShow10] = useState(true);
    const [show11, setShow11] = useState(true);
    const [show12, setShow12] = useState(true);
    const [show13, setShow13] = useState(true);
    const [show14, setShow14] = useState(true);
    const [show15, setShow15] = useState(true);
    const [show16, setShow16] = useState(true);
    const [show17, setShow17] = useState(true);
    const [show18, setShow18] = useState(true);
    const [show19, setShow19] = useState(true);
    const [show20, setShow20] = useState(true);
    const [show21, setShow21] = useState(true);
    const [show22, setShow22] = useState(true);
    const [show23, setShow23] = useState(true);
    const [show24, setShow24] = useState(true);
    const [show25, setShow25] = useState(true);
    const [show26, setShow26] = useState(true);
    const [show27, setShow27] = useState(true);
    const [show28, setShow28] = useState(true);
    const [show29, setShow29] = useState(true);
    const [show30, setShow30] = useState(true);
    const [show31, setShow31] = useState(true);
    const [show32, setShow32] = useState(true);
    const [show33, setShow33] = useState(true);
    const [show34, setShow34] = useState(true);
    const [show35, setShow35] = useState(true);
    const [show36, setShow36] = useState(true);
    const [show37, setShow37] = useState(true);
    const [show38, setShow38] = useState(true);
    const [show39, setShow39] = useState(true);

    return (
        <>
            <div id="sidebar">
                <h2>EGRESADOS</h2>
                <ul className="sidebar-menu">
                    <li>
                        <Link href="#marco">Marco Normativo</Link>
                    </li>
                    <li>
                        <Link href="#programa">Programa Institucional de Desarrollo</Link>
                    </li>
                    <li>
                        <Link href="#comite">Comité de Transparencia</Link>
                    </li>
                    <li>
                        <Link href="#financieria">Información Financiera y Presupestaria</Link>
                    </li>
                    <li>
                        <Link href={""}>Directorio de Servicios Públicos</Link>
                    </li>
                    <li>
                        <Link href={""}>Obligaciones de Transparencia Comúnes</Link>
                    </li>
                    <li>
                        <Link href={""}>Enlaces</Link>
                    </li>
                </ul>
            </div>
            <main>
                <div id="marco">
                    <h1>Marco Normativo</h1>
                    <p className="separador"></p>
                    <br /><br />
                    <div className="dropdown">
                        <div className={show1 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow1(!show1);
                        }}>
                            <span className="selected">Normativa Federal</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show1 ? "menu" : "menu-open"}>
                            <div>
                            <ol>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Constitución Política Federal
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Ley General de Educación
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Ley General de Transparencia
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Ley Federal del Trabajo
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Reglas de Operación del PIFI 2023
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Reglas PROMEP
                                    </Link>
                                </li>
                            </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show2 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow2(!show2);
                        }}>
                            <span className="selected">Normativa Estatal</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show2 ? "menu" : "menu-open"}>
                            <div>
                            <ol>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Constitución Política Local
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Ley Orgánica de la Admon Pública.
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Ley de Entidades Paraestatales
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Ley de Transparencia Estatal
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Ley de Respons-admitivas
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Ley de Adquisiciones
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Normas Presupestaria
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Código de Honestidad y Ética de los servidores Públicos del Estado de Chiapas
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Manual de Inducción
                                    </Link>
                                </li>
                            </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show3 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow3(!show3);
                        }}>
                            <span className="selected">Normativa Administrativa Interna</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show3 ? "menu" : "menu-open"}>
                            <div>
                            <ol>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Creación Universidad Politécnica de Chiapas y sus Reformas
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>LEstatus OrgánicoC-065-30102019-1200
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Reglamento Interno de Trabajo UPChiapasPO 207
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Reglamento Interno de la H. Junta Directiva de la UPChiapasPO 243
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Reglamento Interno del Consejo de Calidad UPChiapas UPChiapasPO 243
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Reglamento Interno del Consejo Social UPChiapas PO 243
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Código de Ética
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Reglamento-ingresos-propios
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Manual de Organización
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>MaANUAL DE INDUCCIÓN act 2023
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Manual de Procedimientos
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Manual de Integración y Funcionamiento del Cómite de Adquisiciones, Arrendamientos y Servicios de la Universidad Politécnica de Chiapas 2022
                                    </Link>
                                </li>
                            </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show4 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow4(!show4);
                        }}>
                            <span className="selected">Normativa Académica Interna</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show4 ? "menu" : "menu-open"}>
                            <div>
                            <ol>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Reglamento RIPPPA UPChiapas PO 013
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Reglamento de Estudios
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Reglamento Talleres y Lab
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Reglamento-biblioteca
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Lineamiento-fondo-matricula
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Politicas-uso-bibliotecas
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Politicas-uso-talleresylab
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <span>d</span>Politicas-uso-compysoft
                                    </Link>
                                </li>
                            </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show5 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow5(!show5);
                        }}>
                            <span className="selected">Convenios</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show5 ? "menu" : "menu-open"}>
                            <div>
                                <ol>
                                    <li>
                                        <Link href={""}>
                                            <span>d</span>CONVENIO AYUNTAMIENTO TX
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={""}>
                                            <span>d</span>Convenio CEPREC 2023
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={""}>
                                            <span>d</span>CONVENIO CF3 2023
                                        </Link>
                                    </li>                
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="programa">
                    <h1>Programa Institucional de Desarrollo</h1>
                    <p className="separador"></p>
                    <br />
                    <Link href="">
                        Programa Institucional de Desarrollo 2021-2025
                    </Link>
                    <Link href="">
                        Descargar Programa de Desarrollo Institucional 2016-2020
                    </Link>
                    <Link href="">
                        Descargar Lineamientos CGUTyP para PDI
                    </Link>
                </div>
                <div id="comite">
                    <h1>Comité de Transparencia</h1>
                    <p className="separador"></p>
                    <ol>
                        <li>
                            <Link href={""}>Acta de Instalación Comité de Transparencia</Link>
                        </li>
                        <li>
                            <Link href={""}>Acta 2a. Sesión 2022</Link>
                        </li>
                        <li>
                            <Link href={""}>Acta 3a. Sesión 2022 Comité de Transparencia</Link>
                        </li>
                        <li>
                            <Link href={""}>Acta 4a. Sesión Comité de Transparencia</Link>
                        </li>
                    </ol>
                </div>
                <div id="financieria">
                    <p className="separador"></p>
                    <div className="dropdown">
                        <div className={show6 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow6(!show6);
                        }}>
                            <span className="selected">Informes Financieros PRODEP</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show6 ? "menu" : "menu-open"}>
                            <div>
                                <ol>
                                    <li>
                                        <div className="dropdown">
                                            <div className={show7 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow7(!show7);
                        }}>
                                                <span className="selected">Información Financieria 2016</span>
                                                <div className="mas">+</div>
                                            </div>
                                            <div className={show7 ? "menu" : "menu-open"}>
                                                <div>
                                                    <ol>
                                                        <li>
                                                            <div className="dropdown">
                                                                <div className={show8 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow8(!show8);
                        }}>
                                                                    <span className="selected">Primer Trimestre</span>
                                                                    <div className="mas">+</div>
                                                                </div>
                                                                <div className={show8 ? "menu" : "menu-open"}>
                                                                    <div>
                                                                        <ol>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-13-6714</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-14-10628</Link></li>
                                                                            <li><Link href={""}><span>d</span>Informe Financierio Parcial No 8447 al 31-03-2016</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-13-5756</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-13-6190</Link></li>
                                                                        </ol>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <div className={show9 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow9(!show9);
                        }}>
                                                                    <span className="selected">Segundo Trimestre</span>
                                                                    <div className="mas">+</div>
                                                                </div>
                                                                <div className={show9 ? "menu" : "menu-open"}>
                                                                    <div>
                                                                        <ol>
                                                                            <li><Link href={""}><span>d</span>Informe Financierio Acumulado al 30-06-2016</Link></li>
                                                                            <li><Link href={""}><span>d</span>Informe Financierio Parcial No 8732 al 30-06-2016</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-12-4385</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-13-5756</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-14-10628</Link></li>
                                                                        </ol>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <div className={show10 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow10(!show10);
                        }}>
                                                                    <span className="selected">Tercer Trimestre</span>
                                                                    <div className="mas">+</div>
                                                                </div>
                                                                <div className={show10 ? "menu" : "menu-open"}>
                                                                    <div>
                                                                        <ol>
                                                                            <li><Link href={""}><span>d</span>Informe Financierio Parcial No 9356 al 30-06-2016</Link></li>
                                                                            <li><Link href={""}><span>d</span>Informe Financierio Acumulado al 30-06-2016</Link></li>
                                                                            <li><Link href={""}><span>d</span>Oficio UPC-DIEIP-PRODEP-112-16 Entrega</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-13-5756</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-14-10628</Link></li>
                                                                        </ol>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown">
                                            <div className={show11 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow11(!show11);
                        }}>
                                                <span className="selected">Información Financieria 2015</span>
                                                <div className="mas">+</div>
                                            </div>
                                            <div className={show11 ? "menu" : "menu-open"}>
                                                <div>
                                                    <ol>
                                                        <li>
                                                            <div className="dropdown">
                                                                <div className={show12 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow12(!show12);
                        }}>
                                                                    <span className="selected">Primer Trimestre</span>
                                                                    <div className="mas">+</div>
                                                                </div>
                                                                <div className={show12 ? "menu" : "menu-open"}>
                                                                    <div>
                                                                        <ol>
                                                                            <li><Link href={""}><span>d</span>Informe Financierio Parcial No 8008 al 31-03-2015</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-13-5756</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-13-6190</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-13-6714</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-13-7442</Link></li>
                                                                        </ol>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <div className={show13 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow13(!show13);
                        }}>
                                                                    <span className="selected">Segundo Trimestre</span>
                                                                    <div className="mas">+</div>
                                                                </div>
                                                                <div className={show13 ? "menu" : "menu-open"}>
                                                                    <div>
                                                                        <ol>
                                                                            <li><Link href={""}><span>d</span>Informe Financierio Parcial No 9356 al 30-06-2015</Link></li>
                                                                            <li><Link href={""}><span>d</span>Informe Financierio Acumulado al 30-06-2015</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-13-5756</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-13-6190 Bis</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-13-6190</Link></li>
                                                                        </ol>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <div className={show14 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow14(!show14);
                        }}>
                                                                    <span className="selected">Tercer Trimestre</span>
                                                                    <div className="mas">+</div>
                                                                </div>
                                                                <div className={show14 ? "menu" : "menu-open"}>
                                                                    <div>
                                                                    <ol>
                                                                        <li><Link href={""}><span>d</span>Informe Financierio Acumulado al 30-06-2015</Link></li>
                                                                        <li><Link href={""}><span>d</span>Informe Financierio Parcial No 8246 al 30-09-2015</Link></li>                                                            
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-5756</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-6174</Link></li>
                                                                    </ol>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <div className={show15 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow15(!show15);
                        }}>
                                                                    <span className="selected">Cuarto Trimestre</span>
                                                                    <div className="mas">+</div>
                                                                </div>
                                                                <div className={show15 ? "menu" : "menu-open"}>
                                                                    <div>
                                                                    <ol>
                                                                        <li><Link href={""}><span>d</span>Informe Financierio Parcial No 8332 al 31-12-2015</Link></li>
                                                                        <li><Link href={""}><span>d</span>Informe Financierio Acumulado al 31-12-2015</Link></li>                                                            
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-5756</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-6190</Link></li>
                                                                    </ol>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown">
                                            <div className={show16 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow16(!show16);
                        }}>
                                                <span className="selected">Información Financieria 2014</span>
                                                <div className="mas">+</div>
                                            </div>
                                            <div className={show16 ? "menu" : "menu-open"}>
                                                <div>
                                                    <ol>
                                                        <li>
                                                            <div className="dropdown">
                                                                <div className={show17 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow17(!show17);
                        }}>
                                                                    <span className="selected">Primer Trimestre</span>
                                                                    <div className="mas">+</div>
                                                                </div>
                                                                <div className={show17 ? "menu" : "menu-open"}>
                                                                    <div>
                                                                    <ol>
                                                                        <li><Link href={""}><span>d</span>Informe Financierio Parcial No 6361 al 31-03-2014</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-11-3906</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-5756</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-6714</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-7442</Link></li>
                                                                    </ol>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <div className={show18 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow18(!show18);
                        }}>
                                                                    <span className="selected">Segundo Trimestre</span>
                                                                    <div className="mas">+</div>
                                                                </div>
                                                                <div className={show18 ? "menu" : "menu-open"}>
                                                                    <div>
                                                                    <ol>
                                                                        <li><Link href={""}><span>d</span>Informe Financierio Parcial No 7725 al 30-06-2014</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-5756</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-6190</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-6714</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-7442</Link></li>
                                                                    </ol>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <div className={show19 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow19(!show19);
                        }}>
                                                                    <span className="selected">Tercer Trimestre</span>
                                                                    <div className="mas">+</div>
                                                                </div>
                                                                <div className={show19 ? "menu" : "menu-open"}>
                                                                    <div>
                                                                    <ol>
                                                                        <li><Link href={""}><span>d</span>Informe Financierio Parcial No 7920 al 30-09-2014</Link></li>                                                            
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-5756</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-6714</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-7442</Link></li>
                                                                    </ol>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <div className={show20 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow20(!show20);
                        }}>
                                                                    <span className="selected">Cuarto Trimestre</span>
                                                                    <div className="mas">+</div>
                                                                </div>
                                                                <div className={show20 ? "menu" : "menu-open"}>
                                                                    <div>
                                                                    <ol>
                                                                        <li><Link href={""}><span>d</span>Informe Financierio Acumulado al 31-12-2014</Link></li>
                                                                        <li><Link href={""}><span>d</span>Informe Financierio Parcial No 7981 al 31-03-2014</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-5756</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-6190</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-6714</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-13-7442</Link></li>
                                                                    </ol>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown">
                                            <div className={show21 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow21(!show21);
                        }}>
                                                <span className="selected">Información Financieria 2013</span>
                                                <div className="mas">+</div>
                                            </div>
                                            <div className={show21 ? "menu" : "menu-open"}>
                                                <div>
                                                    <ol>
                                                        <li>
                                                            <div className="dropdown">
                                                                <div className={show22 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow22(!show22);
                        }}>
                                                                    <span className="selected">Primer Trimestre</span>
                                                                    <div className="mas">+</div>
                                                                </div>
                                                                <div className={show22 ? "menu" : "menu-open"}>
                                                                    <div>
                                                                    <ol>
                                                                        <li><Link href={""}><span>d</span>Informe Financierio Parcial No 6223 al 31-03-2013</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-11-3906</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-11-4470</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-12-2160</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-12-3587</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-12-4385</Link></li>
                                                                        <li><Link href={""}><span>d</span>PROMEP 103.5-12-4271</Link></li>
                                                                    </ol>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <div className={show23 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow23(!show23);
                        }}>
                                                                    <span className="selected">Segundo Trimestre</span>
                                                                    <div className="mas">+</div>
                                                                </div>
                                                                <div className={show23 ? "menu" : "menu-open"}>
                                                                    <div>
                                                                        <ol>
                                                                            <li><Link href={""}><span>d</span>Informe Financierio Parcial No 6223 al 31-03-2013</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-11-3906</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-11-4470</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-12-2160</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-12-3587</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-12-4385</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-12-4271</Link></li>
                                                                        </ol>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <div className={show24 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow24(!show24);
                        }}>
                                                                    <span className="selected">Tercer Trimestre</span>
                                                                    <div className="mas">+</div>
                                                                </div>
                                                                <div className={show24 ? "menu" : "menu-open"}>
                                                                    <div>
                                                                        <ol>
                                                                            <li><Link href={""}><span>d</span>Informe Financierio Parcial No 6223 al 31-03-2013</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-11-3906</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-11-4470</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-12-2160</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-12-3587</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-12-4385</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-12-4271</Link></li>
                                                                        </ol>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dropdown">
                                                                <div className={show25 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow25(!show25);
                        }}>
                                                                    <span className="selected">Cuarto Trimestre</span>
                                                                    <div className="mas">+</div>
                                                                </div>
                                                                <div className={show25 ? "menu" : "menu-open"}>
                                                                    <div>
                                                                        <ol>
                                                                            <li><Link href={""}><span>d</span>Informe Financierio Parcial No 6223 al 31-03-2013</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-11-3906</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-11-4470</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-12-2160</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-12-3587</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-12-4385</Link></li>
                                                                            <li><Link href={""}><span>d</span>PROMEP 103.5-12-4271</Link></li>
                                                                        </ol>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show26 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow26(!show26);
                        }}>
                            <span className="selected">Programas, Proyectos y Presupuestos</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show26 ? "menu" : "menu-open"}>
                            <div>
                                <ol>
                                    <li>
                                        <div className="dropdown">
                                            <div className={show27 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow27(!show27);
                        }}>
                                                <span className="selected">2022</span>
                                                <div className="mas">+</div>
                                            </div>
                                            <div className={show27 ? "menu" : "menu-open"}>
                                                <div>
                                                    <ol>
                                                        <li><Link href={""}><span>d</span>Programa Operativa Anual</Link></li>
                                                        <li><Link href={""}><span>d</span>Programa Anual de Adquisiciones, Arrendamiento de Bienes Muebles y Contratación de Servicios</Link></li>
                                                    </ol>   
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown">
                                            <div className={show28 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow28(!show28);
                        }}>
                                                <span className="selected">2017</span>
                                                <div className="mas">+</div>
                                            </div>
                                            <div className={show28 ? "menu" : "menu-open"}>
                                                <div>
                                                    <ol>
                                                        <li><Link href={""}><span>d</span>Programa Normal de Operación (subsidio ordinario)</Link></li>
                                                        <li><Link href={""}><span>d</span>Proyectos Autorizados</Link></li>
                                                        <li><Link href={""}><span>d</span>Programa Operativo Anual Tercer trimestre 2017</Link></li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown">
                                            <div className={show29 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow29(!show29);
                        }}>
                                                <span className="selected">2016</span>
                                                <div className="mas">+</div>
                                            </div>
                                            <div className={show29 ? "menu" : "menu-open"}>
                                                <div>
                                                    <ol>
                                                        <li><Link href={""}><span>d</span>Programa Normal de Operación (subsidio ordinario)</Link></li>
                                                        <li><Link href={""}><span>d</span>Proyectos Autorizados</Link></li>
                                                        <li><Link href={""}><span>d</span>Programa Operativo Anual</Link></li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </li>                                                   
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show30 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow30(!show30);
                        }}>
                            <span className="selected">Rendición de Cuentas</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show30 ? "menu" : "menu-open"}>
                            <div>
                                <Link href={""}><span>d</span>Contrato por suministro y colocación de paneles fotovoltaicos para el proyecto de sistema de energía solar en la UPChiapas</Link>
                                <ol>
                                    <li>
                                        <div className="dropdown">
                                            <div className={show31 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow31(!show31);
                        }}>
                                                <span className="selected">AUDITORIAS</span>
                                                <div className="mas">+</div>
                                            </div>
                                            <div className={show31 ? "menu" : "menu-open"}>
                                                <Link href={""}><span>d</span>Auditorías</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown">
                                            <div className={show32 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow32(!show32);
                        }}>
                                                <span className="selected">INFORMES TRIMESTRALES 2010</span>
                                                <div className="mas">+</div>
                                            </div>
                                            <div className={show32 ? "menu" : "menu-open"}>
                                                <div className="dropdown">
                                                    <div className={show33 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow33(!show33);
                        }}>
                                                        <span className="selected">Recursos Federales Ejercidos al Primer Trimestre</span>
                                                        <div className="mas">+</div>
                                                    </div>
                                                    <div className={show33 ? "menu" : "menu-open"}>
                                                        <ol>
                                                            <li>Fracción I del Artículo 50 del PEF 2010</li>
                                                            <li>Fracción II del Artículo 50 del PEF 2010</li>
                                                            <li>Fracción III del Artículo 50 del PEF 2010</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>                            
                                </ol>                        
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show34 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow34(!show34);
                        }}>
                            <span className="selected">Periodo de Trámite de Titulación</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show34 ? "menu" : "menu-open"}>
                            <div>
                            <b>
                                De acuerdo a las fechas especificadas en el calendario escolar vigente, el trámite se realiza en los meses de Enero, Mayo y Septiembre de cada año.
                            </b>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show35 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow35(!show35);
                        }}>
                            <span className="selected">Duración del Trámite de la Titulación</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show35 ? "menu" : "menu-open"}>
                            <div>
                            <b>9 meses</b>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show36 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow36(!show36);
                        }}>
                            <span className="selected">Entrega de Títulos y Documentación</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show36 ? "menu" : "menu-open"}>
                            <div>
                            <b>
                                Para la entrega de título y documentación se agenda cita en la Plataforma Platinum, en fechas y horarios disponibles, presentando los siguientes documentos:
                            </b><br />
                            <ol style={{listStyle: "lower-alpha;"}}>
                                <li>Identificación oficial vigente con fotografía y firma
                                    <ol>
                                        <li>Credencial de Elector actualizada</li>
                                        <li>Pasaporte vigente</li>
                                        <li>Cartilla de Servicio Militar</li>
                                    </ol>
                                </li>
                                <li>Comprobante de domicilio reciente (recibo de luz, agua o teléfono).</li>
                            </ol>
                            <br />
                            <b>En caso de no poder acudir personalmente, puede asistir un propio, siempre y cuando presente lo siguiente:</b>
                            <br />
                            <ol style={{listStyle: "lower-alpha;"}}>
                                <li>Carta poder con firmas autógrafas, dirigida al departamento de Servicios Escolares y Biblioteca de la Universidad Politécnica de Chiapas.</li>
                                <li>Original y Copia fotostática de la identificación oficial vigente del interesado y de la persona a quien se le otorga el poder, así como de un testigo.</li>
                                <li>Comprobante de domicilio reciente del interesado (recibo de luz, agua o teléfono).</li>
                            </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show37 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow37(!show37);
                        }}>
                            <span className="selected">Costos</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show37 ? "menu" : "menu-open"}>
                            <div>
                                <p id="notaDropdown">
                                    El costo de trámite de titulación vigente, indicado en el formato de pago referenciado. El costo incluye:
                                </p>
                                <ol>
                                    <li>Título Profesional físico</li><br />
                                    <li>Registro de Título Profesional Electrónico.</li><br />
                                    <li>Acta de Exención de Examen Profesional.</li><br />
                                    <li>Certificado Total de Estudios.</li><br />
                                    <li>Liberación de Servicio Social.</li><br />
                                    <li>Carpeta de egresado.</li><br />
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show38 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow38(!show38);
                        }}>
                            <span className="selected">Atención de Dudas</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show38 ? "menu" : "menu-open"}>
                            <div>
                            <b>En el correo de <Link href={""}>titulacion@upchiapas.edu.mx</Link>, indicando los siguientes datos: nombre completo, matrícula, carrera y detallar el apoyo que requiere.</b>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show39 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow39(!show39);
                        }}>
                            <span className="selected">Descripción del Procedimiento</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show39 ? "menu" : "menu-open"}>
                            <div>
                            <table border="1">
                                <tr>
                                    <th><b>Secuencia de etapas</b></th>
                                    <th><b>Reponsable</b></th>
                                    <th><b>Actividades</b></th>
                                </tr>
                                <tr>
                                    <td><p align="center">1</p></td>
                                    <td><p align="center">Egresado</p></td>
                                    <td><b>
                                        <ol>
                                            <li>Descarga el formato “solicitud de servicio”, en la Plataforma PLATINUM).</li>
                                            <li>Descarga el formato de pago de la plataforma PLATINUM.</li>
                                            <li>Tramita el formato de No adeudo en línea en la plataforma PLATINUM.</li>
                                            <li>De acuerdo a fechas establecidas en calendario escolar, solicita por cita en la plataforma Platinum en fechas y horarios disponibles.</li>
                                            <li>Las fechas se difunden con antelación antes del periodo de trámite, en las páginas institucionales de la Universidad.</li>
                                        </ol>
                                    </b></td>
                                </tr>
                                <tr>
                                    <td><p align="center">2</p></td>
                                    <td><p align="center">Área de Titulación</p></td>
                                    <td>
                                        <b>Recibe la documentación requerida, en el orden especificado, que debe de estar completa. Emite una Constancia de Título en Trámite e inicia el trámite correspondiente.</b><br />
                                        <p align="center">NOTA: No se recibirá información incompletp</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><p align="center">3</p></td>
                                    <td><p align="center">Departamento de Servicios Escolares y Biblioteca</p></td>
                                    <td><b>Valida que el expediente se encuentra completo y en orden. De ser aprobado, actualiza el registro publicado de control de seguimiento titulación. En caso de detectar alguna situación se informará al egresado para que lo atienda a la brevedad posible.</b></td>
                                </tr>
                                <tr>
                                    <td><p align="center">4</p></td>
                                    <td><p align="center">Área de Titulación</p></td>
                                    <td><b>
                                        <ol>
                                            <li>Prepara documentos para firma: títulos, certificados, exención de examen profesional. </li>
                                            <li>En un periodo de 6 meses informa por correo electrónico a los egresados que ya está autorizado su proceso de título electrónico y puede tramitar la cédula electrónica.</li>
                                            <li>El trámite de cédula profesional es personal e independiente, que puedes realizarlo una vez recibas la notificación de tu título electrónico. </li>
                                            <li>La información del procedimiento de cédula puede consultarse en la página <Link href="https://www.gob.mx/cedulaprofesional">https://www.gob.mx/cedulaprofesional</Link></li>
                                            <li>Una vez completado el proceso de titulación, se informa mediante correo electrónico para que pase a recoger su título previa cita.</li>
                                        </ol>
                                        Para la entrega de título y documentación se agenda cita en la Plataforma Platinum, en fechas y horarios disponibles, presentando los siguientes documentos:
                                        <ol style={{listStyle: "lower-alpha;"}}>                                    
                                            <li>Identificación oficial vigente, con fotografía y firma.
                                                <ol>
                                                    <li>Credencial de Elector actualizada</li>
                                                    <li>Pasaporte vigente</li>
                                                    <li>Cartilla de Servicio Militar</li>
                                                </ol>
                                            </li>
                                            <li>Comprobante de domicilio reciente (recibo de luz, agua o teléfono).</li>
                                        </ol>
                                        <br />
                                        En caso de no poder acudir personalmente, puede asistir un propio, siempre y cuando presente lo siguiente:
                                        <br />
                                        <ol style={{listStyle: "lower-alpha;"}}>
                                            <li>Carta poder con firmas autógrafas, dirigida al departamento de Servicios Escolares y Biblioteca de la Universidad Politécnica de Chiapas.</li>
                                            <li>Original y Copia fotostática de la identificación oficial vigente del interesado y de la persona a quien se le otorga el poder, así como de un testigo.</li>
                                            <li>Comprobante de domicilio reciente del interesado (recibo de luz, agua o teléfono).</li>
                                        </ol>
                                    </b></td>
                                </tr>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}