import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#FFE135]/10 to-[#FF69B4]/10 flex items-center justify-center p-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[#2B4570] text-xl font-light mb-2">Welcome to</p>
          <h1 className="text-7xl font-serif text-[#2B4570] tracking-wide mb-6">
            Creative Lab
          </h1>
          <div className="relative w-72 h-96 mx-auto mb-8">
            {/* <img
              src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=500"
              alt="Creative AI Artist"
              className="w-full h-full object-contain"
            /> */}
            <Image
              src={logo}
              alt="Creative AI Artist"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <p className="text-[#2B4570]/70 text-lg font-light align-bottom">
              Click to begin your artistic journey
            </p>
          </div>
          {/* get start button  */}
          <div className="flex justify-center align-middle mt-8">
            <Link
              href="/upload"
              className="bg-[#2B4570] hover:bg-[#2B4570]/90 text-white px-6 py-2 rounded-lg transition font-serif"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
