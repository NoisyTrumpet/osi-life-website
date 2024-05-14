import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { Heading } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import RichText from "components/RichText";

type FeatureBlockProps = Queries.ContentfulBlockFeatures & {
  className?: string;
};

const Features = ({
  title,
  className,
  benefits,
  variant,
  backgroundColor,
}: FeatureBlockProps) => {
  const bgColor = `bg-${backgroundColor}`;

  return (
    <div className={twMerge(clsx(`py-4 md:py-8 z-[1]`, bgColor), className)}>
      <div className="container w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <Heading
            as="h2"
            className="text-3xl md:text-4xl font-bold text-center text-black"
          >
            {title}
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16">
            {benefits.map((benefit) => (
              <Card key={benefit.id} {...benefit} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

type CardProps = Queries.ContentfulCard & {
  className?: string;
  variant?: string;
};

const Card = ({
  title,
  subtitle,
  description,
  icon,
  accentColor,
  image,
  className,
}: CardProps) => {
  const textColor = `text-${accentColor}`;
  // only 50% of container height
  const bottomGradient = `bg-gradient-to-t-custom from-${accentColor} to-white`;

  return (
    <div
      className={clsx(`rounded-lg relative h-fit z-[1]`, bottomGradient, className)}
    >
      <div className="flex flex-col items-center gap-2">
        <div className={`flex flex-col gap-1 items-center justify-center px-2 py-2`}>
        <Heading
          as="h3"
          className={clsx("text-xl md:text-3xl font-bold", textColor)}
        >
          {title}
        </Heading>
        <p className="text-md md:text-xl">{subtitle}</p>
        <RichText
          content={description}
          className="text-center max-w-[75%] mx-auto"
        />
        </div>
        <div className={`pt-6 md:pt-12`}>
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={title}
            className={`w-full`}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
