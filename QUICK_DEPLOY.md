# 🚀 Quick Deploy to Vercel

## Your project is ready for deployment!

Since there's a local build issue on Windows, let's deploy directly to Vercel where it will build correctly.

## Step 1: Deploy Now

Run this command:
```bash
npx vercel
```

When prompted:
1. **Set up and deploy?** → Yes
2. **Which scope?** → Select your account
3. **Link to existing project?** → No (create new)
4. **Project name?** → `shopify-video-guide` (or your preferred name)
5. **In which directory?** → `.` (current directory)
6. **Want to override settings?** → No

## Step 2: Set Environment Variables

After initial deployment, set your environment variables:

```bash
npx vercel env add GUIDE_JWT_SECRET production
```
Enter value: `my_super_secret_jwt_key_for_development_2024`

```bash
npx vercel env add BACKEND_URL production
```
Enter value: `https://shopify-video-guide.onrender.com`

## Step 3: Deploy to Production

```bash
npx vercel --prod
```

## Step 4: Get Your URLs

After deployment, you'll receive:
- **Preview URL**: `https://shopify-video-guide-xxx.vercel.app`
- **Production URL**: `https://shopify-video-guide.vercel.app`

## Step 5: Update Render Backend

Go to your Render dashboard and update the environment variable:
```
GUIDE_FRONTEND_URL=https://shopify-video-guide.vercel.app
```

## That's it! Your secure guide is now live on Vercel! 🎉

### Testing URLs:
- Payment page: `https://shopify-video-guide.onrender.com`
- Protected guide: `https://shopify-video-guide.vercel.app`
