# Septic & Well Drilling Website Template

A modern, SEO-optimized website template built specifically for local septic and well drilling companies. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✨ **Modern, Responsive Design** - Mobile-first design that looks great on all devices
- 🎯 **SEO Optimized** - Built-in schema markup, sitemap, and meta tags for better search rankings
- ⚡ **Fast Performance** - Built on Next.js with App Router for optimal speed
- 🎨 **Easy Customization** - Single configuration file for quick client deployment
- 📱 **Mobile-Friendly** - Fully responsive navigation and layouts
- 🔧 **Type-Safe** - Built with TypeScript for better code quality
- 📞 **Lead Generation** - Contact forms and prominent call-to-action buttons
- 🎨 **Tailwind CSS** - Utility-first CSS for easy styling customization

## Pages Included

1. **Home** - Hero section, services overview, service areas, emergency banner
2. **Services** - Detailed service descriptions with icons and CTA
3. **About** - Company story, why choose us, stats, service areas
4. **Contact** - Contact form, business information, map integration ready

## Quick Start

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your site.

### Building for Production

```bash
# Build the site
npm run build

# Start production server
npm start
```

## Customization Guide

### 1. Site Configuration

All business-specific content is managed in `site.config.ts`. Edit this file to customize:

- Business name, tagline, and contact information
- Service areas
- Services offered
- Social media links
- SEO metadata
- Business hours
- About section content

### 2. Environment Variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 3. Branding & Colors

Colors are defined in `tailwind.config.ts`. The primary color scheme uses blue, but you can easily change it:

```typescript
colors: {
  primary: {
    // Customize these color values
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    // ... etc
  },
}
```

### 4. Google Maps Integration

To add a Google Maps embed:

1. Get your embed code from Google Maps
2. Add it to `site.config.ts` under `googleMapsEmbed`

### 5. Form Handling

The contact form in `app/contact/page.tsx` has a placeholder submission handler. Replace it with your preferred solution:

- Email service (SendGrid, Mailgun, etc.)
- Form service (Formspree, Netlify Forms, etc.)
- Your own API endpoint

Example with Formspree:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  // Handle response...
};
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Your own server

## SEO Features

### Schema Markup

The site includes structured data for:
- Organization
- Local Business
- Services
- Breadcrumbs

### Sitemap & Robots.txt

Automatically generated at:
- `/sitemap.xml`
- `/robots.txt`

### Meta Tags

Each page has optimized meta tags for:
- Title
- Description
- Open Graph
- Keywords

## Template Deployment Checklist

When deploying for a client:

- [ ] Update all content in `site.config.ts`
- [ ] Set `NEXT_PUBLIC_SITE_URL` in environment
- [ ] Customize colors in `tailwind.config.ts`
- [ ] Add Google Maps embed (optional)
- [ ] Set up form submission handling
- [ ] Add actual business logo/images
- [ ] Update social media links
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Submit sitemap to Google Search Console

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)

## File Structure

```
/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── services/       # Services page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   ├── sitemap.ts      # Sitemap generation
│   └── robots.ts       # Robots.txt generation
├── components/
│   ├── Header.tsx      # Site header/navigation
│   ├── Footer.tsx      # Site footer
│   └── StructuredData.tsx  # SEO schema markup
├── site.config.ts      # Main configuration file
└── tailwind.config.ts  # Tailwind configuration
```

## Support & Customization

This template is designed to be easily customizable for any septic or well drilling business. For advanced customization needs, consider:

- Adding a blog section for content marketing
- Integrating with scheduling software
- Adding customer testimonials section
- Creating service-specific landing pages
- Adding before/after photo galleries

## License

This template is available for commercial use in your client projects.

---

Built with ❤️ for septic and well drilling professionals
