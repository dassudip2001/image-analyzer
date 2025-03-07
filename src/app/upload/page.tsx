"use client";
import UploadFile from "@/components/UploadFile";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

export default function UploadPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // toast
    toast("Artwork created successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log(data);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#FFE135]/10 to-[#FF69B4]/10 p-4">
        <div className="max-w-2xl mx-auto pt-12">
          <h1 className="text-5xl font-serif text-[#2B4570] text-center mb-12">
            Create Your Art
          </h1>
          <ToastContainer />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Image Upload Section */}
            <UploadFile
              onFileSelect={(file) => console.log("Selected file:", file)}
              onUploadComplete={(url) => {
                console.log("URL uploaded:", url);
                // reset((prev) => ({ ...prev, public_path: url }));
              }}
            />

            {/* Input Fields */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              {/* hind all *  */}
              <p className="text-[#2B4570] text-sm mb-4 gap-3.5">
                All fields are required
                <span className="text-red-500">*</span>
              </p>
              <div>
                <label
                  htmlFor="title"
                  className="block text-[#2B4570] font-serif mb-2"
                >
                  Title:{" "}
                  <span>
                    <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  id="title"
                  {...register("title", { required: true })}
                  className="w-full px-4 py-2 rounded-lg border border-[#FFE135] focus:border-[#FF69B4] focus:ring focus:ring-[#FF69B4]/20 transition outline-none"
                  placeholder="Enter your artwork title"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-[#2B4570] font-serif mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="category"
                  {...register("name")}
                  className="w-full px-4 py-2 rounded-lg border border-[#FFE135] focus:border-[#FF69B4] focus:ring focus:ring-[#FF69B4]/20 transition outline-none"
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-[#2B4570] font-serif mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="category"
                  {...register("email")}
                  className="w-full px-4 py-2 rounded-lg border border-[#FFE135] focus:border-[#FF69B4] focus:ring focus:ring-[#FF69B4]/20 transition outline-none"
                  placeholder="Enter Your Email"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-[#2B4570] font-serif mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  {...register("content")}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-[#FFE135] focus:border-[#FF69B4] focus:ring focus:ring-[#FF69B4]/20 transition outline-none resize-none"
                  placeholder="Describe your artwork..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2B4570] hover:bg-[#2B4570]/90 text-white py-3 rounded-lg transition font-serif text-lg"
              >
                Create Masterpiece
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
