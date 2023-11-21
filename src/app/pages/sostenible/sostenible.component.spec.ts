import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SostenibleComponent } from './sostenible.component';

describe('SostenibleComponent', () => {
  let component: SostenibleComponent;
  let fixture: ComponentFixture<SostenibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SostenibleComponent]
    });
    fixture = TestBed.createComponent(SostenibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
