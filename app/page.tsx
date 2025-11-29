import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Award, Clock, ArrowRight } from "lucide-react"

export default function HomePage() {
  const valores = [
    {
      icon: Heart,
      titulo: "Calidez Humana",
      descripcion: "Atención personalizada con empatía y respeto hacia cada adulto mayor",
    },
    {
      icon: Users,
      titulo: "Experiencia",
      descripcion: "Equipo profesional especializado en gerontología y cuidado",
    },
    {
      icon: Award,
      titulo: "Calidad",
      descripcion: "Servicios certificados que cumplen los más altos estándares",
    },
    {
      icon: Clock,
      titulo: "Disponibilidad",
      descripcion: "Atención continua adaptada a las necesidades de cada persona",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary/20 via-background to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Cuidado profesional con <span className="text-primary">calidez humana</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              En Sol Para Mayores brindamos servicios especializados de gerontología y recreación, mejorando la calidad
              de vida de los adultos mayores con profesionalismo y dedicación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/servicios">
                  Conocer servicios
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Bio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre mí</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Soy <strong className="text-foreground">[Tu Nombre]</strong>, gerontólogo profesional con [X años]
                    de experiencia dedicada al cuidado integral de adultos mayores.
                  </p>
                  <p>
                    Me especializo en crear programas personalizados de atención y recreación que promueven la
                    autonomía, dignidad y bienestar emocional de cada persona. Mi formación incluye:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Licenciatura en Gerontología - [Universidad]</li>
                    <li>Especialización en Recreación Terapéutica</li>
                    <li>Certificación en Cuidados Paliativos</li>
                    <li>[Otra formación relevante]</li>
                  </ul>
                  <p className="pt-4">
                    <strong className="text-foreground">¿Qué hago?</strong> Diseño e implemento programas integrales de
                    atención gerontológica, coordinando equipos interdisciplinarios y trabajando directamente con
                    adultos mayores y sus familias para mejorar su calidad de vida.
                  </p>
                  <div className="bg-primary/5 border-l-4 border-primary p-4 mt-6">
                    <p className="font-semibold text-foreground mb-2">Objetivo de Sol Para Mayores</p>
                    <p>
                      Transformar la experiencia del envejecimiento, brindando servicios profesionales de gerontología y
                      recreación que permitan a cada adulto mayor vivir con plenitud, alegría y dignidad, mientras
                      ofrecemos tranquilidad y apoyo a sus familias.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-square max-w-md mx-auto">
                  <Image
                    src="/professional-portrait-of-gerontologist-smiling-war.jpg"
                    alt="[Tu Nombre] - Gerontólogo Profesional"
                    fill
                    className="object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Trabajamos con dedicación para ofrecer el mejor cuidado y atención
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor) => (
              <Card key={valor.titulo} className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <valor.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{valor.titulo}</h3>
                    <p className="text-muted-foreground text-pretty">{valor.descripcion}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">¿Necesitas asesoramiento personalizado?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Nuestro equipo está listo para ayudarte a encontrar la mejor solución para ti o tu ser querido
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contacto">Solicitar consulta gratuita</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
