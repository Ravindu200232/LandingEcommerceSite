import { Button } from "@/components/ui/button";

const defaultCompanies = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Brandix_Logo.svg/2560px-Brandix_Logo.svg.png",
    alt: "Brandix",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/John_Keells_Holdings_Logo.svg/2560px-John_Keells_Holdings_Logo.svg.png",
    alt: "John Keells Holdings",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/HSBC_logo_%282018%29.svg/2560px-HSBC_logo_%282018%29.svg.png",
    alt: "HSBC Sri Lanka",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Dilmah_Logo.svg/1200px-Dilmah_Logo.svg.png",
    alt: "Dilmah",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Ceylon_Tobacco_Company_logo.svg/2560px-Ceylon_Tobacco_Company_logo.svg.png",
    alt: "Ceylon Tobacco Company",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/National_Bank_of_Sri_Lanka_logo.svg/2560px-National_Bank_of_Sri_Lanka_logo.svg.png",
    alt: "National Bank of Sri Lanka",
  },
];

const defaultAchievements = [
  { label: "Companies Supported", value: "150+" },
  { label: "Projects Finalized", value: "400+" },
  { label: "Happy Customers", value: "98%" },
  { label: "Recognized Awards", value: "8+" },
];

const About3 = ({
  title = "About PropEstate Sri Lanka",
  description =
    "PropEstate Sri Lanka is dedicated to providing innovative real estate solutions that empower homebuyers and sellers across the island. We bring local expertise and global standards together.",
  mainImage = {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Modern Sri Lanka cityscape",
  },
  secondaryImage = {
    src: "https://images.unsplash.com/photo-1556228724-cf6714e2c49f?auto=format&fit=crop&w=600&q=80",
    alt: "Traditional Sri Lankan architecture",
  },
  breakout = {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Brandix_Logo.svg/2560px-Brandix_Logo.svg.png",
    alt: "logo",
    title: "Hundreds of Properties Listed in Sri Lanka",
    description:
      "Connecting buyers and sellers across Colombo, Kandy, Galle, and beyond with trusted real estate listings.",
    buttonText: "Explore Listings",
    buttonUrl: "https://www.propetate.lk/listings",
  },
  companiesTitle = "Trusted by Leading Sri Lankan Brands",
  companies = defaultCompanies,
  achievementsTitle = "Our Achievements in Sri Lanka",
  achievementsDescription =
    "We take pride in our local impact and commitment to excellence in real estate.",
  achievements = defaultAchievements,
} = {}) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="w-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <img src={breakout.src} alt={breakout.alt} className="mr-auto h-12" />
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto" asChild>
                <a href={breakout.buttonUrl} target="_blank" rel="noopener noreferrer">
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
        <div className="py-32">
          <p className="text-center">{companiesTitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {companies.map((company, idx) => (
              <div className="flex items-center gap-3" key={company.src + idx}>
                <img src={company.src} alt={company.alt} className="h-6 w-auto md:h-8" />
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
            <p className="max-w-xl text-muted-foreground">{achievementsDescription}</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p>{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl">{item.value}</span>
              </div>
            ))}
          </div>
          <div
            className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"
          ></div>
        </div>
      </div>
    </section>
  );
};

export { About3 };
