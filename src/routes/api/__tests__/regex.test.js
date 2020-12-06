const request = require("supertest");
const app = require("app");

describe("Test the root path", () => {
  test("returns a regex test", done => {
    request(app)
      .get("/api/regex")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({ regex: true });
        done();
      });
  });
});
