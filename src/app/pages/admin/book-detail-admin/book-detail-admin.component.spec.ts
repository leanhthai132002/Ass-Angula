import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailAdminComponent } from './book-detail-admin.component';

describe('BookDetailAdminComponent', () => {
  let component: BookDetailAdminComponent;
  let fixture: ComponentFixture<BookDetailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
