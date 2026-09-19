import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioContrasena } from './usuario-contrasena';

describe('UsuarioContrasena', () => {
  let component: UsuarioContrasena;
  let fixture: ComponentFixture<UsuarioContrasena>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioContrasena],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioContrasena);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
