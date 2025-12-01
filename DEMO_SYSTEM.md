# Demo System Guide

## 🎯 Purpose

Send personalized demos to potential clients **without buying domains upfront**. Each prospect gets a unique URL showing their business name and info.

## 📋 How It Works

### 1. Add New Demo Clients

Edit `demo-configs.ts` and add a new client:

```typescript
export const demoConfigs: Record<string, any> = {
  // Add new client here
  johns: {
    business: {
      name: "John's Septic Service",
      tagline: "Quality Septic Solutions",
      phone: "(555) 234-5678",
      email: "info@johnsseptic.com",
      address: {
        street: "789 Pine Road",
        city: "Jacksonville",
        state: "FL",
        zip: "32099",
      },
      hours: {
        weekday: "Monday - Friday: 7:00 AM - 5:00 PM",
        weekend: "Saturday: 8:00 AM - 3:00 PM",
        sunday: "Sunday: Emergency Only",
      },
    },
    serviceAreas: ["Jacksonville", "St. Augustine", "Orange Park"],
    seo: {
      title: "John's Septic Service | Jacksonville, FL",
      description: "Professional septic services in Jacksonville area",
      keywords: "septic jacksonville, septic repair florida",
      author: "John's Septic Service",
    },
    about: {
      yearEstablished: "2010",
      experience: "Over 10 years",
    },
  },
  // ... more clients
};
```

### 2. Deploy to Vercel

```bash
git add .
git commit -m "Added new demo clients"
git push
```

Vercel auto-deploys in ~2 minutes.

### 3. Send Links to Prospects

Once deployed, your links will be:

```
https://your-site.vercel.app?demo=hills     ← Hill's Septic
https://your-site.vercel.app?demo=abc       ← ABC Septic
https://your-site.vercel.app?demo=johns     ← John's Septic
```

## 📱 Example Cold Call Script

**Phone:**
> "Hi [Name], I build websites specifically for septic and well companies. I actually created a demo with your business name and Ocala info already on it. Can I text you the link real quick so you can see what it would look like?"

**Text Message:**
> "Hey [Name], here's the demo website we discussed. This would be YOUR site: https://septic-wells.vercel.app?demo=hills
>
> Everything is already customized with your business info. Let me know what you think! -[Your Name]"

## 🎨 Customization Options

### Quick Setup (5 min per client)
Just add their info to `demo-configs.ts`:
- Business name
- Phone & email
- Address
- Service areas

### Advanced (optional)
- Custom colors per client
- Different services
- Client-specific content

## 💡 Pro Tips

### 1. Batch Create Demos

Before a calling session, add 10-20 prospects to `demo-configs.ts`:

```typescript
export const demoConfigs = {
  hills: { /* Hill's info */ },
  abc: { /* ABC info */ },
  johns: { /* John's info */ },
  smith: { /* Smith's info */ },
  // ... 15 more
};
```

One deploy = 20 ready-to-send demos!

### 2. Track Which Demos You've Sent

Create a simple spreadsheet:

| Demo Key | Business Name | Phone | Link Sent | Interested? |
|----------|---------------|-------|-----------|-------------|
| hills | Hill's Septic | 352-555-1234 | ✅ | Waiting |
| abc | ABC Septic | 555-987-6543 | ✅ | Yes! |
| johns | John's Septic | 555-234-5678 | ✅ | No |

### 3. Follow-Up Strategy

**Day 1:** Send link via text
**Day 2:** Follow up call: "Did you get a chance to check out the demo?"
**Day 7:** Final follow-up

### 4. Use Short Links

Make links easier to share:

```
Original: https://septic-wells.vercel.app?demo=hills
Bitly:    https://bit.ly/hills-septic-demo
```

Use [Bitly](https://bitly.com) or [TinyURL](https://tinyurl.com) to create short links.

## 🚀 Alternative: Vercel Branch Deployments

For even more customization, use separate branches:

```bash
# Create demo branch for specific client
git checkout -b demo-hills
# Edit site.config.ts directly
git add .
git commit -m "Demo for Hill's Septic"
git push origin demo-hills
```

Vercel automatically creates:
`https://septic-wells-demo-hills.vercel.app`

**Pros:**
- Unique subdomain per client
- Full customization (colors, content, etc.)

**Cons:**
- More work per demo
- Harder to manage many clients

## 📊 Conversion Strategy

### Option 1: Monthly Fee
> "If you like it, we can make this live on your own domain for just $1,200 setup + $100/month for hosting and updates."

### Option 2: One-Time Fee
> "Get this live on YOUR domain for just $1,500 one-time. That includes hosting setup and training."

### Option 3: Package Deal
> "Website + Google Business Profile setup + 6 months of SEO = $2,500"

## 🛠️ Managing Multiple Demos

### Keep Track of Active Demos

Add comments to `demo-configs.ts`:

```typescript
export const demoConfigs = {
  // INTERESTED - Follow up 5/15
  hills: { /* ... */ },

  // SENT 5/10 - Waiting for response
  abc: { /* ... */ },

  // NOT INTERESTED
  johns: { /* ... */ },
};
```

### Clean Up Old Demos

Remove demos from clients who said no to keep file clean.

## 🎯 Scale Your Cold Calling

**Week 1:** Add 20 demos, send to 20 prospects
**Week 2:** Follow up with interested ones, add 20 more
**Week 3:** Close deals, add 20 more demos

You can have 50+ demos live simultaneously, all on ONE free Vercel deployment!

## 💰 Cost Breakdown

- **Domains**: $0 (using Vercel subdomains)
- **Hosting**: $0 (Vercel free tier)
- **Total**: **$0 per demo**

Only buy a domain AFTER they say yes!

## 📝 Quick Reference

### Add Demo Client
1. Edit `demo-configs.ts`
2. Add new key and business info
3. `git push`
4. Wait 2 minutes
5. Send link: `?demo=YOURKEY`

### Demo Link Format
```
https://your-site.vercel.app?demo=KEY
```

### When They Say Yes
1. Buy their domain
2. Create new Vercel project
3. Connect their domain
4. Copy their demo config to `site.config.ts`
5. Deploy production site

---

## 🎉 You're Ready!

You can now:
- ✅ Send unlimited personalized demos
- ✅ No upfront domain costs
- ✅ Professional presentation
- ✅ Close deals faster
- ✅ Scale your cold calling

Add your first 5 demos and start calling! 📞
