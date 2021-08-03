import React from "react";
import loadable from "@loadable/component";

const FeaturedTestimonials = loadable(() =>
  import("Components/FeaturedTestimonials")
);
const Hero = loadable(() => import("Components/Hero"));
const FeaturedBenefits = loadable(() => import("Components/FeaturedBenefits"));
const FeaturedServices = loadable(() => import("Components/FeatServices"));
const MissionStatement = loadable(() => import("Components/MissionStatement"));
const FAQs = loadable(() => import("Components/FAQs"));
const VisualList = loadable(() => import("Components/VisualList"));
const HomeServices = loadable(() => import("Components/HomeServices"));
const MediaText = loadable(() => import("Components/MediaText"));

const BlockReturner = ({ block }) => {
  if (block !== {}) {
    if (block?.internal?.type === "ContentfulBlockPageHeader") {
      return (
        <Hero
          title={block.title}
          variant={block.variant}
          image={block.image}
          key={block.id}
        />
      );
    }
    if (block?.internal?.type === "ContentfulBlockFeaturedBenefits") {
      return (
        <FeaturedBenefits
          title={block.title}
          benefits={block.benefits}
          key={block.id}
        />
      );
    }
    if (block?.internal?.type === "ContentfulBlockFeaturedServices") {
      return <FeaturedServices services={block.services} id={block.id} />;
    }
    if (block?.internal?.type === "ContentfulBlockFeaturedServicesHome") {
      return (
        <HomeServices
          title={block.title}
          subTitle={block.subtitle}
          services={block.services}
        />
      );
    }
    if (block?.internal?.type === "ContentfulBlockMissionStatement") {
      return (
        <MissionStatement
          id={block.id}
          title={block.title}
          missionTitle={block.missionTitle}
          missionDescription={block.missionDescription.missionDescription}
          visionTitle={block.visionTitle}
          visionDescription={block.visionDescription.visionDescription}
        />
      );
    }
    if (block?.internal?.type === "ContentfulBlockFaq") {
      return (
        <FAQs
          id={block.id}
          title={block.title}
          variant={block.settingVariant}
          photo={block.photo}
          items={block.questions}
        />
      );
    }
    if (block?.internal?.type === "ContentfulBlockFeaturedTestimonials") {
      return (
        <FeaturedTestimonials
          id={block.id}
          title={block.title}
          items={block.testimonials}
        />
      );
    }
  }
  if (block !== {} && block?.internal?.type === "ContentfulBlockVisualList") {
    return (
      <VisualList
        id={block.id}
        title={block.title}
        variant={block.settingVariant}
        cards={block.items}
      />
    );
  }
  if (block !== {} && block?.internal?.type === "ContentfulBlockMediaText") {
    return (
      <MediaText
        id={block.id}
        title={block.title}
        content={block.content}
        photo={block.photo}
        imageSubCaption={block.imageSubCaption}
      />
    );
  }
  return <div key={block.id}>{block !== {} && block.title && block.title}</div>;
};

export default BlockReturner;
