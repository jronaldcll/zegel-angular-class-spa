import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-query',
  standalone: true,
  imports: [],
  templateUrl: './claim-query.component.html',
  styleUrl: './claim-query.component.scss'
})
export class ClaimQueryComponent {
  constructor(private router: Router) {}

  returnMain(): void {
    this.router.navigate(['/Claims/claim/main']);
  }
  forwardMail(): void {
    this.router.navigate(['/Claims/claim/notificar-reclamo']);
  }

}
