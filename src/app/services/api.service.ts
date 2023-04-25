import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private URL_API = "https://wguides.fly.dev";

    constructor(private http: HttpClient) { }

    getGuides(){
        return this.http.get(this.URL_API + '/api/guides');
    }
    
    getGuide(id: string) {
        return this.http.get(this.URL_API + '/api/guides/' + id);
    }

    getConsumables(id: string){
        return this.http.get(this.URL_API + '/api/guides/consumables/' + id);
    }
    
    getStatistics(id: string){
        return this.http.get(this.URL_API + '/api/guides/statistics/' + id);
    }

    getTalents(id: string){
        return this.http.get(this.URL_API + '/api/guides/talents/' + id);
    }

    getEnchants(id: string){
        return this.http.get(this.URL_API + '/api/guides/enchants/' + id);
    }

    getEquipment(id: string){
        return this.http.get(this.URL_API + '/api/guides/equipment/' + id);
    }

    getGems(id: string){
        return this.http.get(this.URL_API + '/api/guides/gems/' + id);
    }

    getGlyphs(id: string){
        return this.http.get(this.URL_API + '/api/guides/glyphs/' + id);
    }

    getRaces(id: string){
        return this.http.get(this.URL_API + '/api/guides/races/' + id);
    }
}