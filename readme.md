# SolidJS Partial SSG Demo

This demo demonstrates how to implement partial Static Site Generation (SSG) with SolidJS, allowing for a hybrid approach of static content with interactive components.

## Overview

The project showcases how to:
- Generate a static template using SolidJS
- Include interactive components within static pages
- Maintain modular code structure while preserving JavaScript functionality

## How It Works

The implementation consists of three main parts:

1. **entry-server.jsx**
   - Handles the server-side rendering
   - Renders the main Home.jsx component for static generation

2. **generate.js**
   - Processes the entry-server.js output
   - Updates index.html with the SSG content from Home
   - Injects necessary hydration scripts and client-entry.js

3. **client-entry.js**
   - Handles client-side hydration
   - Activates interactive components after page load

## Running the Demo

1. Install dependencies:
```bash
npm install
```

2. Build and preview the site:
```bash
npm run preview
```

## Implementation Notes

- The static page is divided into subcomponents for easier maintenance
- Interactive elements (like buttons) are initially rendered as placeholder divs
- Upon page load, the placeholders are replaced with fully functional components
- While the button renders correctly after hydration, the output it sent to console, go to dev tools to view the result.

## Important Hydration Notes

### Root Hydration Requirements
- Components must be hydrated where `data-hk` markers begin (at the root level)
- Attempting to hydrate only subcomponents directly will not work
- Root hydration is essential for proper component initialization

### Selective Hydration Pattern
To selectively hydrate specific components:
1. Use `<NoHydration>` tags at the parent/root level
2. Mark specific components that need interactivity with `<Hydration>` tags
3. This pattern allows for fine-grained control over which parts of your application become interactive

## Project Structure
