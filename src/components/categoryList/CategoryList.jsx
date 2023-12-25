import Link from "next/link";
import Category from "./Category";
import styles from "./categoryList.module.css";
import { Business, Startup, Economy, Development } from "./categoriesIcons";

const CategoryList = () => {
    return (
        <section className={styles.main}>
            <h1 className={styles.header}>Choose A Topic</h1>
            <div className="grid grid-cols-2 gap-8 w-full lg:grid-cols-4 mt-12 px-3">
                <Link href="#">
                    <Category name="Business" text="All rewards have been fully distributed to 30,000 winners." icon={<Business />} />
                </Link>
                <Link href="#">
                    <Category name="Startup" text="All rewards have been fully distributed to 30,000 winners." icon={<Startup />} />
                </Link>
                <Link href="#">
                    <Category name="Economy" text="All rewards have been fully distributed to 30,000 winners." icon={<Economy />} />
                </Link>
                <Link href="#">
                    <Category name="Development" text="All rewards have been fully distributed to 30,000 winners." icon={<Development />} />
                </Link>
            </div>


        </section>
    )
}


export default CategoryList;