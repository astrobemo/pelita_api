import request from 'supertest';
import app from '../index.js';

test('Test hallo world', async () => { 
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World!');
})