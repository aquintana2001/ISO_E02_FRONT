import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarVehiculosComponent } from './consultar-vehiculos.component';

describe('ConsultarVehiculosComponent', () => {
  let component: ConsultarVehiculosComponent;
  let fixture: ComponentFixture<ConsultarVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarVehiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
