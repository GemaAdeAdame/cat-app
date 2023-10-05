import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  catImages: any[] = [];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.getCatImages().subscribe((data) => {
      this.catImages = data;
    });
  }
}
