import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2testComponent } from './ng2test.component';

describe('Ng2testComponent', () => {
  let component: Ng2testComponent;
  let fixture: ComponentFixture<Ng2testComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2testComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
