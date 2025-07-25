import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const Option = ({
  heading = "Buy a property",
  description = "Nullam sollicitudin blandit eros eu pretium.Nullam maximus ultricies auctor.",
  buttonText = "View all articles",
  buttonUrl = "https://shadcnblocks.com",

  posts = [
    {
      id: "post-1",
      title: "Buy a property",
      summary:
        "Nullam sollicitudin blandit eros eu pretium.Nullam maximus ultricies auctor.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "/img/cat1.png",
    },
    {
      id: "post-2",
      title: "Building Accessible Web Applications",
      summary:
        "Nullam sollicitudin blandit eros eu pretium.Nullam maximus ultricies auctor.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
            image: "/img/cat2.png",
    },
    {
      id: "post-3",
      title: "Modern Design Systems with Tailwind CSS",
      summary:
        "Nullam sollicitudin blandit eros eu pretium.Nullam maximus ultricies auctor.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
            image: "/img/cat3.png",
    },
  ]
}) => {
  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          
          <h2
            className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p
            className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
          <Button variant="link" className="w-full sm:w-auto" asChild>
            <a href={buttonUrl} target="_blank">
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="grid w-[350px] border-none shadow-xl grid-rows-[auto_auto_1fr_auto] pt-0">
              <div className="aspect-16/9 w-full">
                <a
                  href={post.url}
                  target="_blank"
                  className="transition-opacity items-center justify-center flex duration-200 fade-in hover:opacity-70">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[200px] w-[200px] object-cover object-center" />
                </a>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <a href={post.url} target="_blank">
                    {post.title}
                  </a>
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
