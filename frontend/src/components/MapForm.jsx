import React, { useState } from "react";
import { addMap } from "../services/api.js";

const MapForm = ({ token }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    if (image) formData.append("image", image);
    if (file) formData.append("file", file);

    const result = await addMap(formData, token);
    console.log(result);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Descrizione:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      </div>
      <div>
        <label>Immagine:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <div>
        <label>File Mappa:</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <button type="submit">Aggiungi Mappa</button>
    </form>
  );
};

export default MapForm;
