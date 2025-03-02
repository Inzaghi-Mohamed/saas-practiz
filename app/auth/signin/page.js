"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

// Create a client component that uses useSearchParams
function SignInContent() {
  const [email, setEmail] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [authError, setAuthError] = useState("");
  const router = useRouter();
  const { status } = useSession();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const error = searchParams.get("error");
  
  // Handle authentication errors
  useEffect(() => {
    if (error) {
      switch (error) {
        case "OAuthAccountNotLinked":
          setAuthError("This email is already associated with another sign-in method. Please use the original sign-in method you created your account with.");
          break;
        case "OAuthSignin":
          setAuthError("Error during OAuth sign-in. Please try again.");
          break;
        case "OAuthCallback":
          setAuthError("Error during OAuth callback. Please try again.");
          break;
        default:
          setAuthError("An error occurred during sign-in. Please try again.");
      }
    }
  }, [error]);
  
  // Redirect to dashboard if already authenticated
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    // Sign in with email (magic link)
    await signIn("resend", {
      email,
      callbackUrl: "/dashboard",
      redirect: true,
    });
    
    setIsEmailSubmitted(true);
  };

  const handleGoogleSignIn = () => {
    // Use redirect: true to ensure proper OAuth flow
    signIn("google", { 
      callbackUrl: "/dashboard",
      redirect: true,
    });
  };

  // If loading authentication state, show a loading indicator
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side with logo and branding */}
      <div className="bg-primary md:w-1/2 flex flex-col justify-center items-center p-8 text-white">
        <div className="max-w-md mx-auto text-center">
          <Image 
            src="/logo.png" 
            alt="App Logo" 
            width={200} 
            height={200} 
            className="mb-8" 
          />
          <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-xl">
            Streamline your non-profit's operations with our user-friendly platform.
          </p>
        </div>
      </div>

      {/* Right side with auth form */}
      <div className="md:w-1/2 flex justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          
          {/* Display authentication errors */}
          {authError && (
            <div className="text-center p-4 bg-red-100 text-red-700 rounded-lg mb-6">
              <p>{authError}</p>
            </div>
          )}
          
          {isEmailSubmitted ? (
            <div className="text-center p-4 bg-green-100 rounded-lg mb-6">
              <p>Check your email for a sign-in link!</p>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="mb-6">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition"
              >
                Continue with Email
              </button>
            </form>
          )}

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </button>

          <div className="mt-6 text-center text-sm">
            <p>
              Don't have an account?{" "}
              <Link href="/" className="text-primary hover:underline">
                Return to home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading fallback for Suspense
function SignInFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );
}

// Main component with Suspense boundary
export default function SignIn() {
  return (
    <Suspense fallback={<SignInFallback />}>
      <SignInContent />
    </Suspense>
  );
} 