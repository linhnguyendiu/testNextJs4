"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("All fields are necessary.");
            return;
        }
        try {
            const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            const { user } = await resUserExists.json(); 
            if (user) {
                setError("User already exists.");
                return;
            }
            const res = await fetch("api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/");
            } else {
                console.log("User registration failed.");
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-pink-600">Email Address</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="you@company.com" className="w-full px-3 py-2 placeholder-pink-300 border border-pink-300 rounded-md focus:outline-none focus:ring focus:ring-pink-100 focus:border-pink-300 " />
            </div>
            <div className="mb-6">
                <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm text-pink-600 ">Password</label>
                    <a href="#!" className="text-sm text-pink-400 focus:outline-none focus:text-pink-500 hover:text-pink-500 ">Forgot password?</a>
                </div>
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 placeholder-pink-300 border border-pink-300 rounded-md focus:outline-none focus:ring focus:ring-pink-100 focus:border-pink-300 " />
            </div>
            <div className="mb-6">
                <button type="submit" className="w-full px-3 py-4 font-bold text-pink-50 bg-pink-500 rounded-md focus:bg-pink-600 focus:outline-none">Register</button>
            </div>
            {error && (
                <div className="bg-blue-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                    {error}
                </div>
            )}
            <Link className="text-sm text-center text-pink-400" href={"/login"}>
                Already have an account? <span className="underline font-bold text-pink-500">Login</span>
            </Link>
        </form>

    );
}