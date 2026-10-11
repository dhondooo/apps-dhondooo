# apps.dhondooo.com

Central applications catalog and legal portal for independent apps published by **Dhondooo**.

## Features
- **Application Directory**: Live cards, taglines, release versions, and links to each individual app's zero-build legal documentation.
- **Protected Downloads**: Secure lock button backed by Cloudflare Pages edge function (`/api/verify`) validating `ACCESS_PIN` from Cloudflare environment variables.
- **Zero-Build Static Hosting**: Fast, dependency-free static UI running directly on Cloudflare Pages.

## Deployment Setup (Cloudflare Pages)
- **Project Name**: `apps-dhondooo`
- **Custom Domain**: `apps.dhondooo.com`
- **Build Command**: *(None / Empty)*
- **Build Output Directory**: `public`
- **Environment Variables**:
  - `ACCESS_PIN`: Your desired release unlock PIN (default fallback: `2026`).

## Inquiries
- **Contact**: `contact@apps.dhondooo.com`
