export class ClaimRegister{
    tipo_reclamo: number;
    fecha_reclamo: string;
    nombres: string;
    apellidos: string;
    correo: string;
    telefono: string;
    pais: string;
    ciudad: string;
    direccion: string;
    tipo_identificacion: string;
    numero_identificacion: number;
    detalle_reclamo: string;

    constructor(claimRegister: ClaimRegister){
      this.tipo_reclamo = claimRegister.tipo_reclamo || 1;
      this.fecha_reclamo = claimRegister.fecha_reclamo || '2024-06-21';
      this.nombres = claimRegister.nombres || 'Ronald';
      this.apellidos = claimRegister.apellidos || 'Castillo';
      this.correo = claimRegister.correo || 'fjorcastil@zegel.edu.pe';
      this.telefono = claimRegister.telefono || '9999999';
      this.pais = claimRegister.pais || 'PE';
      this.ciudad = claimRegister.ciudad || 'Lima';
      this.direccion = claimRegister.direccion || 'Lima';
      this.tipo_identificacion = claimRegister.tipo_identificacion || 'DNI';
      this.numero_identificacion = claimRegister.numero_identificacion || 8888888;
      this.detalle_reclamo = claimRegister.detalle_reclamo || 'Test claim from Angular';
    }

}
