import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments.developments';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ClaimRegister } from './claim-register.model';
@Injectable({
  providedIn: 'root'
})
export class ClaimRegisterService {
private readonly API_URL = `${environment.apiURL}/zegel/claimbook`
  constructor(private httpClient: HttpClient) {}
  addClaimbook(claimbook: ClaimRegister): void{
    this.httpClient.post(this.API_URL, claimbook)
    .subscribe({
      next: (data)=>{
        alert(data.toString);
      },
      error: (err: HttpErrorResponse) =>{
          console.log(err.name + ' ' + err.message);
      },
    })
  }
}
