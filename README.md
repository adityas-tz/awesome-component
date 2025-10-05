# Awesome Components

A modern, lightweight React component library built with TypeScript.

## Installation

```bash
npm i awesome-components-react
```

## Usage

```tsx
import { Button, Modal, Input } from "awesome-components-react";
import "awesome-components-react/styles.css";

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text..." />
    </div>
  );
}
```

## Components

- **Button** - Versatile button with multiple variants
- **Input** - Text input with error states
- **TextArea** - Multi-line text input
- **Modal** - Dialog/modal component
- **Dropdown** - Select dropdown
- **Tooltip** - Contextual tooltips
- **Card** - Content card
- **Badge** - Status badge/chip
- **Avatar** - User avatar
- **Spinner** - Loading spinner
- **Toast** - Notification system
- **Tabs** - Tab navigation
- **Accordion** - Collapsible content
- **Pagination** - Page navigation
- **Breadcrumb** - Breadcrumb navigation

## Development

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Build library
npm run build

# Run tests
npm test
```

## License

MIT
