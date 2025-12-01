# Deployment Guide for Septic & Well Drilling Website Template

## Pre-Deployment Checklist

### 1. Customize Site Configuration

Edit `site.config.ts` with the client's information:

```typescript
export const siteConfig = {
  business: {
    name: "Your Business Name",
    tagline: "Your Tagline",
    phone: "(XXX) XXX-XXXX",
    email: "info@yourbusiness.com",
    address: {
      street: "123 Main Street",
      city: "Your City",
      state: "ST",
      zip: "12345",
    },
    // ... etc
  },
  // Update all sections
};
```

### 2. Update Environment Variables

Create `.env.local` (for local development):
```env
NEXT_PUBLIC_SITE_URL=https://yourclientdomain.com
```

### 3. Customize Branding (Optional)

Edit `tailwind.config.ts` to change colors:
```typescript
primary: {
  50: '#f0f9ff',
  500: '#0ea5e9',  // Change these to client's brand colors
  600: '#0284c7',
  // ...
}
```

### 4. Test Locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000 and test:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Contact form displays properly
- [ ] Mobile responsiveness
- [ ] All client information is correct

### 5. Build for Production

```bash
npm run build
npm start
```

Test the production build locally before deploying.

---

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel:**
- Optimized for Next.js (made by the same team)
- Automatic deployments from Git
- Free SSL certificates
- Global CDN
- Free tier available

**Steps:**

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your repository
   - Configure:
     - Framework Preset: Next.js (auto-detected)
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Add environment variable:
     - `NEXT_PUBLIC_SITE_URL` = `https://yourclientdomain.com`
   - Click "Deploy"

3. **Custom Domain**
   - In Vercel dashboard → Settings → Domains
   - Add custom domain
   - Update DNS records at domain registrar:
     - Add CNAME record pointing to Vercel
     - Or use Vercel nameservers

4. **Automatic Deployments**
   - Every push to `main` branch auto-deploys
   - Preview deployments for pull requests

---

### Option 2: Netlify

**Steps:**

1. **Push to Git** (same as Vercel)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Add environment variables in Site settings
   - Click "Deploy"

3. **Custom Domain**
   - Go to Domain settings
   - Add custom domain
   - Configure DNS

---

### Option 3: Cloudflare Pages

**Steps:**

1. **Push to Git** (same as above)

2. **Deploy on Cloudflare Pages**
   - Go to Cloudflare dashboard → Pages
   - Create a project
   - Connect Git repository
   - Configure:
     - Framework preset: Next.js
     - Build command: `npx @cloudflare/next-on-pages`
     - Build output: `.vercel/output/static`
   - Add environment variables
   - Deploy

3. **Custom Domain**
   - Add custom domain in Pages settings
   - Update DNS in Cloudflare

---

### Option 4: Traditional Hosting (VPS/Shared Hosting)

**Requirements:**
- Node.js 18+ installed
- PM2 or similar process manager

**Steps:**

1. **Upload Files to Server**
   ```bash
   # On your local machine
   npm run build

   # Upload these to server:
   # - .next folder
   # - node_modules
   # - package.json
   # - public folder (if you have one)
   # - next.config.ts
   ```

2. **On Server, Install Dependencies**
   ```bash
   npm install --production
   ```

3. **Set Environment Variables**
   ```bash
   # Create .env.local on server
   echo "NEXT_PUBLIC_SITE_URL=https://yourdomain.com" > .env.local
   ```

4. **Run with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "client-website" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx as Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **SSL Certificate with Let's Encrypt**
   ```bash
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

---

## Post-Deployment Tasks

### 1. Configure Form Submission

The contact form needs a backend handler. Choose one:

**Option A: Formspree (Easiest)**
```tsx
// In app/contact/page.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (response.ok) {
    setSubmitStatus("success");
  }
};
```

**Option B: SendGrid API**
Create API route `app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  const data = await request.json();

  const msg = {
    to: 'client@email.com',
    from: 'website@yourdomain.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${data.name}\nEmail: ${data.email}\n...`,
  };

  await sgMail.send(msg);
  return NextResponse.json({ success: true });
}
```

**Option C: Netlify Forms** (if using Netlify)
Just add `data-netlify="true"` to the form element.

### 2. Submit to Search Engines

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property with your domain
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site
3. Submit sitemap

### 3. Set Up Analytics

**Google Analytics:**
1. Create GA4 property
2. Install `next/script` in `app/layout.tsx`:

```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 4. Local SEO Setup

- [ ] Create/claim Google Business Profile
- [ ] Add business to local directories (Yelp, Yellow Pages, etc.)
- [ ] Get listed on industry-specific directories
- [ ] Encourage customer reviews

### 5. Performance Optimization

**Add Images:**
- Use Next.js `<Image>` component
- Optimize images before uploading
- Use WebP format

**Optional Enhancements:**
- Add Google Maps to contact page
- Implement click-to-call tracking
- Set up conversion tracking
- Add Facebook Pixel (if running ads)

---

## Domain Setup

### Registrar DNS Configuration

**For Vercel:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

**For Netlify:**
```
Type: CNAME
Name: www
Value: your-site.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

**For Cloudflare Pages:**
Cloudflare manages DNS automatically if domain is on Cloudflare.

---

## Maintenance

### Regular Updates
```bash
# Update dependencies monthly
npm update

# Test after updates
npm run build
npm start
```

### Content Updates
Edit `site.config.ts` for:
- Business hours changes
- New services
- Contact information
- Service area expansion

### Monitoring
- Check uptime (UptimeRobot, Pingdom)
- Monitor analytics
- Review contact form submissions
- Check for broken links quarterly

---

## Troubleshooting

**Build Fails:**
- Check Node.js version (should be 18+)
- Clear cache: `rm -rf .next`
- Reinstall: `rm -rf node_modules && npm install`

**Styles Not Loading:**
- Check Tailwind configuration
- Verify CSS import in layout

**Form Not Submitting:**
- Check form handler implementation
- Verify API keys
- Check browser console for errors

---

## Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## Security Checklist

- [ ] SSL certificate installed
- [ ] Environment variables secured (not in Git)
- [ ] Form has CSRF protection
- [ ] Rate limiting on contact form
- [ ] Regular dependency updates
- [ ] Remove console.log statements in production
