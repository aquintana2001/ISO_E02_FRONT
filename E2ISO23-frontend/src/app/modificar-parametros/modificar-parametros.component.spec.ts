import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarParametrosComponent } from './modificar-parametros.component';

describe('ModificarParametrosComponent', () => {
  let component: ModificarParametrosComponent;
  let fixture: ComponentFixture<ModificarParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarParametrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
