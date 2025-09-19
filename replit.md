# Overview

This is a full-stack web application built with a React frontend and Express backend. The application appears to be a personal portfolio/resume website featuring a modern, responsive design with dark theme styling. It uses a monorepo structure with shared TypeScript schemas and includes comprehensive UI components for building interactive web experiences.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Extensive shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Build Tool**: Vite for fast development and building
- **Animations**: Framer Motion for smooth animations and transitions

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reloading with tsx for development server
- **Storage**: Currently using in-memory storage with plans for database integration
- **API Design**: RESTful API structure with `/api` prefix routing

## Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (configured but not yet fully integrated)
- **Cloud Provider**: Neon Database for serverless PostgreSQL
- **Schema Management**: Shared TypeScript schemas with Zod validation
- **Migrations**: Drizzle Kit for database migrations

## Authentication and Authorization
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Schema**: User model with username/password authentication (basic setup)
- **Security**: Prepared for credential-based authentication flow

## External Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL
- **UI Framework**: Comprehensive Radix UI component suite
- **Validation**: Zod for runtime type checking and schema validation
- **Utilities**: Date-fns for date manipulation, clsx for conditional styling
- **Development**: Replit-specific plugins for development environment integration

The architecture follows a modern full-stack pattern with clear separation between client and server code, shared type definitions, and a scalable component-based UI system. The application is optimized for the Replit development environment with specific build configurations and development tooling.