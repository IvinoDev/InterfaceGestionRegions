import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiondashComponent } from './regiondash.component';

describe('RegiondashComponent', () => {
  let component: RegiondashComponent;
  let fixture: ComponentFixture<RegiondashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegiondashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegiondashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
