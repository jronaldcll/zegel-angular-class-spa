import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-claim-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claim-register.component.html',
  styleUrl: './claim-register.component.scss'
})
export class ClaimRegisterComponent {
  @Input() name: string = "Claim";
}
