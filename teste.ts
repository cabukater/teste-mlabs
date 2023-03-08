describe('handleError function', () => {
  let loaderProfile;
  let router;
  let error;

  beforeEach(() => {
    loaderProfile = {
      denyAccess: jest.fn(),
    };
    router = {
      navigateByUrl: jest.fn(),
    };
    error = {
      status: 403,
    };
  });

  it('should call denyAccess and navigateByUrl when error status is 403', () => {
    const throwError = jest.fn();
    const errorState = {};

    handleError(error, loaderProfile, router, throwError, errorState);

    expect(loaderProfile.denyAccess).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('negado', errorState);
    expect(throwError).toHaveBeenCalledWith(error);
  });

  it('should call throwError when error status is not 403', () => {
    error.status = 500;
    const throwError = jest.fn();
    const errorState = {};

    expect(() => {
      handleError(error, loaderProfile, router, throwError, errorState);
    }).toThrow(error);

    expect(loaderProfile.denyAccess).not.toHaveBeenCalled();
    expect(router.navigateByUrl).not.toHaveBeenCalled();
    expect(throwError).toHaveBeenCalledWith(error);
  });
});
