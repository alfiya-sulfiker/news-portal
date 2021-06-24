import { Component, OnInit } from '@angular/core';
import { SectionsService } from './sections.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
  providers: [SectionsService]
})
export class SectionsComponent implements OnInit {
  sectionItems: Array<object>;
  section: object;
  constructor(private sectionsService: SectionsService) { }

  ngOnInit(): void {
    this.getSections();
  }
  getSections() {
    this.sectionsService.getSections().subscribe(response => {
      this.sectionItems = response?.results;
    });
  }

  goToSection(section) {
    this.section = section;
  }
}
