"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Package } from "lucide-react"
import Link from "next/link"

// Productos de ejemplo
const productos = [
  {
    id: 1,
    nombre: "Bastón Ortopédico Ajustable",
    precio: 15000,
    categoria: "Movilidad",
    imagen: "/orthopedic-adjustable-cane.jpg",
    descripcion: "Bastón ergonómico con altura ajustable y empuñadura antideslizante",
    stock: 15,
  },
  {
    id: 2,
    nombre: "Andador con Ruedas",
    precio: 45000,
    categoria: "Movilidad",
    imagen: "/wheeled-walker-for-elderly.jpg",
    descripcion: "Andador plegable con frenos de seguridad y asiento",
    stock: 8,
  },
  {
    id: 3,
    nombre: "Organizador de Medicamentos Semanal",
    precio: 3500,
    categoria: "Salud",
    imagen: "/weekly-pill-organizer-box.jpg",
    descripcion: "Pastillero con compartimentos para 7 días, 4 tomas diarias",
    stock: 30,
  },
  {
    id: 4,
    nombre: "Cojín Ortopédico Antiescaras",
    precio: 12000,
    categoria: "Confort",
    imagen: "/orthopedic-cushion-pressure-relief.jpg",
    descripcion: "Cojín de gel viscoelástico para prevenir úlceras por presión",
    stock: 20,
  },
  {
    id: 5,
    nombre: "Rompecabezas Terapéutico Grande",
    precio: 5500,
    categoria: "Recreación",
    imagen: "/large-piece-therapeutic-puzzle-seniors.jpg",
    descripcion: "Puzzle de piezas grandes para estimulación cognitiva",
    stock: 25,
  },
  {
    id: 6,
    nombre: "Silla de Ruedas Plegable",
    precio: 95000,
    categoria: "Movilidad",
    imagen: "/foldable-wheelchair.jpg",
    descripcion: "Silla de ruedas ligera y plegable con reposabrazos removibles",
    stock: 5,
  },
  {
    id: 7,
    nombre: "Juego de Mesa Memoria Senior",
    precio: 4200,
    categoria: "Recreación",
    imagen: "/memory-board-game-for-seniors.jpg",
    descripcion: "Juego de memoria adaptado con fichas grandes y coloridas",
    stock: 18,
  },
  {
    id: 8,
    nombre: "Tensiómetro Digital",
    precio: 8500,
    categoria: "Salud",
    imagen: "/digital-blood-pressure-monitor.png",
    descripcion: "Monitor de presión arterial automático con pantalla grande",
    stock: 12,
  },
]

export default function TiendaPage() {
  const [carrito, setCarrito] = useState<Array<{ id: number; cantidad: number }>>([])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("Todos")

  const categorias = ["Todos", "Movilidad", "Salud", "Confort", "Recreación"]

  const productosFiltrados =
    categoriaSeleccionada === "Todos" ? productos : productos.filter((p) => p.categoria === categoriaSeleccionada)

  const agregarAlCarrito = (id: number) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === id)
      if (existe) {
        return prev.map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item))
      }
      return [...prev, { id, cantidad: 1 }]
    })
  }

  const totalCarrito = carrito.reduce((total, item) => {
    const producto = productos.find((p) => p.id === item.id)
    return total + (producto?.precio || 0) * item.cantidad
  }, 0)

  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-secondary/20 via-background to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Tienda</h1>
              <p className="text-xl text-muted-foreground">
                Productos especializados para el bienestar de adultos mayores
              </p>
            </div>
            <Link href="/tienda/carrito">
              <Button size="lg" className="relative">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Ver Carrito
                {cantidadTotal > 0 && <Badge className="ml-2 bg-accent">{cantidadTotal}</Badge>}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <Button
                key={categoria}
                variant={categoriaSeleccionada === categoria ? "default" : "outline"}
                onClick={() => setCategoriaSeleccionada(categoria)}
                className={categoriaSeleccionada === categoria ? "bg-primary" : ""}
              >
                {categoria}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productosFiltrados.map((producto) => (
              <Card key={producto.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg bg-muted">
                    <img
                      src={producto.imagen || "/placeholder.svg"}
                      alt={producto.nombre}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-lg text-balance">{producto.nombre}</CardTitle>
                    <Badge variant="secondary">{producto.categoria}</Badge>
                  </div>
                  <CardDescription className="text-pretty mb-4">{producto.descripcion}</CardDescription>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Package className="w-4 h-4" />
                    <span>Stock: {producto.stock} unidades</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 pt-4 border-t">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-2xl font-bold text-primary">${producto.precio.toLocaleString("es-AR")}</span>
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => agregarAlCarrito(producto.id)}
                    disabled={producto.stock === 0}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Agregar al carrito
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resumen flotante del carrito */}
      {cantidadTotal > 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <Card className="shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total:</p>
                  <p className="text-xl font-bold text-primary">${totalCarrito.toLocaleString("es-AR")}</p>
                </div>
                <Link href="/tienda/carrito">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Ver ({cantidadTotal})
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
