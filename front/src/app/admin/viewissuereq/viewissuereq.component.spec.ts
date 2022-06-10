import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewissuereqComponent } from './viewissuereq.component';

describe('ViewissuereqComponent', () => {
  let component: ViewissuereqComponent;
  let fixture: ComponentFixture<ViewissuereqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewissuereqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewissuereqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
