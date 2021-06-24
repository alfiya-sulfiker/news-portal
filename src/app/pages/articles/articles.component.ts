import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  providers: [ArticlesService]
})
export class ArticlesComponent implements OnInit, OnChanges {
  pagination: object;
  articles: Array<object>;
  filterArticles: boolean;
  @Input() section;
  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.pagination = {
      page: 0,
      limit: 4
    };
    this.getAllArticles(false);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["section"] && changes["section"].currentValue) {
      this.getSection();
    }
  }

  getAllArticles(filterArticles) {
    this.filterArticles = filterArticles;
    this.articleService.getArticles(this.pagination).subscribe(response => {
      if (filterArticles) {
        this.articles = response.results.filter(item => item.section === this.section.display_name);
      } else {
        this.articles = response?.results;
      }

    });
  }

  getSection() {
    this.pagination = undefined;
    this.getAllArticles(true);
  }

  paginate(to) {

  }

}
