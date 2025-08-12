# ✅ Deployment Checklist - Follow These Steps

## 📌 Current Status
- ✅ Project initialized with Git
- ✅ All files committed
- ✅ Ready for GitHub upload

## 🚀 Step-by-Step Actions

### 1️⃣ Create GitHub Repository
1. Open browser → Go to: **https://github.com/new**
2. Fill in:
   - Repository name: `shopify-video-guide`
   - Description: `Secured Shopify Video Intro Guide with JWT Protection`
   - **IMPORTANT**: Select **Private** repository
   - DON'T initialize with README
3. Click **Create repository**

### 2️⃣ Push to GitHub
After creating repo, GitHub shows commands. Run these in terminal:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shopify-video-guide.git
git push -u origin main
```

### 3️⃣ Deploy to Vercel
1. Go to: **https://vercel.com**
2. Sign in with GitHub
3. Click **Add New → Project**
4. Select your `shopify-video-guide` repository
5. Click **Import**

### 4️⃣ Configure Vercel Settings
**CRITICAL - Add Environment Variables:**

| Variable Name | Value |
|--------------|-------|
| `GUIDE_JWT_SECRET` | `my_super_secret_jwt_key_for_development_2024` |
| `BACKEND_URL` | `https://shopify-video-guide.onrender.com` |

⚠️ **These MUST match your Render backend exactly!**

### 5️⃣ Deploy
1. Click **Deploy**
2. Wait 2-3 minutes
3. Get your URL: `https://shopify-video-guide.vercel.app`

### 6️⃣ Update Render Backend
1. Go to: **https://dashboard.render.com**
2. Open your service
3. Go to **Environment** tab
4. Add variable:
   - Name: `GUIDE_FRONTEND_URL`
   - Value: `https://shopify-video-guide.vercel.app` (your Vercel URL)
5. Save (auto-redeploys)

### 7️⃣ Test Everything
- [ ] Visit Vercel URL directly → Should show "Unauthorized"
- [ ] Visit Render payment URL → Complete test payment
- [ ] After payment → Should redirect to guide with access
- [ ] Refresh page → Should maintain access (cookie working)

## 🔐 Security Verification

### URLs You'll Have:
- **Payment**: `https://shopify-video-guide.onrender.com`
- **Guide**: `https://shopify-video-guide.vercel.app`

### How It Works:
```
User → Pays on Render → Gets JWT → Accesses Vercel Guide
```

## ⚡ Quick Commands Reference

### If you need to make changes later:
```bash
# Make your changes
git add .
git commit -m "Update message"
git push
# Vercel auto-deploys!
```

### Check deployment status:
```bash
npx vercel
```

## 📱 Support Contacts
- GitHub Issues: Create in your repo
- Vercel Support: https://vercel.com/support
- Render Support: https://render.com/support

## 🎯 Final Notes
- Keep GitHub repo PRIVATE for security
- Never share JWT secret publicly
- Test with small payment first
- Enable 2FA on all accounts

---

**Ready? Start with Step 1️⃣ above!** 🚀
