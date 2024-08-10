import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ProductRegister } from '../product-register.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRegisterService } from '../register-product/product-register.service';
import Swal from "sweetalert2"

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatError,
    CommonModule,
  ],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent {
  showLoading = false;
  disable = false;
  message: any;
  checked = false;
  hasUnitNumber = false;

  product: any;
  productForm: UntypedFormGroup;

  productId!: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public productRegisterService: ProductRegisterService,
    private fb: UntypedFormBuilder
  ) {
    const blank = {} as ProductRegister;
    this.product = new ProductRegister(blank);
    this.productForm = this.createproductForm();
  }


  ngOnInit():void{
    this.productId = this.route.snapshot.paramMap.get('idProduct') ?? '';
    this.getProductById();
  }


  createproductForm(): UntypedFormGroup {
    return this.fb.group({
      title: [this.product.title, [Validators.required]],
      price: [this.product.price, [Validators.required]],
      description: [this.product.description, [Validators.required]],
      categoryId: [this.product.categoryId, [Validators.required]],
      images: [this.product.images, [Validators.required]],
    });
  }

  returnMain(): void {
    this.router.navigate(['/Products/product/consultar-producto']);
  }

  getProductById(): void {

      this.productRegisterService.getProductById(this.productId).subscribe(
        (product: any)=>{
          this.product = product
          this.productForm.patchValue({
            title: this.product.title,
            price: this.product.price,
            description: this.product.description,
            categoryId: this.product.category.id,
            images: ["https://placeimg.com/640/480/any"]
          });
        },
        (error) =>{
          console.error(error);
          alert('Ocurrión un inconveniente. Por favor, intente registar más tarde');
        }
      );

  }
  updateProduct(): void {
      this.productRegisterService.updateProduct(this.productId, this.productForm.value).subscribe(
        (data)=>{
          Swal.fire({
            icon: "success",
            title: "Producto actualizado con éxito",
            text: `Se actualizó el producto con id # ${data.id}`,
          }).then(function(){
            window.location.reload();
          })
        },
        (error) =>{
          console.error(error);
          alert('Ocurrión un inconveniente. Por favor, intente registar más tarde');
        }
      );
  }

}
