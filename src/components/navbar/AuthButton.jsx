'use client';

import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

const AuthButton = () => {
    const { data: session } = useSession();
    const { push } = useRouter();
    const handleAuthentication = () => {
        if (session) {
            signOut();
        } else {
            push('/login');
        }
    }
    return (
        <div className='flex items-center flex-col lg:flex-row space-y-4 my-4 lg:space-y-0 lg:my-0'>
            <button
                onClick={handleAuthentication}
                rel="noopener"
                className="px-8 py-3 text-regular font-bold text-pink-100 bg-pink-500 w-auto rounded-full hover:text-pink-100 hover:bg-pink-800">
                {session ? "Log Out" : "Log In"}
            </button>
        </div>
    );
}
export default AuthButton;