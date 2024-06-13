import { Link } from "react-router-dom";
import LoginCadastro from "../../components/LoginCadastro";

export default function Login() {
  return (
    <main
      class="p-5 d-flex flex-column justify-content-center align-items-center "
      style={{ height: "80vh" }}
    >
      <LoginCadastro />
      <form class="p-5">
        <h1 class="pb-3">Login</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Senha
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Lembrar-me
          </label>
        </div>
        <button type="submit" class="btn btn-primary" style={{ width: "100%" }}>
          Entrar
        </button>
      </form>
      <p>
        Não tem uma conta? <Link to="/register">Registre-se aqui</Link>
      </p>
    </main>
  );
}
