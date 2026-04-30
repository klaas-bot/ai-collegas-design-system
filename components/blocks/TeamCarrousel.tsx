/**
 * TeamCarrousel — Horizontaal scrollende rij met samenwerking-foto's.
 *
 * Voor "zo werken we"-secties op marketing-pagina's. Toont 3-5 echte
 * werksituaties uit het AI Collega's HQ in plaats van losse portretten.
 *
 * Gebruik:
 *   <TeamCarrousel
 *     items={[
 *       { image: "/assets/photos/samenwerking/sparring-bank.jpg", caption: "Sparringssessie" },
 *       { image: "/assets/photos/samenwerking/duo-werkplek.jpg", caption: "Klantonboarding" },
 *       { image: "/assets/photos/samenwerking/bank-overleg.jpg", caption: "Informeel overleg" },
 *     ]}
 *   />
 */

import React from "react";

interface TeamCarrouselItem {
  image: string;
  caption: string;
  alt?: string;
}

interface TeamCarrouselProps {
  items: TeamCarrouselItem[];
  title?: string;
}

export function TeamCarrousel({ items, title }: TeamCarrouselProps) {
  return (
    <section
      style={{
        padding: "var(--space-16) var(--space-6)",
        background: "var(--color-gray-50)",
        fontFamily: "var(--font-system)",
      }}
    >
      {title && (
        <h2
          style={{
            fontSize: "var(--font-size-3xl)",
            fontWeight: 700,
            color: "var(--color-black)",
            margin: "0 0 var(--space-8)",
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {title}
        </h2>
      )}
      <div
        style={{
          display: "flex",
          gap: "var(--space-6)",
          overflowX: "auto",
          padding: "var(--space-2) var(--space-2) var(--space-6)",
          scrollSnapType: "x mandatory",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {items.map((item, i) => (
          <figure
            key={i}
            style={{
              flex: "0 0 360px",
              scrollSnapAlign: "start",
              margin: 0,
            }}
          >
            <img
              src={item.image}
              alt={item.alt || item.caption}
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                borderRadius: "var(--radius-lg)",
                display: "block",
              }}
            />
            <figcaption
              style={{
                marginTop: "var(--space-3)",
                fontSize: "var(--font-size-sm)",
                color: "var(--color-gray-600)",
              }}
            >
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
