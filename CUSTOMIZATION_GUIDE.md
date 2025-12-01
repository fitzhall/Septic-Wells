# Quick Customization Guide

This guide helps you quickly customize the template for each new septic/well drilling client.

## 5-Minute Setup

### 1. Edit `site.config.ts` (Main Configuration)

This is the **ONLY file** you need to edit for basic customization:

```typescript
export const siteConfig = {
  // 📝 CHANGE THESE FOR EACH CLIENT
  business: {
    name: "ABC Septic & Well",           // ← Client business name
    tagline: "Expert Septic Services",   // ← Client tagline
    phone: "(555) 123-4567",             // ← Client phone
    email: "info@abcseptic.com",         // ← Client email
    address: {
      street: "123 Main Street",         // ← Client address
      city: "Springfield",
      state: "MA",
      zip: "01101",
    },
    hours: {
      weekday: "Monday - Friday: 7:00 AM - 6:00 PM",
      weekend: "Saturday: 8:00 AM - 4:00 PM",
      sunday: "Sunday: Closed",
    },
  },

  // 🗺️ UPDATE SERVICE AREAS
  serviceAreas: [
    "Springfield",          // ← List all cities/towns served
    "Northampton",
    "Amherst",
    // ... add more
  ],

  // 📱 SOCIAL MEDIA (Optional)
  social: {
    facebook: "",           // ← Add URLs or leave empty
    instagram: "",
    linkedin: "",
  },

  // 🔍 SEO - IMPORTANT!
  seo: {
    title: "ABC Septic & Well | Springfield MA",
    description: "Professional septic and well services in Springfield, MA...",
    keywords: "septic installation springfield, well drilling ma, septic repair",
    author: "ABC Septic & Well",
  },

  // ✅ Customize services if needed (or leave default)
  services: [
    // Most clients use the defaults, but you can customize
  ],

  // 📅 YEAR ESTABLISHED
  about: {
    yearEstablished: "2005",  // ← Change this
    // ...
  },
};
```

### 2. Update `.env.local`

```env
NEXT_PUBLIC_SITE_URL=https://abcseptic.com
```

### 3. Test Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 and verify all information is correct.

---

## Advanced Customization

### Change Brand Colors

Edit `tailwind.config.ts`:

```typescript
primary: {
  50: '#eff6ff',   // Lightest
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',  // Main brand color
  600: '#2563eb',  // Darker for hovers
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',  // Darkest
}
```

**Quick Color Generator:**
Use [uicolors.app](https://uicolors.app/create) to generate a palette from your client's brand color.

### Add Client Logo

1. Add logo image to `/public/logo.png`
2. Update `components/Header.tsx`:

```tsx
import Image from "next/image";

// Replace this:
<Link href="/" className="text-2xl font-bold text-primary-700">
  {siteConfig.business.name}
</Link>

// With this:
<Link href="/" className="flex items-center">
  <Image
    src="/logo.png"
    alt={siteConfig.business.name}
    width={180}
    height={60}
  />
</Link>
```

### Add Google Maps

1. Get embed code from [Google Maps](https://www.google.com/maps)
2. In `site.config.ts`, add:

```typescript
googleMapsEmbed: `<iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
```

The map will automatically appear on the Contact page.

### Customize Services

In `site.config.ts`:

```typescript
services: [
  {
    id: "custom-service",
    name: "Your Custom Service",
    description: "Description here",
    icon: "🔧",  // Any emoji or change to use icons
  },
  // ... more services
],
```

To use icon libraries instead of emojis:

```bash
npm install lucide-react
```

Then import and use:
```tsx
import { Wrench } from "lucide-react";
<Wrench className="w-10 h-10" />
```

### Add More Service Details

Edit `app/services/page.tsx`, function `getServiceDetails()` at the bottom to add more bullet points for each service.

### Change Fonts

In `app/layout.tsx`:

```tsx
// Current:
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Change to:
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"]
});

// Then update className:
<body className={roboto.className}>
```

Browse fonts at [fonts.google.com](https://fonts.google.com)

---

## Content Customization

### Modify Page Content

All page content is in these files:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/services/page.tsx` - Services page
- `app/contact/page.tsx` - Contact page

