import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVehiculosNoDisponiblesComponent } from './listado-vehiculos-no-disponibles.component';

describe('ListadoVehiculosNoDisponiblesComponent', () => {
  let component: ListadoVehiculosNoDisponiblesComponent;
  let fixture: ComponentFixture<ListadoVehiculosNoDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoVehiculosNoDisponiblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoVehiculosNoDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
