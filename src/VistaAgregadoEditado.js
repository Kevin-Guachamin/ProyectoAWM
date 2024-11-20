import React from 'react';
import './VistaAgregadoEditado.css';

const VistaAgregadoEditado = () => {
  const agregarFormData = {
    nombre: '',
    apellido: '',
    correo: '',
    codigoUnico: '',
    ruta: ''
  };

  const editarFormData = {
    nombre: 'Juan',
    apellido: 'Perez',
    correo: 'juan.perez@epn.edu.ec',
    codigoUnico: '12345',
    ruta: '13'
  };

  const fields = (formData) => [
    { label: 'Nombre', placeholder: 'Nombre', value: formData.nombre },
    { label: 'Apellido', placeholder: 'Apellido', value: formData.apellido },
    { label: 'Correo', placeholder: 'Correo', value: formData.correo, type: 'email' },
    { label: 'Código Único', placeholder: 'Código Único', value: formData.codigoUnico },
    { label: 'Ruta', placeholder: 'Ruta', value: formData.ruta }
  ];

  return (
    <div className="container">
      <div className="form-container">
        <h2>Agregar Estudiante</h2>
        {fields(agregarFormData).map((field, index) => (
          <div className="form-group" key={index}>
            <label>{field.label}</label>
            <input
              type={field.type || 'text'}
              placeholder={field.placeholder}
              defaultValue={field.value}
              className="form-input"
            />
          </div>
        ))}
        <div className="form-actions">
          <button className="btn btn-primary">Guardar</button>
          <button className="btn btn-secondary">Cancelar</button>
        </div>
      </div>

      <div className="form-container">
        <h2>Editar Estudiante</h2>
        {fields(editarFormData).map((field, index) => (
          <div className="form-group" key={index}>
            <label>{field.label}</label>
            <input
              type={field.type || 'text'}
              placeholder={field.placeholder}
              defaultValue={field.value}
              className="form-input"
            />
          </div>
        ))}
        <div className="form-actions">
          <button className="btn btn-primary">Guardar Cambios</button>
          <button className="btn btn-secondary">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default VistaAgregadoEditado;
