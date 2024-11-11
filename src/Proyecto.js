import React from 'react';
import AdministradorBienvenida from './AdministradorBienvenida';
import AdministradorEstudiantes from './AdministradorEstudiantes';
import VistaAgregado from './VistaAgregado';

function Proyecto() {
  return (
    <div>
      <AdministradorBienvenida />
      <AdministradorEstudiantes />
      <VistaAgregado />
     </div>
  );
}

export default Proyecto;
