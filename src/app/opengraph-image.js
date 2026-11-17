import { ImageResponse } from "next/og";

export const alt = "Joe Palala, Senior Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#0a0a0a",
        color: "#fafafa",
      }}
    >
      <div style={{ fontSize: 88, fontWeight: 800 }}>Joe Palala</div>
      <div style={{ fontSize: 44, marginTop: 16 }}>
        Senior Full-Stack Engineer
      </div>
      <div style={{ fontSize: 32, marginTop: 24, color: "#a3a3a3" }}>
        Front end · Back end · Servers
      </div>
    </div>,
    size,
  );
}
