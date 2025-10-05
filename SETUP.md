# Setup Guide for Awesome Components

## 🚀 Quick Start

### 1. Initial Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/awesome-components-react.git
cd awesome-components-react

# Install dependencies
npm install
```

### 2. Development

```bash
# Start Storybook for component development
npm run storybook

# Start the demo application
npm run dev

# Run tests
npm test

# Run linter
npm run lint
```

### 3. Building

```bash
# Build the library
npm run build
```

The build will create:

- `dist/awesome-components-react.esm.js` - ES module
- `dist/awesome-components-react.cjs.js` - CommonJS module
- `dist/index.d.ts` - TypeScript definitions
- `dist/style.css` - Bundled styles

## 📦 NPM Publishing Setup

### Prerequisites

1. **NPM Account**: Create an account at [npmjs.com](https://www.npmjs.com)

2. **NPM Token**:

   - Login to NPM: `npm login`
   - Generate token: Go to npmjs.com → Access Tokens → Generate New Token
   - Select "Automation" token type

3. **GitHub Repository Setup**:
   - Create a new repository on GitHub
   - Add NPM token as a secret:
     - Go to: Settings → Secrets and variables → Actions
     - Click "New repository secret"
     - Name: `NPM_TOKEN`
     - Value: Your NPM automation token

### First-Time Setup

1. **Update package.json**:

   ```json
   {
     "name": "awesome-components-react", // Change if needed (must be unique on NPM)
     "repository": {
       "type": "git",
       "url": "https://github.com/yourusername/awesome-components-react.git"
     }
   }
   ```

2. **Initialize Git**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/awesome-components-react.git
   git push -u origin main
   ```

## 🔄 Automated Publishing Workflow

### How it Works

The `.github/workflows/publish.yml` file automates:

1. **On every push to `main` branch**:
   - Installs dependencies
   - Runs linter
   - Runs tests
   - Builds the library
   - Bumps version (patch)
   - Pushes version tag to GitHub
   - Publishes to NPM
   - Creates GitHub release

### Manual Publishing

If you prefer manual publishing:

```bash
# Build the library
npm run build

# Bump version (patch/minor/major)
npm version patch

# Publish to NPM
npm publish --access public

# Push changes
git push origin main --tags
```

## 📚 Using the Library

### Installation

```bash
npm install awesome-components-react
```

### Usage

```tsx
import { Button, Modal, Input } from "awesome-components-react";
import "awesome-components-react/styles.css";

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input label="Email" type="email" />
    </div>
  );
}
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 🎨 Storybook

Storybook is configured for component development and documentation:

```bash
# Start Storybook
npm run storybook

# Build Storybook for deployment
npm run build-storybook
```

## 🛠️ Adding New Components

1. Create component folder: `src/components/NewComponent/`

2. Create files:

   - `NewComponent.tsx` - Component implementation
   - `NewComponent.css` - Component styles
   - `NewComponent.stories.tsx` - Storybook stories

3. Export from `src/index.ts`:

   ```typescript
   export { NewComponent } from "./components/NewComponent/NewComponent";
   export type { NewComponentProps } from "./components/NewComponent/NewComponent";
   ```

4. Test and commit!

## 🔧 Customization

### Changing Theme Variables

Edit `src/styles/index.css` to customize:

- Colors
- Typography
- Spacing
- Border radius
- Shadows

### Component Prefix

All components use `ac-` prefix for CSS classes to avoid conflicts. Change in individual component CSS files if needed.

## 📝 Version Management

The workflow automatically bumps **patch** versions. To change:

Edit `.github/workflows/publish.yml`:

```yaml
- name: Bump version
  run: npm version minor # or 'major'
```

## ⚠️ Important Notes

1. **[skip ci]** in commit messages prevents infinite loops
2. The workflow requires `NPM_TOKEN` secret to be set
3. Package name must be unique on NPM registry
4. First publish might require `npm publish --access public`

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Publishing Errors

- Verify `NPM_TOKEN` is set correctly in GitHub secrets
- Check package name is unique on NPM
- Ensure you have publishing rights

### Type Errors

- Run `npm run build` to check TypeScript compilation
- Check `tsconfig.json` settings

## 📞 Support

For issues and questions:

- Open an issue on GitHub
- Check existing documentation
- Review Storybook examples

## 🎉 Success!

If you've followed this guide, you now have:

- ✅ A fully functional component library
- ✅ Automated NPM publishing
- ✅ Storybook documentation
- ✅ TypeScript support
- ✅ Tree-shaking enabled
- ✅ Professional setup

**Congratulations! You're ready to build amazing components! 🚀**
