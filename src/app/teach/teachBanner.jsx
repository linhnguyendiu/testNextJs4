import Image from "next/image";

export default function TeachBanner() {
    return (
        <section className="flex flex-col md:flex-row px-20 py-16 gap-8 lg:gap-20 justify-center items-center">
            <div className="flex flex-col px-10 md:px-0 space-y-4 md:w-1/2 justify-center items-center py-8">
                <h2 className="text-6xl font-bold leading-snug sm:text-[48px] lg:text-[56px] xl:text-[64px]">
                    Join Us for a <br/>Teaching Session
                </h2>
                <p className="sm:text-[16px] lg:text-[20px] xl:text-[24px] text-lg leading-tight text-center py-3">
                    Become an instructor, change lives <br/>including your own
                </p>
                <button
                    className="px-16 py-3 text-pink-50 font-bold bg-pink-500 rounded-md focus:bg-pink-600 focus:outline-none">
                    Teach now
                </button>
            </div>   
            <Image src="/Img Teacher.png" alt="N" width="500" height="794"/>
        </section>
    )
}


