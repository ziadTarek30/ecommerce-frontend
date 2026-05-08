# 🛒 Ecommerce Frontend

A modern e-commerce frontend application built with **Angular 21**. This project delivers a responsive shopping experience with product browsing, cart management, and user authentication.

---

## 🚀 Tech Stack

| Technology | Version |
|---|---|
| Angular | ^21.1.0 |
| TypeScript | ~5.9.2 |
| RxJS | ~7.8.0 |
| jwt-decode | ^4.0.0 |
| Vitest | ^4.0.8 |

---

## 📦 Features

- 🔐 **User Authentication** — JWT-based login and registration
- 🛍️ **Product Browsing** — View and search through the product catalog
- 🛒 **Shopping Cart** — Add, remove, and update cart items
- 📦 **Order Management** — Checkout flow and order handling
- 📱 **Responsive Design** — Optimized for all screen sizes

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) v11.6.2+
- [Angular CLI](https://angular.io/cli) v21

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ziadTarek30/ecommerce-frontend.git
   cd ecommerce-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200/`

> The application will automatically reload when you make changes to source files.

---

## 📁 Project Structure

```
ecommerce-frontend/
├── public/               # Static assets
├── src/
│   ├── app/              # Application components, services, and routing
│   └── ...
├── angular.json          # Angular CLI configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies and scripts
```

---

## 🧪 Running Tests

```bash
npm test
```

Tests are powered by [Vitest](https://vitest.dev/).

---

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

---

## 🔄 Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the development server |
| `npm run build` | Build the project for production |
| `npm run watch` | Build in watch mode (development) |
| `npm test` | Run unit tests |

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

---

## 📄 License

This project is private and not licensed for public distribution.
