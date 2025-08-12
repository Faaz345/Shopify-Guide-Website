# 🚀 Vercel Deployment Guide for Shopify Video Guide

## Architecture Overview

Your secure setup consists of:
- **Render**: Payment processing backend (already deployed)
- **Vercel**: Protected guide frontend (we're deploying this now)

## 📋 Prerequisites

✅ Vercel CLI installed (you have this)
✅ Vercel account (you'll need to create one if you don't have it)
✅ Your Render backend is running at: `https://shopify-video-guide.onrender.com`

## 🔐 Step 1: Set Up Environment Variables

You need to configure these environment variables in Vercel:

1. **GUIDE_JWT_SECRET**: Must match your Render backend's JWT secret
   - Current value: `my_super_secret_jwt_key_for_development_2024`
   
2. **BACKEND_URL**: Your Render backend URL
   - Value: `https://shopify-video-guide.onrender.com`

## 📦 Step 2: Deploy to Vercel

### Option A: Deploy via CLI (Recommended)

1. Login to Vercel:
```bash
npx vercel login
```

2. Deploy the project:
```bash
npx vercel
```

3. Follow the prompts:
   - Confirm project settings
   - Choose a project name (e.g., `shopify-video-guide`)
   - Link to existing project or create new

4. Set environment variables:
```bash
npx vercel env add GUIDE_JWT_SECRET
npx vercel env add BACKEND_URL
```

5. Deploy to production:
```bash
npx vercel --prod
```

### Option B: Deploy via GitHub

1. Push your code to GitHub
2. Import project at https://vercel.com/new
3. Add environment variables in Vercel dashboard
4. Deploy

## 🔄 Step 3: Update Your Payment Backend

After deploying to Vercel, update your Render backend's environment variable:

```
GUIDE_FRONTEND_URL=https://your-project.vercel.app
```

This ensures the payment backend redirects to your Vercel-hosted guide.

## 🧪 Step 4: Test the Flow

1. **Test Payment Flow**:
   - Go to your Render backend: `https://shopify-video-guide.onrender.com`
   - Complete a test payment
   - Verify redirect to Vercel guide

2. **Test Direct Access Block**:
   - Try accessing guide directly: `https://your-project.vercel.app`
   - Should redirect to `/unauthorized`

3. **Test Token Validation**:
   - Check that valid JWT tokens grant access
   - Check that expired tokens are rejected

## 🛡️ Security Features

Your deployment includes:
- ✅ JWT token validation
- ✅ Secure headers (X-Frame-Options, XSS Protection)
- ✅ HTTPS only in production
- ✅ HttpOnly cookies
- ✅ Protected routes via middleware
- ✅ Separation of payment and content servers

## 📝 Important URLs After Deployment

- **Payment Gateway**: `https://shopify-video-guide.onrender.com`
- **Protected Guide**: `https://your-project.vercel.app`
- **Token Setting**: `https://your-project.vercel.app/set?token=JWT_TOKEN`

## 🔧 Troubleshooting

### "Unauthorized" Error
- Check JWT secret matches between Render and Vercel
- Verify token is being passed correctly
- Check browser cookies for `shopifyGuideAccess`

### Build Errors
- Run `npm install` locally first
- Check `npm run build` works locally
- Verify all environment variables are set

### Images Not Loading
- Images should be in the `public` folder
- Update paths in HTML to use `/Images/filename.png`

## 📊 Monitoring

After deployment:
1. Check Vercel Analytics for performance
2. Monitor Render logs for payment processing
3. Set up error tracking (optional)

## 🎯 Next Steps

1. Deploy to Vercel using the CLI commands above
2. Update Render backend with Vercel URL
3. Test the complete flow
4. Enable Vercel Analytics (optional)
5. Set up custom domain (optional)

## 💡 Pro Tips

- Use Vercel's preview deployments for testing
- Enable automatic deployments from GitHub
- Set up environment variables for different stages (dev, staging, prod)
- Use Vercel's built-in analytics to monitor performance

---

**Ready to deploy? Start with Step 2 above!**
