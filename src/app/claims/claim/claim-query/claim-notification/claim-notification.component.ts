import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-claim-notification',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './claim-notification.component.html',
  styleUrl: './claim-notification.component.scss'
})
export class ClaimNotificationComponent implements OnInit {
  idClaim: number;

  constructor(private router: Router, activateRoute: ActivatedRoute) {
    this.idClaim = 0;
  }

  ngOnInit(): void{
    // this.idClaim = Number(this.activateRoute.sn)

  }
  returnMain(): void {
    this.router.navigate(['/Claims/claim/main']);
  }

  sendMail(id: number): void {
    this.router.navigate(['/Claims/claim/main', id]);
  }

}
