# API Documentation Setup

This project uses **OpenAPI 3.0** with **swagger-jsdoc** for auto-generated API documentation.

## Overview

The API documentation is automatically generated from JSDoc comments in the code. This keeps documentation in sync with actual endpoint implementations.

## How It Works

1. **JSDoc Comments** - Each endpoint has JSDoc comments describing parameters, responses, etc.
2. **swagger-jsdoc** - Parses JSDoc comments and generates OpenAPI spec
3. **Swagger UI** - Provides interactive documentation at `/api-docs`

## Files Structure

- `swagger-config.js` - OpenAPI configuration and swagger-jsdoc setup
- `src/main.js` - Endpoint definitions with JSDoc documentation
- `/api-docs` - Auto-generated interactive documentation

## Running the Server

```bash
npm install
node src/main.js
```

Then visit: http://localhost:3000/api-docs

## Adding Documentation to Endpoints

Add JSDoc comments above your endpoint definition:

```javascript
/**
 * @swagger
 * /your-endpoint:
 *   get:
 *     summary: Brief description of the endpoint
 *     tags: [Category]
 *     parameters:
 *       - in: query
 *         name: param_name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success response
 *       400:
 *         description: Bad request
 */
app.get('/your-endpoint', (req, res) => {
  // implementation
});
```

## JSDoc Examples by Type

### Query Parameters
```javascript
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
```

### Path Parameters
```javascript
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
```

### Request Body (POST/PUT)
```javascript
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
```

## Security

The API uses `x-api-key` header for authentication. This is defined in `swagger-config.js`:

```yaml
securitySchemes:
  ApiKeyAuth:
    type: apiKey
    in: header
    name: x-api-key
```

Include the key in requests:
```bash
curl -H "x-api-key: YOUR_KEY" http://localhost:3000/customers/0
```

## Common Response Schemas

Reusable schemas defined in `swagger-config.js`:

- `PaginatedResponse` - For endpoints returning paginated data
- `Error` - Standard error response

Usage in JSDoc:
```javascript
 *         schema:
 *           $ref: '#/components/schemas/PaginatedResponse'
```

## API Tags

Organize endpoints by tags:

- **Health** - Server health checks
- **Customers** - Customer-related endpoints
- **Suppliers** - Supplier data
- **Barang** - Inventory/product data
- **Pajak** - Tax/invoice endpoints

## Updating Documentation

Simply add or modify JSDoc comments above endpoint definitions. The documentation will auto-update when the server restarts.

## Tools & Dependencies

- `swagger-jsdoc` - Parses JSDoc and generates OpenAPI spec
- `swagger-ui-express` - Serves interactive Swagger UI
- `express` - Web framework

## References

- [OpenAPI 3.0 Spec](https://spec.openapis.org/oas/v3.0.3)
- [swagger-jsdoc Documentation](https://github.com/Surnet/swagger-jsdoc)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)
