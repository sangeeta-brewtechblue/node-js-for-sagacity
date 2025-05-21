const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {
  test('GET /hello returns Hello World', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello World');
  });

  test('POST /greet returns greeting', async () => {
    const res = await request(app)
      .post('/greet')
      .send({ name: 'Alice' });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello, Alice!');
  });

  test('POST /greet without name returns error', async () => {
    const res = await request(app).post('/greet').send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Name is required');
  });
});
