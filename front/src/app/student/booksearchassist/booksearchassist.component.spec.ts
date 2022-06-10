import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksearchassistComponent } from './booksearchassist.component';

describe('BooksearchassistComponent', () => {
  let component: BooksearchassistComponent;
  let fixture: ComponentFixture<BooksearchassistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksearchassistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksearchassistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
