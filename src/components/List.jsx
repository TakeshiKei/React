import React, { useState } from "react";

function List() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, input]);
    setInput("");
  };

  return (
    <div>
        <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </ul>
        <p>Klik tombol button untuk menambahkan list diatas</p>
      <form onSubmit={handleSubmit} style = {{marginLeft:'10px'}}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}

export default List;