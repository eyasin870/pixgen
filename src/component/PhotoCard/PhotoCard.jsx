import { Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { PiDownloadSimple } from "react-icons/pi";

const PhotoCard = ({ photo }) => {
  // console.log(photo);
  return (
    <Card className="border rounded-xl space-y-3">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={photo.title}
          className="object-cover rounded-xl "
        />
        <Chip className="absolute right-2 top-2">{photo.category}</Chip>
      </div>
      <div className="space-y-3">
        <h2 className="font-medium ">{photo.title}</h2>
        <div className="flex gap-6">
          <p className="flex gap-2 items-center font-semibold ">
            <FaHeart />
            {photo.likes}
          </p>
          <Separator orientation="vertical"/>
          <p className="flex gap-2 items-center font-semibold">
            <PiDownloadSimple />
            {photo.downloads}
          </p>

        </div>

      </div>
      <Link href={`/all-photos/${photo.id}`}>
              <button  className="btn cursor-pointer w-full border rounded-full font-semibold text-gray-800 py-2">View</button>

      </Link>
    </Card>
  );
};

export default PhotoCard;
