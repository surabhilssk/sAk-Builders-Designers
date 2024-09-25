
export function ButtonComponent({text, onClick}){
    return <div>
        <button onClick={onClick} type="button" class="focus:outline-none text-white bg-primaryButton hover:bg-hoverColor focus:ring-2 focus:ring-focusColor rounded-full font-medium text-sm px-26px py-3 me-2 mt-1">{text}</button>
    </div>
}