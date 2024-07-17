import { Injectable } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '../../../shared/UnsubscribeOnDestroyAdapter';
import { environment } from '../../../../environments/environments.developments';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductRegister } from '../product-register.model';
import Swal from "sweetalert2"

@Injectable({
  providedIn: 'root'
})
export class ProductRegisterService extends UnsubscribeOnDestroyAdapter{
  private readonly API_URL = `${environment.apiURLProducts}/products`
    constructor(private httpClient: HttpClient) {
      super()
    }

    addProduct(product: ProductRegister): void{
      this.httpClient.post<any>(this.API_URL, product)
      .subscribe({
        next: (data)=>{
          Swal.fire({
            icon: "success",
            title: "Producto creado",
            text: `Se genero el producto con id # ${data.id}`,
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
