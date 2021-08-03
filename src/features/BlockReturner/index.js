import React from "react";
// import loadable from "@loadable/component";
import Hero from "Components/Hero";
import FeaturedBenefits from "Components/FeaturedBenefits";
import FeaturedServices from "Components/FeaturedServices";
import MissionStatement from "Components/MissionStatement";
import FAQs from "Components/FAQs";
import FeaturedTestimonials from "Components/FeaturedTestimonials";
import MediaText from "Components/MediaText";
import VisualList from "Components/VisualList";
import TextBlock from "Components/TextBlock";
import Banner from "Components/Banner";

// const FeaturedTestimonials = loadable(() => import("Components/FeaturedTestimonials"));
// const Hero = loadable(() => import("Components/Hero"));
// const FeaturedBenefits = loadable(() => import("Components/FeaturedBenefits"));
// const FeaturedServices = loadable(() => import("Components/FeaturedServices"));
// const MissionStatement = loadable(() => import("Components/MissionStatement"));
// const FAQs = loadable(() => import("Components/FAQs"));
// const VisualList = loadable(() => import("Components/VisualList"));
// const MediaText = loadable(() => import("Components/MediaText"));

const BlockReturner = ({ block }) => {
  const isBrowser = typeof window !== `undefined`;
  if (block && block !== {}) {
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
      return (
        <FeaturedServices
          services={block.services}
          id={block.id}
          key={block.id}
        />
      );
    }
    if (block?.internal?.type === "ContentfulBlockMissionStatement") {
      return (
        <MissionStatement
          id={block.id}
          key={block.id}
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
          key={block.id}
          id={block.id}
          title={block.title}
          variant={block.settingVariant}
          photo={block.photo}
          items={block.questions}
        />
      );
    }
    if (block?.internal?.type === "ContentfulBlockText") {
      return (
        <TextBlock
          id={block.id}
          key={block.id}
          title={block.title}
          content={block.content}
        />
      );
    }
    if (block?.internal?.type === "ContentfulBlockBanner") {
      return (
        <Banner
          title={block.title}
          id={block.id}
          key={block.id}
          variant={block.settingVariant}
          cta={block.ctaButton}
          content={block.contentString}
        />
      );
    }
    if (block?.internal?.type === "ContentfulBlockFeaturedTestimonials") {
      return (
        <FeaturedTestimonials
          id={block?.id}
          title={block?.title}
          items={block?.testimonials}
          key={block?.id}
        />
      );
    }
    if (block?.internal?.type === "ContentfulBlockMediaText") {
      return (
        <MediaText
          key={block.id}
          id={block.id}
          title={block.title}
          content={block.content}
          photo={block.photo}
          imageSubCaption={block.imageSubCaption}
        />
      );
    }
    if (block?.internal?.type === "ContentfulBlockVisualList") {
      return (
        <VisualList
          key={block.id}
          id={block.id}
          title={block.title}
          variant={block.settingVariant}
          cards={block.items}
        />
      );
    }
  }

  if (block === {}) {
    return <div key="empty block">Empty Block</div>;
  }

  return <div key={block.id}>{block !== {} && block.title && block.title}</div>;
};

export default BlockReturner;
