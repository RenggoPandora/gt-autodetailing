# CLAUDE.md
## Panduan Agent untuk GT Autodetailing Website

Dokumen ini adalah referensi utama bagi AI agent (Claude atau agent lain) yang mengerjakan proyek ini. Baca dokumen ini sebelum menulis kode apa pun.

---

## Gambaran Proyek

**GT Autodetailing** - Website bisnis detailing kendaraan di Purwokerto.

- **Framework:** Next.js 14+ (App Router)
- **Database & Auth:** Supabase (PostgreSQL + Auth + Storage)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Bahasa UI/Copywriting:** Bahasa Indonesia
- **Desain:** Mengikuti `DESIGN.md` (dibuat terpisah oleh owner)

---

## Prinsip Utama

### 1. Atomic Design - WAJIB DIIKUTI

Semua komponen mengikuti hierarki atomic design. Jangan membuat komponen tanpa mempertimbangkan posisinya dalam hierarki.

```
atoms -> molecules -> organisms -> templates -> pages
```

- **Atoms:** Elemen UI terkecil yang tidak dapat dipecah lagi (Button, Input, Badge, Label, Spinner, Icon)
- **Molecules:** Kombinasi atoms yang punya fungsi spesifik (BlogCard, ServiceCard, NavLink)
- **Organisms:** Bagian UI yang kompleks dan berdiri sendiri (Navbar, HeroSection, PricingSection)
- **Templates:** Layout halaman tanpa data nyata
- **Pages:** Template yang sudah diisi dengan data nyata (komponen di `app/`)

**Aturan:**
- Setiap komponen hidup di folder sendiri: `components/atoms/Button/index.tsx`
- Setiap folder komponen wajib memiliki `index.tsx` dan bisa memiliki `*.test.tsx`
- Export semua komponen dari `components/atoms/index.ts`, dll.
- Jangan import komponen atoms langsung ke pages - lewat molecules/organisms

### 2. Clean Code

- Nama variabel dan fungsi deskriptif dalam bahasa Inggris
- Komentar kode dalam Bahasa Indonesia jika perlu penjelasan logika bisnis
- Satu komponen = satu tanggung jawab (Single Responsibility Principle)
- Hindari logic yang kompleks di dalam JSX - pindahkan ke hooks atau utils
- Gunakan `const` untuk semua fungsi komponen: `const Button = () => {}`
- Props interface selalu didefinisikan dengan TypeScript: `interface ButtonProps {}`

### 3. TypeScript - Strict

- Tidak ada penggunaan `any` kecuali benar-benar tidak bisa dihindari
- Semua props component harus didefinisikan dengan interface/type
- Gunakan generated types dari Supabase (`types/supabase.ts`)
- Gunakan type assertions dengan hati-hati, prefer type narrowing

### 4. SEO - Wajib di Semua Halaman

```typescript
// Setiap page.tsx WAJIB memiliki metadata
export const metadata: Metadata = {
	title: '...',
	description: '...',
	openGraph: { ... },
};
```

- Gunakan komponen `<Image>` dari Next.js - bukan `<img>` HTML biasa
- Semua gambar wajib memiliki `alt` text yang deskriptif dalam Bahasa Indonesia
- Heading hierarchy: satu `<h1>` per halaman, `<h2>` untuk section, `<h3>` untuk subsection

---

## Konvensi Kode

### Penamaan File

```
PascalCase   -> Komponen React: Button.tsx, BlogCard.tsx
camelCase    -> Utilities, hooks: slugify.ts, useScrollSpy.ts
kebab-case   -> Route segments di app/: blog/[slug]/page.tsx
UPPER_SNAKE  -> Constants: MAX_FILE_SIZE
```

### Struktur Komponen

```typescript
// components/molecules/BlogCard/index.tsx

import type { BlogPost } from '@/types/blog'
import { Badge } from '@/components/atoms'
import { formatDate } from '@/lib/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
	post: BlogPost
	className?: string
}

const BlogCard = ({ post, className }: BlogCardProps) => {
	return (
		<article className={cn('...', className)}>
			{/* ... */}
		</article>
	)
}

export default BlogCard
```

### Import Order (gunakan eslint-plugin-import)

```typescript
// 1. React & Next.js
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// 2. Third-party libraries
import { motion } from 'framer-motion'

// 3. Internal - types
import type { BlogPost } from '@/types/blog'

// 4. Internal - lib/utils
import { cn } from '@/lib/utils/cn'
import { createClient } from '@/lib/supabase/server'

// 5. Internal - components
import { Button } from '@/components/atoms'
import { BlogCard } from '@/components/molecules'
```

### Tailwind CSS

- Gunakan `cn()` utility (clsx + tailwind-merge) untuk conditional classes
- Jangan gunakan inline style kecuali untuk dynamic values (misal: width dari JS)
- Gunakan CSS variables dari `DESIGN.md` untuk warna dan font
- Mobile-first: mulai dari ukuran terkecil, tambah breakpoint `md:` `lg:` `xl:`

---

## Supabase - Aturan Penting

### Client vs Server

```typescript
// Di Server Component / Server Action / Route Handler -> GUNAKAN INI
import { createClient } from '@/lib/supabase/server'

// Di Client Component (dengan 'use client') -> GUNAKAN INI
import { createClient } from '@/lib/supabase/client'

// Jangan pernah gunakan service role key di client-side
```

### Data Fetching

- **Server Components:** Fetch data langsung di komponen dengan `async/await`
- **Client Components:** Gunakan hooks atau server actions
- **Caching:** Gunakan `{ next: { revalidate: 3600 } }` untuk halaman blog publik

