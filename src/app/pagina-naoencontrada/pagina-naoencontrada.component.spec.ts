import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNaoencontradaComponent } from './pagina-naoencontrada.component';

describe('PaginaNaoencontradaComponent', () => {
  let component: PaginaNaoencontradaComponent;
  let fixture: ComponentFixture<PaginaNaoencontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaNaoencontradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaNaoencontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
