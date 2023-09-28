import "./Pie.css"
import Link from "next/link"

export function Footer(){
    return(
        <>
            <footer className="style-79">
                <div className="style-80">
                    <div className="style-81">
                        <img className="style-82" src="https://www.upchiapas.edu.mx/images/LOGOS%20EDUCACION%202022%20PNG.png" />
                    </div>
                    <div className="style-83">
                        <h6 align="center" className="style-84">Suchiapa<br className="style-85" />
                            Carretera Tuxtla Gutierrez. - Portillo Zaragoza Km 21+500<br className="style-86" />
                            Col. Las Brisas; Suchiapa, Chiapas. CP.29150. Teléfono: 01961 61 71460<br className="style-87" />
                            Suchiapa, Chiapas.
                        </h6>
                    </div>
                    <div className="style-88">
                        <img className="style-89" src="https://platinum.upchiapas.edu.mx/pimgs/chiapas.png" />
                    </div>
                </div>
            </footer>
        </>
    )
}


export default function Pie(){
    return(
        <>
            <footer>
                <div id="bg_-i9x" className="style-FgwaE"></div>
                    <div className="subFooter1">
                        <div style={{width:"100%"}}>                    
                            <div>
                                <ul><li><Link href="/Aviso_de_Privacidad">Avisos de privacidad</Link></li></ul>
                            </div>                    
                        </div>
                    </div>
                    <div>
                    <div className="subFooter2">                              
                        <div className="subColumnaFooter">
                            <button className="button-8ls" id="buttonFooter1">
                                <img className="img1" src="https://www.upchiapas.edu.mx/images/LOGOS%20EDUCACION%202022%20PNG.png" />
                            </button>
                        </div>    
                        <div className="subColumnaFooter" id="columnaFooterTexto">
                            <p>Suchiapa<br />Carretera Tuxtla Gutierrez. - Portillo Zaragoza Km 21+500
                                <br />Col. Las Brisas; Suchiapa, Chiapas. CP.29150. Teléfono: 01961 61 71460
                                <br />Suchiapa, Chiapas.
                            </p>
                        </div>    
                        <div className="subColumnaFooter" id="subColumnaFooter3">
                            <button className="button-8ls" id="buttonFooter2">
                                <img className="img2" src="https://platinum.upchiapas.edu.mx/pimgs/chiapas.png" />
                            </button>
                        </div>                    
                    </div>
                </div>
            </footer>
        </>
    );
}