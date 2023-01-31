
const request = require('supertest');
const app = require('../app');
const { authUser } = require("./authMiddleware");
const jwt = require("jsonwebtoken");

// const fakeToken = "fake.token.payload";
// const fakeReq = {
//   body: {
//     _token: fakeToken,
//   },
// };
// const fakeRes = {};
// const next = jest.fn();



//BUG1
jest.mock("jsonwebtoken", () => ({
  decode: jest.fn(() => {
    throw new Error("invalid token");
  }),
}));

describe("authUser middleware", () => {
  it("handles invalid token error", async () => {
    await authUser(fakeReq, fakeRes, next);
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        status: 401,
      })
    );
  });
});


//BUG 2
describe('Route PATCH /:username', () => {
    it('should return an error if unauthorized user tries to update a user', async () => {
      const res = await request(app).patch('/api/users/userB').send({ name: 'Updated Name' });
      expect(res.statusCode).toEqual(401);
      expect(res.body).toHaveProperty('message', 'Only that user or admin can edit a user.');
    });}

//BUG 2 Fix
let user = await User.update(req.params.username, fields);
if (!user) {
  throw new ExpressError(`User with username "${req.params.username}" not found`, 404);
}

return res.json({ user });