export default function UploadPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#FFE135]/10 to-[#FF69B4]/10 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl  max-w-md w-full">
          <div className="border-2 border-dashed border-[#FFE135] rounded-xl p-8  hover:border-[#FF69B4] transition cursor-pointer bg-[#FFE135]/5">
            <div className="text-center">
              {/* <img
                src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=300"
                alt="Upload Icon"
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
              /> */}
              <p className="text-[#2B4570] mb-2">
                Drag and drop your image here
              </p>
              <p className="text-[#2B4570]/60 text-sm mb-4">or</p>
              <button className="bg-[#2B4570] hover:bg-[#2B4570]/90 text-white px-6 py-2 rounded-lg transition font-serif">
                Choose File
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
