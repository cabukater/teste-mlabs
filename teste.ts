import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CarService } from '@minalib/carService';
import { CarinService } from './carin.service';
import { environment } from 'src/environment/environment';

describe('CarinService', () => {
  let service: CarinService;
  let carServiceSpy: jest.SpyInstance;

  beforeEach(() => {
    const spy = jest.spyOn(CarService.prototype, 'initialize');
    carServiceSpy = jest.spyOn(CarService.prototype, 'get');
    service = new CarinService(new CarService());
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('get', () => {
    it('should return data', (done) => {
      const token = 'test-token';
      const relation = 'test-relation';
      const correlationId = 'test-correlation-id';
      const responseData = { data: 'test-data' };

      const headers = new HttpHeaders({
        'aut': `Bearer ${token}`,
        'id-cor': correlationId,
        'key': environment.key,
      });

      const response = new HttpResponse({ body: responseData, status: 200 });
      carServiceSpy.mockReturnValueOnce(of(response));

      service.get(token, relation, correlationId).subscribe((data) => {
        expect(data).toEqual(responseData);
        done();
      });
    });
  });

  describe('post', () => {
    it('should return data', (done) => {
      const token = 'test-token';
      const relation = 'test-relation';
      const correlationId = 'test-correlation-id';
      const body = { data: 'test-data' };
      const responseData = { data: 'test-data' };

      const headers = new HttpHeaders({
        'aut': `Bearer ${token}`,
        'id-cor': correlationId,
        'key': environment.key,
      });

      const response = new HttpResponse({ body: responseData, status: 200 });
      carServiceSpy.mockReturnValueOnce(of(response));

      service.post(token, relation, correlationId, body).subscribe((data) => {
        expect(data).toEqual(responseData);
        done();
      });
    });
  });
});
