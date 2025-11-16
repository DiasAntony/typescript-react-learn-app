# 🎮 Game Hub - Video Game Discovery Platform

A modern, feature-rich video game discovery application built with React, TypeScript, and Vite. Browse thousands of games, filter by genre and platform, search for your favorites, and explore detailed game information including screenshots, trailers, and ratings. Built with best practices and modern React patterns.

![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.3.1-646cff?style=flat-square&logo=vite)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-2.8.2-319795?style=flat-square&logo=chakra-ui)

## ✨ Features

### 🎯 Core Functionality
- **Game Discovery** - Browse thousands of games from the RAWG API
- **Infinite Scroll** - Seamlessly load more games as you scroll
- **Advanced Filtering** - Filter games by:
  - Genre (Action, RPG, Strategy, etc.)
  - Platform (PC, PlayStation, Xbox, Nintendo, etc.)
  - Sort by relevance, release date, popularity, and more
- **Search** - Real-time search functionality to find specific games
- **Game Details** - Comprehensive game information including:
  - Full game description
  - Game screenshots gallery
  - Game trailers
  - Metacritic scores
  - Publisher information
  - Genre tags

### 🎨 User Experience
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Design** - Fully responsive layout for all screen sizes
- **Loading States** - Beautiful skeleton loaders during data fetching
- **Error Handling** - Graceful error handling with user-friendly messages
- **Optimized Performance** - React Query caching and stale-time management
- **Smooth Animations** - Framer Motion animations for enhanced UX

### 🛠️ Technical Features
- **TypeScript** - Full type safety throughout the application
- **React Query** - Powerful data fetching with caching and synchronization
- **Zustand** - Lightweight state management for query parameters
- **Custom Hooks** - Reusable hooks for data fetching and state management
- **Component Architecture** - Well-organized, reusable components
- **API Client** - Generic, reusable API client with TypeScript generics

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.2.2** - Type safety
- **Vite 5.3.1** - Build tool and dev server
- **Chakra UI 2.8.2** - Component library and styling
- **Framer Motion 11.2.11** - Animation library
- **React Router DOM 6.26.1** - Client-side routing

### State Management & Data Fetching
- **React Query 3.39.3** - Server state management and data fetching
- **Zustand 4.5.5** - Client state management

### HTTP Client
- **Axios 1.7.2** - HTTP client for API requests

### UI Enhancements
- **React Icons 5.2.1** - Icon library
- **React Infinite Scroll Component 6.1.0** - Infinite scrolling

