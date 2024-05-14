import React from "react";
import { useLocation } from "@reach/router";
import Hero from "components/Hero";
import FeaturedBenefits from "components/FeaturedBenefits";
import FeaturedServices from "components/FeaturedServices";
import MissionStatement from "components/MissionStatement";
import FAQs from "components/FAQs";
import FeaturedTestimonials from "components/FeaturedTestimonials";
import MediaText from "components/MediaText";
import VisualList from "components/VisualList";
import TextBlock from "components/TextBlock";
import Banner from "components/Banner";
import ServiceHero from "components/ServicesHero";
import HomeServices from "components/HomeServices";
import NewHero from "components/NewHero/NewHero";

const BlockReturner = ({ block }) => {
  const { pathname } = useLocation();
  if (block) {
    // New Hero
    if (block?.internal?.type === "ContentfulBlockNewHero") {
      return <NewHero {...block} key={block.id} />;
    }

    if (
      block?.settingVariant === "Primary" &&
      block?.internal?.type === "ContentfulBlockPageHeader"
    ) {
      return (
        <Hero
          title={block.title}
          variant={block.variant}
          image={block.image}
          key={block.id}
        />
      );
    }
    if (
      block?.internal?.type === "ContentfulBlockPageHeader" &&
      block?.settingVariant === "Secondary"
    ) {
      return (
        <ServiceHero
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
          icon={block.icon}
        />
      );
    }
    if (block?.internal?.type === "ContentfulBlockFeaturedServices") {
      return (
        <FeaturedServices
          services={block.services}
          id={block.id}
          key={block.id}
          path={pathname}
        />
      );
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
          path={pathname}
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
          variant={block.settingVariant}
          path={pathname}
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

  if (!block) {
    return <div key="empty block">Empty Block</div>;
  }

  return <div key={block.id}>{block.title && block.title}</div>;
};

export default BlockReturner;
