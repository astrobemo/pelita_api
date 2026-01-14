import swaggerJsdoc from 'swagger-jsdoc';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Pelita API',
      version: '1.0.0',
      description: 'API documentation for Pelita - Enterprise Resource Planning System',
      contact: {
        name: 'Pelita Team',
        url: 'https://github.com/astrobemo/pelita_api',
      },
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Development server',
      },
      {
        url: 'https://api-test.favourtdj.com',
        description: 'Staging server',  
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'x-api-key',
          description: 'API key for authentication',
        },
      },
      schemas: {
        PaginatedResponse: {
          type: 'object',
          properties: {
            data: {
              type: 'array',
            },
            totalCount: {
              type: 'integer',
            },
            totalPages: {
              type: 'integer',
            },
            currentPage: {
              type: 'integer',
            },
            pageSize: {
              type: 'integer',
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
            },
          },
        },
      },
    },
    security: [
      {
        ApiKeyAuth: [],
      },
    ],
  },
  apis: [path.join(__dirname, 'src/main.js')],
};

export const swaggerSpec = swaggerJsdoc(options);
