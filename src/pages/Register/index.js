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

  const [cep, setCep] = useState('01001000');

  const url = `https://viacep.com.br/ws/${cep}/json`;

  const [endereco, setEndereco] = useState({
    logradouro: "",
    cidade: "",
    uf: "",
    bairro: "",
    cep: ""
  });

  const [enderecoId, setEnderecoId] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setUserSelecionado({
      ...userSelecionado,
      [name]: value
    });
  };

  const handleChangeCep = e => {
    const { value } = e.target;
    setCep(value);
  };

  const enderecoGet = async () => {
    try {
      const response = await axios.get(url);
      setEndereco({
        logradouro: response.data.logradouro,
        cidade: response.data.localidade,
        uf: response.data.uf,
        bairro: response.data.bairro,
        cep: cep
      });
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

  const enderecoPost = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:4000/endereco", endereco);
      console.log(response);
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

  const enderecoGetId = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:4000/enderecos");
      const lastIndex = response.data.length - 1;
      const lastEnderecoId = response.data[lastIndex]._id;
      setEnderecoId(lastEnderecoId);
      return lastEnderecoId;
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

  const userPost = async (event) => {
    event.preventDefault();
    try {
      await enderecoGet();
      await enderecoPost();
      const id = await enderecoGetId();

      const updatedUser = {
        ...userSelecionado,
        endereco: id
      };

      console.log(updatedUser);

      const response = await axios.post("http://127.0.0.1:4000/usuario", updatedUser);
      console.log(response);
      navigate("/inicio"); 
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

  return (
    <main className="p-5 d-flex flex-column justify-content-center align-items-center ">
      Register
      <LoginCadastro />
      <section>
        <form onSubmit={userPost}>
          <select className="form-select" aria-label="Default select example" name="tipo" onChange={handleChange}>
            <option selected>Tipo</option>
            <option value="escola">Escola</option>
            <option value="profissional">Profissional</option>
          </select>
          <Input label={"Nome"} id={"nome"} type={"text"} name={"nome"} value={userSelecionado.nome} handlechange={handleChange} />
          <Input label={"Telefone"} id={"telefone"} type={"text"} name={"telefone"} value={userSelecionado.telefone} handlechange={handleChange} />
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
            <label htmlFor="cep" className="form-label">
              CEP
            </label>
            <input
              type="text"
              className="form-control"
              id="cep"
              name="cep"
              onChange={handleChangeCep}
              required
            />
            <button type="button" className="btn btn-primary" style={{ width: "100%" }} onClick={enderecoGet}>
              Buscar
            </button>
          </div>
          <Input label={"Endereço"} id={"endereco"} type={"text"} name={"endereco"} value={endereco.logradouro}/>
          <Input label={"Bairro"} id={"bairro"} type={"text"} name={"bairro"} value={endereco.bairro} />
          <Input label={"Cidade"} id={"cidade"} type={"text"} name={"cidade"} value={endereco.cidade} />
          <Input label={"Estado"} id={"estado"} type={"text"} name={"estado"} value={endereco.uf} />
          <Input label={"Experiencias"} id={"experiencias"} type={"text"} name={"experiencias"} value={userSelecionado.experiencias} handlechange={handleChange} />
          <Input label={"Academicas"} id={"academicas"} type={"text"} name={"academicas"} value={userSelecionado.academicas} handlechange={handleChange} />
          <Input label={"E-mail"} id={"email"} type={"email"} name={"email"} value={userSelecionado.email} handlechange={handleChange} />
          <Input label={"Senha"} id={"senha"} type={"password"} name={"senha"} value={userSelecionado.senha} handlechange={handleChange} />
          <Input label={"Confirmar senha"} id={"confirmar"} type={"password"} value={userSelecionado.senha} />
          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            Cadastrar
          </button>
        </form>
      </section>
    </main>
  );
}
