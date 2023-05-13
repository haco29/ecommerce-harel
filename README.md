# E-commerce React App

This is a sample e-commerce application built with React. It allows users to browse products, add items to the cart, and view the cart contents.

## Implementation

The application is implemented using React, styled-components for styling, and React Router for handling navigation. It follows modern design principles and focuses on responsiveness and accessibility.

The main components of the application include:

- `Navbar`: Displays the navigation bar with links to different pages.
- `Home`: Displays the home page with a list of products.
- `ProductCard`: Represents a product card with an image, name, price, and an "Add to Cart" button.
- `Cart`: Displays the cart page with the list of items added to the cart.
- `Modal`: Shows a modal overlay for displaying additional product details.

The application uses context and hooks for managing the cart state and making API requests using React Query.

## Running the Project

To run the project locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Run json-server:
   - `json-server --watch db.json --port 3004`
   - This will start the server on port 8000
4. Navigate to the client directory:
   - `cd client`
5. Install the dependencies:
   - `npm install`
6. Run the application:
   - `npm start`
7. Open the application in the browser:
   - `http://localhost:3000`

Make sure you have Node.js and npm installed on your machine before running the project.

## Credits

This project was created by Harel Coman. Feel free to contribute and provide any feedback or suggestions.