### Backend API
- **RAWG Video Games Database API** - Game data source

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn** or **pnpm**
- **RAWG API Key** - Get a free API key from [RAWG.io](https://rawg.io/apidocs)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd typescript-react-learn-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Variables

Create a `.env` file in the root directory and add your RAWG API key:

```env
VITE_API_KEY=your_rawg_api_key_here
```

**To get your RAWG API key:**
1. Visit [RAWG.io](https://rawg.io/)
2. Sign up for a free account
3. Navigate to your profile settings
4. Generate an API key
5. Copy the key to your `.env` file

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The app will open at [http://localhost:5173](http://localhost:5173) (or the next available port).

### 5. Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This creates an optimized production build in the `dist` folder.

### 6. Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## 📁 Project Structure

```
typescript-react-learn-app/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── assets/            # Images and other assets
│   │   └── game (2).webp  # Logo
│   ├── components/        # React components
│   │   ├── ColorModeSwitch.tsx
│   │   ├── CreticScore.tsx
│   │   ├── ExpandableText.tsx
│   │   ├── GameAttributes.tsx
│   │   ├── GameCard.tsx
│   │   ├── GameCardContainer.tsx
│   │   ├── GameCardSkeleton.tsx
│   │   ├── GameGid.tsx
│   │   ├── GameHeading.tsx
│   │   ├── GameScreenshots.tsx
│   │   ├── GameTrailer.tsx
│   │   ├── GenresList.tsx
│   │   ├── NavBar.tsx
│   │   ├── PlatformIconList.tsx
│   │   ├── PlatformSelecter.tsx
│   │   ├── SerchInput.tsx
│   │   └── SortSelector.tsx
│   ├── entites/           # TypeScript interfaces/types
│   │   ├── Game.ts
│   │   ├── Genre.ts
│   │   ├── Platform.ts
│   │   └── Publishers.ts
│   ├── hooks/             # Custom React hooks
│   │   ├── useGame.ts
│   │   ├── useGames.ts
│   │   ├── useGenres.ts
│   │   ├── usePlatforms.ts
│   │   ├── useScreenShots.ts
│   │   └── useTrailer.ts
│   ├── pages/             # Page components
│   │   ├── HomePage.tsx
│   │   ├── GameDetailsPage.tsx
│   │   ├── Layout.tsx
│   │   └── ErrorPage.tsx
│   ├── services/          # API services
│   │   └── api-client.ts
│   ├── store.ts           # Zustand store
│   ├── theme.ts           # Chakra UI theme configuration
│   ├── routes.tsx         # React Router configuration
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Key Features Explained

### Infinite Scroll
Games are loaded progressively using infinite scroll, providing a smooth browsing experience without pagination.

### State Management
- **Zustand Store** - Manages query parameters (genre, platform, sort order, search text)
- **React Query** - Handles server state, caching, and data synchronization

### Custom Hooks
- `useGames()` - Fetches games with infinite query support
- `useGame(slug)` - Fetches a single game by slug
- `useGenres()` - Fetches all available genres
- `usePlatforms()` - Fetches all available platforms
- `useScreenshots(gameId)` - Fetches game screenshots
- `useTrailer(gameId)` - Fetches game trailer

### API Client
A generic, reusable API client built with TypeScript generics:

```typescript
const apiClient = new APIClient<Game>("/games");
const games = await apiClient.getAll({ params: { genres: 4 } });
```

### Responsive Layout
- Mobile-first design approach
- Sidebar navigation on large screens
- Collapsible filters on mobile
- Grid layout adapts to screen size

## 🔧 Available Scripts

### `npm run dev`
Starts the development server with hot module replacement (HMR).

### `npm run build`
Builds the app for production. The build is optimized and minified.

### `npm run preview`
Preview the production build locally.

### `npm run lint`
Runs ESLint to check for code quality issues.

## 🎨 Customization

### Theme Configuration
Modify `src/theme.ts` to customize Chakra UI theme, colors, and component styles.

### API Configuration
The API client is configured in `src/services/api-client.ts`. You can modify the base URL or add additional request interceptors.

## 📡 API Endpoints Used

This application uses the [RAWG Video Games Database API](https://rawg.io/apidocs):

- `GET /games` - List all games (with filters)
- `GET /games/{id}` - Get game details by ID
- `GET /games/{game_pk}/screenshots` - Get game screenshots
- `GET /games/{id}/movies` - Get game trailers
- `GET /genres` - List all genres
- `GET /platforms` - List all platforms

## 🧪 Testing

The project includes testing setup. To run tests:

```bash
npm test
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **GitHub Pages**
   - Install `gh-pages`: `npm install --save-dev gh-pages`
   - Add to `package.json`:
     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
     ```
   - Deploy: `npm run deploy`

**Important**: Don't forget to add your `VITE_API_KEY` as an environment variable in your deployment platform!

## 📝 Code Examples

### Using Custom Hooks

```typescript
import useGames from '../hooks/useGames';

const MyComponent = () => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } = useGames();
  
  // Access games from data.pages
  const games = data?.pages.flatMap(page => page.results) || [];
  
  return (
    <div>
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};
```

### Using Zustand Store

```typescript
import useGameQueryStore from '../store';

const MyComponent = () => {
  const setGenreId = useGameQueryStore(s => s.setGenreId);
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  
  return (
    <button onClick={() => setGenreId(4)}>
      Filter by Action
    </button>
  );
};
```

## 🎓 Learning Resources

This project demonstrates:
- Modern React patterns (Hooks, Context)
- TypeScript best practices
- State management with Zustand
- Server state management with React Query
- Component composition
- Custom hooks
- API integration
- Responsive design
- Dark mode implementation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [RAWG.io](https://rawg.io/) - For providing the amazing games API
- [Chakra UI](https://chakra-ui.com/) - For the beautiful component library
- [React Query](https://tanstack.com/query) - For powerful data fetching
- [Vite](https://vitejs.dev/) - For the blazing-fast build tool
- [Zustand](https://github.com/pmndrs/zustand) - For simple state management

## 📞 Support

If you encounter any issues or have questions, please open an issue on the repository.

---

**Happy Gaming! 🎮✨**
