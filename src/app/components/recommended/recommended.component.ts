import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  // TODO: Implementar la API de youtube para solucionar problema de incompatibilidad.

  guides: any;

  constructor(private apiService: ApiService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.apiService.getGuides()
      .subscribe((data) => {
        if (!data) {
          this.router.navigate(['/']);
        }
        this.guides = Object.values(data);
        this.guides = this.guides.map((guide: any) => guide);
        console.log(this.guides)
      });
  }

  getTrustResourceUrl(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
