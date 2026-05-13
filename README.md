GT Autodetailing — Website Resmi
Website bisnis untuk GT Autodetailing, jasa detailing kendaraan profesional di Purwokerto, Jawa Tengah.
![Deploy with Vercel](https://vercel.com/button)
---
Tech Stack
Layer	Teknologi
Framework	Next.js 14+ (App Router)
Styling	Tailwind CSS
Database	Supabase (PostgreSQL)
Auth	Supabase Auth
Storage	Supabase Storage
Deployment	Vercel
Language	TypeScript
---
Fitur
Public
🏠 Landing page dengan section: Hero, About, Services, Pricing, Our Works, Contact
📝 Halaman Blog dengan daftar & detail artikel
📱 Responsive design (mobile-first)
⚡ SEO-optimized dengan metadata dinamis, sitemap, dan structured data
🗺️ Integrasi Google Maps
Admin Panel
🔐 Login aman via Supabase Auth
✍️ CRUD artikel blog lengkap
🖼️ Upload thumbnail ke Supabase Storage
📊 Manajemen status artikel (Draft / Published)
🔍 Search & filter artikel
---
Prasyarat
Node.js >= 18.17.0
npm >= 9.x atau pnpm >= 8.x
Akun Supabase
Akun Vercel
---
Instalasi & Setup Lokal
1. Clone Repository
```bash
git clone https://github.com/yourusername/gt-autodetailing.git
cd gt-autodetailing
```
2. Install Dependencies
```bash
npm install
# atau
pnpm install
```
3. Setup Environment Variables
Salin file `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```
Isi nilai yang diperlukan (lihat bagian Environment Variables di bawah).
4. Setup Supabase
Ikuti panduan lengkap di `docs/SUPABASE_SETUP.md`.
Secara singkat:
Buat project baru di Supabase
Jalankan SQL migration dari `supabase/migrations/`
Buat storage bucket `blog-images`
Buat admin user via Supabase Auth dashboard
Salin URL dan API keys ke `.env.local`
5. Generate Supabase Types
```bash
npx supabase gen types typescript --project-id YOUR_PROJECT_ID > types/supabase.ts
```
6. Jalankan Development Server
```bash
npm run dev
```
Buka http://localhost:3000 di browser.
Admin panel: http://localhost:3000/admin/login
---
Environment Variables
Buat file `.env.local` dengan variabel berikut:
```env
# ─── Supabase ────────────────────────────────────────
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# ─── App Config ──────────────────────────────────────
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# ─── Kontak Bisnis ───────────────────────────────────
NEXT_PUBLIC_WA_NUMBER=628154822203
NEXT_PUBLIC_IG_HANDLE=gtautodetailing

# ─── Optional: ISR Revalidation ──────────────────────
REVALIDATION_SECRET=random-secret-string
```
> ⚠️ **Jangan pernah commit `.env.local` ke repository!** File ini sudah ada di `.gitignore`.
---
Struktur Proyek
```
gt-autodetailing/
├── app/                    # Next.js App Router
│   ├── (public)/           # Public routes
│   │   ├── page.tsx        # Landing page
│   │   └── blog/           # Blog pages
│   ├── admin/              # Protected admin routes
│   └── api/                # API routes
├── components/             # Atomic Design components
│   ├── atoms/              # Elemen terkecil
│   ├── molecules/          # Kombinasi atoms
│   ├── organisms/          # Section kompleks
│   └── templates/          # Layout halaman
├── lib/                    # Utilities & configs
│   ├── supabase/           # Supabase clients
│   ├── utils/              # Helper functions
│   └── constants/          # App constants
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript types
├── public/                 # Static assets
│   └── images/             # Foto dari klien
├── docs/                   # Dokumentasi setup
│   ├── SUPABASE_SETUP.md
│   └── VERCEL_SETUP.md
└── supabase/
    └── migrations/         # SQL migration files
```
Lihat `CLAUDE.md` untuk panduan lengkap konvensi kode.
---
Scripts
```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Build production
npm run start        # Jalankan production build
npm run lint         # ESLint check
npm run type-check   # TypeScript check (tsc --noEmit)
```
---
Deployment ke Vercel
Ikuti panduan lengkap di `docs/VERCEL_SETUP.md`.
Secara singkat:
Push kode ke GitHub/GitLab
Import project di vercel.com
Set environment variables di Vercel dashboard
Deploy otomatis setiap push ke branch `main`
---
Panduan Konten
Mengganti Foto
Simpan foto di direktori berikut:
Lokasi	Keterangan
`public/images/hero/`	Foto untuk hero section (min. 1920×1080px)
`public/images/about/`	Foto untuk about section
`public/images/works/`	Foto-foto hasil kerja untuk carousel
Format yang didukung: JPG, PNG, WebP  
Rekomendasi format: WebP untuk performa terbaik
Mengelola Blog
Akses admin panel di `/admin/login` menggunakan kredensial yang sudah dibuat di Supabase Auth.
---
Dokumentasi Tambahan
Dokumen	Keterangan
`PRD.md`	Product Requirements Document
`CLAUDE.md`	Panduan AI agent & konvensi kode
`DESIGN.md`	Design system (dibuat terpisah)
`docs/SUPABASE_SETUP.md`	Panduan setup Supabase
`docs/VERCEL_SETUP.md`	Panduan deploy ke Vercel
---
Kontribusi
Proyek ini adalah proyek internal GT Autodetailing. Untuk pertanyaan teknis, hubungi developer yang ditunjuk.
---
Kontak Bisnis
Instagram: @gtautodetailing
WhatsApp: +62 815-4822-2030
Lokasi: Purwokerto, Jawa Tengah
---
© 2025 GT Autodetailing. All rights reserved.