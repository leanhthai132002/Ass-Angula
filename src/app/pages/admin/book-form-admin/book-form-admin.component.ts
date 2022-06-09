import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-form-admin',
  templateUrl: './book-form-admin.component.html',
  styleUrls: ['./book-form-admin.component.css']
})
export class BookFormAdminComponent implements OnInit {

  bookForm: FormGroup;
  bookId: string;

  constructor(
    private bookService: BookService, // cung cấp createBook
    private router: Router, // cung cấp navigate điều hướng
    private activateRoute: ActivatedRoute // lấy ra các tham số trong url
  ) {
    this.bookForm = new FormGroup({
      // name: new FormControl('', Validators.required),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        this.onValidateNameHasBook // tên custom validate
      ]),
      // price: new FormControl(0),
    });

    this.bookId = '0';
  }

  ngOnInit(): void {
    this.bookId = this.activateRoute.snapshot.params['_id'];
    if (this.bookId) {
      this.bookService.getBook(this.bookId).subscribe(data => {
        // Gán giá trị cho form, patchValue sẽ nhận đầy đủ thuộc tính của form
        this.bookForm.patchValue({
          name: data.name
        });
      });
    }
  }

  // Mỗi khi FormControl name được thay đổi thì sẽ gọi vào đây
  onValidateNameHasBook(control: AbstractControl): ValidationErrors | null {
    // 1. Lấy ra value của FormControl name hiện tại
    const {value} = control; // value = control.value;
    // 2. Kiểm tra theo điều kiện chứa từ khoá 'book'
    if (!value.includes('book')) {
      return {hasBookError: true};
    }
    // 3. trả về kq nếu không lỗi
    return null;
  }

  onSubmit() {
    // 1. Lấy dữ liệu từ form
    const submitData = this.bookForm.value;

    if (this.bookId !== '0' || this.bookId !== undefined) {
      return this.bookService.updateBook(this.bookId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin/products');
      });
    }

    // 2. Call API (Cần định nghĩa service và router điều hướng)
    return this.bookService.createBook(submitData).subscribe((data) => {
      // 3. Sau khi API call thành công sẽ điều hướng về danh sách
      // this.router.navigate(['/admin', 'books']);
      this.router.navigateByUrl('/admin/products');
    })

  }

}
