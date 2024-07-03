import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimRegisterService } from './claim-register.service';
import { ClaimRegister } from './claim-register.model';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-claim-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule],
  templateUrl: './claim-register.component.html',
  styleUrl: './claim-register.component.scss'
})
export class ClaimRegisterComponent {
  claimbook: ClaimRegister
  claimbookForm: UntypedFormGroup
  constructor(
    private router: Router,
    // public claimRegisterService: ClaimRegisterService,
    private fb: UntypedFormBuilder
  ) {
    const blank ={} as ClaimRegister;
    this.claimbook = new ClaimRegister(blank);
    this.claimbookForm = this.createClaimBookForm();
  }

  // @Input() name: string = "Claim";

  createClaimBookForm(): UntypedFormGroup{
    return this.fb.group({
      tipo_reclamo: [this.claimbook.tipo_reclamo, [Validators.required]],
      fecha_reclamo: [this.claimbook.fecha_reclamo, [Validators.required]],
      nombres: [this.claimbook.nombres, [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      apellidos: [this.claimbook.apellidos, [Validators.required]],
      correo: [this.claimbook.correo, [Validators.required, Validators.email]],
      telefono: [this.claimbook.telefono, [Validators.required, Validators.minLength(7)]],
      pais: [this.claimbook.pais, [Validators.required]],
      ciudad: [this.claimbook.ciudad, [Validators.required]],
      direccion: [this.claimbook.direccion, [Validators.required]],
      tipo_identificacion: [this.claimbook.tipo_identificacion, [Validators.required]],
      numero_identificacion: [this.claimbook.numero_identificacion, [Validators.required]],
      detalle_reclamo: [this.claimbook.detalle_reclamo, [Validators.required]],
    });
  }

  returnMain(): void {
    this.router.navigate(['/Claims/claim/main']);
  }

  public saveClaim(): void{
    // this.claimRegisterService.addClaimbook(this.claimbookForm.getRawValue());
  }

}
