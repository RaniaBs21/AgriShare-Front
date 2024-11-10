import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRecolteComponent } from './ajouter-recolte.component';

describe('AjouterRecolteComponent', () => {
  let component: AjouterRecolteComponent;
  let fixture: ComponentFixture<AjouterRecolteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterRecolteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterRecolteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
