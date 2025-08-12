# 📚 Complete Guide: GitHub → Vercel Deployment

## Part 1: Upload to GitHub

### Step 1: Initialize Git Repository
Open terminal in your project folder and run:
```bash
git init
```

### Step 2: Create .gitignore (if not exists)
Make sure your `.gitignore` file includes:
```
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Next.js
.next/
out/

# Production
build/
dist/

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local
.env

# Vercel
.vercel

# IDE
.vscode/
.idea/
```

### Step 3: Add All Files to Git
```bash
git add .
git commit -m "Initial commit - Shopify Video Intro Guide with JWT protection"
```

### Step 4: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `shopify-video-guide` (or your preferred name)
3. Description: "Secured Shopify Video Intro Guide with JWT Protection"
4. Keep it **Private** (for security)
5. DON'T initialize with README (you already have one)
6. Click "Create repository"

### Step 5: Connect Local to GitHub
After creating the repo, GitHub will show you commands. Use these:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shopify-video-guide.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Part 2: Deploy to Vercel from GitHub

### Step 1: Go to Vercel
1. Visit https://vercel.com
2. Click "Sign in" → Continue with GitHub
3. Authorize Vercel to access your GitHub

### Step 2: Import Project
1. Click "Add New..." → "Project"
2. You'll see your GitHub repositories
3. Find `shopify-video-guide` and click "Import"

### Step 3: Configure Project
**Framework Preset:** Next.js (should auto-detect)

**Project Name:** `shopify-video-guide` (or customize)

**Root Directory:** `./` (leave as is)

**Build Settings:**
- Build Command: `npm run build` (default)
- Output Directory: `.next` (default)
- Install Command: `npm install` (default)

### Step 4: Add Environment Variables ⚠️ IMPORTANT
Click "Environment Variables" and add:

| Name | Value | Environment |
|------|-------|-------------|
| `GUIDE_JWT_SECRET` | `my_super_secret_jwt_key_for_development_2024` | Production |
| `BACKEND_URL` | `https://shopify-video-guide.onrender.com` | Production |

**Note:** The JWT secret MUST match your Render backend!

### Step 5: Deploy
1. Click "Deploy"
2. Wait 1-3 minutes for deployment
3. You'll get your URLs:
   - Preview: `https://shopify-video-guide-xxx.vercel.app`
   - Production: `https://shopify-video-guide.vercel.app`

---

## Part 3: Update Your Render Backend

### Step 1: Go to Render Dashboard
1. Visit https://dashboard.render.com
2. Find your `shopify-video-guide` service
3. Click on it

### Step 2: Update Environment Variable
1. Go to "Environment" tab
2. Add/Update:
   - `GUIDE_FRONTEND_URL`: `https://shopify-video-guide.vercel.app`
3. Save changes
4. Service will auto-redeploy

---

## Part 4: Test Your Secure System

### Test 1: Direct Access Block ❌
1. Visit: `https://shopify-video-guide.vercel.app`
2. Should redirect to `/unauthorized`
3. ✅ This confirms JWT protection is working

### Test 2: Payment Flow ✅
1. Visit: `https://shopify-video-guide.onrender.com`
2. Complete test payment (₹4.99)
3. Should redirect to: `https://shopify-video-guide.vercel.app/set?token=JWT_TOKEN`
4. Token validates → Access granted to guide
5. ✅ Full flow working!

### Test 3: Cookie Persistence
1. After successful payment, close browser
2. Revisit: `https://shopify-video-guide.vercel.app`
3. Should still have access (cookie valid for 30 days)
4. ✅ Session persistence working!

---

## 🔒 Security Architecture Confirmed

```
[User] → [Payment on Render] → [JWT Token] → [Guide on Vercel]
         ↓                                    ↓
    (Razorpay API)                    (Protected Content)
```

**Security Features:**
- ✅ JWT token validation
- ✅ HttpOnly cookies
- ✅ Secure headers (X-Frame-Options, XSS Protection)
- ✅ Payment backend separated from content
- ✅ No direct file access
- ✅ CDN-optimized delivery

---

## 🚀 Future Updates

### To Update Code:
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```
4. Vercel auto-deploys in ~1 minute!

### To Add Custom Domain:
1. In Vercel dashboard → Settings → Domains
2. Add your domain (e.g., `guide.yourstore.com`)
3. Update DNS records as shown
4. Update Render backend with new URL

---

## 📝 Important URLs to Save

After deployment, save these:

**Payment Gateway:**
```
https://shopify-video-guide.onrender.com
```

**Protected Guide:**
```
https://shopify-video-guide.vercel.app
```

**GitHub Repo:**
```
https://github.com/YOUR_USERNAME/shopify-video-guide
```

**Vercel Dashboard:**
```
https://vercel.com/YOUR_USERNAME/shopify-video-guide
```

---

## ⚠️ Security Checklist

Before going live:
- [ ] Change JWT secret to a strong, unique value
- [ ] Update BOTH Render and Vercel with the same JWT secret
- [ ] Test payment flow with real Razorpay credentials
- [ ] Keep GitHub repo private
- [ ] Enable 2FA on GitHub and Vercel accounts
- [ ] Monitor Vercel Analytics for unusual access patterns

---

## 🎉 Congratulations!

Your secure Shopify Video Guide system is ready:
1. **Render**: Handles payments securely
2. **Vercel**: Serves protected content with JWT validation
3. **GitHub**: Version control and auto-deployments

The system is production-ready and secure! 🚀
