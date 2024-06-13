import { Link } from "react-router-dom";
import LoginCadastro from "../../components/LoginCadastro";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";

export default function Login() {
  const navigate = useNavigate();

  const handleEntrarClick = (event) => {
    event.preventDefault();
    const email = document.getElementById("exampleInputEmail1").value;
    const senha = document.getElementById("exampleInputPassword1").value;

    if (email && senha) {
      navigate("/inicio");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <main
      className="p-5 d-flex flex-column justify-content-center align-items-center "
      style={{ height: "80vh" }}
    >
      <LoginCadastro />
      <form className="p-5">
        <h1 className="pb-3">Login</h1>
        <Input label={"E-mail"} id={"email"} type={"email"} />
        <Input label={"Senha"} id={"nome"} type={"password"} />
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Lembrar-me
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
          onClick={handleEntrarClick}
        >
          Entrar
        </button>
      </form>
      Não tem uma conta? <Link to="/register">Registre-se aqui</Link>
    </main>
  );
}
