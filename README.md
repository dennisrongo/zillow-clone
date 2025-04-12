# Zillow Clone

This project is a clone of the Zillow website, built using modern web technologies. It allows users to browse property listings, view details, and potentially interact with map data.

## Features

*   Browse trending property listings.
*   View property details including price, beds, baths, and square footage.
*   (Potential) Search for properties by location.
*   (Potential) Map integration to visualize property locations.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (v15.2.5 with Turbopack)
*   **UI Library:** [React](https://reactjs.org/) (v19)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) (v5)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
*   **Mapping:** [Leaflet](https://leafletjs.com/) & [React Leaflet](https://react-leaflet.js.org/)
*   **Linting:** [ESLint](https://eslint.org/)

## Getting Started

Follow these instructions to set up the project locally for development.

### Prerequisites

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd zillow-clone
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project. Add any necessary environment variables here. While no specific variables were detected in the current codebase, typical variables for such a project might include API keys for mapping services or data sources. Example:
    ```plaintext
    # .env.local
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_token_here
    # Add other variables as needed
    ```
    *Note: You might need to acquire API keys from services like Mapbox or a real estate data provider.*

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run the following scripts:

*   `npm run dev` or `yarn dev`: Runs the app in development mode with Turbopack.
*   `npm run build` or `yarn build`: Builds the app for production.
*   `npm run start` or `yarn start`: Starts the production server.
*   `npm run lint` or `yarn lint`: Runs the linter to check for code style issues.

## Project Structure

The project follows standard Next.js conventions, organized as follows:

```
project-root/
├── app/                  # Next.js App Router directory
│   ├── layout.tsx        # Global layout
│   ├── page.tsx          # Homepage
│   ├── api/              # API routes
│   └── (grouping)/       # Feature/route groups (e.g., auth, dashboard)
│       └── ...
├── components/           # Shared React components
├── lib/                  # Utility functions, services, core logic
│   └── ...
├── public/               # Static assets
├── .env.local            # Local environment variables (ignored by Git)
├── next.config.mjs       # Next.js configuration
├── package.json          # Project metadata and dependencies
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

Refer to the `architecture-rules.mdc` (if available) for specific conventions regarding services, API calls, and component organization.

## Contributing

Contributions are welcome! Please follow standard Git workflow practices (fork, branch, pull request). Ensure code passes linting checks before submitting.

## License

(Optional: Add license information here, e.g., MIT License)