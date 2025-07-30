"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const data = [
  {
    id: "colombo-land",
    title: "Land for Sale in Colombo",
    description:
      "Prime residential land located in Colombo city, ideal for building your dream home or investment property.",
    href: "https://example.com/colombo-land",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwyM3x8fHx8fDJ8fDE3MjM4MDY5Mzlf&ixlib=rb-4.0.3&q=80&w=1080", // Colombo skyline-ish
  },
  {
    id: "kandy-land",
    title: "Land Plot Near Kandy Lake",
    description:
      "Beautiful hillside land plot near Kandy Lake, perfect for peaceful living surrounded by nature.",
    href: "https://example.com/kandy-land",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwyNHx8fHx8fDJ8fDE3MjM4MDY5Mzlf&ixlib=rb-4.0.3&q=80&w=1080", // Hills/nature around Kandy
  },
  {
    id: "galle-land",
    title: "Seaside Land in Galle",
    description:
      "Coastal land available in Galle, ideal for vacation homes or boutique resorts with stunning ocean views.",
    href: "https://example.com/galle-land",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwyNXx8fHx8fDJ8fDE3MjM4MDY5Mzlf&ixlib=rb-4.0.3&q=80&w=1080", // Galle coastline
  },
  {
    id: "nuwara-eliya-land",
    title: "Cool Hill Country Land in Nuwara Eliya",
    description:
      "Experience the cool climate and lush greenery with this land plot in the picturesque Nuwara Eliya region.",
    href: "https://example.com/nuwara-eliya-land",
    image:
      "https://images.unsplash.com/photo-1501761095870-5a9a9d31b54d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwyNnx8fHx8fDJ8fDE3MjM4MDY5Mzlf&ixlib=rb-4.0.3&q=80&w=1080", // Hill country tea fields
  },
  {
    id: "negombo-land",
    title: "Land Near Negombo Lagoon",
    description:
      "Strategically located land near Negombo lagoon, great for commercial or residential development.",
    href: "https://example.com/negombo-land",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwyN3x8fHx8fDJ8fDE3MjM4MDY5Mzlf&ixlib=rb-4.0.3&q=80&w=1080", // Lagoon or beach
  },
];

const City = ({
  title = "Sri Lankan Land Listings",
  description =
    "Explore prime land properties across Sri Lanka's top cities and regions. Find your perfect plot for residential or commercial development.",
  items = data,
}) => {
  const [carouselApi, setCarouselApi] = useState();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">{title}</h2>
            <p className="max-w-lg text-gray-600">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto border"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto border"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>

        {/* Carousel Section */}
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
          >
            <CarouselContent className="-ml-4">
              {items.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <a href={item.href} className="group block" target="_blank" rel="noreferrer">
                    <div className="group relative h-96 w-full overflow-hidden rounded-xl bg-gray-900">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white">
                        <div className="mb-2 text-xl font-semibold line-clamp-2">{item.title}</div>
                        <div className="mb-4 text-sm text-gray-200 line-clamp-2">{item.description}</div>
                        <div className="flex items-center text-sm font-medium">
                          Read more{" "}
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

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-gray-900" : "bg-gray-300"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { City };
