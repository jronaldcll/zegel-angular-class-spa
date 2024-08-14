import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { ProductRegisterService } from '../register-product/product-register.service';
import { ProductRegister } from '../product-register.model';
import { Router } from '@angular/router';

export interface productData {
  id: number;
  title: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent {
  displayedColumns: string[] = ['id', 'title', 'price', 'category', 'actions'];
  dataSource: productData[] = [];;
  constructor(
    public productRegisterService: ProductRegisterService,
    private router: Router
  ) {
  }
  ngOnInit():void{
    this.getAllProducts();
  }

  getAllProducts(): void {

    this.productRegisterService.getAllProducts().subscribe(
      (products: any[])=>{
        this.dataSource = products.map(product => ({
          id: product.id,
          title: product.title,
          price: product.price,
          category: product.category.name
        }));
        console.log(`Product List: ${JSON.stringify(products)}`);
      },
      (error) =>{
        console.error(error);
        alert('Ocurrión un inconveniente. Por favor, intente registar más tarde');
      }
    );
  }

  deleteProduct(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.productRegisterService.deleteProduct(id).subscribe(
        () => {
          this.dataSource = this.dataSource.filter(product => product.id !== id);
          console.log(`Producto con id ${id} eliminado.`);
        },
        (error) => {
          console.error('Error al eliminar el producto:', error);
          alert('No se pudo eliminar el producto. Por favor, intente nuevamente.');
        }
      );
    }
  }

  queryProduct(id: number) {
      this.router.navigate(['/Products/product/actualizar-producto', id]);
  }
}
