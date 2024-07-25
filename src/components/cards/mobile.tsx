import { icons } from "@/constants/config";
import Image from "next/image";

export default function Mobile() {
    return <div className="relative justify-center items-center border-2 border-dim-gray py-4 p-2 rounded-[3em] w-80 h-full">
        <Image alt="" src="/images/frame.svg" width={200} height={200} className="w-full h-full" />

        <div className="top-0 left-0 absolute flex flex-col justify-start items-center gap-10 pt-16 w-full h-full">
            <Image alt="" src={""} width={200} height={200} className="bg-light-gray rounded-full w-24 h-24" />

            <div className="flex flex-col items-center gap-2 w-full">
                <h2 className="bg-light-gray rounded-full w-3/5 h-3" />
                <span className="bg-light-gray rounded-full w-2/5 h-2" />
            </div>

            <div className="flex flex-col gap-3 pb-10 w-4/6 overflow-auto">
                {icons.map(item => <button style={{ backgroundColor: item.color }} className={`flex justify-start items-center gap-2 bg-light-gray p-2.5 rounded-md`}>
                    <Image alt="" src={item.icon} width={100} height={100} className="w-4" />
                    <span className="text-white text-xs capitalize">{item.label}</span>

                    <Image alt="" src="/icons/right.svg" width={100} height={100} className="ml-auto w-4" />
                </button>)}
            </div>
        </div>
    </div>
}