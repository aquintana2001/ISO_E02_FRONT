import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDatosClienteComponent } from './mis-datos-cliente.component';

describe('MisDatosClienteComponent', () => {
  let component: MisDatosClienteComponent;
  let fixture: ComponentFixture<MisDatosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisDatosClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisDatosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
