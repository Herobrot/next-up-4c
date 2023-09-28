import Navbar from "../../../components/Navbar"

export const metadata = {
    title: 'Universidad Politécnica de Chiapas - Alumnos',
    description: 'Página de Universidad Politécnica de Chiapas',
}

export default function AlumnosLayout({children}){
    return(
        <>
            <Navbar /> 
            {children}
        </>
    )
}