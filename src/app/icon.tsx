import { ImageResponse } from "next/og";

export const runtime = "edge";
const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          backgroundColor: "#E5E7EB",
          fontSize: "24px",
          color: "#637381",
        }}
      >
        W
      </div>
    ),
    { ...size }
  );
}
