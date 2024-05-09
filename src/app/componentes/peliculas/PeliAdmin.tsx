import { useState } from "react";
import { Pelicula } from "../../modelos/Pelicula";
import { ARREGLO_PELICULAS } from "../../mocks/Peliculas-mocks";
import { ARREGLO_PELICULA_GENERO } from "../../utilidades/dominios/DomGeneros";

export const PeliAdmin = () => {
  const [arrPeliculas] = useState<Pelicula[]>(ARREGLO_PELICULAS);

  const obtenerNombreGenero = (valor: string) => {
    for (const objGen of ARREGLO_PELICULA_GENERO) {
      if (objGen.codGenero === valor) {
        return objGen.nombreGenero;
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "10%" }}>Codigo</th>
                <th style={{ width: "25%" }}>Nombre</th>
                <th style={{ width: "25%" }}>Género</th>
                <th style={{ width: "25%" }}>Protagonista</th>
                <th style={{ width: "10%" }}>Imagen</th>
                <th style={{ width: "5%" }}></th>
              </tr>
            </thead>
            <tbody>
              {arrPeliculas.map((miPeli: Pelicula) => (
                <tr className="align-middle" key={miPeli.codPelicula}>
                  <td>{miPeli.codPelicula}</td>
                  <td>{miPeli.nombrePelicula}</td>
                  <td>{obtenerNombreGenero(miPeli.codGeneroPelicula)}</td>
                  <td>{miPeli.protagonistaPelicula}</td>
                  <td>
                    <img src={miPeli.imagenPeliculaBase64} alt="" className="imagenListado" />
                    <div className="text-info">{miPeli.imagenPelicula}</div>
                  </td>
                  <td className="text-center">
                    <a href="/#">
                      <i className="fa-solid fa-trash-can rojito"></i>
                    </a>{"  "}
                    <a href="/#">
                      <i className="fa-regular fa-pen-to-square verde"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
