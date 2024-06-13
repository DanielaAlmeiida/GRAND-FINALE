import {
  FeedPersonIcon,
  LocationIcon,
  StarFillIcon,
} from "@primer/octicons-react";
import InputSearch from "../../components/InputSearch";
import { useEffect, useState } from "react";
import apiRequests from "../../api";

export default function GetUsers({ url, showPhoneAndEmail, titulo }) {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    apiRequests
      .get(url)
      .then((resposta) => {
        setUsuarios(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <>
      <div className="mb-4" style={{ minHeight: "50rem" }}>
        <div className="d-flex align-items-center px-4 row flex-wrap">
          <h1 className="col-sm-4"> {titulo} </h1>
          <div className="col-sm-8">
            <InputSearch />
          </div>
        </div>
        <section className="d-flex flex-wrap flex-strech w-100">
          {usuarios?.map((usuario) => (
            <div
              key={usuario._id}
              className="card p-1 mx-4 mb-4"
              style={{
                minWidth: "480px",
                maxWidth: "480px",
                minHeight: "200px",
                maxHeight: "200px",
              }}
            >
              <div
                className="card-body row d-flex align-items-center"
                style={{ color: "#555" }}
              >
                <FeedPersonIcon size={80} className="col-sm-2" />
                <section className="col-sm-6">
                  <h5 className="card-title">{usuario.nome}</h5>
                  <p className="card-text fw-medium">Áreas: {usuario.areas}</p>
                  <p className="card-text d-flex justify-content-start gap-1">
                    <LocationIcon fill={"gray"} size={20} />
                    {usuario.endereco?.bairro}
                  </p>
                </section>
                <div className="col-sm-4 d-flex flex-column gap-0 align-items-stretch">
                  <p className="card-text">
                    <StarFillIcon fill={"orange"} size={16} /> 0.0
                  </p>
                  <p className="card-text">
                    {showPhoneAndEmail && usuario.telefone}
                  </p>
                  <p className="card-text">
                    {showPhoneAndEmail && usuario.email}
                  </p>
                  <a href="#" className="btn blue-button raise">
                    Ver perfil
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
