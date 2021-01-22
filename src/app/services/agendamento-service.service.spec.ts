import { TestBed } from '@angular/core/testing';

import { AgendamentoService } from './agendamento-service.service';

describe('AgendamentoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgendamentoService = TestBed.get(AgendamentoService);
    expect(service).toBeTruthy();
  });
});
