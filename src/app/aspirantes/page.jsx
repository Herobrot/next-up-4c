import { Footer } from "../../../components/Pie";
import "./aspirantes.css"
import Link from "next/link"

export default function Aspirantes(){
    return(
        <>
            <div id="sidebar">
                <h2>Aspirantes</h2>
                <ul class="sidebar-menu">
                    <li>
                        <Link href="#resultados">Resultados Examen de Admisión 2023</Link>
                    </li>
                    <li>
                        <Link href="#convocatoria">Convocatoria 2023</Link>
                    </li>
                    <li>
                        <Link href="">Procedimiento de Inscripción Nuevo Ingreso 2023</Link>
                    </li>
                    <li>
                        <Link href="">Indicaciones Inscripción UPChiapas 2023</Link>
                    </li>
                    <li>
                        <Link href="#politica">Política de Selección</Link>
                    </li>
                    <li>
                        <Link href="#proceso">Proceso de Ficha de Nuevo Ingreso</Link>
                    </li>
                    <li>
                        <Link href="#perfil">Perfil de Ingreso</Link>
                    </li>
                    <li>
                        <Link href="#opciones">Opción de titulación Licenciatura</Link>
                    </li>
                    <li>
                        <Link href="#requisitosDeInscripcion">Requisitos de Ingreso a inscrpición</Link>
                    </li>
                    <li>
                        <Link href="">Preguntas Frecuentes</Link>
                    </li>
                    <li>
                        <Link href="">Revalidación/Equivalencia</Link>
                    </li>
                </ul>
            </div>
            <main>
                <div id="resultados">
                    <h1>Resultados Examen de Admisión 2023</h1>
                    <p class="separador"></p>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{width: "50%;"}}>
                                    <h2 style={{textAlign: "center;"}}>Primer Cuatrimestre</h2>
                                    <ul>
                                        <li>
                                            <Link href="">Ingeniería en Mecatrónica</Link>
                                        </li>
                                        <li>
                                            <Link href="">Ingeniería Agroindustrial</Link>
                                        </li>
                                        <li>
                                            <Link href="">Ingeniería Biomédica</Link>
                                        </li>
                                        <li>
                                            <Link href="">Ingeniería en Energía</Link>
                                        </li>
                                        <li>
                                            <Link href="">Ingeniería en Tecnología Ambiental</Link>
                                        </li>
                                        <li>
                                            <Link href="">Ingeniería en Tecnologías de Manufacturas</Link>
                                        </li>
                                        <li>
                                            <Link href="">Ingeniería en Nanotecnologías</Link>
                                        </li>
                                        <li>
                                            <Link href="">Ingeniería en Petrolera</Link>
                                        </li>
                                        <li>
                                            <Link href="">Ingeniería en Software</Link>
                                        </li>
                                        <li>
                                            <Link href="">Ingeniería en Administración y Gestión Empresarial</Link>
                                        </li>
                                    </ul>
                                </td>
                                <td style={{width: "50%;"}}>
                                    <h2 style={{textAlign: "center;"}}>Pre Universitario</h2>
                                    <ul>
                                        <li>
                                            <Link href="">Ingeniería en Mecatrónica</Link>
                                        </li>
                                        <li>
                                            <Link href="">Ingeniería Biomédica</Link>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="convocatoria">
                    <h1>Convocatoria 2023</h1>
                    <p class="separador"></p>
                    <p>&nbsp;</p>
                    <center>
                        <img src="/Convocatoria2023.jpg" alt="Convocatoria2023" srcset="" />
                    </center>
                    <br /><br /><br />
                    <h1>Galería</h1>
                    <p class="separador"></p>
                    <div>
                        <img src="/Convocatoria2023.jpg" alt="Convocatoria2023min" />
                    </div>
                </div>
                <div id="politica">
                    <h1>Política de Selección</h1>
                    <p class="separador"></p>
                    <span>
                        La política institucional para la selección de estudiantes de la Universidad Politécnica de Chiapas es dar cabida al mayor número de alumnos con base en la capacidad del programa académico y de la Institución (infraestructura, docentes, presupuesto, entre otras). Para ello, desde el registro de los aspirantes, se les solicita indicar dos programas académicos de su preferencia de tal forma que el aspirante, sin distinción de origen, género, religión, orientación sexual, condición socioeconómica o necesidades educativas especiales, cuente con las siguientes opciones de ingreso de acuerdo al puntaje obtenido en el examen de admisión EXANI II CENEVAL que son: ingreso a primer cuatrimestre de su primera opción; ingreso a curso preuniversitario de su primera opción; ingreso a primer cuatrimestre de su segunda opción; ingreso a curso preuniversitario de su segunda opción.
                    </span>
                </div>
                <div id="proceso">
                    <h1>Proceso de Ficha de Nuevo Ingreso</h1>
                    <p class="separador"></p>
                    <center>
                        <img src="/proceso2023.png" alt="procesoFicha2023" srcset="" />
                    </center>
                </div>
                <div id="perfil">
                    <h1>Perfil de Ingreso</h1>
                    <p class="separador"></p>
                    <p>
                        Para ingenierías el aspirante deberá tener las habilidades en las áreas de pensamiento matemático y analítico, estructura de la lengua y comprensión lectora; así también contar con las competencias básicas de matemáticas, física, inglés y lenguaje escrito. <br /><br />

                        Para ingreso a licenciatura, el aspirante deberá tener las habilidades en las áreas de Economía-Administración, Estadística, inglés, pensamiento crítico, estructura de la lengua y comprensión lectora.
                    </p>
                </div>
                <div id="opcion">
                    <h1>Opción de titulación Licenciatura</h1>
                    <p class="separador"></p>
                    <p>
                        La opción de titulación es automática, única y corresponde a la realización y conclusión satisfactoria de la Estadía Profesional, acorde a los lineamientos específicos, establecidos en el plan de estudios de cada programa académico, al obtener el 100% de los créditos. Cuando se concluye, la estadía, la Universidad extenderá el acta de exención de examen profesional.
                    </p>
                </div>
                <div id="requisitosDeIngreso">
                    <h1>Requisitos de ingreso e inscripción</h1>
                    <p class="separador"></p>
                    <p>Para ingresar a los estudios superiores a nivel licenciatura se requiere:</p>
                    <ol>
                        <li>Haber aprobado en su totalidad el plan de estudios del nivel medio superior;</li>
                        <li>Cubrir los requisitos señalados en la convocatoria y, en su caso, instructivos que al efecto emita la Universidad;</li>
                        <li>Ser aceptado mediante la evaluación de selección que al efecto tenga establecida la Universidad, y</li>
                        <li>Presentar certificado original de estudios de educación media superior. (En caso de no contar con el certificado, deberá presentar Constancia de terminación de estudios o carta que acredite los estudios de bachillerato, en lo que obtiene el certificado).</li>
                        <li>Solicitud de inscripción con fotografía tamaño infantil y Formato Carta de Consentimiento, firmado por el tutor y aspirante.</li>
                        <li>Acta de nacimiento</li>
                        <li>Certificado médico actualizado que indique grupo sanguíneo, emitido por una institución pública (Cruz Roja, IMSS, SSA, ISSTE, ISSTECH).</li>
                        <li>CURP (formato actual con código QR) <Link href="https://www.gob.mx/curp/">https://www.gob.mx/curp/</Link></li>
                        <li>Copia identificación</li>
                        <li>Cubrir las cuotas establecidas por la Universidad.</li><br />
                        <b>Fechas de inscripción:</b><br /><br />
                        <p>De acuerdo a datos publicados en la convocatoria correspondiente.</p>
                    </ol>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}