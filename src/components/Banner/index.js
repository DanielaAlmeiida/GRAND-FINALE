import iconSowa from "../../assets/sowa_icon.png";

export default function Banner({ children }) {
  return (
    <header className="blue d-flex p-3 w-100">
      <img src={iconSowa} alt="Logo da Sowa Connect" />
      {children}
    </header>
  );
}
