# MMeraki Frontend - Mock Data Mode

## Overview
The frontend has been updated to work with mock data instead of backend API connections. This allows the application to run independently without requiring a backend server.

## Changes Made

### 1. Removed Backend Connections
- ✅ Deleted `src/services/api.ts` - API service file
- ✅ Deleted `src/types/api.ts` - API type definitions
- ✅ Removed all API imports and references

### 2. Updated Authentication Context
- ✅ Replaced API calls with mock data in `src/context/AuthContext.tsx`
- ✅ Added mock users for testing:
  - **Regular User**: `john@example.com` (password: any 3+ characters)
  - **Admin User**: `admin@example.com` (password: any 3+ characters)
- ✅ Implemented localStorage persistence for user sessions
- ✅ Added realistic API delays for better UX

### 3. Enhanced Cart Context
- ✅ Added localStorage persistence for cart data
- ✅ Cart state persists across browser sessions
- ✅ No backend dependencies

### 4. Mock Data Features
- ✅ **User Authentication**: Login/Register with mock validation
- ✅ **User Management**: Profile updates with mock persistence
- ✅ **Cart Management**: Full cart functionality with persistence
- ✅ **Event Data**: All events use static mock data from `src/data/events.ts`

## How to Use

### Login Credentials
- **Regular User**: 
  - Email: `john@example.com`
  - Password: `password` (or any 3+ characters)
- **Admin User**: 
  - Email: `admin@example.com`
  - Password: `admin` (or any 3+ characters)

### Features Available
- ✅ Browse events and categories
- ✅ Add items to cart
- ✅ User authentication and registration
- ✅ Profile management
- ✅ Admin dashboard (for admin users)
- ✅ Checkout process (UI only)
- ✅ Responsive design
- ✅ All animations and interactions

### Data Persistence
- User sessions persist in localStorage
- Cart data persists across browser sessions
- Profile updates are saved locally
- All data resets when localStorage is cleared

## Development
```bash
npm run dev
```

The application will run on `http://localhost:5173` with full functionality using mock data.

## Notes
- All API calls have been replaced with mock implementations
- Realistic delays simulate network requests
- Error handling maintains the same user experience
- The codebase is ready to be connected to a real backend when needed
