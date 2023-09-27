import "./Pie.css"
import Link from "next/link"


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