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
import { Router } from '@angular/router';
import { ProductRegisterService } from './product-register.service';


@Component({
  selector: 'app-register-product',
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
  templateUrl: './register-product.component.html',
  styleUrl: './register-product.component.scss'
})
export class RegisterProductComponent {
  showLoading = false;
  disable = false;
  message: any;
  checked = false;
  hasUnitNumber = false;

  product: ProductRegister;
  productForm: UntypedFormGroup;
  constructor(
    private router: Router,
    public productRegisterService: ProductRegisterService,
    private fb: UntypedFormBuilder
  ) {
    const blank = {} as ProductRegister;
    this.product = new ProductRegister(blank);
    this.productForm = this.createproductForm();
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
    this.router.navigate(['/Products/product/registrar-producto']);
  }

  public async saveProduct() {

    try {
      await this.productRegisterService.addProduct(this.productForm.getRawValue());

    } catch (error) {
      console.error(error);
      alert('Ocurrión un inconveniente. Por favor, intente registar más tarde');
    }
  }

}
