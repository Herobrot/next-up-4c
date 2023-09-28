import Navbar from "../../../components/Navbar"

export const metadata = {
    title: 'Universidad Politécnica de Chiapas - Aspirantes',
    description: 'Página de Universidad Politécnica de Chiapas',
}

export default function AspirantesLayout({children}){
    return(
        <>
            <Navbar /> 
            {children}
        </>
    )
}