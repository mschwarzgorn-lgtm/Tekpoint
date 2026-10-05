import type { Brand, Retailer } from "@/lib/brands";
import styles from "./BrandPortfolio.module.css";

/** One photo-led geometry for every brand; no recolouring of supplied logo files. */
export default function BrandPortfolio({brands, locale}: {brands: Brand[]; locale: string}) {
  return <ul className={styles.portfolioGrid}>{brands.map(brand => {
    const internal = brand.slug === "agibot";
    const logo = brand.portfolioLogo || brand.logo;
    const tone = brand.portfolioLogoTone || brand.logoTone;
    const href = internal ? `/${locale}/robotics/` : brand.website;
    const artwork = <>
      {brand.bg && <><img className={styles.background} src={`/images/${brand.bg}`} alt="" aria-hidden="true" loading="lazy" width={640} height={360}/><span className={styles.scrim} aria-hidden="true"/></>}
      <span className={`${styles.logoStage} ${tone === "dark" ? styles.darkLogoStage : ""} ${brand.logoBlend === "multiply" ? styles.multiplyLogoStage : ""} ${brand.portfolioLogoSizing === "optical" ? styles.opticalLogoStage : ""}`}>
        {logo ? <img className={styles.logo} src={`/images/${logo}`} alt={brand.name} loading="lazy"/> : <span className={styles.placeholder}>{brand.name}</span>}
      </span>
      {href && <span className={styles.cue} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d={internal ? "M5 12h14m-6-6 6 6-6 6" : "M7 17 17 7M7 7h10v10"}/></svg></span>}
    </>;
    return <li key={brand.slug} className={styles.item}>
      {href ? <a id={`brand-${brand.slug}`} href={href} aria-label={brand.name} className={`${styles.card} ${brand.assetPending ? styles.pending : ""}`}>{artwork}</a> : <div id={`brand-${brand.slug}`} className={`${styles.card} ${styles.pending}`}>{artwork}</div>}
    </li>;
  })}</ul>;
}

export function RetailerPortfolio({retailers}: {retailers: Retailer[]}) {
  return <ul className={styles.retailGrid}>{retailers.map(retailer => <li key={retailer.name} className={styles.retailItem}><img className={styles.retailLogo} src={`/images/${retailer.logo}`} alt={retailer.name} loading="lazy"/></li>)}</ul>;
}
