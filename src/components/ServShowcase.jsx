import { automationSrc, civilContractingSrc, civilDesigningSrc, interiorContractingSrc, interiorDesigningSrc, landscapingSrc } from "../store/serviceSource";
import { ImageComponent } from "./Image";

export function ServShowcase(){
    return <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-y-4 lg:gap-y-10">
            <ImageComponent imgSrc={civilDesigningSrc} alt={"Civil Designing"} imgDesc={"Civil Designing"} />
            <ImageComponent imgSrc={civilContractingSrc} alt={"Civil Contracting"} imgDesc={"Civil Contracting"} />
            <ImageComponent imgSrc={interiorDesigningSrc} alt={"Interior Desigining"} imgDesc={"Interior Designing"} />
            <ImageComponent imgSrc={interiorContractingSrc} alt={"Interior Contracting"} imgDesc={"Interior Contracting"} />
            <ImageComponent imgSrc={landscapingSrc} alt={"Landscaping"} imgDesc={"Landscaping"} />
            <ImageComponent imgSrc={automationSrc} alt={"Automation"} imgDesc={"Home Automation"} />
        </div>
    </div>
}