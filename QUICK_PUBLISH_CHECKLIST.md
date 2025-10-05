# 📋 Quick Publishing Checklist

## Before You Start

- [ ] Check package name availability: `npm search awesome-components`
- [ ] Choose final package name (update in `package.json` if needed)
- [ ] Create NPM account at https://www.npmjs.com/signup
- [ ] Generate NPM access token (Automation type)
- [ ] Create GitHub repository

## Setup Commands

```powershell
# 1. Update package.json with your info
# Edit: name, author, repository.url

# 2. Verify build works
npm run build

# 3. Run tests
npm test

# 4. Initialize git
git init
git add .
git commit -m "Initial commit: awesome-components library"

# 5. Add GitHub remote (REPLACE YOUR-USERNAME!)
git remote add origin https://github.com/YOUR-USERNAME/awesome-components.git

# 6. Push to GitHub (this triggers auto-publish!)
git branch -M main
git push -u origin main
```

## GitHub Secrets Setup

1. Go to: https://github.com/YOUR-USERNAME/awesome-components/settings/secrets/actions
2. Click "New repository secret"
3. Name: `NPM_TOKEN`
4. Value: [Paste your NPM access token]
5. Click "Add secret"

## Verify Publishing

After pushing to GitHub:

1. Check GitHub Actions: https://github.com/YOUR-USERNAME/awesome-components/actions
2. Wait for workflow to complete (~2-3 minutes)
3. Check NPM: https://www.npmjs.com/package/awesome-components
4. Test installation: `npm install awesome-components`

## Quick Test

```bash
# Create test project
npx create-react-app test-app
cd test-app
npm install awesome-components

# Test in src/App.js:
import { Button } from 'awesome-components';
import 'awesome-components/styles.css';

function App() {
  return <Button variant="primary">It works!</Button>;
}
```

## ✅ Done!

Your package is live at: `npm install awesome-components`

## Future Updates

```powershell
# Make changes, then:
git add .
git commit -m "feat: your changes"
git push origin main
# Auto-publishes with version bump!
```
