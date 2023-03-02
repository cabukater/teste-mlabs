it('should call charonService.initialize with the correct parameters', () => {
  const token = 'some_token';

  caronteService.startCharon(token);

  expect(charonServiceMock.initialize).toHaveBeenCalled();
  expect(charonServiceMock.initialize).toHaveBeenCalledWith(
    'charon_entrypoint',
    {
      headers: expect.objectContaining({
        Authorization: `Bearer ${token}`,
        'x-correlationID': expect.any(String),
        apikey: 'some_apikey',
      }),
      observe: 'response',
    }
  );
});
