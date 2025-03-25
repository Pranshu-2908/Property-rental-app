import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";
import { toast } from "sonner";
import axios from "axios";
import { PROPERTY_API_END_POINT } from "../../../utils/contains";
import { useDispatch } from "react-redux";
import { removeProp } from "../../../redux/propertySlice";

const DeleteProperty = ({
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  selectedProperty,
}) => {
  const dispatch = useDispatch();
  const deleteHandler = async (id) => {
    try {
      const res = await axios.delete(`${PROPERTY_API_END_POINT}/${id}`, {
        withCredentials: true,
      });
      if (res.data.status === "success") {
        dispatch(removeProp(id));
      }
      toast.success("Property removed successfully");
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Error in removing property");
    }
  };
  return (
    <div>
      {" "}
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete {selectedProperty?.title}?</p>
          <DialogFooter>
            <Button onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
            <Button
              className="bg-red-500 hover:bg-red-600"
              onClick={() => {
                deleteHandler(selectedProperty?._id);
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteProperty;
