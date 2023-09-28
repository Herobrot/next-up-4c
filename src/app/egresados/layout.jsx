import Navbar from "../../../components/Navbar"

export const metadata = {
    title: 'Universidad Politécnica de Chiapas - Egresados',
    description: 'Página de Universidad Politécnica de Chiapas',
}

export default function EgresadosLayout({children}){
    return(
        <>
            <Navbar /> 
            {children}
        </>
    )
}