// app/icon.tsx
import { ImageResponse } from "next/og";

// Size & type metadata (Next.js uses this automatically)
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "red",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          paddingBottom: 3,
          borderRadius: '100%'
        }}
      >
        3
      </div>
    ),
    {
      ...size,
    }
  );
}
