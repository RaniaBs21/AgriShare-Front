import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrishareComponent } from './agrishare.component';

describe('AgrishareComponent', () => {
  let component: AgrishareComponent;
  let fixture: ComponentFixture<AgrishareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrishareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrishareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
