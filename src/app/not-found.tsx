import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', textAlign: 'center', backgroundColor: '#fff' }}>
          {/* Logo */}
          <a href="/en" style={{ marginBottom: '3rem' }}>
            <img
              src="/images/tekpoint-logo.png"
              alt="Tekpoint"
              style={{ height: '2rem', width: 'auto' }}
            />
          </a>

          {/* 404 number */}
          <h1 style={{ fontSize: '6rem', fontWeight: 'bold', color: '#DE6123', margin: 0 }}>404</h1>

          <h2 style={{ marginTop: '1.5rem', fontSize: '1.5rem', fontWeight: 600, color: '#111827' }}>
            Page Not Found
          </h2>

          <p style={{ marginTop: '0.75rem', color: '#6b7280', maxWidth: '28rem', lineHeight: 1.6 }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          {/* Action buttons */}
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="/en"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '0.75rem 1.5rem', backgroundColor: '#DE6123', color: '#fff',
                fontWeight: 500, borderRadius: '0.5rem', textDecoration: 'none',
                fontSize: '0.875rem'
              }}
            >
              ← Back to Homepage
            </a>
            <a
              href="/en/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '0.75rem 1.5rem', border: '1px solid #d1d5db', color: '#374151',
                fontWeight: 500, borderRadius: '0.5rem', textDecoration: 'none',
                fontSize: '0.875rem'
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Helpful links */}
          <div style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#6b7280' }}>
            <p style={{ marginBottom: '0.75rem', fontWeight: 500, color: '#374151' }}>Popular pages:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
              <a href="/en/about" style={{ color: '#6b7280', textDecoration: 'none' }}>About</a>
              <a href="/en/services" style={{ color: '#6b7280', textDecoration: 'none' }}>Services</a>
              <a href="/en/vendors" style={{ color: '#6b7280', textDecoration: 'none' }}>Brands</a>
              <a href="/en/career" style={{ color: '#6b7280', textDecoration: 'none' }}>Career</a>
              <a href="/en/become-a-partner" style={{ color: '#6b7280', textDecoration: 'none' }}>Become a Partner</a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
