import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import CoreConcept from "./CoreConcept";

const CarouselElem = () => {
  return (
    <div>
      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>Stats</CardTitle>
                    <CardDescription>see the stats</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul>
                      <CoreConcept
                        title={houses[index]}
                        description={"this is very good house"}
                      />
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselElem;
