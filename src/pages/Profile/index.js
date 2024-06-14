import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { FeedPersonIcon, LocationIcon } from "@primer/octicons-react";
import apiRequests from "../../api";

export default function Profile() {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    apiRequests
      .get("http://20.197.231.134:3000/usuario/664d50b1f0a77aa2a2ed10ca")
      .then((resposta) => {
        setUsuario(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <main>
      <Navbar />
      <section className="d-flex flex-column align-items-center">
        <header className="blue text-white d-flex p-3 w-100 d-flex flex-column align-items-center">
          <FeedPersonIcon size={80} className="col-sm-2" />

          <h4>
            {" "}
            {usuario.tipo}: {usuario.nome}{" "}
          </h4>
          <p>Áreas: {usuario.areas} </p>
        </header>
        <section className="p-5 border">
          <div className="border-bottom py-4">
            <h5>Sobre mim: </h5>
            <p>{usuario.experiencias}</p>
            <p>{usuario.academicas}</p>
          </div>

          <div className="border-bottom py-4">
            <h5>Localização: </h5>
            <p>
              <LocationIcon size={20} /> {usuario.endereco?.logradouro}
            </p>
          </div>

          <div className="border-bottom py-4">
            <h5>Contato: </h5>
            <p>{usuario.email}</p>
            <p>{usuario.telefone}</p>
          </div>
        </section>
      </section>
    </main>
  );
}
