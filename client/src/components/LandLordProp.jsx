import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import useGetSingleProp from "../hooks/useGetSingleProp";
import { useSelector } from "react-redux";

const LandLordProp = () => {
  const { propertyId } = useParams();
  useGetSingleProp(propertyId);
  const { singleProp } = useSelector((store) => store.property);
  const { allReq } = useSelector((store) => store.maintenance);
  const propReq = allReq.filter((req) => req.property._id === propertyId);
  const [isAgreementModalOpen, setAgreementModalOpen] = useState(false);
  const [isAcceptModalOpen, setAcceptModalOpen] = useState(false);
  const [isRejectModalOpen, setRejectModalOpen] = useState(false);
  //   const [selectedApplication, setSelectedApplication] = useState(null);
  if (!singleProp) {
    return (
      <div className="text-center text-lg">Loading property details...</div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow mt-10">
        <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">{singleProp.title}</h1>
          <p className="text-gray-600">{singleProp.description}</p>
          <p className="text-lg font-semibold">{singleProp.price}</p>
          <p className="text-gray-500">{singleProp.location}</p>

          {/* If Tenant Exists */}
          {singleProp.tenant ? (
            <div className="mt-6">
              <Button onClick={() => setAgreementModalOpen(true)}>
                View Agreement
              </Button>
              <h2 className="text-xl font-semibold mt-4">
                Maintenance Requests
              </h2>
              {propReq?.map((req) => (
                <div
                  key={req.id}
                  className="flex justify-between bg-gray-100 p-2 rounded mt-2"
                >
                  <span>{req.description}</span>
                  <span
                    className={`text-sm ${
                      req.status === "Pending"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {req.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            // If No Tenant, Show Applications
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Application Requests</h2>
              {singleProp.applications.map((app) => (
                <div
                  key={app.id}
                  className="flex justify-between bg-gray-100 p-2 rounded mt-2"
                >
                  <span>{app.name}</span>
                  <div>
                    <Button
                      variant="outline"
                      className="mr-2"
                      onClick={() => setAcceptModalOpen(true)}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => setRejectModalOpen(true)}
                    >
                      Reject
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Agreement Modal */}
          <Dialog
            open={isAgreementModalOpen}
            onOpenChange={setAgreementModalOpen}
          >
            <DialogContent>
              <DialogTitle>Tenancy Agreement</DialogTitle>
              <p>Agreement details go here...</p>
            </DialogContent>
          </Dialog>

          {/* Confirm Accept Modal */}
          <Dialog open={isAcceptModalOpen} onOpenChange={setAcceptModalOpen}>
            <DialogContent>
              <DialogTitle>Confirm Acceptance</DialogTitle>
              <p>Are you sure you want to accept this application?</p>
              <Button onClick={() => console.log("Accept confirmed!")}>
                Confirm
              </Button>
            </DialogContent>
          </Dialog>

          {/* Confirm Reject Modal */}
          <Dialog open={isRejectModalOpen} onOpenChange={setRejectModalOpen}>
            <DialogContent>
              <DialogTitle>Confirm Rejection</DialogTitle>
              <p>Are you sure you want to reject this application?</p>
              <Button onClick={() => console.log("Rejection confirmed!")}>
                Confirm
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandLordProp;
