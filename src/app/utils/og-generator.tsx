import { ImageResponse } from "next/og";

export default async function getOGImages() {
  const size = {
    width: 1200,
    height: 300,
  }

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        All Products
      </div>
    ),
    {
      ...size,
    }
  )
}