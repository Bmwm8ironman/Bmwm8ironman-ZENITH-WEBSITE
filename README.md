# Zenith Forum - College Community Platform

A modern, cross-platform forum application built for college communities. This project provides both web and mobile applications using React technologies.

## � Development Guidelines

**🚨 IMPORTANT**: Before developing any features, please review:
- [`AI_DEVELOPMENT_INSTRUCTIONS.md`](./AI_DEVELOPMENT_INSTRUCTIONS.md) - Mandatory AI assistant instructions
- [`DEVELOPMENT_GUIDELINES.md`](./DEVELOPMENT_GUIDELINES.md) - Comprehensive development standards  
- [`QUICK_REFERENCE.md`](./QUICK_REFERENCE.md) - Quick checklist for common tasks

### Key Requirements:
- **Authentication**: MUST use unified auth system (`verifyAuth`)
- **Database**: MUST validate against `schema.sql` structure
- **Security**: NO manual JWT verification in business logic routes

## �🚀 Tech Stack

### Web Application

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting
- **Supabase** - Backend-as-a-Service database and authentication
- **Monaco Editor** - Code editor for assignments
- **Docker** - Isolated code execution environment

### Mobile Application

- **React Native** - Cross-platform mobile development
- **TypeScript** - Shared type definitions
- **React Native CLI** - Development toolchain

### Shared Components

- **Shared Types** - Common interfaces and types
- **Shared Utilities** - Common helper functions
- **API Client** - Unified backend communication

## 📁 Project Structure

