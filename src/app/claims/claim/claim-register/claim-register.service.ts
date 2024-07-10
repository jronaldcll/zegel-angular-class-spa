import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments.developments';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ClaimRegister } from './claim-register.model';
import Swal from "sweetalert2"
import { UnsubscribeOnDestroyAdapter } from '../../../shared/UnsubscribeOnDestroyAdapter';
@Injectable({
  providedIn: 'root'
})
export class ClaimRegisterService extends UnsubscribeOnDestroyAdapter{
private readonly API_URL = `${environment.apiURL}/zegel/claimbook`
  constructor(private httpClient: HttpClient) {
    super()
  }

  addClaimbook(claimbook: ClaimRegister): void{
    this.httpClient.post<any>(this.API_URL, claimbook)
    .subscribe({
      next: (data)=>{
        Swal.fire({
          icon: "success",
          title: "Ticket generado",
          text: `Se genero el ticket # ${data.idClaim}`,
        }).then(function(){
          window.location.reload();
        })
      },
      error: (err: HttpErrorResponse) =>{
          console.log(err.name + ' ' + err.message);
          if(err.status=== 403){
            Swal.fire({
              icon: "error",
              title: "Error de solicitud",
              text: `Hubo un problema con la solicitud. Por favor, verifica los datos`,
            })
          }
      },
    })
  }
}
