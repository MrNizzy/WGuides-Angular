import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-introduction-guide',
  templateUrl: './introduction-guide.component.html',
  styleUrls: ['./introduction-guide.component.scss']
})
export class IntroductionGuideComponent implements OnInit {

  data: any;
  id: any;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getGuide(this.id)
      .subscribe((data) => {
        if (!data) {
          this.router.navigate(['/']);
        }
        this.data = data;
      });
  }

}
