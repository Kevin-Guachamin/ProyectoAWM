import React, { Component } from 'react';
import './VistaAgregado.css';

class VistaAgregado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        nombre: '',
        apellido: '',
        correo: '',
        codigoUnico: '',
        ruta: ''
      }
    };

    this.fields = [
      { label: 'Nombre', placeholder: 'Nombre', value: this.state.formData.nombre },
      { label: 'Apellido', placeholder: 'Apellido', value: this.state.formData.apellido },
      { label: 'Correo', placeholder: 'Correo', value: this.state.formData.correo, type: 'email' },
      { label: 'Código Único', placeholder: 'Código Único', value: this.state.formData.codigoUnico },
      { label: 'Ruta', placeholder: 'Ruta', value: this.state.formData.ruta }
    ];
  }

  render() {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Agregar Estudiante</h2>
          {this.fields.map((field, index) => (
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
          <div className="modal-actions">
            <button className="btn btn-primary">Guardar</button>
            <button className="btn btn-secondary">Cancelar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default VistaAgregado;
