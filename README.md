# Frontend Data Tracker API

A Next.js project for handling API requests and logging data sent from the frontend. This repository is designed for testing and debugging API endpoints.

- [日本語 (Japanese)](./README_ja.md)
- [한국어 (Korean)](./README_ko.md)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is focused on providing API endpoints built with Next.js to handle data sent from the frontend, and log or process it on the server side. It is suitable for testing API communication and handling various request types.

## Features

- Provides a simple API for testing POST and GET requests.
- Logs messages sent from the frontend for debugging purposes.
- Built with Next.js for easy deployment and scalability.
- Supports JSON data handling for structured communication.

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/takaaaaaan/Frontend-data-tracker.git
   cd frontend-data-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Server

To start the development server:

```bash
npm run dev
```

The server will run on `http://localhost:3000`.

## Usage

### Sending a Test Message

Use the following JavaScript function to send a test message from the frontend:

```javascript
const test_message = async (message) => {
  try {
    const response = await fetch('/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error:', errorData.error);
    } else {
      console.log('Message sent successfully.');
    }
  } catch (error) {
    console.error('Error sending message:', error);
  }
};
```

### API Endpoints

- **POST `/api/log`**  
  Logs the message sent in the request body for testing purposes.

  - Request body example:

    ```json
    {
      "message": "Hello, this is a test message."
    }
    ```

  - Response example (500 error simulated for testing):

    ```json
    {
      "error": "Simulated internal server error for testing purposes."
    }
    ```

## Contributing

Contributions are welcome! Please follow the steps below:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.