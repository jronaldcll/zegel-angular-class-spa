import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claim-register.component.html',
  styleUrl: './claim-register.component.scss'
})
export class ClaimRegisterComponent {
  constructor(private router: Router) {}

  @Input() name: string = "Claim";

  returnMain(): void {
    this.router.navigate(['/Claims/claim/main']);
  }

}
