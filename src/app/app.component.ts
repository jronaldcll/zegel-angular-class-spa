import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClaimRegisterComponent } from './claims/claim/claim-register/claim-register.component';
import { UppercasePipe } from './uppercase.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ClaimRegisterComponent, UppercasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'zegel-angular-class-spa';
  name = 'Ronald Castillo';
  isListVisible: boolean=true;
  items: string[] = ['Celular','Laptop','PC','Monitor','Teclado', 'Mouse', 'Ipad']
  headerStyle ={
    'color': 'red',
    'font-family': 'Verdana, sans-serif'
  }

  parrafoClass ={
    'blue-text': true,
  }

  toggleVisibitity(){
    this.isListVisible =!this.isListVisible;
  }
}
