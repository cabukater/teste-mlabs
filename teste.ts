import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MinhaFuncao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it('deve tratar erros de acesso negado', () => {
    const error = { status: 403 };
    const loaderProfile = {
      denyAccess: jasmine.createSpy('denyAccess')
    };
    const router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    const minhaFuncao = new MinhaFuncao(loaderProfile, router);

    minhaFuncao.handleError(error);

    expect(loaderProfile.denyAccess).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('negado', error);
  });
});
