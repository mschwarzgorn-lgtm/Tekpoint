"use client";

// Password gate temporarily disabled for v0 audit access
// To re-enable: restore the original PasswordGate component
export default function PasswordGate({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
