import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.css'],
  styles: [`
    .fa-star, .fa-star-half-empty, .fa-star-o {
      color: orange;
    }
    .app-book-rating {
      min-width: 100px;
    }
  `]
})
export class BookRatingComponent implements OnInit {
 ngOnInit(){}
}
