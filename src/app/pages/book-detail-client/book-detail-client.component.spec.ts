import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailClientComponent } from './book-detail-client.component';

describe('BookDetailClientComponent', () => {
  let component: BookDetailClientComponent;
  let fixture: ComponentFixture<BookDetailClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
