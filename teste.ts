it('should emit the relations and charon session when a response is received', () => {
  const relations = [{ rel: 'some_rel', href: 'some_href' }];
  const charonSession = 'some_session';
  const response = {
    type: HttpEventType.Response,
    headers: new HttpHeaders().set('x-charon-session', charonSession),
  } as HttpResponse<any>;

  charonServiceMock.initialize.mockReturnValue(of(response));
  charonServiceMock.getRelations.mockReturnValue(relations);

  const emitlistSpy = jest.spyOn(caronteService.emitList, 'next');
  const getSessionSpy = jest.spyOn(caronteService.getSession, 'next');

  caronteService.startCharon('some_token');

  expect(emitlistSpy).toHaveBeenCalledWith(relations);
  expect(getSessionSpy).toHaveBeenCalledWith(charonSession);
});
