const Header = ({ carrito, eliminarProducto }) => {
  const total = carrito.reduce((suma, item) => suma + item.price * item.cantidad, 0);
  const totalItems = carrito.reduce((suma, item) => suma + item.cantidad, 0);
  return (
    <header className="py-5 header d-flex justify-content-between align-items-center px-5">
      <a href="/">
        <img className="img-fluid" src="/img/logo.svg" alt="Logo del sitio" width={150} />
      </a>

      <div className="carrito position-relative">
        <button className="btn btn-dark fw-bold">
          🛒 Carrito ({totalItems})
        </button>
        <div
          id="carrito"
          className="position-absolute bg-white p-3 mt-2 shadow rounded"
          style={{ minWidth: '250px' }}
        >
          {carrito.length === 0 ? (
            <p className="m-0">El carrito está vacío</p>
          ) : (
            <>
              <ul className="m-0 p-0" style={{ listStyle: 'none' }}>
                {carrito.map((producto) => (
                  <li key={producto.id} className="mb-2 border-bottom pb-2">
                    <strong>{producto.name}</strong> - ${producto.price} × {producto.cantidad}
                    <div className="mt-1 d-flex gap-1">
                      <button
                        className="btn btn-dark btn-sm"
                        onClick={() => eliminarProducto(producto.id, 'restar')}
                      >
                        −
                      </button>
                      <button
                        className="btn btn-dark btn-sm"
                        onClick={() => eliminarProducto(producto.id, 'sumar')}
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="fw-bold mt-3 text-end">Total: ${total}</p>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;