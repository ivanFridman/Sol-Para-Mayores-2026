import Link from "next/link"
import { Sun, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-8 h-8 text-primary" />
              <span className="font-bold text-xl">Sol Para Mayores</span>
            </div>
            <p className="text-muted-foreground text-pretty">
              Servicios especializados en gerontología y recreación para adultos mayores. Brindamos atención profesional
              con calidez humana.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/tienda" className="text-muted-foreground hover:text-primary transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>info@solparamayores.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sol Para Mayores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
