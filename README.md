# BlogApp Frontend

## Overview
BlogApp is a full-stack blogging application that allows users to create, read, update, and delete blog posts. This repository contains the frontend built with React.js.

## Features
- User authentication (Login/Signup)
- Create, read, update, and delete blog posts
- Responsive design for all devices
- Dynamic blog listing and detailed blog pages

## Tech Stack
- **Frontend:** React.js, React Router, Tailwind CSS
- **State Management:** React Context API / Redux (if applicable)
- **Backend:** Node.js, Express.js, MongoDB (Backend repo: [Link to Backend Repo])
- **Authentication:** JWT (if applicable)

## Live Demo
[BlogApp Live](https://blog-app-frontend-puce-alpha.vercel.app/)

## Installation
### Prerequisites
Ensure you have the following installed on your system:
- Node.js (>= 14.x)
- npm or yarn

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/paramjeetsingh007/BlogApp-Frontend.git
   cd BlogApp-Frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm start
   # or
   yarn start
   ```

## Environment Variables
Create a `.env` file in the root directory and add the required variables:
```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
```
Ensure this URL matches your backend server.

## Folder Structure
```
BlogApp-Frontend/
│── public/
│── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Different pages (Home, Login, Signup, Blog)
│   ├── context/        # State management (if using Context API)
│   ├── services/       # API calls
│   ├── App.js
│   ├── index.js
│── .env
│── package.json
│── README.md
```

## Deployment
To build the project for production:
```sh
npm run build
```
Deploy the generated `build/` folder to any static hosting provider like **Netlify**, **Vercel**, or **GitHub Pages**.

## Contributing
Contributions are welcome! If you'd like to contribute, follow these steps:
1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Open a Pull Request

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For any queries or collaboration, feel free to reach out:
- **GitHub:** [paramjeetsingh007](https://github.com/paramjeetsingh007)
- **Email:** [paramjeetsingh121223@gmail.com] 

Happy coding! 🚀

