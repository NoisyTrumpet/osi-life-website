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
  accentColor,
}: FeatureBlockProps) => {
  const bgColor = `bg-${backgroundColor}`;
  const globalAccentColor = `bg-${accentColor}`;
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";

  return (
    <div className={twMerge(clsx(`py-4 md:py-8 z-[1]`, bgColor), className)}>
      <div className="container w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <div
            className={clsx(`flex`, {
              "flex-col justify-center items-center": isPrimary,
              "flex-row items-center justify-start": isSecondary,
            })}
          >
            <Heading
              as="h2"
              className="text-3xl md:text-4xl font-bold text-center text-black md:whitespace-nowrap"
            >
              {title}
            </Heading>
            {isSecondary && (
              <div
                className={clsx(
                  `w-full h-[2px] rounded-full ml-4`,
                  globalAccentColor,
                )}
              />
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-16 px-4 lg:px-0">
            {benefits.map((benefit) => (
              <Card 
                key={benefit.id} 
                {...benefit} 
                variant={variant}
                />
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
  variant,
  page
}: CardProps) => {
  const textColor = `text-${accentColor}`;
  // only 50% of container height
  const bottomGradient = `bg-gradient-to-t-custom from-${accentColor} to-white`;
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  console.log(page)


  return (
    <ConditionalWrapper
      className={clsx(
        `rounded-xl relative h-fit z-[1]`,
        isPrimary && bottomGradient,
        className,
      )}
      condition={isSecondary && page !== null}
      wrapper={(children) => (
        <a href={page?.slug} className={clsx(
          `rounded-xl relative h-fit z-[1]`,
          isPrimary && bottomGradient,
          className,
        )}>
          {children}
        </a>
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <div
          className={`flex flex-col gap-1 items-center justify-center px-2 py-2`}
        >
          <Heading
            as="h3"
            className={clsx("text-xl md:text-3xl font-bold", textColor)}
          >
            {title}
          </Heading>
          {subtitle && (<p className="text-md md:text-xl">{subtitle}</p>)}
          {isPrimary && (
            <RichText content={description} className="text-center px-6" />
          )}
        </div>
        <div className={clsx({
          "pt-6 md:pt-12": isPrimary,
          "order-first": isSecondary,
        })}>
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={title}
            className={clsx(`w-full`, {
              "rounded-lg": isSecondary
            })}
          />
        </div>
      </div>
    </ConditionalWrapper>
  );
};

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
  className,
}: {
  condition: boolean;
  wrapper: (children: React.ReactNode) => JSX.Element;
  children: React.ReactNode;
  className?: string;
}) =>
  condition ? wrapper(children) : <div className={className}>{children}</div>;

export default Features;
