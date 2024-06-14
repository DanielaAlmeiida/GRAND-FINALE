import Navbar from "../../components/Navbar";
import GetUsers from "../../components/GetUsers/GetUsers";

export default function Home() {
  return (
    <>
      <Navbar />
      <GetUsers
        url="http://20.197.231.134:3000/usuarios"
        showPhoneAndEmail={false}
        titulo="Conecte-se com os usuários:"
      />
    </>
  );
}
