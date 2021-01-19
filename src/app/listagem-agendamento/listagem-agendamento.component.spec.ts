import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAgendamentoComponent } from './listagem-agendamento.component';

describe('ListagemAgendamentoComponent', () => {
  let component: ListagemAgendamentoComponent;
  let fixture: ComponentFixture<ListagemAgendamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemAgendamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
