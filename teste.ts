import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CarService } from '@minalib/carService';
import { CarinService } from './carin.service';

describe('CarinService', () => {
  let carinService: CarinService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarService, CarinService]
    });

    carinService = TestBed.inject(CarinService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
});



describe('CarinService', () => {
  let carinService: CarinService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarService, CarinService]
    });

    carinService = TestBed.inject(CarinService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('get', () => {
    it('should return an Observable', () => {
      const token = '1234';
      const relation = 'cars';
      const correlationId = '5678';

      const result = carinService.get(token, relation, correlationId);

      expect(result).toEqual(jasmine.any(Observable));
    });

    it('should send a GET request with the correct headers', () => {
      const token = '1234';
      const relation = 'cars';
      const correlationId = '5678';

      carinService.get(token, relation, correlationId).subscribe();

      const req = httpMock.expectOne(
        `${enviroinment.endpoimnt}/${relation}`
      );
      expect(req.request.method).toBe('GET');
      expect(req.request.headers.get('aut')).toBe(`Bearer ${token}`);
      expect(req.request.headers.get('id-cor')).toBe(correlationId);
      expect(req.request.headers.get('key')).toBe(enviroinment.key);
    });
  });
