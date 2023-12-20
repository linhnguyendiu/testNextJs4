import RegisterForm from "@/components/login/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import styles from "../login/loginPage.module.css";

export default async function Register() {
    const session = await getServerSession(authOptions);

    return (
        <div className={styles.container}>
            <div className="flex items-center mt-16 bg-white shadow-lg ">
                <div className="max-w-xl mx-auto mb-10 px-4">
                    <div className="text-center">
                        <h1 className="my-3 text-4xl font-bold text-black">
                            Register
                        </h1>
                        <p className="text-pink-300  pb-8">
                            Register with email
                        </p>
                    </div>
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
        ;
}