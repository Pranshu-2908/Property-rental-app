import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import axios from "axios";
import { MAINTENANCE_API_END_POINT } from "../../../utils/contains";
import { updateMaintenanceStatus } from "../../../redux/maitenanceSlice";
import { toast } from "sonner";
import { Button } from "../../ui/button";

const ReqStatusUpdate = ({
  propReq,
  isMaintenanceModalOpen,
  setIsMaintenanceModalOpen,
}) => {
  const dispatch = useDispatch();
  const updateHandler = async (id, value) => {
    try {
      const res = await axios.patch(
        `${MAINTENANCE_API_END_POINT}/${id}`,
        {
          status: value,
        },
        { withCredentials: true }
      );
      if (res.data?.status === "success") {
        dispatch(updateMaintenanceStatus({ id, status: value }));
        toast.success("status updated");
      }
    } catch (error) {
      console.error(error);
      toast.error("failed to update");
    }
  };
  return (
    <div>
      {" "}
      <Dialog
        open={isMaintenanceModalOpen}
        onOpenChange={setIsMaintenanceModalOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manage Maintenance Requests</DialogTitle>
          </DialogHeader>
          {propReq.length > 0 ? (
            propReq.map((req, index) => (
              <div key={index} className="flex justify-between">
                <p className="text-sm ">{req.description}</p>
                <Select
                  value={req.status}
                  onValueChange={(value) => updateHandler(req._id, value)}
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
              close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReqStatusUpdate;
