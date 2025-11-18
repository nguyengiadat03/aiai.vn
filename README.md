# Business Platform

A modern full-stack business platform built with Encore.ts and React, featuring a comprehensive website with blog, contact forms, and business solutions.

## Features

- 🚀 Modern, responsive design with Tailwind CSS
- 📝 Blog system with dynamic posts
- 📧 Contact form with email notifications
- 💼 Business solutions showcase
- 🎨 Beautiful UI components using shadcn/ui
- 🔒 Type-safe API with Encore.ts
- 📱 Mobile-friendly responsive design

## Tech Stack

### Backend
- **Encore.ts** - TypeScript backend framework
- **PostgreSQL** - Database for blog posts and contacts
- **Node.js** - Runtime environment

### Frontend
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Encore CLI installed ([Installation guide](https://encore.dev/docs/install))

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <project-directory>
```

2. Install dependencies (automatically handled by Encore):
```bash
encore run
```

3. The application will start automatically:
   - Frontend: https://localhost:4000
   - Backend API: https://localhost:4000/api

## Project Structure

```
.
├── backend/
│   ├── blog/              # Blog service
│   │   ├── encore.service.ts
│   │   ├── get.ts         # Get single blog post
│   │   └── list.ts        # List all blog posts
│   ├── contact/           # Contact service
│   │   ├── encore.service.ts
│   │   └── submit.ts      # Submit contact form
│   └── db/
│       ├── index.ts       # Database configuration
│       └── migrations/    # SQL migrations
├── frontend/
│   ├── App.tsx           # Main app component
│   ├── components/       # Reusable components
│   ├── pages/           # Page components
│   └── public/          # Static assets
└── README.md
```

## API Endpoints

### Blog

- `GET /blog` - List all blog posts
- `GET /blog/:id` - Get a single blog post by ID

### Contact

- `POST /contact` - Submit a contact form

## Database

The application uses PostgreSQL with the following tables:

- `blog_posts` - Store blog articles
- `contacts` - Store contact form submissions

Migrations are located in `backend/db/migrations/` and run automatically.

## Development

### Running Locally

```bash
encore run
```

This will start both the backend and frontend in development mode with hot reloading.

### Running Tests

```bash
encore test
```

### Building for Production

```bash
encore build
```

## Deployment

Encore applications can be deployed to Encore Cloud or your own cloud provider (AWS, GCP, Azure).

### Deploy to Encore Cloud

```bash
git push encore main
```

### Environment Variables

Configure secrets in the Encore dashboard or locally using:

```bash
encore secret set --type dev SecretName
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@yourcompany.com or open an issue on GitHub.

## Links

- [Encore.ts Documentation](https://encore.dev/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn/ui Documentation](https://ui.shadcn.com)
# Business Platform

A modern full-stack business platform built with Encore.ts and React, featuring a comprehensive website with blog, contact forms, and business solutions.

## Features

- 🚀 Modern, responsive design with Tailwind CSS
- 📝 Blog system with dynamic posts
- 📧 Contact form with email notifications
- 💼 Business solutions showcase
- 🎨 Beautiful UI components using shadcn/ui
- 🔒 Type-safe API with Encore.ts
- 📱 Mobile-friendly responsive design

## Tech Stack

### Backend
- **Encore.ts** - TypeScript backend framework
- **PostgreSQL** - Database for blog posts and contacts
- **Node.js** - Runtime environment

### Frontend
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Encore CLI installed ([Installation guide](https://encore.dev/docs/install))

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <project-directory>
```

2. Install dependencies (automatically handled by Encore):
```bash
encore run
```

3. The application will start automatically:
   - Frontend: https://localhost:4000
   - Backend API: https://localhost:4000/api

## Project Structure

```
.
├── backend/
│   ├── blog/              # Blog service
│   │   ├── encore.service.ts
│   │   ├── get.ts         # Get single blog post
│   │   └── list.ts        # List all blog posts
│   ├── contact/           # Contact service
│   │   ├── encore.service.ts
│   │   └── submit.ts      # Submit contact form
│   └── db/
│       ├── index.ts       # Database configuration
│       └── migrations/    # SQL migrations
├── frontend/
│   ├── App.tsx           # Main app component
│   ├── components/       # Reusable components
│   ├── pages/           # Page components
│   └── public/          # Static assets
└── README.md
```

## API Endpoints

### Blog

- `GET /blog` - List all blog posts
- `GET /blog/:id` - Get a single blog post by ID

### Contact

- `POST /contact` - Submit a contact form

## Database

The application uses PostgreSQL with the following tables:

- `blog_posts` - Store blog articles
- `contacts` - Store contact form submissions

Migrations are located in `backend/db/migrations/` and run automatically.

## Development

### Running Locally

```bash
encore run
```

This will start both the backend and frontend in development mode with hot reloading.

### Running Tests

```bash
encore test
```

### Building for Production

```bash
encore build
```

## Deployment

Encore applications can be deployed to Encore Cloud or your own cloud provider (AWS, GCP, Azure).

### Deploy to Encore Cloud

```bash
git push encore main
```

### Environment Variables

Configure secrets in the Encore dashboard or locally using:

```bash
encore secret set --type dev SecretName
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@yourcompany.com or open an issue on GitHub.

## Links

- [Encore.ts Documentation](https://encore.dev/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn/ui Documentation](https://ui.shadcn.com)
