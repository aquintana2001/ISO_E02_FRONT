import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarReservasClienteComponent } from './consultar-reservas-cliente.component';

describe('ConsultarReservasClienteComponent', () => {
  let component: ConsultarReservasClienteComponent;
  let fixture: ComponentFixture<ConsultarReservasClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarReservasClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarReservasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
