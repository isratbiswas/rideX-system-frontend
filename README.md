# 🚖 Ride Management System – Frontend

A **production-grade**, fully responsive, and role-based frontend application for a **Ride Booking Platform** (similar to Uber or Pathao) built with **React**, **Redux Toolkit**, **RTK Query**, and **TypeScript**.

This frontend interacts with a Node.js/Express backend and supports **Riders**, **Drivers**, and **Admins** with a polished and intuitive UI/UX across all devices.

---

## 🌐 Live Demo

[Frontend Live Link](https://rider-system.vercel.app)  
[Backend Live Link](https://assignment-5-rider-system.vercel.app)

---

## 🏗️ Project Overview

This project provides:

- **Public Landing Pages**: Home, About, Features, FAQ, Contact
- **Role-Based Dashboards**: Separate experiences for Riders, Drivers, and Admins
- **Ride Management Features**:
  - Request rides, track rides in real-time (optional)
  - Driver availability toggle
  - Ride history with search and filters
  - Admin user and ride oversight
- **Profile & Account Management**
- **Emergency/SOS Feature** for rider and driver safety
- **Data Visualization**: Earnings, ride analytics, and trends
- **Strict Form Validation** and error handling with toast notifications
- Fully **responsive** and **accessible** design
- State management via **Redux Toolkit + RTK Query**

---

## 🛠️ Technology Stack

| Layer         | Technology / Library                   |
| ------------- | -------------------------------------- |
| Frontend      | React.js, TypeScript                   |
| State Mgmt    | Redux Toolkit, RTK Query               |
| Routing       | React Router                           |
| Styling       | Tailwind CSS                           |
| Notifications | react-hot-toast                        |
| Charts        | recharts                               |
| Maps          | react-leaflet (optional)               |
| Backend       | Node.js, Express, MongoDB, JWT, bcrypt |

---

## 📌 Core Features

### **Public Landing Pages**

- Home with hero section, how-it-works, services, testimonials, and CTA
- About Us, Features, Contact, and FAQ sections
- Validated contact form (simulated submission)

### **Authentication & Authorization**

- JWT-based login & registration
- Role-based access (Rider, Driver, Admin)
- Account status handling (Blocked, Suspended, Offline Drivers)
- Persistent login state
- Logout functionality

### **Rider Features**

- Ride request form with fare estimation and payment selection
- Live ride tracking (optional)
- Ride history with pagination, search, and filters
- Ride details page with driver info, timestamps, and optional map
- Profile management (name, phone, password)

### **Driver Features**

- Online/offline toggle
- Incoming ride requests (accept/reject)
- Active ride management (status updates)
- Earnings dashboard with charts
- Ride history with filters
- Profile management (vehicle info, contact, password)

### **Admin Features**

- User management (search, filter, block/unblock riders, approve/suspend drivers)
- Ride oversight with advanced filtering
- Analytics dashboard with visualizations
- Consistent search & filter tools
- Profile management

### **General UI/UX Enhancements**

- Role-based navigation with profile dropdown
- Interactive elements: carousels, ride cards, charts
- Skeleton loaders and lazy-loading for performance
- Emergency/SOS button during active rides
- Strict form validation and global error handling

---

## ⚡ Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/ride-management-frontend.git
cd ride-management-frontend
Install dependencies

bash
Copy code
npm install
# or
yarn install
Create .env file in the root directory with backend API URL

env
Copy code
REACT_APP_API_URL=https://your-backend-api.com
Run the development server

bash
Copy code
npm start
# or
yarn start
Build for production

bash
Copy code
npm run build
# or
yarn build
📁 Project Structure
graphql
Copy code
src/
│
├── api/                # RTK Query API slices
├── components/         # Reusable UI components
├── features/           # Redux feature slices
├── pages/              # Public and dashboard pages
├── routes/             # Route definitions
├── styles/             # Global CSS or Tailwind config
├── utils/              # Utility functions
└── App.tsx             # Main App component
🔐 Test Credentials
```
