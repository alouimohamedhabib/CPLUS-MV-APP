my-nextjs-movie-app/
├── public/                          # Static assets (images, fonts, etc.)
├── src/
│   ├── app/                         # App directory for routing (Next.js 13+ App Router)
│   │   ├── layout.tsx               # Root layout component
│   │   ├── page.tsx                 # Home page (List of Movies)
│   │   ├── movies/
│   │   │   ├── [id]/page.tsx        # Dynamic route for Movie details
│   │   │   ├── layout.tsx           # Layout for the movie section
│   ├── components/                  # Reusable UI components
│   │   ├── movie/
│   │   │   ├── MovieCard.tsx        # Card component for individual movies
│   │   │   ├── MovieList.tsx        # Component to render a list of movies
│   │   └── common/
│   │       └── Loader.tsx           # Common components like Loader, Error boundary
│   ├── domain/                      # Domain logic (Entities & Use Cases)
│   │   ├── entities/                # Core business objects
│   │   │   └── Movie.ts             # Movie entity (defines movie properties)
│   │   ├── usecases/                # Application business logic
│   │   │   └── FetchMovies.ts       # Use case for fetching movies
│   ├── infrastructure/              # Handles external APIs, frameworks, databases
│   │   ├── apis/                    # API-related code
│   │   │   └── tmdb.ts              # TMDB API interface
│   │   ├── repositories/            # Data access layer
│   │   │   └── MovieRepository.ts   # Repository for fetching movies (from API)
│   ├── services/                    # Application services (facade for use cases)
│   │   └── MovieService.ts          # Provides service methods for movies
│   ├── styles/                      # Global and component-specific styles
│   └── utils/                       # Utility functions and helpers
│       └── fetcher.ts               # Utility for handling API requests
├── .env.local                       # Environment variables for API keys
├── next.config.js                   # Next.js configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Project dependencies
└── README.md                        # Project documentation
