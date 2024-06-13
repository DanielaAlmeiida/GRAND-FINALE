import Navbar from "../../components/Navbar";
import GetUsers from "../../components/GetUsers/GetUsers";

export default function Home() {
  return (
    <>
      <Navbar />
      <GetUsers
        url="http://127.0.0.1:4000/usuarios"
        showPhoneAndEmail={false}
        titulo="Conecte-se com os usuários:"
      />
    </>
  );
}
