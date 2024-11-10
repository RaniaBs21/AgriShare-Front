import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationRecolteComponent } from './modification-recolte.component';

describe('ModificationRecolteComponent', () => {
  let component: ModificationRecolteComponent;
  let fixture: ComponentFixture<ModificationRecolteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificationRecolteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationRecolteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
