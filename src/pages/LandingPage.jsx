import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Link } from 'react-router-dom';
import companies from "../data/companies.json";
import faqs from "@/data/faq.json";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-selection text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 text-selection sm:gap-6">
            and get{" "}
            <img
              src="./logo.png"
              alt="logo"
              className="h-14 text-selection sm:h-24 lg:h-32"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to={"/jobs"}>
          <Button size={"xl"} variant={"blue"}>
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button size={"xl"} variant={"destructive"}>
            Post a Jobs
          </Button>
        </Link>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10">
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <img src="/banner.jpeg" alt="banner" className="w-full" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for the jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Companies</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage application, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      <section className="w-full bg-[#0a0d16] rounded-md">
        <Accordion type="multiple" collapsible>
          {faqs.map(({ question, answer }, index) => (
            <AccordionItem
              key={index}
              className="hover:bg-[#050811] w-full px-5 py-[6px] rounded-md"
              value={`item-${index + 1}`}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>-- {answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}

export default LandingPage