```
zenith/
├── src/                    # Next.js web application
│   ├── app/               # App Router pages
│   │   ├── api/           # API routes including code execution
│   ├── components/        # React components
│   │   ├── assignment/    # Assignment and code editor components
│   ├── lib/               # Helper libraries
│   │   ├── supabase.js    # Supabase client and helpers
│   └── ...
├── scripts/               # Utility scripts
│   ├── code-execution-service.js  # Code execution microservice
│   ├── setup-supabase-schema.js   # Supabase setup script
│   ├── verify-supabase-schema.js  # Schema verification
├── mobile/                # React Native setup and project
│   ├── setup-ubuntu.sh    # Ubuntu setup script
│   ├── setup-windows.md   # Windows setup guide
│   └── ForumClubMobile/   # React Native project (created after setup)
├── shared/                # Shared code between web and mobile
│   ├── types.ts           # TypeScript type definitions
│   ├── utils.ts           # Utility functions
│   └── api.ts             # API client
├── env.local.example      # Example environment variables
└── SUPABASE_SETUP.md      # Detailed Supabase setup instructions
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- Supabase account (free tier available)
- For mobile development: Android Studio (Windows/Ubuntu) or Xcode (macOS)

### Database Setup with Supabase

1. **Create a Supabase Project:**
   - Sign up for a free Supabase account at [https://supabase.com](https://supabase.com)
   - Create a new project from the dashboard
   - Note your project URL and API keys

2. **Configure Environment Variables:**
   - Copy the example env file:
     ```bash
     cp env.local.example .env.local
     ```
   - Update the `.env.local` file with your Supabase credentials:
     ```
     NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     SUPABASE_SERVICE_KEY=your-service-key
     ```

3. **Set Up the Database Schema:**
   - Run the schema setup script:
     ```bash
     npm run db:setup:supabase
     ```
   - This will create all required tables and functions in your Supabase project

4. **Verify the Setup:**
   - Run the verification script:
     ```bash
     npm run db:verify:supabase
     ```
   - Check that all required tables and columns are present

For more detailed Supabase setup instructions, refer to [SUPABASE_SETUP.md](SUPABASE_SETUP.md)

### Code Execution Service Setup

The code execution service is required for running code assignments in the platform.

1. **Start the Code Execution Service:**
   ```bash
   # Using the provided script
   ./start-code-execution.sh
   
   # Or using npm script
   npm run exec:service:start
   ```

2. **Verify the Service:**
   ```bash
   # Check if the service is running
   curl http://localhost:4000/health
   ```

The service supports multiple programming languages and runs in an isolated Docker container for security. For more details, see [CODE_EXECUTION_SERVICE.md](docs/CODE_EXECUTION_SERVICE.md).

### Web Application Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser

### Mobile Application Setup

#### For Ubuntu:

1. **Run the setup script:**

   ```bash
   npm run mobile:setup:ubuntu
   ```

2. **Initialize React Native project:**

   ```bash
   npm run mobile:init
   ```

3. **Start the Android app:**
   ```bash
   npm run mobile:android
   ```

#### For Windows:

1. **Follow the setup guide:**

   ```bash
   npm run mobile:setup:windows
   ```

   This will display the setup instructions. Also check `mobile/setup-windows.md`

2. **Initialize React Native project:**

   ```bash
   npm run mobile:init
   ```

3. **Start the Android app:**
   ```bash
   npm run mobile:android
   ```

## 🏗️ Development

### Available Scripts

#### Web Development

- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

#### Mobile Development

- `npm run mobile:setup:ubuntu` - Setup React Native on Ubuntu
- `npm run mobile:setup:windows` - Show Windows setup instructions
- `npm run mobile:init` - Initialize React Native project
- `npm run mobile:android` - Run Android app
- `npm run mobile:ios` - Run iOS app (macOS only)

### Development Environment

This project is configured to work on both Ubuntu and Windows:

- **Ubuntu**: Use the automated setup script for React Native
- **Windows**: Follow the detailed setup guide for Android development

## 🎨 Features

### Current Features

- ✅ Responsive web interface
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript throughout
- ✅ Shared component library
- ✅ Cross-platform setup

### Planned Features

- 🔲 User authentication
- 🔲 Real-time discussions
- 🔲 File uploads
- 🔲 Push notifications
- 🔲 Search functionality
- 🔲 Moderation tools
- 🔲 Categories and tags
- 🔲 User profiles

## 🧩 Architecture

The project follows a monorepo structure with shared code between web and mobile:

1. **Shared Types**: Common interfaces used by both platforms
2. **Shared Utils**: Helper functions for formatting, validation, etc.
3. **API Client**: Unified backend communication layer
4. **Component Library**: Reusable UI components

## 🔧 Configuration

### TypeScript Configuration

- Strict mode enabled
- Path aliases for clean imports (`@/` for src, `@/shared/` for shared)
- Shared types across web and mobile

### ESLint Configuration

- Next.js recommended rules
- TypeScript support
- Automatic code formatting

## 📱 Mobile Development Notes

### Android Development

- Minimum SDK: API Level 21 (Android 5.0)
- Target SDK: API Level 33 (Android 13)
- Requires Android Studio and Android SDK

### Cross-Platform Considerations

- Shared business logic in the `shared/` directory
- Platform-specific UI components
- Consistent styling across platforms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **Module not found errors**: Ensure all dependencies are installed with `npm install`
2. **React Native setup issues**: Follow platform-specific setup guides in the `mobile/` directory
3. **Build errors**: Check TypeScript configuration and shared imports

### Getting Help

- Check the [GitHub Issues](https://github.com/An14helloworld/zenith/issues)
- Review the setup guides in `mobile/`
- Consult the React Native and Next.js documentation

---

**Happy coding! 🚀**

# Copilot Instructions for College Forum Club App

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

This is a cross-platform college forum club application built with:

- **Web App**: Next.js 15 with TypeScript, Tailwind CSS, and App Router
- **Mobile App**: React Native (to be integrated)
- **Shared**: Common components, types, and utilities

## Architecture Guidelines

- Use TypeScript for all code
- Follow React/Next.js best practices
- Implement responsive design with Tailwind CSS
- Use App Router for navigation
- Create reusable components for forum features
- Implement proper error handling and loading states

## Forum Features to Implement

- User authentication and profiles
- Post creation and management
- Comments and replies
- Categories and tags
- Search functionality
- Real-time notifications
- File/image uploads
- Moderation tools

## Code Style

- Use functional components with hooks
- Implement proper TypeScript types
- Follow ESLint configuration
- Use Tailwind for styling
- Create custom hooks for shared logic
- Implement proper error boundaries
