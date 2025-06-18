# Green Musa Capital - Frontend

## Project Overview

This is the frontend implementation for Green Musa Capital's website, designed to provide an engaging, informative experience for ESG-focused investors. The website features a modern design, interactive financial tools, and secure client dashboard aligned with Green Musa Capital's mission and values.

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Documentation

The `docs` directory contains critical project documentation:

- **`green_musa_capital_analysis.md`**: Comprehensive research and analysis of Green Musa Capital, including company overview, market position, industry trends, potential growth markets, markets to avoid, and strategic recommendations. This document is built on reputable sources including Harvard Business School research and Tradespoon market intelligence.

- **`green_musa_capital_presentation.md`**: Presentation content for Green Musa Capital, showcasing the company's value proposition and market insights.

- **`website_requirements.md`**: Detailed requirements specification for the website, including design philosophy, color palette, core pages, membership/authentication features, and dashboard interface specifications.

These documents provide the strategic foundation and design requirements that inform the implementation of this website.

## Development

To run this project locally:

```sh
# Install dependencies
npm install

# Start development server
npm run dev
```

## Architecture

The frontend follows a component-based architecture with:

- Responsive design for mobile and desktop experiences
- Client-side authentication system (development only)
- Interactive financial calculator with usage tracking
- Dashboard interface with risk management tools

## Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Deployment Process

1. The GitHub Actions workflow in `.github/workflows/deploy.yml` handles the build and deployment process.
2. When code is pushed to the `main` branch, the workflow will:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages
3. The deployed site will be available at: `https://[username].github.io/green-musa-wealth-hub/`

### Local Testing

Before pushing changes, you can test the production build locally:

```sh
# Build the project
npm run build

# Preview the production build
npm run preview
```

## Next Steps

- Extract brand color hex codes for precise UI styling
- Implement the financial calculator with membership gating
- Build article library with ESG-focused content
- Develop booking system integration for consulting sessions