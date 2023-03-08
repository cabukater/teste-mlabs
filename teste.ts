import { HttpHeaders, HttpEventType } from '@angular/common/http';
import { of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CaronService } from '@minalib/caronService';
import { CaronteService } from './CaronteService';

describe('CaronteService', () => {
  let service: CaronteService;
  let caronService: jest.Mocked<CaronService>;

  beforeEach(() => {
    caronService = {
      initialize: jest.fn(),
      get: jest.fn(),
      post: jest.fn(),
    } as unknown as jest.Mocked<CaronService>;

    service = new CaronteService(caronService);
  });

  describe('get', () => {
    it('should call caronService.get with headers', () => {
      const token = 'some-token';
      const relation = 'some-relation';
      const correlationId = 'some-correlation-id';
      const endpoint = 'some-endpoint';
      const key = 'some-key';
      const body = { some: 'body' };

      const headers = new HttpHeaders({
        aut: `Bearer ${token}`,
        'id-cor': correlationId,
        key,
      });

      const response = {
        type: HttpEventType.Response,
      };

      caronService.initialize.mockReturnValue(
        of(response as any)
      );
      caronService.get.mockReturnValue(
        of({ type: HttpEventType.Response, body } as any)
      );

      service.get(token, relation, correlationId).subscribe((result) => {
        expect(caronService.initialize).toHaveBeenCalledWith(
          endpoint,
          expect.objectContaining({
            headers,
            observe: 'response',
          })
        );
        expect(caronService.get).toHaveBeenCalledWith(relation, {
          headers,
        });
        expect(result).toEqual(body);
      });
    });
  });

  describe('post', () => {
    it('should call caronService.post with headers and body', () => {
      const token = 'some-token';
      const relation = 'some-relation';
      const correlationId = 'some-correlation-id';
      const endpoint = 'some-endpoint';
      const key = 'some-key';
      const body = { some: 'body' };

      const headers = new HttpHeaders({
        aut: `Bearer ${token}`,
        'id-cor': correlationId,
        key,
      });

      const response = {
        type: HttpEventType.Response,
        ok: true,
        body: JSON.stringify(body),
      };

      caronService.initialize.mockReturnValue(
        of(response as any)
      );
      caronService.post.mockReturnValue(
        of(response as any)
      );

      service.post(token, relation, correlationId, body).subscribe((result) => {
        expect(caronService.initialize).toHaveBeenCalledWith(
          endpoint,
          expect.objectContaining({
            headers,
            observe: 'response',
          })
        );
        expect(caronService.post).toHaveBeenCalledWith(relation, {
          headers,
          observe: 'body',
          responseType: 'text',
        });
        expect(result).toEqual(body);
      });
    });
  });
});
