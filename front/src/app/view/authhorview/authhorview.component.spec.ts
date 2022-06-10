import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthhorviewComponent } from './authhorview.component';

describe('AuthhorviewComponent', () => {
  let component: AuthhorviewComponent;
  let fixture: ComponentFixture<AuthhorviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthhorviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthhorviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
