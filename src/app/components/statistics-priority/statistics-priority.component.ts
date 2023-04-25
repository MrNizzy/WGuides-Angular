import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-statistics-priority',
  templateUrl: './statistics-priority.component.html',
  styleUrls: ['./statistics-priority.component.scss']
})
export class StatisticsPriorityComponent implements OnInit {
  textColor = "#28150F";
  backgroundColor = "#FFD100";

  data: any;
  id: any;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getStatistics(this.id)
      .subscribe((data) => {
        if (!data) {
          this.router.navigate(['/']);
        }
        this.data = data;
      });
  }

  sortStatistics(a: { order: number; }, b: { order: number; }) {
    return a.order - b.order;
  }

}
