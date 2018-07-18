import {HttpErrorResponse} from '@angular/common/http';
import {HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

export default class TestHelpers {

  public testRequestFunction = (
    service,
    httpTestingController,
    functionName,
    url,
    type,
    mockData,
    resData,
    ...params) => {
    // let httpTestingController;

    // beforeEach(() => {
    //   httpTestingController = TestBed.get(HttpTestingController);
    // });
    // describe(`Testing #${functionName}`, () => {
      // const id: number = 132;
      // let params: any[] = [id];
      // // params.push(132);
      // const url = ApiUrls.products + id + '/';
      // const mockData = mockProducts.results[0] as Product;

      it(`#${functionName}: should return data of`, () => {
        // function should have made one request and equaled result data
        service[functionName](...params).subscribe(data => {
          expect(data).toEqual(resData);
        });

        // The following `expectOne()` will match the request's URL.
        const req = httpTestingController.expectOne(url);

        // Assert the request type ('GET', 'POST', 'PUT', 'PATCH', 'DELETE').
        expect(req.request.method).toBe(type);

        // Respond with the mock data
        req.flush(mockData);
      });

      it(`#${functionName}: can test for 404 error`, () => {
        const emsg = 'deliberate 404 error';
        // function should have made one request and get respond fail
        service[functionName](...params).subscribe(
          data => fail,
          (error: HttpErrorResponse) => {
            expect(error.status).toEqual(404, 'status');
            expect(error.error).toEqual(emsg, 'message');
          }
        );

        const req = httpTestingController.expectOne(url);
        expect(req.request.method).toBe(type);

        // Respond with mock error
        req.flush(emsg, {status: 404, statusText: 'Not Found'});
      });

      it(`#${functionName}: can test for network error`, () => {
        const emsg = 'simulated network error';

        // function should have made one request and get respond fail
        service[functionName](...params).subscribe(
          data => fail,
          (error: HttpErrorResponse) => {
            expect(error.error.message).toEqual(emsg, 'message');
          }
        );

        const req = httpTestingController.expectOne(url);
        expect(req.request.method).toBe(type);

        // Create mock ErrorEvent, raised when something goes wrong at the network level.
        // Connection timeout, DNS error, offline, etc
        const mockError = new ErrorEvent('Network error', {
          message: emsg,
        });

        // Respond with mock error
        req.error(mockError);
      });

      // auth
      it(`#${functionName}: should emit 'false' for 401 Unauthorized`, () => {

        service[functionName](mockData).subscribe((next) => {
          expect(next).toBeTruthy();
        });

        const req = httpTestingController.expectOne(url);
        expect(req.request.method).toBe(type);

        // Assert that the request is a GET.
        // expect(req.request.method).toBe('POST');

        // Respond with the mock data
        req.flush(null, {status: 401, statusText: 'Unauthorized'});

        // httpTestingController.expectOne(url).flush(null, {status: 401, statusText: 'Unauthorized'});
      });
    // });
  }
}
