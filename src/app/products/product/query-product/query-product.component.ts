import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query-product',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatError,
    CommonModule,
  ],
  templateUrl: './query-product.component.html',
  styleUrl: './query-product.component.scss'
})
export class QueryProductComponent {
  idProduct: number;
  constructor(private router: Router) {
    this.idProduct =0;
  }
  registerProduct(): void {
    this.router.navigate(['/Products/product/registrar-producto']);
  }
  queryProduct() {
    if(this.idProduct){
      this.router.navigate(['/Products/product/actualizar-producto', this.idProduct]);
    }
  }

}
