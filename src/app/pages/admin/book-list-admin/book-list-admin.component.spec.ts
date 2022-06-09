import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListAdminComponent } from './book-list-admin.component';

describe('BookListAdminComponent', () => {
  let component: BookListAdminComponent;
  let fixture: ComponentFixture<BookListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
