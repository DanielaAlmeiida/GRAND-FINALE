import iconSowa from "../../assets/sowa_icon.png";

export default function Footer() {
  return (
    <div className="d-flex px-4 p-3 blue w-100 justify-content-between align-items-center">
      <div className="d-flex gap-4 align-items-center">
        <img src={iconSowa} alt="Logo da Sowa Connect" />
        <p className="text-white font-weight-light h5">Sowa Connect</p>{" "}
      </div>
      <div>
        <p className="text-white font-weight-light h5">
          © Todos direitos reservados 2024
        </p>
      </div>
    </div>
  );
}
