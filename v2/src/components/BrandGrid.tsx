'use client';
import { brandData } from '@/data/brands';

export default function BrandGrid() {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px'
    }}>
      {brandData.map((brand) => (
        <div key={brand.name} style={{
          background: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '14px',
          padding: '28px 20px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', transition: 'all 0.3s', cursor: 'pointer'
        }}
        className="brand-card-hover"
        >
          <img
            src={brand.logo}
            alt={brand.name}
            style={{ maxHeight: '40px', maxWidth: '120px', objectFit: 'contain' }}
          />
        </div>
      ))}
    </div>
  );
}
