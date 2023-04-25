import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guide-details',
  templateUrl: './guide-details.component.html',
  styleUrls: ['./guide-details.component.scss']
})
export class GuideDetailsComponent implements OnInit {

  public guideId: string | undefined | null;
  public URL_API = "https://wguides.fly.dev"
  guide: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.guideId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get<{ title: string }>(this.URL_API + '/api/guides/' + this.guideId)
      .subscribe((data) => {
        if (!data) {
          this.router.navigate(['/guide']);
        }
        this.guide = data;
      });
  }

}
