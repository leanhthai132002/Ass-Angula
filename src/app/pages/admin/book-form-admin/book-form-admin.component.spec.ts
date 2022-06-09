import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormAdminComponent } from './book-form-admin.component';

describe('BookFormAdminComponent', () => {
  let component: BookFormAdminComponent;
  let fixture: ComponentFixture<BookFormAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFormAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookFormAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
