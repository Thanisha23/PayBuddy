import  { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-white dark:bg-[#020817] h-screen w-full overflow-hidden font-rakkas flex flex-col">
      <nav className="backdrop-blur-md bg-white/80 dark:bg-[#020817]/80 py-9 px-4 md:px-8 lg:px-12 flex-shrink-0">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/finalLogo.jpeg"
              alt="PayBuddy Logo"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-lg font-bold text-[#32374A] dark:text-white">
              PayBuddy
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-[#32374A] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </a>
            <a
              href="/dashboard"
              className="text-[#32374A] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Dashboard
            </a>
            <a
              href="/profile"
              className="text-[#32374A] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Profile
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="/signin">
              <Button
                variant="ghost"
                className="text-[#32374A] dark:text-white hover:bg-[#32374A]/10 dark:hover:bg-white/10"
              >
                Sign In
              </Button>
            </a>
            <a href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Sign Up
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-[#32374A] dark:text-white"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-[#020817] z-50 md:hidden">
          <div className="p-4 flex flex-col h-full">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/finalLogo.jpeg"
                  alt="PayBuddy Logo"
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-lg font-bold text-[#32374A] dark:text-white">
                  PayBuddy
                </span>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="text-[#32374A] dark:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col mt-8 space-y-6">
              <a
                href="/"
                className="text-[#32374A] dark:text-white text-xl font-medium"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
              <a
                href="/dashboard"
                className="text-[#32374A] dark:text-white text-xl font-medium"
                onClick={toggleMobileMenu}
              >
                Dashboard
              </a>
              <a
                href="/profile"
                className="text-[#32374A] dark:text-white text-xl font-medium"
                onClick={toggleMobileMenu}
              >
                Profile
              </a>
            </div>

            <div className="mt-auto flex flex-col gap-4 mb-8">
              <a href="/signin" className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-[#32374A] dark:border-white text-[#32374A] dark:text-white"
                >
                  Sign In
                </Button>
              </a>
              <a href="/signup" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Sign Up
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
      <section className="flex-grow flex items-center px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-6 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-[#32374A] dark:text-white leading-tight">
              Simplify{" "}
              <span className="text-blue-600 dark:text-blue-400">Payments</span>
              , <br className="hidden md:block" />
              Elevate{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Experiences
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-4 mb-6 max-w-lg mx-auto md:mx-0">
              Send money, make transfers, and manage your finances with ease
              using PayBuddy's secure platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="/signup" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto text-base px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </a>
              <a href="/learn-more" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-base px-6 py-2 border-[#32374A] dark:border-white text-[#32374A] dark:text-white hover:bg-[#32374A]/10 dark:hover:bg-white/10"
                >
                  Learn More
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <img
              src="/home-pg-1.jpg"
              alt="PayBuddy App"
              className="rounded-lg shadow-lg max-w-full h-auto max-h-80 md:max-h-96 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
