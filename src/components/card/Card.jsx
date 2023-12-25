import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";

const Card = ({ item }) => {
    return (
        <div className="flex flex-cols pb-12 basis-7/12 gap-12 items-center justify-center" key={item._id}>
            <Link href={`/courses/${item._id}`}>
                <div className="flex flex-cols px-10 py-8 gap-12 items-center shadow-md rounded-2xl bg-pink-100">
                    <Image src={item.img} alt="" width="400" height="360" className="m-auto rounded-xl overflow-hidden" />
                    <div className={styles.contentContainer}>
                        <div className="flex flex-row justify-end my-2 text-xl uppercase text-purple-600">
                            {item.catSlug}  
                        </div>
                        <p className="text-xl text-pink-400 italic">By {item.author}</p>
                        <p className="text-4xl font-bold my-1 text-black">{item.title}</p>
                        <p className="text-black">{item.description}</p>
                        <div className="items-center py-3 space-y-3 mt-3 bg-transparent sm:space-x-2 lg:space-y-0 ">
                            <button className="px-6 py-3 text-pink-50 font-bold bg-pink-500 focus:bg-pink-600 focus:outline-none rounded-md">
                                Learn now
                            </button>
                        </div>
                    </div>
                </div>
                    
            </Link>
        </div>
    );
}
export default Card;