import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
function App() {
  const [carrito, setCarrito] = useState([]);

  // Agrega un producto al carrito
  const agregarCarrito = (producto) => {
    const existe = carrito.find(item => item.id === producto.id);

    if (existe) {
      const actualizado = carrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarrito(actualizado);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // Resta o suma según la acción desde el carrito
  const eliminarProducto = (id, accion) => {
    const producto = carrito.find(item => item.id === id);

    if (!producto) return;

    if (accion === 'restar') {
      if (producto.cantidad === 1) {
        setCarrito(carrito.filter(item => item.id !== id));
      } else {
        const actualizado = carrito.map(item =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        );
        setCarrito(actualizado);
      }
    }

    if (accion === 'sumar') {
      const actualizado = carrito.map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarrito(actualizado);
    }
  };

  return (
    <>
      <Header
        carrito={carrito}
        agregarCarrito={agregarCarrito}
        eliminarProducto={eliminarProducto}
      />

      <Main
        agregarCarrito={agregarCarrito}
        eliminarProducto={eliminarProducto}
        carrito={carrito}
      />

      <Footer />
    </>
  );
}
export default App;