import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddregionComponent } from './addregion.component';

describe('AddregionComponent', () => {
  let component: AddregionComponent;
  let fixture: ComponentFixture<AddregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddregionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
