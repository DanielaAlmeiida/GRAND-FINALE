import { SearchIcon } from "@primer/octicons-react";
import "./styles.css";

export default function InputSearch() {
  return (
    <div className="input-group mb-3 p-4">
      <input
        type="text"
        className="form-control css-input"
        placeholder="Procurar usuário"
        aria-label="Procurar usuário"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-outline-secondary blue-button"
        type="button"
        id="button-addon2"
      >
        <SearchIcon size={24} />
      </button>
    </div>
  );
}
