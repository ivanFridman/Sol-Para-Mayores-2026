"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Productos de ejemplo (mismo array que en la tienda)
const productosDisponibles = [
  {
    id: 1,
    nombre: "Bastón Ortopédico Ajustable",
    precio: 15000,
    imagen: "/orthopedic-adjustable-cane.jpg",
  },
  {
    id: 2,
    nombre: "Andador con Ruedas",
    precio: 45000,
    imagen: "/wheeled-walker-for-elderly.jpg",
  },
  {
    id: 3,
    nombre: "Organizador de Medicamentos Semanal",
    precio: 3500,
    imagen: "/weekly-pill-organizer-box.jpg",
  },
]

export default function CarritoPage() {
  // Ejemplo con algunos items en el carrito
  const [itemsCarrito, setItemsCarrito] = useState([
    { id: 1, cantidad: 1 },
    { id: 3, cantidad: 2 },
  ])

  const actualizarCantidad = (id: number, cantidad: number) => {
    if (cantidad <= 0) {
      setItemsCarrito((prev) => prev.filter((item) => item.id !== id))
    } else {
      setItemsCarrito((prev) => prev.map((item) => (item.id === id ? { ...item, cantidad } : item)))
    }
  }

  const eliminarItem = (id: number) => {
    setItemsCarrito((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = itemsCarrito.reduce((total, item) => {
    const producto = productosDisponibles.find((p) => p.id === item.id)
    return total + (producto?.precio || 0) * item.cantidad
  }, 0)

  const envio = 2000
  const total = subtotal + envio

  if (itemsCarrito.length === 0) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto text-center">
            <CardHeader>
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
              <CardTitle>Tu carrito está vacío</CardTitle>
              <CardDescription>Agrega productos para comenzar tu compra</CardDescription>
            </CardHeader>
            <CardFooter className="justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/tienda">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Ir a la tienda
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link href="/tienda" className="inline-flex items-center text-primary hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a la tienda
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Carrito de Compras</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items del carrito */}
          <div className="lg:col-span-2 space-y-4">
            {itemsCarrito.map((item) => {
              const producto = productosDisponibles.find((p) => p.id === item.id)
              if (!producto) return null

              return (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={producto.imagen || "/placeholder.svg"}
                        alt={producto.nombre}
                        className="w-24 h-24 object-cover rounded-lg bg-muted"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg text-balance">{producto.nombre}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => eliminarItem(item.id)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-xl font-bold text-primary mb-4">
                          ${producto.precio.toLocaleString("es-AR")}
                        </p>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <Input
                            type="number"
                            value={item.cantidad}
                            onChange={(e) => actualizarCantidad(item.id, Number.parseInt(e.target.value) || 0)}
                            className="w-20 text-center"
                            min="1"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Resumen del pedido */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString("es-AR")}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Envío</span>
                  <span>${envio.toLocaleString("es-AR")}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-primary">${total.toLocaleString("es-AR")}</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Proceder al Pago
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  El pago se procesará de forma segura a través de Mercado Pago
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
