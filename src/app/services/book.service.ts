import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book, BookCreate } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  //http sẽ cung cấp các phương thức để tương tác với api
  constructor(private http: HttpClient) { }

  //Observable sẽ cung cấp kiểu xử lý bất đồng bộ về phía component lắng nghe dữ liệu
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(environment.books);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${environment.books}/${id}`)
  }

  deleteBook(id: string|number): Observable<any> {
    return this.http.delete(`${environment.books}/${id}`)
  }

  createBook(data: BookCreate): Observable<Book> {
    return this.http.post<Book>(`${environment.books}`, data);
  }

  updateBook(id: number|string, data: BookCreate): Observable<Book> {
    return this.http.put<Book>(`${environment.books}/${id}`, data)
  }
}
