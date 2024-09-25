import { img1Src, img2Src, img3Src, img4Src,img5Src, img6Src, img7Src, img8Src  } from "../store/imageSource";
import { ImageComponent } from "./Image";

export function Showcase(){
    return <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ImageComponent imgSrc={img1Src} alt={"Catalogue01"} imgDesc={"Recreation Room"} />
            <ImageComponent imgSrc={img2Src} alt={"Catalogue02"} imgDesc={"Modern Kitchen"} />
            <ImageComponent imgSrc={img3Src} alt={"Catalogue03"} imgDesc={"Hand Wash Area"} />
            <ImageComponent imgSrc={img4Src} alt={"Catalogue04"} imgDesc={"Bedroom"} />
            <ImageComponent imgSrc={img5Src} alt={"Catalogue05"} imgDesc={"Living"} />
            <ImageComponent imgSrc={img6Src} alt={"Catalogue06"} imgDesc={"Dining"} />
            <ImageComponent imgSrc={img7Src} alt={"Catalogue07"} imgDesc={"Dining"} />
            <ImageComponent imgSrc={img8Src} alt={"Catalogue08"} imgDesc={"Contemporary Home Design"} />
            <div className="flex flex-col justify-center text-center text-base font-semibold text-gray-500">More Coming soon...</div>
        </div>
    </div>
}