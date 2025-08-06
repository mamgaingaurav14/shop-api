# 🛒 Shop API - RESTful Backend

A clean and scalable Node.js + Express + MongoDB backend for an online shop.
Supports user registration/login, JWT authentication, role-based access (user/admin), and product CRUD operations. Easily testable via Postman.

---

## Features

* User Registration & Login with JWT Auth
* Password Hashing via bcryptjs
* Role-based Access (User / Admin)
* Protected Routes Middleware
* Product CRUD (Admin Only for Create)
* MongoDB Atlas as Database
* Modular File Structure
* Tested with Postman

---

## 🚀 Technologies Used

* Node.js
* Express.js
* MongoDB & Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* dotenv
* Postman for testing

---

## 🔧 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/mamgaingaurav14/shop-api.git
cd shop-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
```

### 4. Run the Server

```bash
npx nodemon index.js
```

> Server should say: `MONGO DB Connected` and `port no 3000 running sir`

---

## 🧪 Testing with Postman

You can use Postman (or any API client) to test the endpoints.

### 🔐 Auth Routes

* `POST /api/auth/register` – Register a user
* `POST /api/auth/login` – Login and receive JWT token

### 📦 Product Routes

* `GET /api/products/` – Get all products (Public)
* `GET /api/products/:id` – Get product by ID (Public)
* `POST /api/products/` – Create product (**Admin Only**, Auth required)

> Include JWT as Bearer token in headers:

```
Authorization: Bearer <your_token>
```

---

## 👥 Sample Users

| Role  | Email                                           | Password |
| ----- | ----------------------------------------------- | -------- |
|Admin 1| [gaurav@example.com](mailto:gaurav@example.com) | secret123   |
| Admin 2  | [admin@example.com](mailto:user@example.com)     | 12345  |
| User  | [user@example.com](mailto:user@example.com)     | 1234   |

---

## 📦 Sample Products

Use Postman (with admin token) to POST products to `/api/products/`:

```json
{
  "name": "Iphone 15",
  "description": "Flagship phone by Apple",
  "price": 9999,
  "category": "Electronics",
  "stock": 11,
  "imageUrl": "https://example.com/i15.jpg"
}
```

Add more products manually in MongoDB Atlas or via API.

---

## 📁 Folder Structure

```
shop-api/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── .env
├── index.js
```


## 🧠 Author

Made by Gaurav Mamgain

GitHub: [@mamgaingaurav14](https://github.com/mamgaingaurav14)

---

## 📜 License

MIT License.
