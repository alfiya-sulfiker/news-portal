import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class SectionsService {
    apiKey = environment.apiKey;
    constructor(private httpClient: HttpClient) {

    }
    getSections(): Observable<any> {
        return this.httpClient.get(`https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${this.apiKey}`)
    }
}