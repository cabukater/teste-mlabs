it('should filter links by rel and method when emitList is called', () => {
  const rel = 'some_rel';
  const met = 'some_met';
  const link = 'some_link';
  const resources = [
    { href: 'some_href', rel: 'some_other_rel', method: 'some_other_met' },
    { href: link, rel: rel, method: met },
    { href: 'some_other_href', rel: 'some_other_rel', method: 'some_other_met' },
  ];
  caronteService.resources = resources;

  const getLinkSpy = jest.spyOn(caronteService.getLink, 'next');

  caronteService.emitList.next(resources);
  caronteService.filter(rel, met);

  expect(getLinkSpy).toHaveBeenCalledWith(link);
});
