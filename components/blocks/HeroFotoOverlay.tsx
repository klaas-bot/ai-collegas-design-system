/**
 * HeroFotoOverlay — Hero met foto-achtergrond + brand-gradient overlay.
 *
 * Gebruik:
 *   <HeroFotoOverlay
 *     image="/assets/photos/groep/pitch-hub.jpg"
 *     headline="Een AI-collega die het werk overneemt"
 *     subline="Voor MKB, recruiters en HR-professionals"
 *     ctaLabel="Plan een kennismaking"
 *     ctaHref="/contact"
 *   />
 *
 * Variants:
 *   overlayMode="gradient-bottom"  → donker-naar-transparant onderaan (default)
 *   overlayMode="gradient-brand"   → brand-kleuren overlay (sterker statement)
 *   overlayMode="dim"              → uniform donker (rust, leesbaarheid)
 */

import React from "react";

type OverlayMode = "gradient-bottom" | "gradient-brand" | "dim";

interface HeroFotoOverlayProps {
  image: string;
  headline: string;
  subline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  overlayMode?: OverlayMode;
  align?: "left" | "center";
}

export function HeroFotoOverlay({
  image,
  headline,
  subline,
  ctaLabel,
  ctaHref,
  overlayMode = "gradient-bottom",
  align = "left",
}: HeroFotoOverlayProps) {
  const overlayStyle: Record<OverlayMode, React.CSSProperties> = {
    "gradient-bottom": {
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 100%)",
    },
    "gradient-brand": {
      background:
        "linear-gradient(135deg, rgba(249,115,22,0.55) 0%, rgba(239,68,68,0.55) 50%, rgba(236,72,153,0.55) 100%)",
    },
    dim: {
      background: "rgba(0,0,0,0.55)",
    },
  };

  const activeOverlay = overlayStyle[overlayMode];

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "560px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: align === "center" ? "center" : "flex-start",
        overflow: "hidden",
      }}
      aria-label={headline}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...activeOverlay,
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: "720px",
          padding: "var(--space-12) var(--space-8)",
          color: "var(--color-white)",
          fontFamily: "var(--font-system)",
          textAlign: align,
        }}
      >
        <h1
          style={{
            fontSize: "var(--font-size-5xl)",
            fontWeight: 700,
            lineHeight: 1.1,
            margin: "0 0 var(--space-4)",
          }}
        >
          {headline}
        </h1>
        {subline && (
          <p
            style={{
              fontSize: "var(--font-size-xl)",
              opacity: 0.9,
              margin: "0 0 var(--space-8)",
            }}
          >
            {subline}
          </p>
        )}
        {ctaLabel && ctaHref && (
          <a
            href={ctaHref}
            className="btn-gradient-pill"
            style={{ display: "inline-block", textDecoration: "none" }}
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
