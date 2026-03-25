import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || "Food Tech Bootcamp";
  const subtitle = searchParams.get("subtitle") || "";
  const type = searchParams.get("type") || "page";

  const typeLabel =
    type === "blog"
      ? "From the lab"
      : type === "project"
        ? "Experiment"
        : type === "mission"
          ? "Mission"
          : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0A0A0A",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top: type label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {typeLabel && (
            <span
              style={{
                fontSize: "20px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#C4956A",
              }}
            >
              {typeLabel}
            </span>
          )}
        </div>

        {/* Middle: title + subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span
            style={{
              fontSize: title.length > 40 ? "52px" : "64px",
              fontWeight: 800,
              color: "#F2EBE0",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            {title}
          </span>
          {subtitle && (
            <span
              style={{
                fontSize: "28px",
                color: "#A89A8C",
                lineHeight: 1.4,
                maxWidth: "800px",
              }}
            >
              {subtitle}
            </span>
          )}
        </div>

        {/* Bottom: brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#F2EBE0",
              opacity: 0.6,
            }}
          >
            Food Tech Bootcamp
          </span>
          <span
            style={{
              fontSize: "18px",
              color: "#C4956A",
              opacity: 0.8,
            }}
          >
            foodtechbootcamp.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
