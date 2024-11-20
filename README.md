# Wallbit Junior Frontend Challenge

Este proyecto es un desafío de frontend para crear un carrito de compras utilizando React. A continuación, se detallan los pasos para instalar y ejecutar el proyecto.

> El banco digital para trabajadores remotos.

## Requisitos Previos

Asegúrate de tener instalado Node.js y npm en tu máquina. 

## Tecnologías utilizadas

- React
- Typescript
- TailwindCSS
- Shadcn/UI

## Deploy de prueba

TODO: Fix deploy
https://wallbit-challenge-1atozg5df-matias-baldanzas-projects.vercel.app/

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/matiasbaldanza/wallbit-challenge.git
```

2. Instala las dependencias:

```bash
cd wallbit-challenge
npm install
```

3. Inicia el proyecto:

```bash
npm run dev
```

o:

```bash
vite dev
```

## Requisitos

La API que nos dió nuestro cliente es: [Fake Store API](https://fakestoreapi.com/). El cliente nos dijo que su stack de frontend es React, que prefiere el challenge hecho con eso, pero está abierto a cualquier stack que quieras usar.

- [X] Podemos agregar productos al carrito.
- [X] Manejar errores que nos devuelva la API.
- [X] Mostrar una lista con los productos agregados incluyendo `title`, `price` e `image` del producto y la `cantidad` que el usuario agregó.

## Extras

- [X] El carrito se persiste al recargar la página.
- [X] Mostrar el total de productos agregados.
- [X] Mostrar el costo total del carrito.
- [X] Mostrar la fecha de creación del carrito.

## Detalles de implementación

- [X] Implementación de una API wrapper para facilitar las llamadas a la API (con solo una acción - getProductById)
- [X] Implementación de un cart context para facilitar el manejo del estado
- [X] Implementación de un cart reducer para facilitar extensiones futuras

## Bonus

- [X] Input personalizado para gestionar cantidad de productos ya agregados
- [X] Formato personalido de precios
- [X] Botón para vaciar el carrito

## Pendientes

- [ ] Tests (no llegué)
- [ ] Toasts para notificaciones al usuario
- [ ] Mejorar estilos
- [ ] Responsive
- [ ] Mostrar errores usando un ErrorBoundary

## Instrucciones y requisitos originales

Para este desafío, nuestro cliente nos encargó hacer un carrito de compras para programadores. Tiene un formulario con 2 campos: ID del producto y cantidad. Los programadores habitualmente no necesitan saber ni ver que productos comprar, sino que saben por conexiones astrales cual es el ID del producto que quieren y así los agregan a su carrito.

Cada vez que se agrega un producto, vamos a obtener el producto desde la API y lo vamos a mostrar en una tabla, junto a la cantidad que el usuario eligió.

> Solo lo mostramos visualmente por si hay alguien que no sea programador mirando la pantalla.

La aplicación se vería así:

![Sin productos](./assets/app-0.jpg)
> Inicialmente no hay productos en el carrito

![Con productos](./assets/app-1.jpg)
> Con productos en el carrito