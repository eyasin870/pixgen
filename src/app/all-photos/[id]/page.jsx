import Image from "next/image";

const PhotoDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://pixgen-blue.vercel.app/data.json");
  const photos = await res.json();
  // console.log(photos)
  const photo = photos.find((p) => p.id == id);
  console.log(photo);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="grid grid-cols-2 gap-7 justify-between items-center">
        <Image
          className="rounded-xl "
          src={photo.imageUrl}
          alt={photo.title}
          height={300}
          width={500}
        />
        <div className="space-y-3">
          <h2 className="font-bold text-2xl text-gray-800">{photo.title}</h2>
          <p className="font-semibold text-gray-600">{photo.prompt}</p>
          <p className="font-semibold text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur ipsa corrupti sint. Exercitationem, blanditiis. Sunt eum quis commodi suscipit?</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;
