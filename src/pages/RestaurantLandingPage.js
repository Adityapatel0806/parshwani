import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";


import aboutUS from "images/about-us.png";
import { services } from "./services";


export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Reliable Partners for{" "}
            <HighlightedText>Your Filter, Pumping & Electrical Panel Needs.</HighlightedText>
          </>
        }
        description="Authorize Dealer for AAF Air Filters, EBARA Pumps & Manufacturers of IGENT Industrial electric panels."
        imageSrc="http://www.parshwamiengineers.com/assets/img/hero-img.png"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Explore Products"
        watchVideoButtonText="Meet The Chefs"
        primaryButtonUrl="/products"
      />
      <MainFeature
        subheading={<Subheading>Established Since 2018</Subheading>}
        heading={
          <>
            We've been serving for
            <wbr /> <HighlightedText>over 5+ years.</HighlightedText>
          </>
        }
        description={
          <Description>
            We are your reliable partner for all your filter, pumping, and electrical panel needs. As an authorized dealer for AAF Air Filters and EBARA Pumps, and manufacturers of IGENT Industrial electric panels, we offer high-quality products and exceptional service. With our expertise and dedication, we provide efficient solutions that optimize performance and ensure the smooth operation of your systems. Trust us to deliver reliable products, expert guidance, and unparalleled customer satisfaction. Choose us as your trusted partner and power your success today.
            <br />
            <br />
            At our company, we believe in delivering excellence through innovation. We constantly stay at the forefront of industry advancements to bring you the latest technologies and solutions. Our team of experienced professionals combines technical expertise with a deep understanding of your unique requirements. We are passionate about helping you achieve your goals by providing customized solutions that enhance efficiency, reduce downtime, and maximize productivity. Partner with us and experience the perfect synergy of quality, reliability, and innovation in every aspect of our service.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={aboutUS}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

      <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={services}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Our <HighlightedText>Products.</HighlightedText>
          </>
        }
      />

      {/* <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
            Why <HighlightedText>Choose Us ?</HighlightedText>
          </>
        }
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+",
          },
          {
            key: "Chefs",
            value: "1500+",
          },
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      /> */}
      <Testimonial
        subheading=""
        heading={
          <>
            Customers <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      />

      <Footer />
    </AnimationRevealPage>
  );
}
