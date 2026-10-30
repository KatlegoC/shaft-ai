import { ImageResponse } from "next/og";

export const alt =
  "Shaft AI. AI-built products for the way South African businesses actually work. Built in Cape Town, South Africa.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#111315",
          color: "#F3F1EC",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#F5A623",
            fontSize: 28,
            letterSpacing: 6,
          }}
        >
          SHAFT AI
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.08,
            maxWidth: 980,
          }}
        >
          AI-built products for the way South African businesses actually work.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#C5C3BE",
          }}
        >
          Built in Cape Town, South Africa
        </div>
      </div>
    ),
    { ...size },
  );
}
