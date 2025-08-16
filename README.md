# Media Platform Backend

This is the backend for a media platform built using Node.js and Express. The application provides authentication, media management, and secure streaming capabilities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd media-platform-backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up your environment variables. Create a `.env` file in the root directory and add the necessary configuration for your database and JWT secret.

4. Start the application:
   ```
   npm start
   ```

## Usage

The application provides endpoints for user authentication and media management. You can use tools like Postman or curl to interact with the API.

## API Endpoints

### Authentication

- **POST /auth/signup**: Create a new admin user.
- **POST /auth/login**: Authenticate a user and receive a JWT token.

### Media Management

- **POST /media**: Upload media and add metadata.
- **GET /media/:id/stream-url**: Retrieve a secure streaming URL for the specified media.

## Database Schema

### User Model

- `id`: Unique identifier for the user.
- `email`: User's email address.
- `hashed_password`: Hashed password for authentication.
- `created_at`: Timestamp of user creation.

### Media Model

- `id`: Unique identifier for the media asset.
- `title`: Title of the media.
- `type`: Type of media (e.g., video, audio).
- `file_url`: URL of the uploaded media file.
- `created_at`: Timestamp of media creation.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.