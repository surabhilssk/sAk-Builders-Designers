import { Showcase } from "./Showcase";

export function SamplePage(){
    return <div>
        <div className="text-center pt-7">
            <div className="font-extrabold text-xl">Browse The Range</div>
            <div className="text-slate-800">Explore what we're capable of..</div>
        </div>
        <div className="mt-6">
            <Showcase />
        </div>
    </div>
}