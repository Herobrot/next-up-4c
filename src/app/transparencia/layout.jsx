import Navbar from "../../../components/Navbar"

export const metadata = {
    title: 'Universidad Politécnica de Chiapas - Transparencia',
    description: 'Página de Universidad Politécnica de Chiapas',
}

export default function TransparenciaLayout({children}){
    return(
        <>
            <Navbar /> 
            {children}
        </>
    )
}