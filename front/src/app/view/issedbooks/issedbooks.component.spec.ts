import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssedbooksComponent } from './issedbooks.component';

describe('IssedbooksComponent', () => {
  let component: IssedbooksComponent;
  let fixture: ComponentFixture<IssedbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssedbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
