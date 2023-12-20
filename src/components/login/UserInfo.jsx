"use client";

import { signOut } from "next-auth/react";

export default function UserInfo({prop}) {
    return (    
        <div className="p-3">
            <span className="font-bold">{prop?.email}</span>
        </div>
);
}