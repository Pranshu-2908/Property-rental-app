import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const categories = [
  "Search Houses",
  "Rent Houses",
  "Lease Agreements",
  "Direct payments",
  "Maintenance requests",
];

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto mt-10">
        <CarouselContent>
          {categories.map((cat, ind) => (
            <CarouselItem key={ind} className="md:basis-1/2 lg:basis-1/3">
              <Button variant="outline" className="rounded-full">
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
