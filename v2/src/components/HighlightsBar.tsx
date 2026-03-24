export default function HighlightsBar() {
  const highlights = [
    { icon: '🌍', label: 'Multi-Country Distribution' },
    { icon: '📦', label: 'Advanced Warehousing' },
    { icon: '🏪', label: 'Key Retailers Access' },
    { icon: '📢', label: 'Marketing Services' },
    { icon: '🏢', label: 'Local Office Support' },
  ];

  return (
    <section style={{ padding: '64px 0', background: '#e8581c', color: '#fff' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '32px', textAlign: 'center'
        }}>
          {highlights.map((h) => (
            <div key={h.label}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{h.icon}</div>
              <h3 style={{
                fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px'
              }}>
                {h.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
