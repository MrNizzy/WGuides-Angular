import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-consumables',
  templateUrl: './consumables.component.html',
  styleUrls: ['./consumables.component.scss']
})
export class ConsumablesComponent implements OnInit {


  data: any;
  id: any;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getConsumables(this.id)
      .subscribe((data) => {
        if (!data) {
          this.router.navigate(['/']);
        }
        this.data = data;
      });
  }

}
