import PhotoWrapper from "svg/PhotoWrapper.js";
import RichText from "components/RichText/index.js";
import React from "react";
import { Button, Heading } from "@chakra-ui/react";
import HandCross from "svg/HandCross";
import Computer from "svg/Computer";
import Hand from "svg/Hand";
import Medicine from "svg/Medicine";

type NewHeroBlockProps = Queries.ContentfulBlockNewHero & {
  className?: string;
};

const Icon = ({ type, className }: { type: string; className: string }) => {
  switch (type) {
    case "hand":
      return <Hand className={className} />;
    case "computer":
      return <Computer className={className} />;
    case "medicine":
      return <Medicine className={className} />;
    default:
      return null;
  }
};

const NewHero = ({
  bodyText,
  className,
  button,
  mediaItems,
  wins,
  bottomTitle,
}: NewHeroBlockProps) => {
  const hasMediaItems = mediaItems && mediaItems.length > 0;

  const imageClasses = [
    `absolute top-0 md:-top-12 left-2 h-fit  z-0 w-1/2`,
    `absolute top-[10%] right-0 h-fit  z-0 w-1/2`,
    `absolute bottom-0 left-[18%] h-fit z-0 w-1/2`,
  ];

  return (
    <div className="bg-primary relative overflow-hidden">
      <div
        className={`py-8 md:py-12 container w-full max-w-8xl mx-auto flex flex-col lg:flex-row relative`}
      >
        <div className={`w-full lg:w-[50%] flex flex-col gap-2 z-[1]`}>
          <RichText
            content={bodyText}
            className={`text-white `}
            color={"white"}
            textClassName={`text-6xl`}
          />
          <Button
            variant={button.variant}
            href={button.link as string}
            as="a"
            className={`w-fit min-w-[150px] max-w-full`}
          >
            {button.label}
          </Button>
        </div>
        <div
          className={`w-full lg:w-[50%] relative min-h-[550px] lg:bg-primary z-[1]`}
        >
          {hasMediaItems &&
            mediaItems.map((mediaItem, index) => (
              <PhotoWrapper
                key={`${mediaItem.id}-${index}`}
                image={mediaItem}
                safariSource={mediaItem.file.url}
                width={mediaItem.gatsbyImageData.width}
                height={mediaItem.gatsbyImageData.height}
                id={mediaItem.id}
                fillColor={"transparent"}
                crossColor={"transparent"}
                imageFlip={`1`}
                imgAlt={undefined}
                crossesFlip={undefined}
                className={imageClasses[index]}
              />
            ))}
        </div>
      </div>
      <div
        className={`container max-w-6xl mx-auto py-6 flex flex-col gap-2 lg:gap-4 z-[2] relative lg:-mt-24`}
      >
        <Heading
          as="h2"
          className={`text-white text-2xl md:text-4xl text-center`}
        >
          {bottomTitle}
        </Heading>
        <div className={`bg-white rounded-lg px-2 py-4 md:py-12 mx-4 lg:mx-0`}>
          <div className={`flex flex-col lg:flex-row gap-2`}>
            {wins.items.map((win) => (
              <div
                key={win.label}
                className={`flex flex-col md:flex-row gap-2 items-center px-4 md:px-12`}
              >
                <Icon type={win.icon} className={`w-12 h-12 md:w-32`} />
                <Heading
                  as="h3"
                  className={`text-xl lg:text-2xl text-center md:text-left`}
                >
                  {win.label}
                </Heading>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`w-[250px] absolute bottom-[15%] left-0 z-[0]`}>
        <HandCross fillColor="rgba(255,255,255,0.4)" />
      </div>
      <div className={`w-[250px] absolute -bottom-4 left-[15%] z-[0]`}>
        <HandCross fillColor="rgba(255,255,255,0.4)" />
      </div>
    </div>
  );
};

export default NewHero;
