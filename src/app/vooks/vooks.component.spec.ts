import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VooksComponent } from './vooks.component';

describe('VooksComponent', () => {
  let component: VooksComponent;
  let fixture: ComponentFixture<VooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
