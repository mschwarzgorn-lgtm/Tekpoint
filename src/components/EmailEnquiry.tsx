import copy from "../../messages/contact-email/ui.json";
import styles from "./EmailEnquiry.module.css";

export default function EmailEnquiry({ kind, locale, buttonLabel }: { kind: "robotics" | "main"; locale: string; buttonLabel?: string }) {
  const uiLocale = locale;
  const m = copy[uiLocale as keyof typeof copy] ?? copy.en;
  const recipient = kind === "robotics" ? "robotics@tekpoint.com" : "info@tekpoint.com";
  const label = buttonLabel ?? (uiLocale === "de" ? (kind === "robotics" ? "E-Mail an das Robotics-Team" : "E-Mail an Tekpoint") : (kind === "robotics" ? "Email Robotics" : "Email Tekpoint"));
  return <div className={styles.contact} data-email-enquiry={kind} lang={uiLocale}>
    <a className={styles.button} href={`mailto:${recipient}`}>{label}<span aria-hidden="true">↗</span></a>
    <a className={styles.address} href={`mailto:${recipient}`}>{recipient}</a>
    <p className={styles.notice}>{m.notice}</p>
    <a className={styles.privacy} href={`/${locale}/privacy-policy/`}>{m.privacyLink}</a>
  </div>;
}
