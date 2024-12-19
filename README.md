# Laravel React Inertia Project

## Overview
A modern web application that combines the power of Laravel backend with React frontend, using Inertia.js as the glue layer.

## Tech Stack
- **Backend**: Laravel (PHP)
- **Frontend**: React
- **Bridge**: Inertia.js
- **Database**: MySQL
- **Package Manager**: PNPM

## Prerequisites
- PHP 8.x
- Node.js
- PNPM
- MySQL
- Composer

## Installation Guide

### 1. Project Setup
```bash
# Clone the repository
git clone https://github.com/gamunu/laravel-intertia.git

# Navigate to project directory
cd laravel-intertia

# Install backend dependencies
composer install

# Install frontend dependencies
npm install
```

### 2. Environment Configuration
1. Create your environment file:
   ```bash
   cp .env.example .env
   ```

2. Configure your database settings in `.env`:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=laravel_inertia
   DB_USERNAME=your_db_username
   DB_PASSWORD=your_db_password
   ```

### 3. Database Setup
1. Create a new MySQL database:
   ```sql
   CREATE DATABASE laravel_inertia;
   ```

2. Create the users table:
   ```sql
   CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       email VARCHAR(100) UNIQUE NOT NULL,
       name VARCHAR(100) NOT NULL,
       created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
   );
   ```

### 4. Final Configuration
```bash
# Generate application key
php artisan key:generate

# Run database migrations
php artisan migrate
```

## Running the Application

Start both development servers:

```bash
# Terminal 1: Start Laravel server
php artisan serve

# Terminal 2: Start React development server
npm run dev
```

## Accessing the Application
- Open your browser and navigate to `http://localhost:8000`
- The application includes three main pages:
  - Home (static)
  - About (static)
  - Users (dynamic, interacts with database)

## Application Features
- Seamless integration between Laravel and React
- Database-driven user management
- Modern, responsive interface
- Real-time data updates

## License
This project is licensed under the MIT License.

## Support
For issues and feature requests, please use the GitHub issue tracker.