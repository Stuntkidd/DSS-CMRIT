import Image from "next/image";

export const metadata = { title: "Gallery" };

const images = [
  "https://i.postimg.cc/RZW8NgvR/Whats_App_Image_2026_01_12_at_1_04_09_PM.jpg",
  "https://i.postimg.cc/dtHpsbc1/Whats_App_Image_2026_01_12_at_1_11_03_PM.jpg",
  "https://i.postimg.cc/CLPXh3ph/Whats_App_Image_2026_01_12_at_1_11_03_PM_(2).jpg",
  "https://i.postimg.cc/8PK9p2gs/Whats_App_Image_2026_01_12_at_1_11_04_PM_(2).jpg",
  "https://i.postimg.cc/kg2ZBT76/Whats_App_Image_2026_01_12_at_1_11_05_PM.jpg",
  "https://i.postimg.cc/DyjHv930/Whats_App_Image_2026_01_12_at_1_11_04_PM_(1).jpg",
  "https://i.postimg.cc/d1JckGHP/Whats_App_Image_2026_01_12_at_1_14_59_PM.jpg",
  "https://i.postimg.cc/RFvx6wPb/Whats_App_Image_2026_01_12_at_1_15_15_PM.jpg",
];

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Gallery</h1>
      <p className="mt-3 text-muted">Highlights from our recent events and projects.</p>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {images.map((src, i) => (
          <div
            key={i}
            className="card aspect-video overflow-hidden rounded-lg"
          >
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}


