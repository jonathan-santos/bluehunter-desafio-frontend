import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaClientesComponent } from './busca-clientes.component';

describe('BuscaClientesComponent', () => {
  let component: BuscaClientesComponent;
  let fixture: ComponentFixture<BuscaClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
