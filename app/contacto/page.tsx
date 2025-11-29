"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("[v0] Form data:", formData)
    setEnviado(true)
    setTimeout(() => setEnviado(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-secondary/20 via-background to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Estamos aquí para ayudarte. Contáctanos y te responderemos a la brevedad
            </p>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Información de contacto */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Información de Contacto</CardTitle>
                  <CardDescription>Puedes comunicarte con nosotros a través de los siguientes medios</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">+54 11 1234-5678</p>
                      <p className="text-sm text-muted-foreground">Lun - Vie: 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@solparamayores.com</p>
                      <p className="text-sm text-muted-foreground">Respuesta en 24hs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Dirección</h3>
                      <p className="text-muted-foreground">Av. Corrientes 1234</p>
                      <p className="text-muted-foreground">Buenos Aires, Argentina</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horarios</h3>
                      <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">Sábados: 9:00 - 13:00</p>
                      <p className="text-muted-foreground">Domingos: Cerrado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergencias */}
              <Card className="border-primary/50 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-primary">Línea de Emergencias 24/7</CardTitle>
                  <CardDescription>Para urgencias, comunícate directamente</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">+54 11 9999-9999</p>
                  <p className="text-sm text-muted-foreground mt-2">Disponible las 24 horas para casos de emergencia</p>
                </CardContent>
              </Card>
            </div>

            {/* Formulario de contacto */}
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
                <CardDescription>Completa el formulario y te responderemos a la brevedad</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo *</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="+54 11 1234-5678"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="asunto">Asunto *</Label>
                    <Input
                      id="asunto"
                      name="asunto"
                      placeholder="¿En qué podemos ayudarte?"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntanos más detalles..."
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    {enviado ? "¡Mensaje enviado!" : "Enviar mensaje"}
                  </Button>

                  {enviado && (
                    <p className="text-center text-sm text-primary">
                      Tu mensaje ha sido enviado correctamente. Te responderemos pronto.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
