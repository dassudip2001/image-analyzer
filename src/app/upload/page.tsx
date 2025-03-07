"use client";
import UploadFile from "@/components/UploadFile";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

export type Inputs = {
  title: string;
  name: string;
  email: string;
  content: string;
  imagePath: string;
};

export default function UploadPage() {
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const [, setUploadedImageUrl] = useState<string | null>(null); // State for storing image URL
  const [loading, setIseLoading] = useState(false);
  const handleImageUploadComplete = (url: string) => {
    setUploadedImageUrl(url); // Store the uploaded image URL
    setValue("imagePath", url); // Update the form value for `imagePath`
  };
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    submitData(data);
  };

  const submitData = async (data: Inputs) => {
    try {
      setIseLoading(true);
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("content", data.content);
      formData.append("imagePath", data.imagePath);
      const response = await axios.post("/api/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data) {
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
      }
      setIseLoading(false);
    } catch (error) {
      console.error("Error ", error);
      setIseLoading(false);
    }
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
            <div className="div">
              <UploadFile
                onFileSelect={(file) => console.log("Selected file:", file)}
                onUploadComplete={(url) => {
                  console.log("URL uploaded:", url);
                  handleImageUploadComplete(url);
                  // reset((prev) => ({ ...prev, public_path: url }));
                }}
              />
            </div>

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
                  htmlFor="name"
                  className="block text-[#2B4570] font-serif mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-2 rounded-lg border border-[#FFE135] focus:border-[#FF69B4] focus:ring focus:ring-[#FF69B4]/20 transition outline-none"
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#2B4570] font-serif mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
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
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                    <span className="ml-2">Loading...</span>
                  </div>
                ) : (
                  "Create Masterpiece"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
