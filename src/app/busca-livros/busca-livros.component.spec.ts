import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaLivrosTituloComponent } from './busca-livros-titulo.component';

describe('BuscaLivrosTituloComponent', () => {
  let component: BuscaLivrosTituloComponent;
  let fixture: ComponentFixture<BuscaLivrosTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaLivrosTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaLivrosTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
