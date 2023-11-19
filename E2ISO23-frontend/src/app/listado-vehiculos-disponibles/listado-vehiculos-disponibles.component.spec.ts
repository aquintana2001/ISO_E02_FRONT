import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVehiculosDisponiblesComponent } from './listado-vehiculos-disponibles.component';

describe('ListadoVehiculosDisponiblesComponent', () => {
  let component: ListadoVehiculosDisponiblesComponent;
  let fixture: ComponentFixture<ListadoVehiculosDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoVehiculosDisponiblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoVehiculosDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
