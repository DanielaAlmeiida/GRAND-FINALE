import Input from "../../components/Input";
import LoginCadastro from "../../components/LoginCadastro";

export default function Register() {
  return (
    <main class="p-5 d-flex flex-column justify-content-center align-items-center ">
      Register
      <LoginCadastro />
      <section>
        <Input label={"Nome"} id={"nome"} type={"text"} />
        <select class="form-select" aria-label="Default select example">
          <option selected>Áreas</option>
          <option value="1">Geografia</option>
          <option value="2">Matemática</option>
          <option value="3">História</option>
          <option value="4">Química</option>
          <option value="5">Biologia</option>
          <option value="6">Inglês</option>
        </select>
        <div class="d-flex flex-row align-items-center gap-2 pt-4">
          <Input label={"CEP"} id={"nome"} type={"text"} />
          <button
            type="submit"
            class="btn btn-primary"
            style={{ width: "100%" }}
          >
            Buscar
          </button>
        </div>

        <Input label={"Endereço"} id={"nome"} type={"text"} />
        <Input label={"Cidade"} id={"nome"} type={"text"} />
        <Input label={"Estado"} id={"nome"} type={"text"} />
        <Input label={"E-mail"} id={"nome"} type={"email"} />
        <Input label={"Senha"} id={"nome"} type={"password"} />
        <Input label={"Confirmar senha"} id={"nome"} type={"password"} />

        <button type="submit" class="btn btn-primary" style={{ width: "100%" }}>
          Cadastrar
        </button>
      </section>
    </main>
  );
}