You can edit the text directly in these files, or pull from `site.config.ts`.

### Add Client Testimonials

Add to `site.config.ts`:

```typescript
testimonials: [
  {
    name: "John Smith",
    text: "Great service! Very professional.",
    rating: 5,
  },
  // ... more
]
```

Then create a testimonials section in `app/page.tsx`.

### Add Before/After Gallery

1. Add images to `/public/gallery/`
2. Create gallery component
3. Add to home or services page

---

## SEO Optimization

### Set Up Each Page's Meta Tags

Meta tags are in each page file. Example from `app/services/page.tsx`:

```typescript
export const metadata: Metadata = {
  title: `Services | ${siteConfig.business.name}`,
  description: `Professional septic and well services...`,
};
```

Customize description for better SEO.

### Submit to Google

After deployment:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property
3. Submit `https://yourclient.com/sitemap.xml`

### Local SEO Checklist

- [ ] Google Business Profile created/claimed
- [ ] Business listed on Yelp
- [ ] Listed in local directories
- [ ] NAP (Name, Address, Phone) consistent everywhere
- [ ] Reviews solicited from happy customers

---

## Contact Form Setup

The form in `app/contact/page.tsx` needs a backend. **Choose one:**

### Option A: Formspree (Easiest - Free tier available)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, get form ID
3. Update `handleSubmit`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  } else {
    setIsSubmitting(false);
    setSubmitStatus("error");
  }
};
```

### Option B: Netlify Forms (If using Netlify)

Just add `data-netlify="true"` to the `<form>` tag.

### Option C: SendGrid API

Create `app/api/contact/route.ts` and use SendGrid to email submissions.

---

## Common Client Requests

### "Can we add a blog?"

Yes! Create `app/blog` directory and add blog pages. Consider using a CMS like:
- Sanity
- Contentful
- WordPress headless

### "Can we add online booking?"

Integrate with scheduling software:
- Calendly
- Acuity Scheduling
- ScheduleOnce

Add iframe or link to booking page.

### "Can we add live chat?"

Add widgets from:
- Intercom
- Drift
- Tawk.to (free)

Add their script to `app/layout.tsx`.

### "Can we track phone calls?"

Use call tracking services:
- CallRail
- CallTrackingMetrics
- Google Ads call tracking

Replace phone number with tracking number.

---

## Quick Reference

### File Structure
```
site.config.ts          ← Main configuration (EDIT THIS FIRST)
app/page.tsx            ← Home page
app/about/page.tsx      ← About page
app/services/page.tsx   ← Services page
app/contact/page.tsx    ← Contact page
components/Header.tsx   ← Navigation
components/Footer.tsx   ← Footer
tailwind.config.ts      ← Colors and styling
```

### Common Commands
```bash
npm install           # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Check for errors
```

### Testing Checklist
- [ ] All client info correct
- [ ] Phone number clickable on mobile
- [ ] Email links work
- [ ] All pages load
- [ ] Mobile responsive
- [ ] Form submits properly
- [ ] SEO meta tags correct
- [ ] Google Maps loads (if added)

---

## Tips for Selling to Clients

### Value Propositions

1. **SEO Optimized** - Built with search engines in mind
2. **Mobile-First** - Most customers browse on phones
3. **Fast Loading** - Better user experience and SEO
4. **Easy to Update** - Single config file for changes
5. **Modern Design** - Professional appearance builds trust
6. **Lead Generation** - Contact forms and clear CTAs

### Typical Pricing Structure

- **Template Setup**: $500-$1,500
- **Custom Design**: +$500-$1,000
- **Content Writing**: +$500-$1,000
- **SEO Setup**: +$300-$500
- **Hosting & Maintenance**: $50-$100/month

### What's Included

- ✅ Responsive website (all pages)
- ✅ Contact form setup
- ✅ Google Maps integration
- ✅ SEO optimization
- ✅ Custom domain setup
- ✅ SSL certificate
- ✅ Hosting setup
- ✅ Analytics setup
- ✅ Search engine submission
- ✅ Training on updates

---

## Support

For issues or questions:
- Check README.md for general info
- Check DEPLOYMENT.md for deployment help
- Review Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Review Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
