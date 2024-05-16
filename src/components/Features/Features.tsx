import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { Heading } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import RichText from "components/RichText";
import RightArrow from "svg/RightArrow";

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
  const isAlt = variant === "alt";
  const titleColor =
    backgroundColor === "primary" || backgroundColor === "secondary"
      ? "text-white"
      : "text-darkGray";

  return (
    <div className={twMerge(clsx(`py-4 md:py-8 z-[1]`, bgColor), className)}>
      <div className="container w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <div
            className={clsx(`flex px-2 md:px-0`, {
              "flex-col justify-center items-center": isPrimary || isAlt,
              "flex-row items-center justify-start": isSecondary,
            })}
          >
            <Heading
              as="h2"
              className={clsx(
                `text-3xl md:text-4xl font-light text-center whitespace-nowrap`,
                titleColor,
              )}
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
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 px-4 lg:px-0 relative h-full">
            {benefits.map((benefit) => (
              <Card
                key={benefit.id}
                {...benefit}
                variant={variant}
                className={clsx(`w-full md:w-1/3 h-full flex-grow flex`, )}
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
  page,
}: CardProps) => {
  const textColor = `text-${accentColor}`;
  // only 50% of container height
  const bottomGradient = `bg-gradient-to-t-custom from-${accentColor} to-white`;
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const isAlt = variant === "alt";
  const hasLink = page !== null;

  return (
    <ConditionalWrapper
      className={clsx(
        `rounded-xl relative h-full z-[1]`,
        isPrimary && bottomGradient,
        className,
        {
          "bg-white px-4 py-6": isAlt,
        },
      )}
      condition={isSecondary && page !== null}
      wrapper={(children) => (
        <a
          href={page?.slug}
          className={clsx(
            `rounded-xl relative h-full z-[1]`,
            isPrimary && bottomGradient,
            className,
          )}
        >
          {children}
        </a>
      )}
    >
      <div className="flex flex-col items-center gap-2 justify-bewteen h-full">
        <div
          className={`flex flex-col gap-2 md:gap-6 items-center justify-center h-full px-2 py-2`}
        >
          {isAlt && icon && icon.gatsbyImageData && (
            <div className={`aspect-square flex flex-col items-center justify-center`}>
              <GatsbyImage
              image={icon?.gatsbyImageData}
              alt={title}
              className={clsx(`w-full`, {
                "rounded-lg": isSecondary,
                "max-w-24": isAlt,
              })}
            />
            </div>
          )}
          <Heading
            as="h3"
            className={clsx(
              "text-xl md:text-3xl font-light text-center relative",
              textColor,
              {
                "md:max-w-[80%] mx-auto": isSecondary,
              },
            )}
          >
            {title}
            {hasLink && (
            <RightArrow className={clsx("ml-1 md:ml-0 w-3 h-3 md:w-4 md:h-4 inline-flex md:absolute right-0 bottom-2", textColor)} />
          )}
          </Heading>
          {subtitle && (
            <p className="text-md md:text-lg text-center">{subtitle}</p>
          )}
          {(isPrimary || isAlt) && (
            <RichText
              content={description}
              className={clsx({
                "text-center max-w-[85%] mx-auto": isPrimary,
              })}
            />
          )}
        </div>
        <div
          className={clsx({
            "order-first": isSecondary,
          })}
        >
          {image && image.gatsbyImageData && (
            <GatsbyImage
              image={image?.gatsbyImageData}
              alt={title}
              className={clsx(`w-full`, {
                "rounded-lg": isSecondary,
                "mt-6 md:mt-12": isPrimary
              })}
            />
          )}
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
