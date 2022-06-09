import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/types/Book';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {

  books: Book[];
  constructor(private bookService: BookService) {
    this.books = [];
  
  }
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  onGetList() {
    this.bookService.getBooks().subscribe((data)=>{
      this.books = data
    })
  }

}
