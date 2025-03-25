import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { PROPERTY_API_END_POINT } from "../utils/contains";
import { useDispatch, useSelector } from "react-redux";
import { setNewProp } from "../redux/propertySlice";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const AddProperty = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth); // ✅ Get current user (landlord ID)
  const [property, setProperty] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    tenantsPreferred: "",
    available: true,
    images: [],
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setProperty((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setProperty((prev) => ({
      ...prev,
      images: [...prev.images, ...imageUrls],
    }));
  };

  const removeImage = (index) => {
    setProperty((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", property.title);
    formData.append("landlord", user._id);
    formData.append("description", property.description);
    formData.append("price", property.price);
    formData.append("location", property.location);
    formData.append("tenantsPreferred", property.tenantsPreferred);
    formData.append("available", property.available);
    property.images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      setLoading(true);
      const res = await axios.post(`${PROPERTY_API_END_POINT}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },

        withCredentials: true,
      });
      if (res.data.status === "success") {
        dispatch(setNewProp(res.data.data.property));
        toast.success("Property created Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
    navigate("/profile");
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 max-w-2xl mx-auto p-6 shadow-2xl rounded-lg my-5">
          <h2 className="text-2xl font-semibold mb-4">Add New Property</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Label>Title</Label>
            <Input
              name="title"
              value={property.title}
              onChange={handleChange}
              required
            />
            <Label>Description</Label>
            <Input
              name="description"
              value={property.description}
              onChange={handleChange}
              required
            />
            <Label>Price</Label>
            <Input
              type="number"
              name="price"
              value={property.price}
              onChange={handleChange}
              required
            />
            <Label>Location</Label>
            <Input
              name="location"
              value={property.location}
              onChange={handleChange}
              required
            />
            <Label>Preferred Tenants</Label>
            <select
              name="tenantsPreferred"
              value={property.tenantsPreferred}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="Students">Students</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Co-living">Co-living</option>
              <option value="Family">Family</option>
            </select>
            <div className="flex items-center gap-2">
              <Label>Available</Label>
              <input
                type="checkbox"
                name="available"
                checked={property.available}
                onChange={() =>
                  setProperty((prev) => ({
                    ...prev,
                    available: !prev.available,
                  }))
                }
              />
              <span>Yes</span>
            </div>
            <Label>Images</Label>
            <Input type="file" multiple onChange={handleImageChange} />
            <div className="flex gap-2 flex-wrap">
              {property.images.map((img, index) => (
                <div key={index} className="relative w-24 h-24">
                  <img
                    src={img}
                    alt="property"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <button
                    type="button"
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                    onClick={() => removeImage(index)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-4">
              <Button
                type="reset"
                onClick={() =>
                  setProperty({
                    title: "",
                    description: "",
                    price: "",
                    location: "",
                    tenantsPreferred: "Students",
                    available: true,
                    images: [],
                  })
                }
              >
                Clear
              </Button>
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                {loading ? "Submitting..." : "Create"}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddProperty;
