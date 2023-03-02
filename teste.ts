import { CaronteService, CharonService } from './caronte.service';
import { CaronteFilter } from './caronte.filter';

describe('CaronteService', () => {
  let caronteService: CaronteService;
  let charonServiceMock: jest.Mocked<CharonService>;

  beforeEach(() => {
    charonServiceMock = {
      initialize: jest.fn(),
      getRelations: jest.fn(),
    } as jest.Mocked<CharonService>;

    caronteService = new CaronteService(charonServiceMock);
  });

  describe('startCharon', () => {
    // ...
  });

  describe('filter', () => {
    let links: any[];
    const rel = 'some_rel';
    const met = 'some_met';

    beforeEach(() => {
      links = [
        { rel: 'some_rel', href: 'some_href', method: 'get' },
        { rel: 'some_rel', href: 'some_href', method: 'post' },
        { rel: 'other_rel', href: 'other_href', method: 'get' },
      ];
    });

    it('should emit the filtered links when at least one link matches the filter', () => {
      const expectedFilteredLinks = [{ rel: 'some_rel', href: 'some_href', method: 'get' }];

      const emitListSpy = jest.spyOn(caronteService.emitList, 'subscribe');
      const getLinkSpy = jest.spyOn(caronteService.getLink, 'next');

      caronteService.filter(rel, met);

      expect(emitListSpy).toHaveBeenCalled();
      expect(caronteService.resources).toEqual(links);
      expect(caronteService.filteredLinks).toEqual(expectedFilteredLinks);
      expect(getLinkSpy).toHaveBeenCalledWith(expectedFilteredLinks[0].href);
    });

    it('should set filteredLinks to an empty array if no links match the filter', () => {
      const rel = 'rel';
      const met = 'GET';
      const resources: any[] = [
        { href: 'https://example.com/foo', rel: 'rel', method: 'GET' },
        { href: 'https://example.com/bar', rel: 'other', method: 'GET' },
        { href: 'https://example.com/baz', rel: 'rel', method: 'POST' },
      ];

      const filter = new CaronteFilter(caronteService, charonServiceMock.initialize);
      const emitListSpy = jest.spyOn(caronteService.emitList, 'subscribe').mockReturnValue(of(resources));
      const getLinkSpy = jest.spyOn(caronteService.getLink, 'next');

      filter.filter(rel, met);

      expect(getLinkSpy).not.toHaveBeenCalled();
      expect(filter.filteredLinks).toEqual([]);
      emitListSpy.mockRestore();
      getLinkSpy.mockRestore();
    });
  });
});
