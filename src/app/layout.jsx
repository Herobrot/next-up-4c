import "./global.css";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: 'Universidad Politécnica de Chiapas',
  description: 'Página de Universidad Politécnica de Chiapas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body>        
        <Navbar /> 
        {children}
      </body>
    </html>
  )
}
