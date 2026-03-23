# How to Connect GitHub Repository to v0

This guide enables v0 to directly read, edit, and push changes to your Tekpoint website repository.

---

## Prerequisites

- GitHub repository containing the Tekpoint website source code
- GitHub account with write access to the repository
- Active v0 session (https://v0.dev)

---

## Step-by-Step Instructions

### Step 1: Open v0 Settings

1. Go to your v0 chat at https://v0.dev
2. Click the **Settings button** (gear icon) in the **top right corner** of the screen
3. A settings panel will open

### Step 2: Navigate to Git Settings

1. In the settings panel, click on **"Settings"** tab
2. Look for the **"GitHub"** or **"Git"** section
3. Click **"Connect Repository"** or **"Add GitHub Repository"**

### Step 3: Authenticate with GitHub

1. If not already connected, click **"Connect GitHub Account"**
2. You will be redirected to GitHub to authorize v0
3. Click **"Authorize Vercel"** to grant access
4. Select which repositories v0 can access:
   - **Recommended:** Select "Only select repositories" and choose your Tekpoint repo
   - Or select "All repositories" for full access

### Step 4: Select the Repository

1. After authentication, you'll see a list of your repositories
2. Find and select: `[your-username]/tekpoint-redesign` (or whatever your repo is named)
3. Click **"Connect"** or **"Link Repository"**

### Step 5: Select Branch

1. Choose the branch you want v0 to work on:
   - For staging/testing: `develop`, `staging`, or `preview`
   - For production: `main` or `master`
2. **Recommended:** Create a new branch like `v0/translation-fixes` for v0's changes
3. Click **"Confirm"** or **"Save"**

---

## Verification

Once connected, v0 will be able to:

- Read all files in your repository
- Edit existing files
- Create new files
- Push changes to the selected branch

**To verify the connection:**
1. Ask v0: "Can you read my repository files?"
2. v0 should be able to list and read your project structure

---

## After Connection: Commands for v0

Once connected, give v0 these instructions:

```
The GitHub repository is now connected. Please:

1. Read the TEKPOINT_AUDIT_REPORT.md file for the full audit
2. Explore the repository structure to find:
   - Translation files (likely in /locales, /i18n, /messages, or /translations)
   - Language selector component
   - Layout/metadata configuration
3. Fix issues in this priority order:
   a. Spanish translation errors (find-replace "en" patterns)
   b. Serbian translation errors
   c. Icelandic character corruption
   d. Japanese page structure
   e. Untranslated "For Manufacturers" in 17 languages
   f. Latvian mixed language text
   g. French untranslated sections
   h. Italian character errors
   i. Accessibility: language selector
   j. SEO: hreflang tags
4. Commit changes with clear messages
```

---

## Alternative: Share Files Directly

If you cannot connect GitHub, you can manually share files:

### Option A: Copy-paste key files

Share these files in the v0 chat:
1. Your translation files (e.g., `locales/es.json`, `locales/sr.json`, etc.)
2. Language selector component
3. Layout.tsx or root layout file
4. next.config.js or i18n configuration

### Option B: Download and upload

1. Download your translation files from GitHub
2. Drag and drop them into the v0 chat
3. Ask v0 to fix them and provide corrected versions

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Repository not found" | Ensure you have write access to the repo |
| "Authentication failed" | Disconnect and reconnect GitHub in v0 settings |
| "Branch protected" | Create a new branch or adjust branch protection rules |
| "Changes not appearing" | Pull latest changes in your local environment |
| v0 can't see files | Verify the correct repository is selected in settings |

---

## Security Notes

- v0 only accesses repositories you explicitly grant access to
- You can revoke access anytime via GitHub Settings > Applications > Authorized OAuth Apps
- Consider using a feature branch rather than main/master for v0 changes
- Review v0's commits before merging to production

---

## Next Steps After Connection

1. Share `TEKPOINT_AUDIT_REPORT.md` with v0
2. Ask v0 to begin Phase 1 fixes (Critical translation errors)
3. Review changes in GitHub before merging
4. Deploy to staging to verify fixes
5. Continue with Phase 2-4 fixes

---

**Document Created:** March 23, 2026  
**Purpose:** Enable v0 AI to directly fix Tekpoint website issues via GitHub integration
