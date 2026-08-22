import { RiArrowRightLine } from '@remixicon/react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { accentBg } from '@/lib/accent';
import { news } from '@/lib/site-data';

export function NewsCarousel() {
  return (
    <Carousel opts={{ align: 'start', loop: true }} className="w-full">
      <CarouselContent className="-ml-6 pb-1">
        {news.map((item) => (
          <CarouselItem
            key={item.key}
            className="basis-full pl-6 sm:basis-1/2 lg:basis-1/4"
          >
            <Card className="h-full gap-0 p-0">
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="size-full object-cover"
                />
                <Badge
                  className={`absolute top-3 left-3 rounded-full border-0 uppercase ${accentBg[item.accent]} text-white`}
                >
                  {item.category}
                </Badge>
              </div>
              <CardContent className="flex-1 gap-1.5 pt-4">
                <CardTitle className="font-heading text-base leading-snug font-semibold text-foreground">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-xs">
                  {item.date}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-0 pb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="-ml-2.5 text-primary hover:bg-primary/10 hover:text-primary"
                  render={<a href={item.href} />}
                  nativeButton={false}
                >
                  Lees meer
                  <RiArrowRightLine className="size-4" />
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 -translate-x-1/2 max-lg:hidden" />
      <CarouselNext className="right-0 translate-x-1/2 max-lg:hidden" />
    </Carousel>
  );
}
