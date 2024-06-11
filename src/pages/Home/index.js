import Navbar from "../../components/Navbar";
import GetUsers from "../../components/GetUsers/GetUsers";

export default function Home() {
  return (
    <>
      <Navbar />
      <GetUsers
        url="http://192.168.0.112:3004/usuarios"
        showPhoneAndEmail={false}
        titulo="Conecte-se com os usuários:"
      />
    </>
  );
}
