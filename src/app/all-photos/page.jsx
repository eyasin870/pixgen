import PhotoCard from "@/component/PhotoCard/PhotoCard";

const AllPhotosPage = async() => {
    const res = await fetch("https://pixgen-blue.vercel.app/data.json");
    const allPhotos = await res.json();
    // console.log(allPhotos)
    return (
        <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-2xl my-5">All Photos</h2>
        <div className="grid grid-cols-4 gap-6">
            {
                allPhotos.map((photo)=><PhotoCard key={photo.id} photo={photo}>

                </PhotoCard>)
            }
        </div>
            
        </div>
    );
};

export default AllPhotosPage;