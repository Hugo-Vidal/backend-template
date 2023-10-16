import { assert } from 'chai';
import request from 'supertest';
import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import { Run } from '@app/server/Run';

let _request: request.Test;
let _response: request.Response;
export let application: Run;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Then('the response content should be a void', () => {
  assert.notInstanceOf(_response.body, Array);
});

BeforeAll(async () => {
  application = new Run();
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});
