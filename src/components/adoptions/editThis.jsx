import { useState } from 'react';
import axios from 'axios';

function Formulario() {
  const [datos, setDatos] = useState({ name: '', phone: '', age: '', address: '', petName: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://script.google.com/macros/s/AKfycbyph5cS65AHgy-DkLn4_tVDbNrj4E9Pruq051XUNaal4rEIG_oSGIIQvA4iKoG_PTef/exec', datos);
      alert('Datos enviados correctamente.');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={datos.name} onChange={handleChange} placeholder="Nombre" />
      <input type="text" name="phone" value={datos.phone} onChange={handleChange} placeholder="Teléfono" />
      <input type="text" name="age" value={datos.age} onChange={handleChange} placeholder="Edad" />
      <input type="text" name="address" value={datos.address} onChange={handleChange} placeholder="Dirección" />
      <select name="petName" value={datos.petName} onChange={handleChange}>
        <option value="">Seleccione el nombre de la mascota</option>
        <option value="Max">Max</option>
        <option value="Bella">Bella</option>
        <option value="Rocky">Rocky</option>
        <option value="Luna">Luna</option>
        
      </select>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;