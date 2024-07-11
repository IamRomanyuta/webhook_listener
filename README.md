# Webhook Listener

## Setup

1. Clone the repository and navigate to the project directory:

    ```bash
    git clone <URL_OF_YOUR_REPOSITORY>
    cd webhook_listener
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Initialize the database and apply migrations:

    ```bash
    npx prisma migrate dev --name init
    ```

4. Create a `.env` file in the root directory with the following content:

    ```env
    DATABASE_URL="file:./prisma/dev.db"
    PORT=3000
    ```

## Running the Application

1. Start the application:

    ```bash
    npm start
    ```

2. You should see the following output indicating that the server is running:

    ```bash
    Server is running on http://localhost:3000
    ```

## Usage

### Using Postman

1. Open Postman.
2. Create a new POST request:
    - URL: `http://localhost:3000/webhook`
3. Add a header:
    - Key: `Content-Type`
    - Value: `application/json`
4. Add the following JSON body to the request:

    ```json
    {
      "name": "example",
      "value": "example_value"
    }
    ```

5. Send the request and check the response.

### Using curl

1. Open your terminal.
2. Run the following command:

    ```bash
    curl -X POST http://localhost:3000/webhook -H "Content-Type: application/json" -d '{"name":"example", "value":"example_value"}'
    ```

3. Check the response in the terminal.

## API Documentation

Swagger UI is available at [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

## Linting

Run ESLint to check your code for issues:

```bash
npm run lint
```

## Project Structure

```plaintext
webhook_listener/
├── node_modules/
├── prisma/
│   ├── migrations/
│   │   └── <migration_files>
│   ├── dev.db
│   ├── dev.db-journal
│   └── schema.prisma
├── src/
│   ├── controllers/
│   │   └── webhookController.js
│   ├── routes/
│   │   └── webhookRoutes.js
│   ├── services/
│   │   └── webhookService.js
│   ├── app.js
│   ├── db.js
│   ├── swagger.js
│   └── validate.js
├── .env
├── .eslintrc.json
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

<!-- Этот `README.md` файл предоставляет полные инструкции по настройке, запуску и тестированию приложения. Если у вас есть еще вопросы или нужны дополнительные изменения, дайте знать! -->
