import { useState } from 'react';

function Formulario() {
  const [datos, setDatos] = useState({ Name: '', Telephone: '', Age: '', Address: '', PetName: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyph5cS65AHgy-DkLn4_tVDbNrj4E9Pruq051XUNaal4rEIG_oSGIIQvA4iKoG_PTef/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
      const result = await response.text();
      alert(result);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="Name" value={datos.Name} onChange={handleChange} placeholder="Nombre" />
      <input type="text" name="Telephone" value={datos.Telephone} onChange={handleChange} placeholder="Teléfono" />
      <input type="text" name="Age" value={datos.Age} onChange={handleChange} placeholder="Edad" />
      <input type="text" name="Address" value={datos.Address} onChange={handleChange} placeholder="Dirección" />
      <input type="text" name="PetName" value={datos.PetName} onChange={handleChange} placeholder="Nombre de la mascota" />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