```typescript
// Contoh fetch di Server Component
const BlogPage = async () => {
	const supabase = await createClient()
	const { data: posts, error } = await supabase
		.from('blog_posts')
		.select('*')
		.eq('status', 'published')
		.order('published_at', { ascending: false })

	if (error) {
		// Handle error dengan baik
		console.error('Gagal mengambil data blog:', error)
		return <div>Terjadi kesalahan</div>
	}

	return <BlogGrid posts={posts ?? []} />
}
```

### RLS - Row Level Security

- Selalu aktifkan RLS untuk semua tabel
- Public (unauthenticated): hanya bisa baca `published` posts
- Admin (authenticated): akses penuh ke semua data
- Jangan pernah disable RLS untuk kemudahan development

---

## Autentikasi Admin

### Middleware Protection

```typescript
// middleware.ts
// Proteksi semua route /admin/* kecuali /admin/login
```

- Session disimpan di cookie via Supabase Auth helpers
- Jangan simpan credentials atau token di localStorage
- Gunakan `cookies()` dari `next/headers` di server components

### Alur Login

1. User submit form di `/admin/login`
2. Server Action: `signInWithPassword` via Supabase Auth
3. Sukses -> redirect ke `/admin/blog`
4. Gagal -> tampilkan error message (jangan bocorkan detail teknis)

---

## Konten & Copywriting

- **Bahasa:** Semua teks UI dalam Bahasa Indonesia
- **Tone:** Profesional namun ramah, tidak terlalu formal
- **CTA:** Selalu gunakan kata kerja aktif: "Pesan Sekarang", "Konsultasi Gratis", "Lihat Layanan"
- **Angka:** Format Rupiah: `Rp 800.000` (bukan `Rp800000` atau `IDR 800,000`)
- **Tanggal:** Format: `12 Januari 2025`

### Data Konstan Bisnis

```typescript
// lib/constants/business.ts
export const BUSINESS = {
	name: 'GT Autodetailing',
	tagline: 'Profesional Detailing Kendaraan di Purwokerto',
	whatsapp: '628154822203',
	whatsappDisplay: '+62 815-4822-2030',
	instagram: 'gtautodetailing',
	instagramUrl: 'https://www.instagram.com/gtautodetailing',
	mapsUrl: 'https://share.google/MwpKLGoDfbKhUnF37',
	city: 'Purwokerto',
	experience: '10+',
} as const
```

---

## Gambar & Aset

- Semua foto dari klien disimpan di `public/images/`
- Hero photos: `public/images/hero/`
- About photo: `public/images/about/`
- Our Works photos: `public/images/works/`
- Gunakan format WebP jika memungkinkan untuk performa
- Selalu definisikan `width` dan `height` pada komponen `<Image>` atau gunakan `fill` dengan wrapper `relative`
- Blog thumbnails di-upload ke Supabase Storage (bucket: `blog-images`)

---

## Performa

- Gunakan `next/image` untuk semua gambar
- Gunakan `next/font` untuk font loading (bukan link Google Fonts di HTML)
- Komponen berat (rich text editor, map) di-load dengan `dynamic(() => import(...), { ssr: false })`
- Carousel/animasi: pertimbangkan `prefers-reduced-motion`
- Hindari layout shift: selalu set dimensi placeholder untuk gambar

---

## Error Handling

- Semua Server Actions harus memiliki try-catch
- Error yang ditampilkan ke user dalam Bahasa Indonesia
- Jangan expose stack trace atau detail teknis ke user
- Gunakan Next.js `error.tsx` dan `not-found.tsx` untuk error boundaries

```typescript
// Contoh Server Action
'use server'

export async function createBlogPost(formData: FormData) {
	try {
		const supabase = await createClient()
		// ...logic
		revalidatePath('/blog')
		return { success: true }
	} catch (error) {
		console.error('Error membuat artikel:', error)
		return { success: false, message: 'Gagal menyimpan artikel. Silakan coba lagi.' }
	}
}
```

---

## Testing & Quality

- Pastikan tidak ada TypeScript error sebelum commit (`tsc --noEmit`)
- Pastikan tidak ada ESLint error (`next lint`)
- Test manual di mobile viewport (375px) sebelum selesai
- Cek bahwa semua link navigasi berfungsi

---

## Checklist Sebelum Deploy

- [ ] Semua environment variables sudah diset di Vercel
- [ ] RLS Supabase aktif dan ter-test
- [ ] Sitemap.xml dapat diakses
- [ ] robots.txt mem-block `/admin`
- [ ] Semua gambar memiliki alt text
- [ ] Meta tags tersedia di semua halaman
- [ ] Mobile responsive checked
- [ ] WA link berfungsi
- [ ] Google Maps embed muncul
- [ ] Form login admin berfungsi
- [ ] CRUD blog berfungsi end-to-end

---

## Referensi Cepat

| Kebutuhan | Solusi |
|---|---|
| Conditional classes | `cn()` dari `lib/utils/cn.ts` |
| Format tanggal | `formatDate()` dari `lib/utils/formatDate.ts` |
| Format rupiah | `formatCurrency()` dari `lib/utils/formatCurrency.ts` |
| Generate slug | `slugify()` dari `lib/utils/slugify.ts` |
| Supabase server | `createClient()` dari `lib/supabase/server.ts` |
| Supabase client | `createClient()` dari `lib/supabase/client.ts` |
| Konstanta bisnis | `BUSINESS` dari `lib/constants/business.ts` |
| Warna & font | `DESIGN.md` (file terpisah) |

---

*Perbarui dokumen ini setiap kali ada perubahan arsitektur atau konvensi baru.*
