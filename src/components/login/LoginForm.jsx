"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });
            if (res.error) {
                setError("Invalid Credentials");
                return;
            }
            router.replace("/");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-pink-500">
                    Email Address
                </label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-full px-3 py-2 placeholder-pink-300 border border-pink-300 rounded-md focus:outline-none focus:ring focus:ring-pink-100 focus:border-pink-300 "
                />
            </div>
            <div className="mb-6">
                <div className="flex justify-between mb-2">
                    <label
                        htmlFor="password"
                        className="text-sm text-pink-600">
                        Password
                    </label>
                    <a
                        href="#!"
                        className="text-sm text-pink-400 focus:outline-none focus:text-pink-600 hover:text-pink-600 ">
                        Forgot password?
                    </a>
                </div>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="w-full px-3 py-2 placeholder-pink-300 border border-pink-300 rounded-md focus:outline-none focus:ring focus:ring-pink-100 focus:border-pink-300  "
                />
            </div>
            <div className="mb-6">
                <button className="w-full px-3 py-4 font-bold text-pink-50 bg-pink-500 rounded-md focus:bg-pink-600 focus:outline-none">
                    Sign in
                </button>
                {error && (
                    <div className="bg-blue-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                        {error}
                    </div>
                )}
            </div>
            <p className="text-sm text-center text-pink-400">
                Don&apos;t have an account yet?{" "}
                <a
                    href={"/register"}
                    className="text-pink-600 font-bold focus:outline-none hover:underline focus:text-pink-500">
                    Sign up
                </a>.
            </p>
        </form>
    );
}