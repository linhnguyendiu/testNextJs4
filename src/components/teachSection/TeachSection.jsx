import Image from "next/image";

export default function TeachSection() {
    return (
        <section className="flex flex-col md:flex-row px-40 mt-20 py-20 gap-8 lg:gap-20 justify-center bg-pink-50">
            <Image src="/Teach Img.png" alt="N" width="500" height="794"/>
            <div className="flex flex-col px-10 md:px-0 space-y-4 md:w-1/2 justify-center items-center py-8">
                <h2 className="font-bold leading-snug text-black sm:text-[42px] lg:text-[48px] xl:text-[56px]">
                    Become a teacher
                </h2>
                <p className="sm:text-[16px] lg:text-[20px] xl:text-[24px] text-lg leading-tight text-center py-3">
                    Instructors around the world teach millions of students on L’sSchool. 
                    We provide the tools and skills to teach what you love..
                </p>
                <button
                    className="px-16 py-3 text-pink-10 font-bold bg-pink-500 rounded-full focus:bg-pink-600 focus:outline-none">
                    Teach now
                </button>
            </div>   
            
        </section>
    )
}


