<h1 align="center"> PayBuddy</h1>
<p align="center">
  <img src="../frontend/public/assets/paybuddy-1.png" alt="PayBUddy">
</p>

<div align="center"><h4>A modern banking platform with a user-friendly interface, enabling seamless money transfers through an easy two-step process and user search functionality.</h3></div>

## Technology used: 
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Zod Badge](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=fff)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)



## Project Setup

1. **Clone the repository**
```
git clone https://github.com/Thanisha23/PayBuddy.git
```

2. **Navigate to the project directory and install dependencies for the backend**

 ```
cd PayBuddy
cd backend
pnpm install
```

3. **Create a file named `.env.local` in the root directory of your project.**
4. **Add the following lines to the  `.env.local`  file:**

```plaintext
   MONGO_URL=your-mongodb-url
   JWT_SECRET=your-secret-key
   PORT=3000
   FRONTEND_URL='http://localhost:5173'
```
5. **Start the backend server**
```
pnpm run dev
```

6. **In a new terminal, navigate to the frontend directory and install the dependencies**
```
cd ../frontend
pnpm install
```

7. **Update the .env file with the backend URL**
```
cp .env.sample .env
```

```
VITE_BACKEND_URL=http://localhost:3000/api/v1
```

8. **Start the frontend development server**
```
pnpm run dev
```

<div align="center"><h4>More better projects to come soon! 😁👀</h4></div>
<div align="center"><h4>Made by Thanisha Belchada</h4></div>