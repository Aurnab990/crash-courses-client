import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Googlelogin = () => {
    const {googleLogin} = useAuth();
    const handleGoogleLogin = () =>{
        googleLogin();
    }
    return (
        <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      onClick={handleGoogleLogin}
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      GOOGLE
                    </button>
                  </div>
    );
};

export default Googlelogin;