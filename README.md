# United States of Kailasa Liberia

A beautiful, spiritual website for the United States of Kailasa Liberia, dedicated to reviving the ancient enlightened Hindu civilization through charitable activities and spiritual services.

## 🕉️ Project Overview

This website serves as a digital platform for the United States of Kailasa Liberia, offering:
- Information about the organization and its mission
- Details about the Supreme Pontiff of Hinduism (SPH)
- Sacred services and spiritual sevas
- Contact information and inquiry forms

## ✨ Features

### Pages
- **Home**: Hero section with mission overview and featured services
- **About Us**: Organization information, charitable activities, and global programs
- **About SPH**: Information about the Supreme Pontiff of Hinduism with photo gallery
- **Services**: Complete list of spiritual services including:
  - Guru Puja
  - Maheshwara Puja ($1,008)
  - Alankara Seva
  - Abhisheka Seva
  - Archana
  - Guru Homa
  - Rudra Homa (Fire Ritual)
  - VIP Membership ($1,000,000)
- **Contact**: Contact form and information

### Design
- **Color Theme**: Beige, Cream, and Maroon
- **Fonts**: Cinzel (headings) and Cormorant Garamond (body)
- **Style**: Elegant, spiritual, and professional
- **Features**: Responsive design, smooth animations, beautiful imagery

## 🚀 Tech Stack

- **Framework**: Hono (lightweight web framework)
- **Runtime**: Cloudflare Workers/Pages
- **Styling**: TailwindCSS via CDN
- **Icons**: Font Awesome
- **Build Tool**: Vite
- **Deployment**: Cloudflare Pages

## 📁 Project Structure

```
webapp/
├── src/
│   └── index.tsx          # Main Hono application with all routes
├── public/
│   └── images/            # Service and SPH images
├── ecosystem.config.cjs   # PM2 configuration
├── wrangler.jsonc         # Cloudflare configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm

### Setup
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start development server (sandbox)
npm run dev:sandbox
# Or using PM2
pm2 start ecosystem.config.cjs

# Test the service
curl http://localhost:3000
```

### Scripts
- `npm run build` - Build the project for production
- `npm run dev` - Run Vite development server
- `npm run dev:sandbox` - Run Wrangler Pages dev server
- `npm run deploy` - Build and deploy to Cloudflare Pages
- `npm run clean-port` - Kill processes on port 3000
- `npm run test` - Test local server
- `npm run git:status` - Check git status
- `npm run git:commit "message"` - Commit changes

## 🌐 Deployment

### Cloudflare Pages

1. **Setup Cloudflare API Key**
   ```bash
   # Call setup_cloudflare_api_key first
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Create Cloudflare Pages project**
   ```bash
   npx wrangler pages project create webapp --production-branch main
   ```

4. **Deploy to Cloudflare Pages**
   ```bash
   npx wrangler pages deploy dist --project-name webapp
   ```

### GitHub

1. **Setup GitHub environment**
   ```bash
   # Call setup_github_environment first
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/webapp.git
   git push -u origin main
   ```

## 📄 License

© 2024 United States of Kailasa Liberia. All rights reserved.

## 🙏 Sacred Services

All spiritual services are performed by trained priests following authentic Vedic traditions and ancient Hindu scriptures. Each service is designed to invoke divine blessings and promote spiritual growth.

---

**Serving humanity through spiritual enlightenment and charitable activities** 🕉️
