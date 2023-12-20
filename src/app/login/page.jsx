import styles from "./loginPage.module.css"
import LoginForm from "@/components/login/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function LoginPage() {
    const session = await getServerSession(authOptions);
    if (session) redirect("/write");

    return (
        <div className={styles.container}>
            <div className="flex items-center min-h-fit mt-16 bg-white shadow-lg">
                <div className="max-w-xl mx-auto mb-10 px-4">
                    <div className="text-center">
                        <h1 className="my-3 text-4xl font-bold text-black ">
                            Sign in
                        </h1>
                        <p className="text-pink-300  pb-8">
                            Sign in to access your acount and learn courses
                        </p>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>

    )
}
