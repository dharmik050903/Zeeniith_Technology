# Deployment Guide for Zeeniith

## 🚀 Deploying to Vercel

This guide will help you deploy the Zeeniith website to Vercel.

### Prerequisites
- A GitHub account
- A Vercel account (sign up at [vercel.com](https://vercel.com))

### Step 1: Initialize Git Repository

If you haven't already, initialize a git repository in the Zeeniith folder:

```bash
cd Galaxy-website/Zeeniith
git init
git add .
git commit -m "Initial commit: Zeeniith website"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `zeeniith` (or any name you prefer)
3. **Don't** initialize it with README, .gitignore, or license (we already have these)

### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/zeeniith.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 4: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository (`zeeniith`)
4. Vercel will auto-detect the settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**

#### Option B: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel login
cd Galaxy-website/Zeeniith
vercel
```

Follow the prompts to deploy.

### Step 5: Configure Environment (if needed)

If you need environment variables:
1. Go to your project in Vercel dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add any required variables

### Step 6: Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain
3. Follow the DNS configuration instructions

### Build Configuration

The project is already configured for Vercel:
- ✅ `vercel.json` - Vercel configuration file
- ✅ `package.json` - Build scripts configured
- ✅ `vite.config.ts` - Output directory set to `dist`
- ✅ `.gitignore` - Node modules and build files excluded

### Troubleshooting

**Issue: Build fails**
- Make sure all dependencies are in `package.json`
- Check that `npm install` runs successfully locally

**Issue: 404 errors on routes**
- The `vercel.json` includes rewrites for React Router
- All routes should redirect to `index.html`

**Issue: Assets not loading**
- Ensure all assets are in the `public` folder
- Check that paths use relative URLs (not absolute)

### Post-Deployment

After deployment:
1. Your site will be live at `https://your-project.vercel.app`
2. Every push to `main` branch will trigger automatic deployment
3. You can preview deployments from pull requests

### Continuous Deployment

Vercel automatically deploys:
- ✅ Every push to `main` branch → Production deployment
- ✅ Pull requests → Preview deployments
- ✅ Manual deployments from dashboard

---

**Need Help?**
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

