import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssedbooksviewComponent } from './issedbooksview.component';

describe('IssedbooksviewComponent', () => {
  let component: IssedbooksviewComponent;
  let fixture: ComponentFixture<IssedbooksviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssedbooksviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssedbooksviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
