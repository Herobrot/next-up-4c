import "./global.css";

export const metadata = {
  title: 'Universidad Politécnica de Chiapas',
  description: 'Página de Universidad Politécnica de Chiapas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body>                
        {children}
      </body>
    </html>
  )
}
