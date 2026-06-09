# SEO Mothra - Connections Map

## 🌐 Where Everything Lives

### Frontend Layer
```
Browser/User
    ↓
Next.js App Server (Vercel)
    ├─ Development: http://localhost:3000
    ├─ Production: https://www.seomothra.com
    └─ Studio: https://www.seomothra.com/studio
```

### Backend / CMS Layer
```
Sanity Cloud (wj6g4kk6)
    ├─ Project Dashboard: https://manage.sanity.io
    ├─ Project ID: wj6g4kk6
    ├─ Dataset: production
    └─ API: https://wj6g4kk6.api.sanity.io/v2025-01-01
```

### Version Control
```
GitHub
    ├─ Repo: https://github.com/seankrux/seo-mothra
    ├─ Owner: seankrux
    ├─ Branch: main
    └─ Access: https (SSH also available)
```

---

## 📡 Access Routes

### 1. Content Management (Web UI)
```
USER → BROWSER
        ↓
    https://www.seomothra.com/studio
        ↓
    Sanity Studio Interface
        ↓
    Create/Edit Documents
        ↓
    Publish to Cloud
```

### 2. Frontend Viewing (Current)
```
USER → BROWSER
        ↓
    https://www.seomothra.com
        ↓
    Next.js Server
        ↓
    Reads hardcoded data from src/lib/content.ts
        ↓
    Renders HTML/CSS/JS
```

### 3. Frontend Viewing (After Integration - Ideal)
```
USER → BROWSER
        ↓
    https://www.seomothra.com
        ↓
    Next.js Server
        ↓
    GROQ Query to Sanity API
        ↓
    Sanity Cloud (wj6g4kk6)
        ↓
    Returns Document(s)
        ↓
    Renders HTML/CSS/JS
```

### 4. Programmatic Access (MCP Tools)
```
DEVELOPER → Claude Code
                ↓
            MCP Tool Call
                ↓
            Sanity API
                ↓
            Cloud Database
                ↓
            Returns JSON/Data
```

### 5. Git Workflow
```
LOCAL CODE → git commit
                ↓
            git push origin main
                ↓
            GitHub: seankrux/seo-mothra
                ↓
            Vercel (Auto-deploy)
                ↓
            Production: www.seomothra.com
```

---

## 🔗 Direct Links Reference

| System | URL | Purpose |
|--------|-----|---------|
| **Live App** | https://www.seomothra.com | Public website |
| **Live Studio** | https://www.seomothra.com/studio | Edit content |
| **Dev App** | http://localhost:3000 | Local development |
| **Dev Studio** | http://localhost:3000/studio | Local CMS |
| **Sanity Dashboard** | https://manage.sanity.io/projects | Project settings |
| **GitHub Repo** | https://github.com/seankrux/seo-mothra | Source code |
| **Vercel Dashboard** | https://vercel.com | Deployments |

---

## 💾 Data Flow

### When Editing in Studio
```
Studio UI
    ↓ (Document change)
Sanity Backend
    ↓ (Auto-saves)
Cloud Database
    ↓ (When published)
Available via API for Frontend
```

### When Publishing Frontend
```
Local Changes
    ↓ (git push)
GitHub
    ↓ (Webhook triggers)
Vercel Build
    ↓ (npm build)
Production Deploy
    ↓ (Auto-deployed)
www.seomothra.com
```

---

## 🔐 Authentication & Tokens

### Sanity Authentication
- **Project ID:** `wj6g4kk6`
- **Dataset:** `production`
- **Developer Token:** `skwZy9uUeoAeJtH3a5XqS31I3SjVpSmBKQiF3P3qEIAMw1gHfWBjSn3JyX2bimtzeaY3GPSMu8YlHRjozJqkKCK6UqJPCCzbPIGfO8ijPbEIuZTnCYJ53VTkCpSbk85Edx01hR2VSzDuK8E0KM6vWphnspCD9x0G7Q43Evva8fX6Axg6L96v`
- **API Version:** `2025-01-01`

### GitHub Authentication
- **Repository:** seankrux/seo-mothra
- **Branch:** main
- **SSH:** `git@github.com:seankrux/seo-mothra.git`
- **HTTPS:** `https://github.com/seankrux/seo-mothra.git`

### Vercel Deployment
- **Project:** seo-mothra
- **Environment:** Production + Preview
- **Git Integration:** Auto-deploys on push to main

---

## 📊 Current Integration Status

### ✅ Connected & Working
```
GitHub ↔ Vercel (Auto-deploy on push)
Vercel ↔ Sanity (Can fetch from API)
Studio ↔ Cloud Database (Can edit & publish)
```

### ⏳ Not Yet Connected
```
Next.js Pages ↔ Sanity Queries (Hardcoded content)
```

**To Complete Integration:**
Add Sanity client initialization and GROQ queries to page components.

---

## 🎯 Quick Actions

### Edit Content (Studio)
1. Visit https://www.seomothra.com/studio
2. Click document to edit
3. Make changes
4. Publish

### Deploy Code Changes (GitHub)
1. Make local changes
2. `git commit -m "message"`
3. `git push origin main`
4. Vercel auto-deploys

### Query Data (MCP)
1. Use Sanity MCP tools
2. Provide Developer Token
3. Execute GROQ queries
4. Receive JSON data

---

## 📈 Architecture Layers

```
┌─────────────────────────────────────────┐
│        User Interface Layer             │
│  Browser → www.seomothra.com            │
└─────────────────────────────────────────┘
                ↓ HTTP
┌─────────────────────────────────────────┐
│     Application Layer (Next.js)         │
│  Vercel Serverless Functions            │
│  React Components, Page Routes          │
└─────────────────────────────────────────┘
                ↓ HTTPS
┌─────────────────────────────────────────┐
│      API Layer (Sanity + REST)          │
│  GROQ Queries, GraphQL Endpoints        │
│  Authentication via Tokens              │
└─────────────────────────────────────────┘
                ↓ Secure Connection
┌─────────────────────────────────────────┐
│    Data Layer (Sanity Cloud)            │
│  Documents, Assets, Indexes             │
│  wj6g4kk6 Project, production dataset   │
└─────────────────────────────────────────┘
```

---

## 🚀 Deployment Pipeline

```
Local Development
        ↓
Create feature branch
        ↓
Make changes, test locally
        ↓
git commit & git push
        ↓
GitHub receives push
        ↓
Vercel webhook triggered
        ↓
Vercel builds project
        ↓
Build succeeds/fails
        ↓
Deploy to Production
        ↓
https://www.seomothra.com updated
```

---

## 📚 Documentation Files

| File | Location | Purpose |
|------|----------|---------|
| SANITY_INTEGRATION_GUIDE.md | `/` | Comprehensive setup guide |
| ARCHITECTURE.md | `/` | System design & diagrams |
| QUICK_REFERENCE.md | `/` | Developer quick start |
| SANITY_STATUS.md | `/` | Integration status |
| CONNECTIONS_MAP.md | `/` | This file - connection reference |
| sanity.config.ts | `/` | Sanity configuration |
| sanity/schemas/*.ts | `/sanity/schemas/` | Document type definitions |

---

## 💡 Tips for Navigation

1. **To edit content:** Go to studio URL
2. **To change code:** Push to GitHub (auto-deploys)
3. **To query data:** Use Sanity MCP tools
4. **To check deployment:** View Vercel dashboard
5. **To access locally:** Run `npm run dev`

---

*Last Updated: 2026-06-09*
