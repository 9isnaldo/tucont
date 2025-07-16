import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];
type CarouselPlugin = Parameters<typeof useEmblaCarousel>[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
  children?: React.ReactNode;
};

const CarouselContext = React.createContext<{
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
} | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      opts = {},
      plugins,
      orientation = "horizontal",
      autoplay = true,
      autoplayInterval = 3000,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
        loop: true,
        duration: 40, // Suaviza a transição entre slides
      },
      plugins
    );

    const timerRef = React.useRef<NodeJS.Timeout>();
    const [isPlaying, setIsPlaying] = React.useState(autoplay);

    const scrollNext = React.useCallback(() => {
      if (!api) return;
      api.scrollNext();
    }, [api]);

    const startAutoplay = React.useCallback(() => {
      if (!autoplay || !api) return;
      stopAutoplay();
      setIsPlaying(true);
      timerRef.current = setInterval(() => {
        scrollNext();
      }, autoplayInterval);
    }, [autoplay, api, autoplayInterval, scrollNext]);

    const stopAutoplay = React.useCallback(() => {
      setIsPlaying(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }, []);

    React.useEffect(() => {
      if (!api) return;
      
      if (autoplay) {
        startAutoplay();
      }
      return () => {
        stopAutoplay();
      };
    }, [api, autoplay, startAutoplay, stopAutoplay]);

    const handleMouseEnter = () => {
      if (autoplay) {
        stopAutoplay();
      }
    };

    const handleMouseLeave = () => {
      if (autoplay) {
        startAutoplay();
      }
    };

    return (
      <CarouselContext.Provider value={{ carouselRef, api }}>
        <div
          ref={ref}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

export { Carousel, CarouselContent, CarouselItem };