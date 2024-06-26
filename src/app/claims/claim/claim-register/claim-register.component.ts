import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimRegisterService } from './claim-register.service';
import { ClaimRegister } from './claim-register.model';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-claim-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claim-register.component.html',
  styleUrl: './claim-register.component.scss'
})
export class ClaimRegisterComponent {
  claimbook: ClaimRegister
  claimbookForm: UntypedFormGroup
  constructor(
    private router: Router,
    public claimRegisterService: ClaimRegisterService,
    private fb: UntypedFormBuilder
  ) {
    const blank ={} as ClaimRegister;
    this.claimbook = new ClaimRegister(blank);
    this.claimbookForm = this.createClaimBookForm();
  }

  @Input() name: string = "Claim";

  createClaimBookForm(): UntypedFormGroup{
    return this.fb.group({
      tipo_reclamo: [this.claimbook.tipo_reclamo],
      fecha_reclamo: [this.claimbook.fecha_reclamo],
      nombres: [this.claimbook.nombres],
      apellidos: [this.claimbook.apellidos],
      correo: [this.claimbook.correo],
      telefono: [this.claimbook.telefono],
      pais: [this.claimbook.pais],
      ciudad: [this.claimbook.ciudad],
      direccion: [this.claimbook.direccion],
      tipo_identificacion: [this.claimbook.tipo_identificacion],
      numero_identificacion: [this.claimbook.numero_identificacion],
      detalle_reclamo: [this.claimbook.detalle_reclamo],
    });
  }

  returnMain(): void {
    this.router.navigate(['/Claims/claim/main']);
  }

  public saveClaim(): void{
    this.claimRegisterService.addClaimbook(this.claimbookForm.getRawValue());
  }

}
