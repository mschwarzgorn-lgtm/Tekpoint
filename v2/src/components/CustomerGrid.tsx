'use client';
import { customerData } from '@/data/brands';

export default function CustomerGrid() {
  return (
    <section style={{
      background: '#ffffff', borderBottom: '1px solid #e9ecef', padding: '40px 0'
    }}>
      <div className="container">
        <p style={{
          textAlign: 'center', fontSize: '13px', textTransform: 'uppercase',
          letterSpacing: '2px', color: '#868e96', fontWeight: 600, marginBottom: '28px'
        }}>
          Trusted by Europe&apos;s leading retailers
        </p>
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: '48px', flexWrap: 'wrap'
        }}>
          {customerData.map((customer) => (
            <img
              key={customer.name}
              src={customer.logo}
              alt={customer.name}
              title={customer.name}
              style={{
                height: '32px', maxWidth: '120px', objectFit: 'contain',
                filter: 'grayscale(100%) opacity(0.5)', transition: 'filter 0.3s'
              }}
              className="trust-logo-hover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
