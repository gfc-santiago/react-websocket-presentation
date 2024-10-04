import { Box, debounce } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function LivePreview() {
  const ref = useRef<HTMLInputElement>(null);
  const [scale, setScale] = useState(0);
  useEffect(() => {
    const listener = debounce(() => {
      setScale((document.getElementById("viewer")?.offsetWidth ?? 0) / 1920);
    }, 0);
    window.addEventListener("resize", listener);
    listener();
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);
  return (
    <Box
      id="viewer"
      ref={ref}
      sx={{
        aspectRatio: "16/9",
        overflow: "hidden",
        border: "1px solid",
        backgroundImage: "url('/images/sample.jpg')",
        backgroundSize: "100% 100%",
        width: "90vw",
        maxWidth: "400px",
      }}
    >
      <Box
        component="iframe"
        src="/viewer"
        sx={{
          border: "none",
          width: "1920px",
          height: "1080px",
          transformOrigin: "0 0",
          transform: `scale(${scale})`,
        }}
      />
    </Box>
  );
}
