import Gallery from "../components/Gallery";

export default function Schoollife() {
  const images = [
    "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600",
    // "https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?auto=compress&cs=tinysrgb&w=600",
    // "https://images.pexels.com/photos/8617556/pexels-photo-8617556.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <>
      <Gallery images={images} />
    </>
  );
}