import React, { useState } from "react";
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
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import TabButton from "./TabButton";
import CoreConcept from "./CoreConcept";

const StatsDisplay = () => {
  const [selectedTopic, setSelectedTopic] = useState("statistics");

  const houses = ["house 1", "house 2", "house 3", "house 4", "house 5"];

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div className="mt-10 w-[60%] mx-auto">
      <div className="mt-5">
        <span className="text-2xl ">Popular Owner Properties</span>
      </div>
      <Separator className="mb-5 bg-slate-600 shadow-2xl " />
      <div className="flex h-5 items-center space-x-4 text-lg mb-5">
        <TabButton
          isSelected={selectedTopic === "statistics"}
          onSelect={() => handleSelect("statistics")}
        >
          Statistics
        </TabButton>
        <Separator orientation="vertical" className="bg-slate-600" />
        <TabButton
          isSelected={selectedTopic === "properties"}
          onSelect={() => handleSelect("properties")}
        >
          Properties
        </TabButton>
        <Separator orientation="vertical" className="bg-slate-600" />
        <TabButton
          isSelected={selectedTopic === "services"}
          onSelect={() => handleSelect("services")}
        >
          Services
        </TabButton>
      </div>
      {selectedTopic === "statistics" && (
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
      )}
      {selectedTopic === "properties" && (
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
                        <CardTitle>Properties</CardTitle>
                        <CardDescription>
                          see different properties
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form>
                          <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">Name</Label>
                              <Input
                                id="name"
                                placeholder="Name of your project"
                              />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="framework">Framework</Label>
                            </div>
                          </div>
                        </form>
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
      )}
      {selectedTopic === "services" && (
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
                        <CardTitle>Services</CardTitle>
                        <CardDescription>see services provided</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form>
                          <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">Name</Label>
                              <Input
                                id="name"
                                placeholder="Name of your project"
                              />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="framework">Framework</Label>
                            </div>
                          </div>
                        </form>
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
      )}
    </div>
  );
};

export default StatsDisplay;
