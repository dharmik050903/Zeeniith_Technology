# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality on the Contact page.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month on free tier)

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. **Save your Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. **IMPORTANT: Configure Email Settings**
   - **To Email**: Enter `zeeniithinfo@gmail.com` (your receiving email address)
   - **From Name**: Enter `Zeeniith Contact Form` (or any name you prefer)
   - **From Email**: Enter `zeeniithinfo@gmail.com` (your email - required for sending)
   - **Reply To**: Enter `{{from_email}}` ⭐ **This is important!** This makes replies go to the person who filled out the form
4. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

Contact Information:
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This email was sent from the Zeeniith website contact form.
Reply to this email to respond directly to {{from_name}} ({{from_email}}).
```

5. **Save your Template ID** (you'll need this later)

⚠️ **Important Notes:**
- The recipient email address must be set in the EmailJS template settings, NOT as a template parameter
- Set **Reply To** to `{{from_email}}` so when you reply, it goes to the person who submitted the form
- The **From Email** must be your own email (zeeniithinfo@gmail.com) for security reasons, but the **Reply To** will be the submitter's email

## Step 4: Get Your Public Key

1. Go to **Account** > **General** in the dashboard
2. Find your **Public Key** under API Keys section
3. **Copy your Public Key** (you'll need this later)

## Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and replace the placeholder values:
   ```
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

## Step 6: Configure Vercel (if deploying)

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add the same three variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Redeploy your application

## Testing

1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email inbox for the submission

## Troubleshooting

- **Emails not sending?** Check that all environment variables are set correctly
- **CORS errors?** Make sure your domain is added to EmailJS allowed origins
- **Template variables not working?** Ensure variable names match exactly (case-sensitive)
- **"The recipients address is empty" error?** 
  - Go to your EmailJS dashboard → Email Templates
  - Open your template (template_skge82q)
  - Find the **"To Email"** field in the template settings
  - Enter your recipient email: `zeeniithinfo@gmail.com`
  - Save the template
  - The recipient email MUST be set in the template settings, NOT as a template parameter

## Alternative: Hardcode Values (Not Recommended for Production)

If you prefer not to use environment variables, you can directly replace the values in `Contact.tsx`:

```typescript
const serviceId = 'your_service_id'
const templateId = 'your_template_id'
const publicKey = 'your_public_key'
```

⚠️ **Warning:** Never commit these values to version control if hardcoding!

## EmailJS Free Tier Limits

- 200 emails per month
- For higher limits, consider upgrading to a paid plan

## Support

For EmailJS-specific issues, visit: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)



