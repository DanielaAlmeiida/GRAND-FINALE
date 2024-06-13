import Input from "../../components/Input";
import LoginCadastro from "../../components/LoginCadastro";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [userSelecionado, setUserSelecionado] = useState({
    nome: '',
    email: '',
    senha: '',
    tipo: '',
    telefone: '',
    areas: '',
    experiencias: '',
    academicas: '',
    endereco: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value)
    setUserSelecionado({
      ...userSelecionado,
      [name]: value
    });
  };

  const pedidoPost = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:4000/usuario", userSelecionado);
      console.log(response);
      navigate("/inicio"); // Navega para a página inicial após o sucesso do POST
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

  return (
    <main className="p-5 d-flex flex-column justify-content-center align-items-center ">
      Register
      <LoginCadastro />
      <section>
        <form onSubmit={pedidoPost}>
          <select className="form-select" aria-label="Default select example" name="tipo" onChange={handleChange}>
            <option selected>Tipo</option>
            <option value="escola">Escola</option>
            <option value="profissional">Profissional</option>
          </select>
          <Input label={"Nome"} id={"nome"} type={"text"} name={"nome"} handlechange={handleChange} />
          <Input label={"Telefone"} id={"telefone"} type={"text"} name={"telefone"} handlechange={handleChange} />
          <select className="form-select" aria-label="Default select example" name="areas" onChange={handleChange}>
            <option selected>Áreas</option>
            <option value="Geografia">Geografia</option>
            <option value="Matemática">Matemática</option>
            <option value="História">História</option>
            <option value="Química">Química</option>
            <option value="Biologia">Biologia</option>
            <option value="Inglês">Inglês</option>
          </select>
          <div className="d-flex flex-row align-items-center gap-2 pt-4">
            <Input label={"CEP"} id={"cep"} type={"text"} />
            <button type="button" className="btn btn-primary" style={{ width: "100%" }}>
              Buscar
            </button>
          </div>
          <Input label={"Endereço"} id={"endereco"} type={"text"} name={"endereco"} handlechange={handleChange} />
          <Input label={"Cidade"} id={"cidade"} type={"text"} name="cidade" />
          <Input label={"Estado"} id={"estado"} type={"text"} name="estado" />
          <Input label={"Experiencias"} id={"experiencias"} type={"text"} name={"experiencias"} handlechange={handleChange} />
          <Input label={"Academicas"} id={"academicas"} type={"text"} name={"academicas"} handlechange={handleChange} />
          <Input label={"E-mail"} id={"email"} type={"email"} name={"email"} handlechange={handleChange} />
          <Input label={"Senha"} id={"senha"} type={"password"} name={"senha"} handlechange={handleChange} />
          <Input label={"Confirmar senha"} id={"confirmar"} type={"password"} />
          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            Cadastrar
          </button>
        </form>
      </section>
    </main>
  );
}
