import { db } from '../data/db';
const Main = ({ agregarCarrito }) => {
  return (
    <main className="container-xl mt-5">
      <h2 className="text-center text-primary mb-4">Nuestras Guitarras</h2>

      <div className="row">
        {db.map((guitarra) => (
          <div className="col-12 col-md-4 col-lg-4 mb-4" key={guitarra.id}>
            <div className="card text-center p-3 h-100">
              <img
                src={`/img/${guitarra.image}.jpg`}
                alt={guitarra.name}
                className="img-fluid"
              />
              <h3 className="mt-3 text-primary">{guitarra.name}</h3>
              <p className="px-2">{guitarra.description}</p>
              <p className="fs-5 text-black fw-bold">${guitarra.price}</p>
              <button
                className="btn btn-dark mt-auto"
                onClick={() => agregarCarrito(guitarra)}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Main;