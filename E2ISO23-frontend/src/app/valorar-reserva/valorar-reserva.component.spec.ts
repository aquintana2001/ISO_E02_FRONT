import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorarReservaComponent } from './valorar-reserva.component';

describe('ValorarReservaComponent', () => {
  let component: ValorarReservaComponent;
  let fixture: ComponentFixture<ValorarReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorarReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
