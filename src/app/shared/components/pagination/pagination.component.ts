import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  
  @Input() totalPages: number = 0;
  @Input() currentPage: number = 0;
  @Input() totalCount: number = 0;
  @Input() maxCount: number = 0;
  pageCount: number = 0;

  @Output() pageChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.getPageCount();
  }

  getPageCount(): void {
    this.pageCount = (this.totalCount / this.maxCount);
  }

  getNumberRange(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }

  onPageChange(page: number): void {
    if(page < 1){
      page = 1;
      this.currentPage = 1;
    }
    this.pageChange.emit(page);
  }
}
