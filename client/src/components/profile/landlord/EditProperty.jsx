import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

const EditProperty = ({
  editedProperty,
  setEditedProperty,
  isEditModalOpen,
  setIsEditModalOpen,
}) => {
  const handleEditChange = (e) => {
    setEditedProperty({ ...editedProperty, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {" "}
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
              value={editedProperty.price || ""}
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
    </div>
  );
};

export default EditProperty;
