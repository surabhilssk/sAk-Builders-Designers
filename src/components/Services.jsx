import { ServShowcase } from "./ServShowcase";

export function Services(){
    return <div>
        <div>
            <div className="text-center pt-9 font-extrabold text-2xl underline text-primaryButton" >Our Services</div>
        </div>
        <div className="mt-6">
            <ServShowcase />
        </div>
    </div>
}