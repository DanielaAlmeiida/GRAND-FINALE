export default function Input({ label, id, type, handlechange, name }) {
  return (
    <div class="mb-3">
      <label for={id} class="form-label">
        {label}
      </label>
      <input
        type={type}
        class="form-control"
        id={id}
        aria-describedby="emailHelp"
        name={name}
        onChange={handlechange}
        required={true}
      />
    </div>
  );
}
