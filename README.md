# I-Friend International Day Guide Web-App

A mobile-friendly, multilingual guide for foreign students participating in the I-Friend International Day booth events.

## Features
- **Multilingual Support:** English, Japanese, and Chinese (Simplified).
- **Theme:** "World Stamp: I-Friend Airlines" Boarding Pass.
- **Responsive Design:** Optimized for mobile scanning via QR code.
- **Event Guide:** Step-by-step instructions for participation and SNS events.

## Tech Stack
- **React (Vite)**
- **Tailwind CSS v4**
- **i18next** (for internationalization)
- **Lucide React** (for icons)

## How to Run Locally
1. Navigate to the project directory: `C:\Users\oyj_1\oyj-project\ifriend-guide`
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`

## How to Deploy
1. **GitHub:** Push this code to a new GitHub repository.
2. **Vercel / Netlify:**
   - Connect your GitHub account.
   - Select the `ifriend-guide` repository.
   - Click **Deploy**. It will automatically detect Vite and build the project.
3. **QR Code:**
   - Once deployed, copy the live URL.
   - Use a QR code generator (like [qr-code-generator.com](https://www.qr-code-generator.com/)) to create a QR code.
   - Print the QR code and attach it to the booth!

## Project Structure
- `src/locales/`: Contains translation files (`en.json`, `ja.json`, `zh.json`).
- `src/App.tsx`: Main UI logic and layout.
- `src/i18n.ts`: Internationalization setup.
- `src/index.css`: Tailwind CSS v4 configuration and theme.
