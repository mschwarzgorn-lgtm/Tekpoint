"use client";

import type { ReactNode } from "react";

function RouteContent({ children }: { children: ReactNode }) {
  return children;
}

export default function MainContent({ children }: { children: ReactNode }) {
  return (
    <main id="main-content" className="flex-1 scroll-mt-16" tabIndex={-1}>
      {/* Resolve streamed route children in a function fiber, not the host main.
          This preserves the hydration cursor if a route dependency suspends. */}
      <RouteContent>{children}</RouteContent>
    </main>
  );
}
