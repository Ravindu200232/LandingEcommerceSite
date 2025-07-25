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
  heading = "Gallery",
  demoUrl = "https://www.shadcnblocks.com",
  items = [
    {
      id: "item-1",
      title: "Build Modern UIs",
      summary:
        "Create stunning user interfaces with our comprehensive design system.",
      url: "#",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-2",
      title: "Computer Vision Technology",
      summary:
        "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
      url: "#",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-3",
      title: "Machine Learning Automation",
      summary:
        "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
      url: "#",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-4",
      title: "Predictive Analytics",
      summary:
        "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
      url: "#",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-5",
      title: "Neural Network Architecture",
      summary:
        "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
      url: "#",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
  ]
}) => {
  const [carouselApi, setCarouselApi] = useState();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8 flex justify-between items-start md:items-end md:mb-14 lg:mb-16">
          <div>
            <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h2>
            <a
              href={demoUrl}
              className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg hover:underline">
              Book a demo
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto disabled:opacity-50">
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto disabled:opacity-50">
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
            className="w-full">
            <CarouselContent className="-ml-6">
              {items.map((item) => (
                <CarouselItem 
                  key={item.id} 
                  className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
                >
                  <a href={item.url} className="group block h-full">
                    <div className="flex flex-col h-full">
                      {/* Image Section */}
                      <div className="aspect-[3/2] mb-4 overflow-hidden rounded-xl bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="flex flex-col flex-1">
                        <h3 className="mb-2 line-clamp-2 text-lg font-medium md:text-xl lg:text-2xl">
                          {item.title}
                        </h3>
                        
                        <p className="mb-6 line-clamp-3 text-sm text-gray-600 md:text-base flex-1">
                          {item.summary}
                        </p>
                        
                        <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                          Read more
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