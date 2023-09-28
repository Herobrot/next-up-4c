"use client"

import { Footer } from "../../../components/Pie";
import "./alumnos.css"
import { React,Component, useEffect, useState } from "react";

export default function Alumnos(){
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(true);
    const [show3, setShow3] = useState(true);
    
    return(
        <>
            <div id="sidebar">
                <h2>Alumnos</h2>
                <ul className="sidebar-menu">
                    <li>
                        <a href="#">Reinscripciones Septiembre - Diciembre 2023</a>
                    </li>
                    <li>
                        <a href="#becas">Becas</a>
                    </li>
                    <li>
                        <a href="#biblioteca">Biblioteca</a>
                    </li>
                    <li>
                        <a href="#daicu">DAICU</a>
                    </li>
                    <li>
                        <a href="estancia">Estancias y Estadías</a>
                    </li>
                    <li>
                        <a>Calendario Escolar 2023</a>
                    </li>
                </ul>
            </div>
            <main>
                <div id="becas">
                    <h1>Becas</h1>
                    <p className="separador"></p>
                    <div className="dropdown">
                        <div className={show1 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow1(!show1);
                        }}>
                            <span className="selected">Becas del Gobierno Federal</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show1 ? "menu" : "menu-open"}>
                            <div>
                            <ol>
                                <li>
                                    Acreditar el 100% de las asignaturas contemplados en el plan de estudios.
                                </li>
                                <li>
                                    Estar al corriente en el pago de las cuotas y sin adeudo de carácter administrativo.
                                </li>
                                <li>
                                    Cubrir los gastos de titulación.
                                </li>
                                <li>
                                    Tener vigente E.FIRMA (se tramita ante SAT, y se utilizará posterior a tu proceso de trámite de Titulación, una vez que se te indique).
                                </li>
                                <li>
                                    Acta de examen de grado
                                </li>
                                <li>
                                    Boleta vigente de TOEFL IPT institucional o equivalente internacional reconocido TOEFL IBT, acreditados y apegados a los procedimientos de la Coordinación de Inglés.
                                </li>
                                <li>
                                    Cubrir los gastos de titulación.
                                </li>
                            </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show2? "select" : "select-clicked"} onClick={() => {                            
                            setShow2(!show2);
                        }}>
                            <span className="selected">Becas del Gobierno del Estado</span>
                            <div className="mas">+</div>
                        </div>
                         <div className={show2 ? "menu" : "menu-open"}>
                            <div>
                                <ol>
                                    <li>
                                        Acreditar el 100% de las asignaturas contemplados en el plan de estudios.
                                    </li>
                                    <li>
                                        Estar al corriente en el pago de las cuotas y sin adeudo de carácter administrativo.
                                    </li>
                                    <li>
                                        Cubrir los gastos de titulación.
                                    </li>
                                    <li>
                                        Tener vigente E.FIRMA (se tramita ante SAT, y se utilizará posterior a tu proceso de trámite de Titulación, una vez que se te indique).
                                    </li>
                                    <li>
                                        Acta de examen de grado
                                    </li>
                                    <li>
                                        Boleta vigente de TOEFL IPT institucional o equivalente internacional reconocido TOEFL IBT, acreditados y apegados a los procedimientos de la Coordinación de Inglés.
                                    </li>
                                    <li>
                                        Cubrir los gastos de titulación.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show3 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow3(!show3);
                        }}>
                            <span className="selected">Becas Universitarias</span>
                            <div className="mas">+</div>
                        </div>
                         <div className={show3 ? "menu" : "menu-open"}>
                            <div>
                            <ol>
                                <li>
                                    Acreditar el 100% de las asignaturas contemplados en el plan de estudios.
                                </li>
                                <li>
                                    Estar al corriente en el pago de las cuotas y sin adeudo de carácter administrativo.
                                </li>
                                <li>
                                    Cubrir los gastos de titulación.
                                </li>
                                <li>
                                    Tener vigente E.FIRMA (se tramita ante SAT, y se utilizará posterior a tu proceso de trámite de Titulación, una vez que se te indique).
                                </li>
                                <li>
                                    Acta de examen de grado
                                </li>
                                <li>
                                    Boleta vigente de TOEFL IPT institucional o equivalente internacional reconocido TOEFL IBT, acreditados y apegados a los procedimientos de la Coordinación de Inglés.
                                </li>
                                <li>
                                    Cubrir los gastos de titulación.
                                </li>
                            </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sec-x1n menu-2gc">
                    <div id="bg_-jl8" className="style-eRITg">
                    </div>
                    <div className="con-w5s style-rrTwc" id="style-rrTwc">
                    <div id="gri-bwh" className="grid-y3p big-6tf style-aMxED">
                        <div className="column-nx2">
                        <div className="art-bj8">
                            <h1 className="cen-nr8">
                            Biblioteca
                            </h1>
                            <p className="fec-n4n">
                            </p>
                            <p style={{textAlign:"justify"}}>
                            La biblioteca tiene diversas fuentes de información, no solo tenemos colecciones de libros, también existe una colección de cd's y acceso a diversas bases de datos electrónicas.
                            </p>
                            <p style={{textAlign:"justify"}}>
                            A continuación se describen algunos servicios:
                            </p>
                            <p style={{textAlign:"justify"}}>
                            Servicios de biblioteca
                            </p>
                            <p style={{textAlign:"justify"}}>
                            <strong>
                                Colección general:
                            </strong>
                            &nbsp;Están disponibles para el préstamo a domicilio por cinco días hábiles tres libros al mismo tiempo. Recuerda que entregar tarde el material te hace acreedor a una multa.
                            </p>
                            <p style={{textAlign:"justify"}}>
                            <strong>
                                Consulta:
                            </strong>
                            &nbsp;Todos los diccionarios y&nbsp;enciclopedias se encuentran en esta sección. Material para uso exclusivo dentro de la biblioteca.
                            </p>
                            <p style={{textAlign:"justify"}}>
                            Los libros más buscados son de las siguientes áreas:
                            </p>
                            <table className="table-z8r">
                            <tbody>
                                <tr>
                                <td>
                                    <p style={{textAlign:"center"}}>
                                    <strong>
                                        Biología
                                    </strong>
                                    </p>
                                </td>
                                <td>
                                    <p style={{textAlign:"center"}}>
                                    <strong>
                                        Cálculo
                                    </strong>
                                    </p>
                                </td>
                                <td>
                                    <p style={{textAlign:"center"}}>
                                    <strong>
                                        Física
                                    </strong>
                                    </p>
                                </td>
                                <td>
                                    <p style={{textAlign:"center"}}>
                                    <strong>
                                        Gases
                                    </strong>
                                    </p>
                                </td>
                                <td>
                                    <p style={{textAlign:"center"}}>
                                    <strong>
                                        Química
                                    </strong>
                                    </p>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <p style={{textAlign:"center"}}>
                                    <strong>
                                        Mecánica
                                    </strong>
                                    </p>
                                </td>
                                <td>
                                    <p style={{textAlign:"center"}}>
                                    <strong>
                                        Ecología
                                    </strong>
                                    </p>
                                </td>
                                <td>
                                    <p style={{textAlign:"center"}}>
                                    <strong>
                                        Programación
                                    </strong>
                                    </p>
                                </td>
                                <td>
                                    <p style={{textAlign:"center"}}>
                                    <strong>
                                        Álgebra&nbsp;lineal
                                    </strong>
                                    </p>
                                </td>
                                <td>
                                    <p style={{textAlign:"center"}}>
                                    <strong>
                                        Mercadotecnia
                                    </strong>
                                    </p>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <p style={{textAlign:"justify"}}>
                            <strong>
                                Reserva:
                            </strong>
                            &nbsp;Esta sección es especialmente para los catedráticos, quienes dejan el material que los alumnos deben consultar para fotocopiado; ya sean libros, revistas o documentos. Puedes buscar el material por el nombre del profesor cuando así te lo indique.
                            </p>
                            <p style={{textAlign:"justify"}}>
                            <strong>
                                Catalogo en línea:
                            </strong>
                            &nbsp;La biblioteca cuenta con computadoras al servicio de sus usuarios, éstas tienen el catálogo de la biblioteca en línea y acceso a internet para fines académicos, pueden usarlas cuando así lo requieran.
                            </p>
                            <p style={{textAlign:"justify"}}>
                            <strong>
                                Discos compactos:&nbsp;
                            </strong>
                            Una amplia colección de discos compactos, así como de trabajos elaborados por los estudiantes y académicos en diferentes proyectos, está disponible para su uso dentro de la biblioteca.
                            </p>
                            <p style={{textAlign:"justify"}}>
                            <strong>
                                Horario de atención
                            </strong>
                            </p>
                            <p style={{textAlign:"justify"}}>
                            Lunes a Viernes de 8:00 a 16:00 horas
                            </p>
                            <p style={{textAlign:"justify"}}>
                            Correo electrónico: biblioteca@upchiapas.edu.mx
                            </p>
                            <p style={{textAlign:"justify"}}>
                            <span id="style-QHMtf" className="style-QHMtf">
                                <strong>
                                <a href="https://www.upchiapas.edu.mx/media/270/files/reglamento-biblioteca.pdf">
                                    Reglamento para la Biblioteca de la UPCH
                                </a>
                                </strong>
                            </span>
                            </p>
                        </div>
                        <div className="art-bj8">
                            <h1 className="cen-nr8">
                            Galería
                            </h1>
                            <p className="fec-n4n" />
                            <div className="gal-dva">
                            <div id="style-AB7b9" className="style-AB7b9">
                                <img src="https://www.upchiapas.edu.mx/media/63/images/thumbs/062d1d5e30842a528a4e6070e20944d89cbc9971.jpg" id="style-g91Lk" className="style-g91Lk" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="esp-mwd">
                    </div>
                </div>
                <div className="sec-cck menu-hop">
                    <div id="bg_-ogt" className="style-6Ag8B" />
                    <div className="con-to9">
                    <div className="grid-zqr" style={{width:"100%"}}>
                        <div className="column-3xt">
                        <div className="art-aka">
                            <h1 className="cen-3x8">
                            DAICU
                            </h1>
                            <p className="fec-i11">
                            </p>
                            <h3 id="style-1KISN" className="style-1KISN">
                            Departamento de Atención Integral a la Comunidad Universitaria y Tutorías
                            </h3>
                            <h4 id="style-xnR7K" className="style-xnR7K">
                            Misión
                            </h4>
                            <p id="style-D9kkY" className="style-D9kkY">
                            Desde su origen el DAICU tiene como misión, la transformación &nbsp;de las actitudes y comportamientos que activan directamente la forma de SER, a fin de que las personas se den cuenta que las características personales que requiere &nbsp;su trabajo son las mismas que necesita para el logro de sus &nbsp;propios objetivos, y así llevar un crecimiento que beneficie tanto a la persona como a la Universidad Politécnica de Chiapas.
                            </p>
                            <h4 id="style-JF9mG" className="style-JF9mG">
                            Visión
                            </h4>
                            <p id="style-4WxFk" className="style-4WxFk">
                            El DAICU es un Departamento de la UPChiapas, que implementa una serie de actividades, donde alumn@s, maestr@s y administrativos trabajan en el desarrollo de comportamientos &nbsp;para hacerlos un hábito &nbsp;y lograr el bien HACER, para el bien SER y alcanzar el BIEN ESTAR.
                            </p>
                            <h4 id="style-DhTWV" className="style-DhTWV">
                            Propósito principal
                            </h4>
                            <p id="style-FXzrs" className="style-FXzrs">
                            Fomentar actitudes y comportamientos sanos mediante acciones orientadas al desarrollo integral de la comunidad universitaria en complemento a su formación profesional
                            </p>
                            <h4 id="style-msVXp" className="style-msVXp">
                            Líneas estratégicas de atención:?
                            </h4>
                            <div id="style-gOMmm" className="style-gOMmm">
                            <ul>
                                <li id="style-HxUyO" className="style-HxUyO">
                                Programa Institucional de Salud y Vida Universitaria
                                </li>
                                <li id="style-Wvimq" className="style-Wvimq">
                                Programa Institucional de Cultura y Deporte
                                </li>
                                <li id="style-HqBHH" className="style-HqBHH">
                                Programa Institucional de Alto Rendimiento Deportivo “Selección Jaguares Negros”
                                </li>
                                <li id="style-b9skx" className="style-b9skx">
                                Programa Institucional de Tutorías
                                </li>
                                <li id="style-q6qkS" className="style-q6qkS">
                                Programa Institucional&nbsp; para la Prevención de Actitudes de Riesgo
                                </li>
                                <li id="style-BjioD" className="style-BjioD">
                                Programa Institucional Vinculación Escuela- Familia
                                </li>
                                <li id="style-5w2qF" className="style-5w2qF">
                                Atención Psicológica&nbsp;
                                </li>
                            </ul>
                            <p id="style-8syVp" className="style-8syVp">
                                &nbsp;
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="esp-i44">
                    </div>
                </div>
                <div className="sec-qtj menu-joz">
                    <div id="bg_-fwb" className="style-VIBlf">
                    </div>
                    <div className="con-y94">
                    <div className="grid-cos" style={{width:"100%"}}>
                        <div className="column-88d">
                        <div className="art-hmj">
                            <h1 className="cen-5jt">
                            Estancias y Estadías
                            </h1>
                            <p className="fec-gfz">
                            </p>
                            <ul className="aco-6ll">
                            <li>
                                <p>
                                REQUISITOS:
                                <span>
                                    +
                                </span>
                                </p>
                                <ul id="acu-dy2" className="style-oqr3l">
                                <div className="art-hmj">
                                    <p>
                                    Cumplir con el ciclo de formación de acuerdo a la solicitud para llevar a cabo las estancias sea la uno o dos y/o estadía.
                                    </p>
                                </div>
                                </ul>
                                <ul id="acu-dy2">
                                </ul>
                            </li>
                            <li>
                                <p>
                                DOCUMENTOS SOLICITADOS PARA LA CARTA DE PRESENTACIÓN:
                                <span>
                                    +
                                </span>
                                </p>
                                <ul id="acu-j7y" className="style-nYW7I">
                                <div className="art-hmj">
                                    <ol>
                                    <li>
                                        Solicitud de Estancias y Estadía (firmada por el alumno (a) indicando el periodo en realizar la estancia o estadía (día-mes-año)). (Descargarlo desde el enlace o en formatos).
                                    </li>
                                    <li>
                                        Carta de Exclusión de Responsabilidades (indicar nombre y firma del alumno y tutor familiar). (Descargarlo desde el enlace o en formatos).
                                    </li>
                                    <li>
                                        INE del tutor legal ambos lados (Quién Firmó la Carta de Exclusión).
                                    </li>
                                    <li>
                                        Carnet vigente.
                                    </li>
                                    <li>
                                        Constancia de vigencia de derechos del IMSS.&nbsp; Link de consulta: (
                                        <a href="https://serviciosdigitales.imss.gob.mx/gestionAsegurados- web-externo/vigencia" id="style-vWHBt" className="style-vWHBt">
                                        https://serviciosdigitales.imss.gob.mx/gestionAsegurados- web-externo/vigencia
                                        </a>
                                        ).
                                    </li>
                                    </ol>
                                    <p>
                                    &nbsp;
                                    </p>
                                    <p>
                                    &nbsp;
                                    </p>
                                </div>
                                </ul>
                                <ul id="acu-j7y">
                                </ul>
                            </li>
                            <li>
                                <p>
                                LINK DE CONSULTAS PARA EL CATALOGO DE EMPRESA E INSTITUCIONES:
                                <span>
                                    +
                                </span>
                                </p>
                                <ul>
                                <div className="art-hmj">
                                    <p>
                                    <a href="https://platinum.upchiapas.edu.mx/alumnos/formato/index">
                                        https://platinum.upchiapas.edu.mx/alumnos/formato/index
                                    </a>
                                    </p>
                                </div>
                                </ul>
                                <ul>
                                </ul>
                            </li>
                            <li>
                                <p>
                                LINK DE CONSULTAS PARA VERIFICAR ANTE EL SAT EL RFC DE LA EMPRESA O INSTITUCIÓN:
                                <span>
                                    +
                                </span>
                                </p>
                                <ul>
                                <div className="art-hmj">
                                    <p>
                                    <a href="https://portalsat.plataforma.sat.gob.mx/ConsultaRFC/respuesta.faces">
                                        https://portalsat.plataforma.sat.gob.mx/ConsultaRFC/respuesta.faces
                                    </a>
                                    </p>
                                    <p>                                    
                                    </p>
                                </div>
                                </ul>
                                <ul>
                                </ul>
                            </li>
                            <li>
                                <p>
                                PERIODO DEL TRÁMITE DE LAS ESTANCIAS Y/O ESTADÍA
                                <span>
                                    +
                                </span>
                                </p>
                                <ul>
                                <div className="art-hmj">
                                    <p>
                                    Consulta el Calendario de Actividades de las Estancias y/o Estadía.
                                    </p>
                                    <p>
                                    <img src="https://www.upchiapas.edu.mx/media/60/images/CALENDARIO%20estancias%20y%20estad%C3%ADa%202023.jpg" id="style-MeNBy" className="style-MeNBy" />
                                    </p>
                                </div>
                                </ul>
                                <ul>
                                </ul>
                            </li>
                            <li>
                                <p>
                                PROCESO Y DURACIÓN DEL TRÁMITE EN EL SISTEMA PLATINUM DE LA SOLICITUD PARA LA CARTA DE PRESENTACIÓN:
                                <span>
                                    +
                                </span>
                                </p>
                                <ul>
                                <div className="art-hmj">
                                    <p>
                                    Una vez requisitado los campos que se solicitan para la carta de presentación deberán guardar la información proporcionada y estar al pendiente tanto en correo electrónico institucional (por si tiene algún detalle en su trámite o en el módulo de acuerdo a la solicitud por si fue aprobado o rechazado por el tutor académico).
                                    </p>
                                    <p>
                                    El tiempo es de 03 a 05 días hábiles para la revisión de los documentos del área de estancias y estadía posteriormente la aprobación por el tutor académico.
                                    </p>
                                </div>
                                </ul>
                                <ul>
                                </ul>
                            </li>
                            <li>
                                <p>
                                ENTREGA DE LA CARTA DE PRESENTACIÓN:
                                <span>
                                    +
                                </span>
                                </p>
                                <ul>
                                <div className="art-hmj">
                                    <p>
                                    Una vez aprobado por el tutor académico se habilitará en el sistema Platinum en el módulo de estancias y estadía de acuerdo a la solicitud el icono de la impresión para la carta de presentación vía digital.
                                    </p>
                                    <p>
                                    
                                    </p>
                                </div>
                                </ul>
                                <ul>
                                </ul>
                            </li>
                            <li>
                                <p>
                                ATENCIÓN:
                                <span>
                                    +
                                </span>
                                </p>
                                <ul>
                                <div className="art-hmj">
                                    <p>
                                    Cualquier detalle marcar al 9616171460 ext. 50124, en un horario de 09:00 a 15:00 horas.
                                    </p>
                                    <p>
                                    Correo Electrónico: 
                                    <a href="mailto:estanciasyestadias@upchiapas.edu.mx">
                                        estanciasyestadias@upchiapas.edu.mx
                                    </a>
                                    </p>
                                    <p>
                                    Indicando los siguientes: nombre completo, matrícula, carrera y el asunto a revisar.
                                    </p>
                                    <p>
                                    Lic. Azucena Pérez Meléndez
                                    </p>
                                    <p>
                                    Quedo atenta
                                    </p>
                                </div>
                                </ul>
                                <ul>
                                </ul>
                            </li>
                            <li>
                                <p>
                                DESCRIPCIÓN DEL PROCEDIMIENTO:
                                <span>
                                    +
                                </span>
                                </p>
                                <ul>
                                <div className="art-hmj">
                                    <table width="100%">
                                    <thead>
                                        <tr>
                                        <th id="style-5e5Yl" className="style-5e5Yl">
                                            Secuencia de etapas
                                        </th>
                                        <th id="style-Baj6q" className="style-Baj6q">
                                            Responsable
                                        </th>
                                        <th id="style-VroYA" className="style-VroYA">
                                            Actividades
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td id="style-al4c1" className="style-al4c1">
                                            1
                                        </td>
                                        <td id="style-B2IY3" className="style-B2IY3">
                                            Dirección de Vinculación Universitaria
                                        </td>
                                        <td id="style-xdSaD" className="style-xdSaD">
                                            La Dirección de Vinculación Universitaria Activa en el Sistema Platinum el Módulo de las estancias y/o Estadía de acuerdo al Calendario de Actividades para las solicitudes, autorizado por la Secretaria Académica.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-D6lCq" className="style-D6lCq">
                                            2
                                        </td>
                                        <td id="style-NH9XB" className="style-NH9XB">
                                            Dirección de Vinculación Universitaria
                                        </td>
                                        <td id="style-GC7TP" className="style-GC7TP">
                                            La Dirección de Vinculación Universitaria actualiza el catálogo de empresas para las y los alumnos (as), con Vo. Bo. de los Programas Educativos.&nbsp; La Dirección de Vinculación Universitaria vincula las Estancias y Estadía correspondientes, ante las instituciones o empresas públicos y/o privadas.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-4AIe8" className="style-4AIe8">
                                            3
                                        </td>
                                        <td id="style-5WCUs" className="style-5WCUs">
                                            Alumno (a)
                                        </td>
                                        <td id="style-E8Zjt" className="style-E8Zjt">
                                            El / la alumno (a) consulta en el PLATINUM, los requisitos y trámites correspondientes para realizar las estancias y/o estadía.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-7INqn" className="style-7INqn">
                                            4
                                        </td>
                                        <td id="style-1e914" className="style-1e914">
                                            Alumno (a)
                                        </td>
                                        <td id="style-KZSxX" className="style-KZSxX">
                                            El / la alumno (a) consulta en el PLATINUM, el catálogo de empresas. 
                                            <a href="https://platinum.upchiapas.edu.mx/alumnos/formato/index" id="style-7tnnD" className="style-7tnnD">
                                            https://platinum.upchiapas.edu.mx/alumnos/formato/index
                                            </a>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-n6f47" className="style-n6f47">
                                            5
                                        </td>
                                        <td id="style-vMqMY" className="style-vMqMY">
                                            Alumno (a)
                                        </td>
                                        <td id="style-N1lFD" className="style-N1lFD">
                                            El / la alumno (a) solicita y consulta el RFC de la empresa o institución a través del Portal del SAT si se encuentra constituida en el siguiente Link:&nbsp; 
                                            <a href="https://portalsat.plataforma.sat.gob.mx/ConsultaRFC/respuesta.faces" id="style-bhINN" className="style-bhINN">
                                            https://portalsat.plataforma.sat.gob.mx/ConsultaRFC/respuesta.faces
                                            </a>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-nfc9B" className="style-nfc9B">
                                            6
                                        </td>
                                        <td id="style-cecwT" className="style-cecwT">
                                            Dirección de Vinculación Universitaria y Alumno (a)
                                        </td>
                                        <td id="style-dFGby" className="style-dFGby">
                                            En coordinación la Dirección de Vinculación Universitaria apoya a él / la alumno (a) dando a conocer las empresas que se encuentran en el catálogo para la solicitud de las estancias y/o estadía. Él / la alumno (a) indica la información de los datos de la empresa o institución donde realizará las estancias y/o estadía a través de la solicitud y carta de exclusión de responsabilidades.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-ZIGWk" className="style-ZIGWk">
                                            7
                                        </td>
                                        <td id="style-Xfe7H" className="style-Xfe7H">
                                            Alumno (a)
                                        </td>
                                        <td id="style-Ajism" className="style-Ajism">
                                            El / la alumno (a) solicita a través del Sistema Platinum a la DVU la Carta de Presentación para realizar las estancias y/o estadía Descarga, firma y adjunta en pdf los siguientes documentos: Solicitud de Estancias y Estadía, Carta de Exclusión de Responsabilidad, Identificación Oficial con fotografía del Padre o Tutor Legal ambos lados, Carnet de la Institución, Copia de constancia de vigencia de derechos (indicando que si cuenta con derecho al servicio médico).
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-D5WCf" className="style-D5WCf">
                                            8
                                        </td>
                                        <td id="style-rhCee" className="style-rhCee">
                                            Dirección de Vinculación Universitaria
                                        </td>
                                        <td id="style-YKesI" className="style-YKesI">
                                            La Dirección de Vinculación Universitaria consulta en el Sistema PLATINUM, las solicitudes de los alumnos (as) previo autorizado para realizar las estancias o estadía.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-NSSIk" className="style-NSSIk">
                                            9
                                        </td>
                                        <td id="style-JAVAp" className="style-JAVAp">
                                            Dirección de Vinculación Universitaria
                                        </td>
                                        <td id="style-sZZ9d" className="style-sZZ9d">
                                            La Dirección de Vinculación Universitaria verifica en el Sistema Platinum los documentos adjuntos por los alumnos (as) y procesa la solicitud. Procesa la solicitud en el Sistema Platinum el Sistema le notifica por correo electrónico al Tutor Académico para la autorización de la solicitud.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-1yJLX" className="style-1yJLX">
                                            10
                                        </td>
                                        <td id="style-LES9R" className="style-LES9R">
                                            Tutor Académico
                                        </td>
                                        <td id="style-6g5aC" className="style-6g5aC">
                                            El Tutor Académico recibe la notificación e ingresa al Sistema Platinum al módulo de las estancias y/o estadía, consulta las solicitudes y verifica si el / la alumno (a) cumple con el ciclo de formación correspondiente a las estancias y/o estadía. Así como si la empresa o institución indicada en la solicitud por el / la alumno (a) cumple con el perfil académico para la aprobación.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-LgBSr" className="style-LgBSr">
                                            11
                                        </td>
                                        <td id="style-aEYFo" className="style-aEYFo">
                                            Tutor Académico
                                        </td>
                                        <td id="style-2koQI" className="style-2koQI">
                                            El Tutor Académico verifica y aprueba la solicitud e inmediatamente se refleja la carta de presentación en el Sistema Platinum para la impresión. O El Tutor Académico verifica y rechaza la solicitud indicando las observaciones en el Sistema Platinum.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-dUKBS" className="style-dUKBS">
                                            12
                                        </td>
                                        <td id="style-3y3P9" className="style-3y3P9">
                                            Alumno (a)
                                        </td>
                                        <td id="style-XBIVH" className="style-XBIVH">
                                            Si es Aprobado; El / la alumno (a) recibe por el Sistema Platinum la carta de presentación solicitada imprime y hace entrega al organismo receptor (digital) o físico.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-zkV2v" className="style-zkV2v">
                                            13
                                        </td>
                                        <td id="style-cieNo" className="style-cieNo">
                                            Alumno (a)
                                        </td>
                                        <td id="style-vFQkn" className="style-vFQkn">
                                            Si es Rechazado; El / la alumno (a) recibe por el Sistema Platinum la notificación y se deberá de dirigir con él tutor académico para darle el seguimiento correspondiente.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-sp9pZ" className="style-sp9pZ">
                                            14
                                        </td>
                                        <td id="style-tdwkW" className="style-tdwkW">
                                            Alumno (a)
                                        </td>
                                        <td id="style-xAgJw" className="style-xAgJw">
                                            El / la alumno (a), puede solicitar cambio de empresa, siempre y cuando la empresa o institución no cumplan con el desarrollo de las actividades de acuerdo a los ciclos de formación.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-QNsas" className="style-QNsas">
                                            15
                                        </td>
                                        <td id="style-Phxiy" className="style-Phxiy">
                                            Alumno (a) y Asesor (a) Laboral
                                        </td>
                                        <td id="style-tCVYZ" className="style-tCVYZ">
                                            El / la alumno (a) y el/ la Asesor (a) Laboral, Realizan el desarrollo de la 
                                            <strong>
                                            estancia
                                            </strong>
                                            correspondiente a través del registro.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-NyQ4g" className="style-NyQ4g">
                                            16
                                        </td>
                                        <td id="style-ePJvG" className="style-ePJvG">
                                            Alumno (a) y Asesor (a) Laboral
                                        </td>
                                        <td id="style-MygxR" className="style-MygxR">
                                            El / la alumno (a) y el/ la Asesor (a) Laboral, Realizan el desarrollo de la 
                                            <strong>
                                            estadía
                                            </strong>
                                            correspondiente a través del registro.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-DX6h5" className="style-DX6h5">
                                            17
                                        </td>
                                        <td id="style-QFsPc" className="style-QFsPc">
                                            Asesor (a) Laboral
                                        </td>
                                        <td id="style-kgkSw" className="style-kgkSw">
                                            El/ la Asesor (a) Laboral, elabora carta de aceptación, terminación y requisita registro de asesor laboral de la 
                                            <strong>
                                            estancia
                                            </strong>
                                            según corresponda y entrega al alumno (a).
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-ojo5Z" className="style-ojo5Z">
                                            18
                                        </td>
                                        <td id="style-v8ylh" className="style-v8ylh">
                                            Asesor (a) Laboral
                                        </td>
                                        <td id="style-oaVzd" className="style-oaVzd">
                                            El/ la Asesor (a) Laboral, elabora carta de aceptación, terminación y requisita registro de asesor laboral de la 
                                            <strong>
                                            estadía
                                            </strong>
                                            y entrega al alumno (a).
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-b76mt" className="style-b76mt">
                                            19
                                        </td>
                                        <td id="style-1ADgk" className="style-1ADgk">
                                            Alumno (a)
                                        </td>
                                        <td id="style-vwAZT" className="style-vwAZT">
                                            El / la alumno (a) recibe registro del formato de asesor laboral, carta de aceptación y liberación de las estancias o estadía según corresponda. El alumno (a) Adjunta en el Sistema Platinum de acuerdo a la solicitud en el campo correspondiente los documentos para la revisión; y le proporciona copia para su cotejo al Asesor (a) Académico(a).
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-g4oSk" className="style-g4oSk">
                                            20
                                        </td>
                                        <td id="style-SFRbO" className="style-SFRbO">
                                            Alumno (a) y Dirección Servicios Académicos
                                        </td>
                                        <td id="style-7AYkX" className="style-7AYkX">
                                            El / la alumno (a) se inscribe desde el Sistema Platinum y carga la materia de 
                                            <strong>
                                            estancia I o II
                                            </strong>
                                            según corresponda en el módulo de Servicios Escolares.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-UjH1P" className="style-UjH1P">
                                            21
                                        </td>
                                        <td id="style-DpHAF" className="style-DpHAF">
                                            Alumno (a) y Dirección Servicios Académicos
                                        </td>
                                        <td id="style-wMJyl" className="style-wMJyl">
                                            El / la alumno (a) se inscribe desde el Sistema Platinum y carga la materia de 
                                            <strong>
                                            estadía
                                            </strong>
                                            en el módulo de Servicios Escolares.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-zfvoo" className="style-zfvoo">
                                            22
                                        </td>
                                        <td id="style-viyrf" className="style-viyrf">
                                            Asesor (a) Académico (a) (Titular de la Materia)
                                        </td>
                                        <td id="style-UTR1e" className="style-UTR1e">
                                            El / la Asesor (a) Académico (a) recibe del (a) alumno (a) el formato de asesor laboral para su cotejo y evalúa la 
                                            <strong>
                                            estancia I o II
                                            </strong>
                                            según corresponda, mediante Registro del (a) Asesor (a) Académico (a) y registra la calificación correspondiente en el PLATINUM.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-lrxgP" className="style-lrxgP">
                                            23
                                        </td>
                                        <td id="style-O7oof" className="style-O7oof">
                                            Asesor (a) Académico (a) (Titular de la Materia)
                                        </td>
                                        <td id="style-SMUql" className="style-SMUql">
                                            El / la Asesor (a) Académico (a) recibe del (a) alumno (a) el formato de asesor laboral para su cotejo y evalúa la 
                                            <strong>
                                            estadía
                                            </strong>
                                            , mediante Registro del (a) Asesor (a) Académico (a) y registra la calificación correspondiente en el PLATINUM.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-XT28V" className="style-XT28V">
                                            24
                                        </td>
                                        <td id="style-hwwL8" className="style-hwwL8">
                                            Dirección de Vinculación Universitaria
                                        </td>
                                        <td id="style-VLV1U" className="style-VLV1U">
                                            La Dirección de Vinculación Universitaria verifica del (a) alumno (a) los documentos adjuntos en el Sistema Platinum de conclusión de las Estancia o Estadía, para la liberación correspondiente.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-6KdY8" className="style-6KdY8">
                                            25
                                        </td>
                                        <td id="style-Tte9d" className="style-Tte9d">
                                            Dirección de Vinculación Universitaria
                                        </td>
                                        <td id="style-yOA9J" className="style-yOA9J">
                                            La Dirección de Vinculación Universitaria mediante solicitud informa del Seguimiento de las Estancias y Estadías, y envía a las áreas correspondientes.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-X5I9j" className="style-X5I9j">
                                            26
                                        </td>
                                        <td id="style-gxT67" className="style-gxT67">
                                            Alumno (a)
                                        </td>
                                        <td id="style-kAToX" className="style-kAToX">
                                            El / la alumno (a) recibe y adjunta al Sistema Platinum el Formato del Asesor Académico de la 
                                            <strong>
                                            estancia
                                            </strong>
                                            según corresponda.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-F9OVR" className="style-F9OVR">
                                            27
                                        </td>
                                        <td id="style-p7fta" className="style-p7fta">
                                            Alumno (a)
                                        </td>
                                        <td id="style-28ozN" className="style-28ozN">
                                            El / la alumno (a) recibe y adjunta al Sistema Platinum el Formato del Asesor Académico de la 
                                            <strong>
                                                estadía
                                            </strong>
                                            .
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-X1R8q" className="style-X1R8q">
                                            28
                                        </td>
                                        <td id="style-3svGR" className="style-3svGR">
                                            Alumno (a)
                                        </td>
                                        <td id="style-HZSFI" className="style-HZSFI">
                                            El / la alumno (a) realiza en el PLATINUM la evaluación al servicio de las estancias y estadía.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-G2yXw" className="style-G2yXw">
                                            29
                                        </td>
                                        <td id="style-QoFZ3" className="style-QoFZ3">
                                            Dirección de Vinculación Universitaria
                                        </td>
                                        <td id="style-de1nD" className="style-de1nD">
                                            La Dirección de Vinculación Universitaria realiza la liberación a través del Sistema PLATINUM de las estancias y estadía de los alumnos que concluyeron satisfactoriamente dicho proceso.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-a7fY2" className="style-a7fY2">
                                            30
                                        </td>
                                        <td id="style-Cw6Vy" className="style-Cw6Vy">
                                            Alumno (a)
                                        </td>
                                        <td id="style-BsbZt" className="style-BsbZt">
                                            El / la alumno (a) debe estar al pendiente en su correo electrónico institucional por algún detalle con su trámite de liberación, así como en el sistema Platinum para la notificación de la liberación de las estancias o estadía según corresponda la solicitud.
                                        </td>
                                        </tr>
                                        <tr>
                                        <td id="style-o6lkt" className="style-o6lkt">
                                            31
                                        </td>
                                        <td id="style-Mpprg" className="style-Mpprg">
                                            Dirección de Vinculación Universitaria
                                        </td>
                                        <td id="style-BHXi2" className="style-BHXi2">
                                            La Dirección de Vinculación Universitaria después de liberar la estadía, automáticamente el sistema PLATINUM le proporciona la Constancia de Liberación de la Estadía para llevar a cabo el trámite de titulación.
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </ul>
                                <ul>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="esp-x2c">
                    </div>
                </div>                
            </main>
            <Footer />
        </>
    );
}