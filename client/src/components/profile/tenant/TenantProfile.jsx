import { useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MaitenanceRequest from "./MaintenanceRequest";

const TenantProfile = () => {
  const { rentedProps } = useSelector((store) => store.property);

  return (
    <div className="flex flex-col gap-10">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Rented Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentedProps.length > 0 ? (
            rentedProps.map((property) => (
              <Card key={property._id} className="shadow-lg">
                <CardContent className="p-4">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold">{property.title}</h3>
                  <p className="text-sm text-gray-600">{property.location}</p>
                  <Badge className="mt-2">₹{property.price} / month</Badge>
                </CardContent>
              </Card>
            ))
          ) : (
            <div>No rented Properties</div>
          )}
        </div>
      </section>

      <MaitenanceRequest rentedProps={rentedProps} />
    </div>
  );
};

export default TenantProfile;
