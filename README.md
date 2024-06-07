# Simple Node.js HTTP Server

This is a simple Node.js application that creates an HTTP server and logs incoming requests to a file.

## Getting Started

### Prerequisites

- Node.js (v12 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository or download the source code.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run `npm install` to install any required dependencies.

### Usage

1. Start the server by running `npm start`.
2. Open a web browser and visit `http://localhost:8080/` to see the "Home Page" message.
3. Visit `http://localhost:8080/about` to see the "About Page" message.
4. Visit any other URL path to see the "404 Not Found" message.

As you make requests to the server, new log entries will be appended to the `log.txt` file in the project directory.

## Project Structure

- `package.json`: Project metadata and scripts.
- `index.js`: Main application file that sets up the HTTP server.
- `log.txt`: Log file where incoming requests are recorded.

## Initialize Project

- Create `package.json` file.
```bash
npm init
```
- Create `index.js` file.
```bash
touch index.js
```
- Create `log.txt` file.
```bash
touch log.txt
```




## Install Dependencies

```bash
npm install
```

## Run the Program

```bash
npm start
```

## Test the Program

```bash
npm test
```

## License

This project is licensed under the [MIT License](LICENSE).
