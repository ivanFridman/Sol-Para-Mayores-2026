import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Stethoscope, Activity, Home, Users, Brain, Heart, Smile, Phone, Calendar, HandHeart } from "lucide-react"

export default function ServiciosPage() {
  const servicios = [
    {
      icon: Stethoscope,
      titulo: "Evaluación Gerontológica",
      descripcion: "Valoración integral del estado de salud física, mental y social del adulto mayor",
      caracteristicas: ["Evaluación médica completa", "Análisis funcional", "Diagnóstico personalizado"],
    },
    {
      icon: Home,
      titulo: "Cuidado Domiciliario",
      descripcion: "Atención profesional en la comodidad del hogar",
      caracteristicas: ["Asistencia diaria", "Administración de medicamentos", "Compañía y cuidado"],
    },
    {
      icon: Brain,
      titulo: "Estimulación Cognitiva",
      descripcion: "Programas diseñados para mantener y mejorar las capacidades mentales",
      caracteristicas: ["Ejercicios de memoria", "Actividades recreativas", "Talleres grupales"],
    },
    {
      icon: Activity,
      titulo: "Fisioterapia Geriátrica",
      descripcion: "Rehabilitación física adaptada a las necesidades del adulto mayor",
      caracteristicas: ["Ejercicios terapéuticos", "Prevención de caídas", "Recuperación funcional"],
    },
    {
      icon: Users,
      titulo: "Grupos de Socialización",
      descripcion: "Actividades recreativas y sociales para promover la integración",
      caracteristicas: ["Encuentros grupales", "Actividades recreativas", "Salidas programadas"],
    },
    {
      icon: Heart,
      titulo: "Apoyo Emocional",
      descripcion: "Acompañamiento psicológico y contención afectiva",
      caracteristicas: ["Terapia individual", "Grupos de apoyo", "Consejería familiar"],
    },
    {
      icon: Smile,
      titulo: "Recreación Terapéutica",
      descripcion: "Actividades lúdicas y recreativas con fines terapéuticos",
      caracteristicas: ["Talleres artísticos", "Musicoterapia", "Juegos adaptados"],
    },
    {
      icon: HandHeart,
      titulo: "Asesoramiento Familiar",
      descripcion: "Orientación y capacitación para familiares cuidadores",
      caracteristicas: ["Talleres para familiares", "Orientación profesional", "Recursos de apoyo"],
    },
    {
      icon: Calendar,
      titulo: "Centro de Día",
      descripcion: "Espacio de cuidado diurno con actividades programadas",
      caracteristicas: ["Horario flexible", "Actividades diversas", "Alimentación incluida"],
    },
    {
      icon: Phone,
      titulo: "Asistencia 24/7",
      descripcion: "Servicio de emergencia y consulta disponible todo el día",
      caracteristicas: ["Línea directa", "Respuesta inmediata", "Coordinación médica"],
    },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-secondary/20 via-background to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Ofrecemos una amplia gama de servicios especializados diseñados para mejorar la calidad de vida de los
              adultos mayores
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio) => (
              <Card key={servicio.titulo} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <servicio.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{servicio.titulo}</CardTitle>
                  <CardDescription className="text-pretty">{servicio.descripcion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {servicio.caracteristicas.map((caracteristica) => (
                      <li key={caracteristica} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{caracteristica}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">¿Interesado en nuestros servicios?</CardTitle>
              <CardDescription className="text-lg text-pretty">
                Contáctanos para una consulta gratuita y personalizada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contacto">Solicitar información</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/tienda">Ver productos</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
