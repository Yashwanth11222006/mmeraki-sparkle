# MMeraki Event Planning Platform

A comprehensive event planning platform built with React, TypeScript, and modern web technologies. This is a **frontend-only** application that works with mock data.

## ✨ Features

- **Event Management**: Browse and manage various types of events
- **User Authentication**: Mock authentication system with localStorage persistence
- **Admin Dashboard**: Complete admin panel for managing events and users
- **Shopping Cart**: Full cart functionality with persistence
- **Responsive Design**: Mobile-first responsive design
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Mock Data**: Complete functionality without backend dependencies

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🔑 Demo Credentials

- **Regular User**: 
  - Email: `john@example.com`
  - Password: `password` (or any 3+ characters)
- **Admin User**: 
  - Email: `admin@example.com`
  - Password: `admin` (or any 3+ characters)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **State Management**: React Context API
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data**: Mock data with localStorage persistence

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── context/       # React Context providers (Auth, Cart)
├── data/          # Mock data and constants
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── admin/         # Admin dashboard components
└── assets/        # Images and static assets
```

## 🎯 Available Features

### Customer Features
- ✅ Browse events by category
- ✅ Event details with booking functionality
- ✅ Shopping cart with persistence
- ✅ User authentication and registration
- ✅ Profile management
- ✅ Checkout process (UI only)
- ✅ Search and filtering

### Admin Features
- ✅ Dashboard with statistics
- ✅ Event management
- ✅ Order management
- ✅ User management
- ✅ Reports and analytics

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interfaces
- Adaptive navigation

## 🎨 UI Components

The project uses a curated set of shadcn/ui components:
- Button, Card, Input, Label
- Checkbox, Radio Group, Select
- Tabs, Accordion, Alert
- Toast, Tooltip, Badge
- Calendar, Slider, Separator
- And more...

## 📊 Mock Data

The application includes:
- 15+ sample events with full details
- 8 event categories
- Mock user authentication
- Cart persistence
- Admin dashboard data

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Development

The application is designed to work completely standalone with mock data. All API calls have been replaced with mock implementations that simulate real backend behavior.

## 📝 Notes

- All data persists in localStorage
- No backend server required
- Ready for demonstration or further development
- Easy to connect to a real backend when needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.