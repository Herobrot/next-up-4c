"use client"

import { useState } from "react"
import "./egresados.css"
import Link from "next/link"
import { Footer } from "../../../components/Pie"

export default function Egresados(){
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

    return(
        <>
            <main>
                <div id="sidebar">
                    <h2>EGRESADOS</h2>
                    <ul className="sidebar-menu">
                        <li>
                            <Link href="#titulacion">Titulación Posgrado</Link>
                        </li>
                        <li>
                            <Link href="#licenciatura">Titulación Licenciatura</Link>
                        </li>
                    </ul>
                </div>
                <div id="titulacion">
                    <h1>Titulación Posgrado</h1>
                    <p className="separador"></p>
                    <div className="dropdown">
                        <div className={show1 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow1(!show1);
                        }}>
                            <span className="selected">Requisitos</span>
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
                        <div className={show2 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow2(!show2);
                        }}>
                            <span className="selected">Documentación para Titulación</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show2 ? "menu" : "menu-open"}>
                            <div>
                            <ol>
                                <li>
                                    Formato “solicitud de servicio” previamente requisitado, (indicar en el espacio de observaciones el email y número de celular de manera legible).
                                </li>
                                <li>
                                    Formato de pago referenciado (generado en Platinum).
                                </li>
                                <li>
                                    Comprobante de pago en original. Si el pago es por transferencia bancaria SPEI deberá el comprobante Electrónico de Pago (CEP) de Banxico el cual podrá descargar en <Link href="https://www.banxico.org.mx/cep/">https://www.banxico.org.mx/cep/</Link>
                                </li>
                                <li>
                                    CURP actualizada impresa en tamaño carta (en formato que contenga código QR, ampliada preferentemente a 130%).
                                </li>
                                <li>
                                    Título de Licenciatura original y copia.
                                </li>
                                <li>
                                    Certificado de Estudios de Licenciatura. original y copia.
                                </li>
                                <li>
                                    Acta de Examen de Grado original y copia.
                                </li>
                                <li>
                                    Cédula Profesional de Licenciatura. copia. 
                                </li>
                                <li>
                                    CURP actualizada impresa en tamaño carta (nuevo formato que contenga código QR).
                                </li>
                                <li>
                                    Formato de No adeudo (se tramita en la plataforma Platinun, sección Trámites en línea y se descarga una vez que se haya autorizado).
                                </li>
                                <li>
                                    Acta de nacimiento reciente (actualizado, puede ser acta de nacimiento tramitado electrónicamente con sello digital, (original y copia).
                                </li>
                                <li>
                                    Copia de identificación Oficial (la copia deberá contener ambos lados de la credencial).
                                </li>
                                <li>
                                    Boleta vigente de TOEFL IPT institucional o equivalente internacional reconocido TOEFL IBT, acreditados y apegados a los procedimientos de la Coordinación de Inglés.
                                </li>
                                <li>Fotografías paquete para trámite de titulación (revisar especificaciones):
                                    <ol>
                                        <li>
                                            3 fotografías para TÍTULO.
                                        </li>
                                        <li>
                                            3 fotografías para CERTIFICADO.
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show3 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow3(!show3);
                        }}>
                            <span className="selected">Especificaciones fotográficas</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show3 ? "menu" : "menu-open"}>
                            <div>
                            <b>Características generales</b>
                            <ol>
                                <li>Fotografías recientes</li>
                                <li>De estudio (no instantáneas)</li>
                                <li>Blanco y negro</li>
                                <li>De frente</li>
                                <li>Fondo blanco</li>
                                <li>Papel mate (con retoque)</li>
                                <li>Auto-adheribles</li>
                                <li>Sin lentes</li>
                                <li>Frente y orejas descubiertas (evitar el cabello en los hombros)</li>
                                <li>Traje oscuro y camisa o blusa lisa de color blanca</li>
                                <li>No piercing nariz, orejas, labios</li>
                            </ol>
                            <b>Ejemplo fotografía</b>
                            <br /><br />
                            <b>Para TÍTULO</b>
                            <ol>
                                <li>Tamaño título</li>
                                <li>Óvalo</li>
                                <li><img src="/ovalo-fotografia.png" alt="ovalo" srcset="" /></li>
                            </ol>
                            <br />
                            <b>Para CERTIFICADO</b>
                            <ol>
                                <li>Tamaño infantil</li>
                                <li>Cuadrada</li>
                                <li><img src="/cuadrada-fotografia.png" alt="cuadrado" srcset="" /></li>
                            </ol>
                            <br />
                            <b>SUGERENCIAS DE VESTIMENTA</b>
                            <br /><br />
                            <b>Hombres</b><br />
                            <ol>
                                <li>Vestir camisa blanca, lisa, saco y corbata de color obscuro.</li>
                                <li>Sin aretes</li>
                                <li>Si es el caso, el bigote o la barba deben estar bien delineados, que en la fotografía no se vea sobre expuesta a la cara, sino natural.</li>
                            </ol>
                            <br />
                            <b>Mujeres</b>
                            <ol>
                                <li>Vestir blusa blanca, sin estampado, sin escote, saco de color obscuro.</li>
                                <li>El maquillaje se sugiere lo más natural posible, discreto. </li>
                                <li>En caso de utilizar aretes que sean pequeños.</li>
                            </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show4 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow4(!show4);
                        }}>
                            <span className="selected">Periodo de Trámite de Titulación</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show4 ? "menu" : "menu-open"}>
                            <div>
                            <b>
                                De acuerdo a las fechas especificadas en el calendario escolar vigente, el trámite se realiza en los meses de Enero, Mayo y Septiembre de cada año.
                            </b>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show5 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow5(!show5);
                        }}>
                            <span className="selected">Duración del Trámite de la Titulación</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show5 ? "menu" : "menu-open"}>
                            <div>
                            <b>9 meses</b><br /><br />
                            <b>NOTA</b><br /><br />
                            <b>En caso de que el interesado (a) no pueda asistir al trámite de inicio de titulación, podrá ir un propio con la documentación correspondiente, en el orden que se indica en el apartado de documentación, siempre y cuando tenga cita agendada en Platinum. 
                            </b>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show6 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow6(!show6);
                        }}>
                            <span className="selected">Entrega de Títulos y Documentación</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show6 ? "menu" : "menu-open"}>
                            <div>
                            <b>
                                Para la entrega de título y documentación se agenda cita en la Plataforma Platinum, en fechas y horarios disponibles, presentando los siguientes documentos:
                            </b><br /><br />
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
                            <br /><br />
                            <ol style={{listStyle: "lower-alpha;"}}>
                                <li>Carta poder con firmas autógrafas, dirigida al departamento de Servicios Escolares y Biblioteca de la Universidad Politécnica de Chiapas.</li>
                                <li>Original y Copia fotostática de la identificación oficial vigente del interesado y de la persona a quien se le otorga el poder, así como de un testigo.</li>
                                <li>Comprobante de domicilio reciente del interesado (recibo de luz, agua o teléfono).</li>
                            </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show7 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow7(!show7);
                        }}>
                            <span className="selected">Costos</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show7 ? "menu" : "menu-open"}>
                            <div>
                            <b>El costo de trámite de titulación vigente, indicado en el formato de pago referenciado. El costo incluye:</b>
                            <ol>
                                <li>Título Profesional de Grado físico</li>
                                <li>Registro de Título Profesional de Grado Electrónico.</li>
                                <li>Acta de Exención de Examen de Grado.</li>
                                <li>Certificado Total de Estudios.</li>
                                <li>Carpeta de egresado.</li>
                            </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show8 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow8(!show8);
                        }}>
                            <span className="selected">Atención de Dudas</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show8 ? "menu" : "menu-open"}>
                            <div>
                            <b>ATENCION DE DUDAS</b>
                            <br /><br />
                            <b>En el correo de <Link href={"titulacion@upchiapas.edu.mx"}>titulacion@upchiapas.edu.mx</Link>, indicando los siguientes datos: nombre completo, matrícula, carrera y detallar el apoyo que requiere.</b>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show9 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow9(!show9);
                        }}>
                            <span className="selected">Descripción del Procedimiento</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show9 ? "menu" : "menu-open"}>
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
                                    <td><p align="center">Departamento de Servicios Escolares y biblioteca</p></td>
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
                <div id="licenciatura">
                    <h1>Titulación Licenciatura</h1>
                    <p className="separador"></p>
                    <div className="dropdown">
                        <div className={show10 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow10(!show10);
                        }}>
                            <span className="selected">Requisitos</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show10 ? "menu" : "menu-open"}>
                            <div>
                                <ol>
                                    <li>
                                        Acreditar el 100% de las asignaturas contemplados en el plan de estudios.
                                    </li>
                                    <li>
                                        Acreditar 600 horas de Estadía y presentar la Constancia de Liberación.
                                    </li>
                                    <li>
                                        Acreditar 120 horas de Estancia 1 y 2, respectivamente.
                                    </li>
                                    <li>
                                        Estar al corriente en el pago de las cuotas y sin adeudo de carácter administrativo.
                                    </li>
                                    <li>
                                        Boleta vigente de TOEFL IPT institucional o equivalente internacional reconocido TOEFL IBT, acreditados y apegados a los procedimientos de la Coordinación de Inglés.
                                    </li>
                                    <li>
                                        Cubrir los gastos de titulación.
                                    </li>
                                    <li>
                                        Tener vigente E.FIRMA (se tramita ante SAT, y se utilizará posterior a tu proceso de trámite de Titulación, una vez que se te indique).
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show11 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow11(!show11);
                        }}>
                            <span className="selected">Documentación para Titulación</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show11 ? "menu" : "menu-open"}>
                            <div>
                            <ol>
                                <li>
                                    Formato “solicitud de servicio” previamente requisitado, (indicar en el espacio de observaciones el email y número de celular de manera legible).
                                </li>
                                <li>
                                    Formato de pago referenciado (generado en Platinum).
                                </li>
                                <li>
                                    Comprobante de pago en original. Si el pago es por transferencia bancaria SPEI deberá el comprobante Electrónico de Pago (CEP) de Banxico el cual podrá descargar en <Link href="https://www.banxico.org.mx/cep/">https://www.banxico.org.mx/cep/</Link>
                                </li>
                                <li>
                                    CURP actualizada impresa en tamaño carta (en formato que contenga código QR, ampliada preferentemente a 130%).
                                </li>
                                <li>
                                    Certificado de Nivel Medio Superior (bachillerato legalizado si es de preparatorias estatales, privadas. Las federalizadas no requieren de este trámite).
                                </li>
                                <li>
                                    Formato de No adeudo (se tramita en la plataforma Platinun, sección Trámites en línea y se descarga una vez que se haya autorizado).
                                </li>
                                <li>
                                    Acta de nacimiento reciente actualizado, puede ser acta de nacimiento tramitado electrónicamente con sello digital, (original y copia).
                                </li>
                                <li>
                                    Copia de identificación Oficial (la copia deberá contener ambos lados de la credencial).
                                </li>
                                <li>
                                    Constancia de liberación de estadía (original y copia). 
                                </li>
                                <li>
                                    Boleta vigente de TOEFL IPT institucional o equivalente internacional reconocido TOEFL IBT, acreditados y apegados a los procedimientos de la Coordinación de Inglés.
                                </li>
                                <li>Fotografías paquete para trámite de titulación (revisar especificaciones):
                                    <ol>
                                        <li>
                                            3 fotografías para TÍTULO.
                                        </li>
                                        <li>
                                            6 fotografías para CERTIFICADO.
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                            <p id="notaDropdown">
                                NOTA: Para dar inicio al trámite, es necesario cumplir con la totalidad los requisitos, documentación y especificaciones, de lo contrario no se podrá hacer el trámite
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show12 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow12(!show12);
                        }}>
                            <span className="selected">Especificaciones fotográficas</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show12 ? "menu" : "menu-open"}>
                            <div>
                            <b>Características generales</b>
                            <ol>
                                <li>Fotografías recientes</li>
                                <li>De estudio (no instantáneas)</li>
                                <li>Blanco y negro</li>
                                <li>De frente</li>
                                <li>Fondo blanco</li>
                                <li>Papel mate (con retoque)</li>
                                <li>Auto-adheribles</li>
                                <li>Sin lentes</li>
                                <li>Frente y orejas descubiertas (evitar el cabello en los hombros)</li>
                                <li>Traje oscuro y camisa o blusa lisa de color blanca</li>
                                <li>No piercing nariz, orejas, labios</li>
                            </ol>
                            <b>Ejemplo fotografía</b>
                            <br /><br />                    
                            <b>Para CERTIFICADO</b>
                            <ol>
                                <li>Tamaño infantil</li>
                                <li>Cuadrada</li>
                                <li><img src="/cuadrada-blanca-fotografia.png" alt="cuadrado" srcset="" /></li>
                            </ol>
                            <b>Para TÍTULO</b>
                            <ol>
                                <li>Tamaño título</li>
                                <li>Óvalo</li>
                                <li><img src="/ovalo-fotografia-blanco.png" alt="ovalo" srcset="" /></li>
                            </ol>
                            <br />
                            <b>SUGERENCIAS DE VESTIMENTA</b>
                            <br /><br />
                            <b>Hombres</b><br />
                            <ol>
                                <li>Vestir camisa blanca, lisa, saco y corbata de color obscuro.</li>
                                <li>Sin aretes</li>
                                <li>Si es el caso, el bigote o la barba deben estar bien delineados, que en la fotografía no se vea sobre expuesta a la cara, sino natural.</li>
                            </ol>
                            <br />
                            <b>Mujeres</b>
                            <ol>
                                <li>Vestir blusa blanca, sin estampado, sin escote, saco de color obscuro.</li>
                                <li>El maquillaje se sugiere lo más natural posible, discreto. </li>
                                <li>En caso de utilizar aretes que sean pequeños.</li>
                            </ol>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show13 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow13(!show13);
                        }}>
                            <span className="selected">Periodo de Trámite de Titulación</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show13 ? "menu" : "menu-open"}>
                            <div>
                            <b>
                                De acuerdo a las fechas especificadas en el calendario escolar vigente, el trámite se realiza en los meses de Enero, Mayo y Septiembre de cada año.
                            </b>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show14 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow14(!show14);
                        }}>
                            <span className="selected">Duración del Trámite de la Titulación</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show14 ? "menu" : "menu-open"}>
                            <div>
                            <b>9 meses</b>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show15 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow15(!show15);
                        }}>
                            <span className="selected">Entrega de Títulos y Documentación</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show15 ? "menu" : "menu-open"}>
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
                        <div className={show16 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow16(!show16);
                        }}>
                            <span className="selected">Costos</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show16 ? "menu" : "menu-open"}>
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
                        <div className={show17 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow17(!show17);
                        }}>
                            <span className="selected">Atención de Dudas</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show17 ? "menu" : "menu-open"}>
                            <div>
                            <b>En el correo de <Link href={""}>titulacion@upchiapas.edu.mx</Link>, indicando los siguientes datos: nombre completo, matrícula, carrera y detallar el apoyo que requiere.</b>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className={show18 ? "select" : "select-clicked"} onClick={() => {                            
                            setShow18(!show18);
                        }}>
                            <span className="selected">Descripción del Procedimiento</span>
                            <div className="mas">+</div>
                        </div>
                        <div className={show18 ? "menu" : "menu-open"}>
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
                                    </b>
                                    </td>
                                </tr>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}