import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, Plus, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const LandlordProfile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth) || {};

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);
  const [editedProperty, setEditedProperty] = useState({});
  const [maintenanceStatus, setMaintenanceStatus] = useState("");

  // Placeholder properties if API is not available
  const ownedProperties = user?.ownedProperties || [
    {
      _id: "placeholder1",
      title: "No Property Added Yet",
      location: "N/A",
      rent: "0",
      images: ["https://via.placeholder.com/300"],
      maintenanceRequests: [],
    },
  ];

  const openEditModal = (property) => {
    setSelectedProperty(property);
    setEditedProperty(property);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (property) => {
    setSelectedProperty(property);
    setIsDeleteModalOpen(true);
  };

  const openMaintenanceModal = (property) => {
    setSelectedProperty(property);
    setIsMaintenanceModalOpen(true);
  };

  const handleEditChange = (e) => {
    setEditedProperty({ ...editedProperty, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Owned Properties Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Owned Properties</h2>
          <Button onClick={() => navigate("/add-property")}>
            {" "}
            <Plus className="mr-2" /> Add Property{" "}
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ownedProperties.map((property) => (
            <Card key={property._id} className="relative shadow-lg">
              <CardContent className="p-4">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <p className="text-sm text-gray-600">{property.location}</p>
                <Badge className="mt-2">₹{property.rent} / month</Badge>

                {/* Maintenance Requests Button */}
                <Button
                  className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => openMaintenanceModal(property)}
                >
                  <Wrench className="mr-2" /> Manage Maintenance
                </Button>

                {/* Edit Icon */}
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                  onClick={() => openEditModal(property)}
                >
                  <Edit2 size={18} />
                </button>

                {/* Delete Button */}
                <Button
                  className="mt-3 w-full bg-red-500 hover:bg-red-600"
                  onClick={() => openDeleteModal(property)}
                >
                  <Trash2 className="mr-2" /> Remove Property
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Edit Property Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Property</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Label>Title</Label>
            <Input
              name="title"
              value={editedProperty.title || ""}
              onChange={handleEditChange}
            />
            <Label>Location</Label>
            <Input
              name="location"
              value={editedProperty.location || ""}
              onChange={handleEditChange}
            />
            <Label>Rent</Label>
            <Input
              name="rent"
              value={editedProperty.rent || ""}
              onChange={handleEditChange}
            />
          </div>
          <DialogFooter>
            <Button onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete {selectedProperty?.title}?</p>
          <DialogFooter>
            <Button onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
            <Button className="bg-red-500 hover:bg-red-600">Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Maintenance Management Modal */}
      <Dialog
        open={isMaintenanceModalOpen}
        onOpenChange={setIsMaintenanceModalOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manage Maintenance Requests</DialogTitle>
          </DialogHeader>
          {selectedProperty?.maintenanceRequests?.length > 0 ? (
            selectedProperty.maintenanceRequests.map((req, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm font-semibold">{req.issue}</p>
                <Select
                  value={req.status}
                  onValueChange={(value) => setMaintenanceStatus(value)}
                >
                  <SelectTrigger>{req.status}</SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))
          ) : (
            <p>No maintenance requests found.</p>
          )}
          <DialogFooter>
            <Button onClick={() => setIsMaintenanceModalOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandlordProfile;
