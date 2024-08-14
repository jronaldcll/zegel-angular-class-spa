import { Injectable } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '../../../shared/UnsubscribeOnDestroyAdapter';
import { environment } from '../../../../environments/environments.developments';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductRegister } from '../product-register.model';
import Swal from "sweetalert2"
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductRegisterService extends UnsubscribeOnDestroyAdapter{
  private readonly API_URL = `${environment.apiURLProducts}/products`

  productData!: ProductRegister;
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
    getProductById(idProduct: string): Observable<ProductRegister>{
      return this.httpClient.get<ProductRegister>(this.API_URL +"/"+ idProduct)
      .pipe(
        catchError((err: HttpErrorResponse)=>{
          console.log(err.name + ' ' + err.message);
            if(err.status=== 403){
              Swal.fire({
                icon: "error",
                title: "Error de solicitud",
                text: `Hubo un problema con la solicitud. Por favor, verifica los datos`,
              })
            }
            throw err;
        })
      )
    }
    getAllProducts(): Observable<any[]>{
      return this.httpClient.get<any[]>(this.API_URL)
      .pipe(
        catchError((err: HttpErrorResponse)=>{
          console.log(err.name + ' ' + err.message);
            if(err.status=== 403){
              Swal.fire({
                icon: "error",
                title: "Error de solicitud",
                text: `Hubo un problema con la solicitud. Por favor, verifica los datos`,
              })
            }
            throw err;
        })
      )
    }
    getCategories(): Observable<any[]>{
      return this.httpClient.get<any[]>('https://api.escuelajs.co/api/v1/categories')
      .pipe(
        catchError((err: HttpErrorResponse)=>{
          console.log(err.name + ' ' + err.message);
            if(err.status=== 403){
              Swal.fire({
                icon: "error",
                title: "Error de solicitud",
                text: `Hubo un problema con la solicitud. Por favor, verifica los datos`,
              })
            }
            throw err;
        })
      )
    }
    updateProduct(idProduct: string, product: ProductRegister): Observable<any>{
      return this.httpClient.put<any>(`${this.API_URL}/${idProduct}`, product)
      .pipe(
        catchError((err: HttpErrorResponse)=>{
          console.log(err.name + ' ' + err.message);
            if(err.status=== 403){
              Swal.fire({
                icon: "error",
                title: "Error de solicitud",
                text: `Hubo un problema con la solicitud. Por favor, verifica los datos`,
              })
            }
            throw err;
        })
      )
    }
    deleteProduct(idProduct: number): Observable<any>{
      return this.httpClient.delete<any>(`${this.API_URL}/${idProduct}`)
      .pipe(
        catchError((err: HttpErrorResponse)=>{
          console.log(err.name + ' ' + err.message);
            if(err.status=== 403){
              Swal.fire({
                icon: "error",
                title: "Error de solicitud",
                text: `Hubo un problema con la solicitud. Por favor, verifica los datos`,
              })
            }
            throw err;
        })
      )
    }
}
