# 💰 Personal Finance Visualizer

<div align="center">

[![Personal Finance Visualizer](https://img.shields.io/badge/Personal%20Finance-Visualizer-blue?style=for-the-badge&logo=chart.js)](https://personal-finance-visualizer-axvx.onrender.com/)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat&logo=ejs&logoColor=black)](https://ejs.co/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**A comprehensive web application for tracking, analyzing, and visualizing your personal finances**

[🚀 Live Demo]((https://personal-finance-visualizer-axvx.onrender.com/)) • [📖 Documentation](#documentation) • [🐛 Report Bug](https://github.com/amanagod/Personal-Finance-Visualizer/issues) • [✨ Request Feature](https://github.com/amanagod/Personal-Finance-Visualizer/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Usage](#-usage)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

The **Personal Finance Visualizer** is a powerful web-based application designed to help you take control of your financial life. Built with modern web technologies, it provides an intuitive interface for tracking expenses, monitoring income, and visualizing your financial data through interactive charts and graphs.

Whether you're a student managing pocket money, a professional tracking salary expenses, or anyone looking to gain insights into their spending habits, this application offers the tools you need to make informed financial decisions.

### 🎪 Why Choose Personal Finance Visualizer?

- **📊 Visual Analytics**: Transform raw financial data into meaningful insights
- **💡 Smart Categorization**: Automatically organize expenses into categories
- **📱 Responsive Design**: Access your finances from any device
- **🔒 Privacy First**: Your financial data stays on your local environment
- **⚡ Fast & Lightweight**: Built for performance and speed

---

## ✨ Features

### 🏦 Core Financial Features
- **💳 Expense Tracking**: Record and categorize all your expenses
- **💰 Income Management**: Track multiple income sources
- **📈 Budget Planning**: Set and monitor budget limits
- **🎯 Goal Setting**: Define and track financial goals

### 📊 Visualization & Analytics
- **📉 Interactive Charts**: Pie charts, bar graphs, and line charts
- **📅 Time-based Analysis**: Monthly, weekly, and yearly views
- **🏷️ Category Breakdown**: Detailed spending by categories
- **📋 Financial Reports**: Generate comprehensive financial summaries

### 🛠️ Technical Features
- **🔄 Real-time Updates**: Live data synchronization
- **📱 Responsive UI**: Mobile-first design approach
- **🎨 Modern Interface**: Clean and intuitive user experience
- **⚙️ Customizable**: Flexible settings and preferences

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14.0 or higher)
- **npm** (v6.0 or higher)
- **Git**

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/amanagod/Personal-Finance-Visualizer.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Personal-Finance-Visualizer
   ```

3. **Install dependencies**
   ```bash
   npm install express ejs method-override
   ```
   
   Or install all dependencies at once:
   ```bash
   npm install
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to access the application.

### Development Setup

For development with auto-reload:

```bash
# Install nodemon globally (optional)
npm install -g nodemon

# Start in development mode
npm run dev
```

---

## 💻 Usage

### Getting Started

1. **Launch the Application**: After installation, open your browser and go to `http://localhost:3000`

2. **Add Your First Transaction**:
   - Click on "Add Transaction"
   - Fill in the details (amount, category, description, date)
   - Save the transaction

3. **Explore Your Data**:
   - View your dashboard for an overview
   - Check category-wise spending
   - Analyze trends over time

### Key Workflows

#### 📝 Adding Expenses
```
Dashboard → Add Expense → Fill Form → Save
```

#### 📊 Viewing Reports
```
Dashboard → Reports → Select Time Period → Analyze Data
```

#### 🎯 Setting Budgets
```
Settings → Budget Management → Set Category Limits → Save
```

---

## 🛠️ Technology Stack

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **EJS**: Templating engine
- **Method-Override**: HTTP method override middleware

### Frontend
- **HTML5**: Markup language
- **CSS3**: Styling and animations
- **JavaScript**: Client-side functionality
- **Chart.js**: Data visualization (assumed)

### Tools & Utilities
- **Git**: Version control
- **npm**: Package management
- **Nodemon**: Development server (optional)

---

## 📁 Project Structure

```
Personal-Finance-Visualizer/
├── 📁 public/                 # Static assets
│   ├── 📁 css/               # Stylesheets
│   ├── 📁 js/                # Client-side JavaScript
│   └── 📁 images/            # Images and icons
├── 📁 views/                 # EJS templates
│   ├── 📁 partials/          # Reusable template parts
│   └── 📄 *.ejs             # Page templates
├── 📁 routes/                # Express routes
├── 📁 models/                # Data models
├── 📁 controllers/           # Route controllers
├── 📄 app.js                # Main application file
├── 📄 package.json          # Project dependencies
└── 📄 README.md            # Project documentation
```

---

## 🌐 API Endpoints

### Transactions
- `GET /` - Dashboard/Home page
- `GET /transactions` - List all transactions
- `POST /transactions` - Create new transaction
- `PUT /transactions/:id` - Update transaction
- `DELETE /transactions/:id` - Delete transaction

### Categories
- `GET /categories` - List all categories
- `POST /categories` - Create new category
- `PUT /categories/:id` - Update category
- `DELETE /categories/:id` - Delete category

### Reports
- `GET /reports` - Financial reports page
- `GET /api/reports/summary` - Get financial summary
- `GET /api/reports/category` - Get category-wise data

---

## 🤝 Contributing

We love your input! We want to make contributing to Personal Finance Visualizer as easy and transparent as possible.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- 🐛 **Bug Reports**: Use the issue tracker to report bugs
- 💡 **Feature Requests**: Suggest new features via issues
- 📝 **Code Style**: Follow the existing code style
- ✅ **Testing**: Ensure your code is tested
- 📖 **Documentation**: Update documentation as needed

### Development Guidelines

```bash
# Before committing, make sure to:
npm test          # Run tests (if available)
npm run lint      # Check code style (if configured)
npm run build     # Build the project (if applicable)
```

---

## 🚧 Coming Soon

- [ ] **📊 Advanced Analytics**: More detailed financial insights
- [ ] **💾 Data Export**: Export data to CSV/Excel
- [ ] **🔔 Budget Alerts**: Notifications for budget limits
- [ ] **📱 Mobile App**: React Native companion app
- [ ] **☁️ Cloud Sync**: Online backup and sync
- [ ] **🤖 AI Insights**: Smart spending recommendations

---

## 🆘 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Change the port in your app.js or use:
PORT=3001 npm start
```

**Dependencies not installing:**
```bash
# Clear npm cache and reinstall:
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Application not starting:**
```bash
# Check Node.js version:
node --version
# Should be v14.0 or higher
```

---

## 📄 License

This project is licensed under the MIT License. 

```
MIT License

Copyright (c) 2025 amanagod

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📞 Contact & Support

### Get in Touch

- **GitHub**: [@amanagod](https://github.com/amanagod)
- **Nishant Panchal**: [@NishantPanchal](nishantpanchal2411@gmail.com)
- **Project Link**: [Personal Finance Visualizer](https://github.com/amanagod/Personal-Finance-Visualizer)

### Support

- 🌟 **Star this repo** if you find it helpful!
- 🐛 **Report bugs** using the [issue tracker](https://github.com/amanagod/Personal-Finance-Visualizer/issues)
- 💡 **Request features** via [GitHub issues](https://github.com/amanagod/Personal-Finance-Visualizer/issues)
- 📖 **Improve documentation** by submitting a PR

---

<div align="center">

### 🌟 Show Your Support

If this project helped you, please consider giving it a ⭐!

**Made with ❤️ by [amanagod](https://github.com/amanagod)**

---

*Happy budgeting! 💰*

</div>
