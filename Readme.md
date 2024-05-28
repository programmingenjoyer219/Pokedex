This guide will walk you through setting up and running the Pokedex application built with the MERN stack (MongoDB, Express, React, and Node.js).

**Prerequisites:**

- Node.js and npm (or yarn) installed on your system.

**Getting Started:**

1. **Clone the project repository:** (Assuming you have Git installed)

   ```bash
   git clone <repository_url>
   ```

2. **Install dependencies:**

   - Navigate to the project's root directory.
   - Install backend dependencies:

     ```bash
     cd backend
     npm install
     ```

   - Install frontend dependencies:

     ```bash
     cd ../frontend
     npm install
     ```

3. **Run the application:**

   **Use separate terminals (Recommended)**

   - Open two separate terminal windows.
   - In one terminal, navigate to the `backend` directory and start the server:

     ```bash
     cd backend
     nodemon index.js
     ```

   - In the other terminal, navigate to the `frontend` directory and start the development server:

     ```bash
     cd ../frontend
     npm run dev
     ```

4. **Access the application:**

   - Look for the frontend server's address in the terminal output `http://localhost:5173`.
   - Open this address in your web browser. Your Pokedex application should be running!

**Additional Resources:**

- Inspiration: [Pokedex Explore](https://pokedexplore.vercel.app/)
- Pokemon Data (JSON): [GitHub - Purukitto/pokemon-data.json](https://github.com/Purukitto/pokemon-data.json)

**Learning Resources (for advanced features):**

- Pagination Tutorial: [YouTube](https://www.youtube.com/watch?v=wAGIOCqS8tk)
- Importing Images Dynamically in React: [YouTube](https://www.youtube.com/watch?v=7EFZIe_Cpv8)
- Card Flip Implementation Made Easy: [YouTube](https://www.youtube.com/watch?v=Kc8P2F1WmIc)
- Auto Scroll To A Particular Section: [YouTube](https://www.youtube.com/watch?v=-Xjwe4IwTMM)
