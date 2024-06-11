import Navbar from "../../components/Navbar";
import GetUsers from "../../components/GetUsers/GetUsers";

export default function Connections() {
  return (
    <>
      <Navbar />
      <GetUsers
        url="http://localhost:3004/usuarios"
        showPhoneAndEmail={true}
        titulo="Suas connections"
      />
    </>
  );
}
