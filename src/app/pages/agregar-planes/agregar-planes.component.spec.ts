import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPlanesComponent } from './agregar-planes.component';

describe('AgregarPlanesComponent', () => {
  let component: AgregarPlanesComponent;
  let fixture: ComponentFixture<AgregarPlanesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarPlanesComponent]
    });
    fixture = TestBed.createComponent(AgregarPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
