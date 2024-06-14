# Crash Courses

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=firefox)](https://crash-courses-b1bc0.web.app/)

Crash Courses is a full-stack course sharing platform where users can buy and sell courses. Users have the ability to create, read, update, and delete courses. The application uses React for the frontend, Node.js and Express.js for the backend, Firebase for authentication, MongoDB for the database, Tailwind CSS and Kometa UI for styling, and Stripe for payment processing. All routes are protected to ensure secure access.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- 🔐 **User Authentication**: Sign up, Sign in, Sign out
- 📚 **Course Management**: Create, Read, Update, and Delete Courses
- 💰 **E-commerce**: Buy and Sell Courses
- 💳 **Payment Processing**: Secure Payments with Stripe
- 🔒 **Protected Routes**: Secure Access to Resources
- 📱 **Responsive Design**: Mobile Friendly

## Technologies Used

- **Frontend**: ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB), ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white), ![Kometa UI](https://img.shields.io/badge/Kometa_UI-3b82f6?style=for-the-badge)
- **Backend**: ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white), ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=61DAFB)
- **Authentication**: ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)
- **Database**: ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
- **Payment Processing**: ![Stripe](https://img.shields.io/badge/Stripe-6772E5?style=for-the-badge&logo=stripe&logoColor=white)

## Installation

### Prerequisites

Make sure you have the following installed:

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white)
- ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) or ![yarn](https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
- ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white) Project (for authentication)
- ![Stripe](https://img.shields.io/badge/Stripe-6772E5?style=for-the-badge&logo=stripe&logoColor=white) Account (for payment processing)

### Backend Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/crash-courses.git
    cd crash-courses/backend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

    ```env
    PORT=5000
    MONGO_URI=your_mongo_uri
    FIREBASE_ADMIN_SDK=your_firebase_admin_sdk_json
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

4. Start the backend server:

    ```sh
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```sh
    cd ../frontend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the `frontend` directory and add the following environment variables:

    ```env
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
    REACT_APP_API_URL=http://localhost:5000
    ```

4. Start the frontend development server:

    ```sh
    npm start
    ```

## Usage

Once the frontend and backend servers are running, you can access the application at `http://localhost:3000`.

- **Sign Up / Sign In**: Create an account or log in to access the platform.
- **Create Course**: As an authenticated user, you can create a new course.
- **Edit / Delete Course**: Edit or delete your own courses.
- **Browse Courses**: View and purchase courses created by other users.
- **Stripe Payment**: Securely purchase courses using Stripe.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to contribute to the project by opening issues or submitting pull requests. For any questions, please contact me at nirobaurnab@gmail.com.

Happy Learning and Teaching!
