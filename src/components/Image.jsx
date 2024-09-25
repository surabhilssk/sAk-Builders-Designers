export function ImageComponent({ imgSrc, imgDesc, alt }) {
    return (
      <div>
        <div className="w-full h-auto text-center">
          <img src={imgSrc} alt={alt} className="object-cover rounded-xl w-full h-auto sm:w-96 sm:h-480px" />
          <div className="pt-2 pb-2 font-semibold text-sm sm:text-base">
            {imgDesc}
          </div>
        </div>
      </div>
    );
}