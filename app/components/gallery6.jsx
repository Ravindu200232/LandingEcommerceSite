"use client";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Gallery6 = ({
  heading = "Explore Land Types in Sri Lanka",
  demoUrl = "/land-types",
  items = [
    {
      id: "residential",
      title: "Residential Land",
      summary: "Ideal for building homes or villas in urban and suburban areas. Available across all major towns and districts.",
      url: "/property",
      image: "/img/residentland.jpg",
    },
    {
      id: "commercial",
      title: "Commercial Land",
      summary: "Located near main roads and cities, suitable for business developments, warehouses, and office spaces.",
      url: "/property",
      image: "/img/Commercel.jpg",
    },
    {
      id: "agricultural",
      title: "Agricultural Land",
      summary: "Fertile land ideal for paddy, coconut, banana, and mixed crop cultivation in rural and semi-rural areas.",
      url: "/property",
      image: "/img/agri.jpg",
    },
    {
      id: "beachfront",
      title: "Beachfront Land",
      summary: "Perfect for resorts or holiday villas, these plots lie along popular beaches like Nilaveli, Unawatuna, and Bentota.",
      url: "/property",
      image: "/img/Beachfront Land.webp",
    },
    {
      id: "tea-estate",
      title: "Tea Estate Land",
      summary: "Located in hilly regions like Nuwara Eliya and Ella, suited for tea plantations or eco-lodge developments.",
      url: "/property",
      image: "/img/tea.jpg",
    },
    {
      id: "paddy",
      title: "Paddy Field Land",
      summary: "Traditional paddy cultivation land available near irrigation zones, perfect for long-term farming investment.",
      url: "/property",
      image: "/img/paddy-field.jpg",
    },
  ]
}) => {
  const [carouselApi, setCarouselApi] = useState();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => carouselApi.off("select", updateSelection);
  }, [carouselApi]);

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start md:items-end md:mb-14 lg:mb-16">
          <div>
            <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h2>
            <a
              href={demoUrl}
              className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg hover:underline">
              View All Types
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto disabled:opacity-50"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto disabled:opacity-50"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full overflow-hidden">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              loop: false,
              breakpoints: {
                "(max-width: 768px)": {
                  dragFree: true,
                },
              },
            }}
            className="w-full">
            <CarouselContent className="-ml-6">
              {items.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
                >
                  <a href={item.url} className="group block h-full">
                    <div className="flex flex-col h-full">
                      {/* Image */}
                      <div className="aspect-[3/2] mb-4 overflow-hidden rounded-xl bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col flex-1">
                        <h3 className="mb-2 line-clamp-2 text-lg font-medium md:text-xl lg:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mb-6 line-clamp-3 text-sm text-gray-600 md:text-base flex-1">
                          {item.summary}
                        </p>
                        <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                          View Listings
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Gallery6 };
