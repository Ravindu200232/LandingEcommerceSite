import { ArrowRight } from "lucide-react";


import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

const Option = ({
  heading = "Explore Land Options",
  description = "Find the perfect land solution—whether you're buying, selling, or renting. We offer a secure and streamlined experience tailored for you.",
  buttonText = "View all listings",
  buttonUrl = "/",

  posts = [
    {
      id: "land-buy",
      title: "Buy a Land",
      summary: "Browse a wide selection of lands for sale in your preferred area with verified ownership and fair pricing.",
      label: "Buy",
      author: "Govimithuru.lk",
      published: "1 Aug 2025",
      url: "/property",
      image: "/img/buy.png",
    },
    {
      id: "land-sell",
      title: "Sell a Land",
      summary: "List your land with us and reach genuine buyers across the country with ease and transparency.",
      label: "Sell",
      author: "Govimithuru.lk",
      published: "1 Aug 2025",
      url: "/addProperty",
      image: "/img/sell.png",
    },
    {
      id: "land-rent",
      title: "Rent a Land",
      summary: "Find or list lands for short-term or long-term rental for farming, construction, or other needs.",
      label: "Rent",
      author: "Govimithuru.lk",
      published: "1 Aug 2025",
      url: "/",
      image: "/img/rent.png",
    },
  ]
}) => {
  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
          <Button variant="link" className="w-full sm:w-auto" asChild>
            <Link href={buttonUrl} target="_blank">
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="grid w-[350px] border-none shadow-xl grid-rows-[auto_auto_1fr_auto] pt-0">
              <div className="aspect-16/9 w-full">
                <Link
                  href={post.url}
                  target="_blank"
                  className="transition-opacity items-center justify-center flex duration-200 fade-in hover:opacity-70">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[200px] w-[200px] object-cover object-center" />
                </Link>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <Link href={post.url} target="_blank">
                    {post.title}
                  </Link>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={post.url}
                  target="_blank"
                  className="flex items-center text-foreground hover:underline">
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Option };
