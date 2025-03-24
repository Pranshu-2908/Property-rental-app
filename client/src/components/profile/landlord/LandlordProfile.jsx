import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, Plus, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EditProperty from "./EditProperty";
import DeleteProperty from "./DeleteProperty";
import ReqStatusUpdate from "./ReqStatusUpdate";

const LandlordProfile = () => {
  const navigate = useNavigate();
  const { ownedProps } = useSelector((store) => store.property);
  const { allReq } = useSelector((store) => store.maintenance);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);
  const [editedProperty, setEditedProperty] = useState({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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
  const propReq = allReq.filter(
    (req) => req.property._id === selectedProperty?._id
  );

  return (
    <div className="flex flex-col gap-10">
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Owned Properties</h2>
          <Button onClick={() => navigate("/add-property")}>
            {" "}
            <Plus className="mr-2" /> Add Property{" "}
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ownedProps.length > 0 ? (
            ownedProps.map((property) => (
              <Card key={property._id} className="relative shadow-lg">
                <CardContent className="p-4">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold">{property.title}</h3>
                  <p className="text-sm text-gray-600">{property.location}</p>
                  <Badge className="mt-2">₹{property.price} / month</Badge>

                  <Button
                    className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600"
                    onClick={() => openMaintenanceModal(property)}
                  >
                    <Wrench className="mr-2" /> Manage Maintenance
                  </Button>

                  <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    onClick={() => openEditModal(property)}
                  >
                    <Edit2 size={18} />
                  </button>
                  <Button
                    className="mt-3 w-full bg-red-500 hover:bg-red-600"
                    onClick={() => openDeleteModal(property)}
                  >
                    <Trash2 className="mr-2" /> Remove Property
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <div>Add your Property to rent</div>
          )}
        </div>
      </section>

      <EditProperty
        editedProperty={editedProperty}
        setEditedProperty={setEditedProperty}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
      <DeleteProperty
        isDeleteModalOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        selectedProperty={selectedProperty}
      />
      <ReqStatusUpdate
        propReq={propReq}
        isMaintenanceModalOpen={isMaintenanceModalOpen}
        setIsMaintenanceModalOpen={setIsMaintenanceModalOpen}
      />
    </div>
  );
};

export default LandlordProfile;
