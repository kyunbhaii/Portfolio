import type { ReactNode } from "react";
import { profile } from "../data/site";

type SocialPreviewCardProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  description: string;
  footer?: string;
};

function Badge({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        border: "1px solid rgba(17, 24, 39, 0.12)",
        borderRadius: 999,
        padding: "14px 22px",
        fontSize: 24,
        letterSpacing: "-0.02em",
        color: "rgba(17, 24, 39, 0.78)",
        background: "rgba(255, 255, 255, 0.52)",
      }}
    >
      {children}
    </div>
  );
}

export default function SocialPreviewCard({
  eyebrow = "Portfolio",
  title,
  subtitle,
  description,
  footer = new URL(profile.siteUrl).hostname,
}: SocialPreviewCardProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#f3f1ea",
        color: "#111827",
        fontFamily: '"SF Pro Display", "Segoe UI", system-ui, sans-serif',
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(47, 125, 115, 0.05), rgba(255, 255, 255, 0) 45%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -100,
          left: 660,
          width: 520,
          height: 520,
          borderRadius: 999,
          filter: "blur(90px)",
          opacity: 0.55,
          background: "rgba(47, 125, 115, 0.12)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 28,
          borderRadius: 34,
          border: "1px solid rgba(17, 24, 39, 0.08)",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.28))",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: "58px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 14,
                height: 52,
                borderRadius: 999,
                background: "#2f7d73",
              }}
            />
            <div
              style={{
                fontSize: 26,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(17, 24, 39, 0.52)",
              }}
            >
              {eyebrow}
            </div>
          </div>

          <Badge>{footer}</Badge>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontSize: 92,
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: "-0.06em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 34,
              letterSpacing: "0.08em",
              color: "rgba(17, 24, 39, 0.84)",
              fontFamily: '"SFMono-Regular", "SF Mono", ui-monospace, monospace',
            }}
          >
            {subtitle}
          </div>
          <div
            style={{
              maxWidth: 1020,
              fontSize: 30,
              lineHeight: 1.45,
              color: "rgba(17, 24, 39, 0.66)",
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
          }}
        >
          <Badge>RAG Systems</Badge>
          <Badge>Agentic Workflows</Badge>
          <Badge>Production AI</Badge>
        </div>
      </div>
    </div>
  );
}
