import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/types/Book';

@Component({
  selector: 'app-book-detail-admin',
  templateUrl: './book-detail-admin.component.html',
  styleUrls: ['./book-detail-admin.component.css']
})
export class BookDetailAdminComponent implements OnInit {
  id: string;
  book: Book
  constructor(
    private activateRoute: ActivatedRoute, 
    private bookService: BookService,
  ) { 
    this.id = '';
    this.book = {
      _id: 0,
      name: '',
      price: 0,
      sale_price: 0,
      description:'',
      image_url: '',
      status: 0
    };

  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    console.log(this.id)
    this.bookService.getBook(this.id).subscribe((data) =>{
      this.book = data;
    })
  }


}
