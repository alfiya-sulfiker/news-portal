import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ArticlesService {
    apiKey = environment?.apiKey;
    constructor(private httpClient: HttpClient) {

    }
    getArticles(pagination): Observable<any> {
        const paginate = pagination ? `&page=${pagination?.page}&limit=${pagination?.limit}` : '';

        return this.httpClient.get(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${this.apiKey}${paginate}`)
    }
}