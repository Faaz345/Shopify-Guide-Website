# Simple Deployment Steps

## Part A: Upload to GitHub

1. Go to https://github.com/new
2. Create repository:
   - Name: `shopify-video-guide`
   - Select: Private
   - Click: Create repository

3. In your terminal, run these commands:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shopify-video-guide.git
git push -u origin main
```

## Part B: Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Import your `shopify-video-guide` repo
5. Add Environment Variables:
   - `GUIDE_JWT_SECRET` = `my_super_secret_jwt_key_for_development_2024`
   - `BACKEND_URL` = `https://shopify-video-guide.onrender.com`
6. Click Deploy
7. Copy your Vercel URL (example: `https://shopify-video-guide.vercel.app`)

## Part C: Update Render Backend

1. Go to https://dashboard.render.com
2. Open your service
3. Environment tab → Add:
   - `GUIDE_FRONTEND_URL` = Your Vercel URL from step B.7
4. Save (waits for redeploy)

---

# Full System Test Flow

## Step 1: Start Purchase
- Open: `https://shopify-video-guide.onrender.com`
- You see: Payment page with ₹4.99 price

## Step 2: Complete Payment
- Click "Pay ₹4.99"
- Enter test card: `4111 1111 1111 1111`
- Any future date, any CVV
- Complete payment

## Step 3: Automatic Redirect
- After payment success
- Automatically redirects to: `https://shopify-video-guide.vercel.app/set?token=JWT_TOKEN`
- Token validates
- Redirects to guide at: `https://shopify-video-guide.vercel.app`

## Step 4: Access Guide
- You now see the Shopify Video Intro Guide
- Click the header to start
- Navigate through all steps
- Copy buttons work with actual code

## Step 5: Check Email
- Check your email inbox
- You receive: Payment confirmation from Razorpay
- Email contains: Amount paid, transaction ID

## Step 6: Verify Security
- Open new incognito/private browser window
- Try direct access: `https://shopify-video-guide.vercel.app`
- Result: Redirects to `/unauthorized` page
- Security working ✓

## Step 7: Test Persistence
- Go back to original browser (where you paid)
- Close and reopen browser
- Visit: `https://shopify-video-guide.vercel.app`
- Still have access (30-day cookie) ✓

---

# System Architecture

```
Customer Journey:
1. Visit payment page (Render)
2. Pay ₹4.99 via Razorpay
3. Get JWT token
4. Redirect to guide (Vercel)
5. Access protected content
6. Receive email confirmation

Security Features:
- JWT authentication
- HttpOnly cookies
- 30-day session
- No direct file access
- Separated payment/content servers
```

---

# Live URLs

**Payment Page:**
```
https://shopify-video-guide.onrender.com
```

**Protected Guide:**
```
https://shopify-video-guide.vercel.app
```

---

# That's it! Your secure system is live.
