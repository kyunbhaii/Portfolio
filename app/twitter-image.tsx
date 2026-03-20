import { ImageResponse } from "next/og";
import SocialPreviewCard from "./components/SocialPreviewCard";
import { profile } from "./data/site";

export const alt = "Vikramaditya Mishra portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <SocialPreviewCard
        eyebrow="Portfolio"
        title={profile.name}
        subtitle="AI Engineer | Generative AI | LLM"
        description="Building GenAI systems, open-source AI projects, and reliable LLM workflows focused on experimentation and real-world impact."
      />
    ),
    size
  );
}
