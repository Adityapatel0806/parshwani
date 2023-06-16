import React from "react";
import { useParams } from "react-router-dom";

import { data } from "./newjson";
import { Card } from "react-bootstrap";

import tw from "twin.macro";

import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import MainFeature from "components/features/TwoColWithButton.js";

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center  mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card1 = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

function SingleProduct() {
  // const data = [
  //   { id:1, name: "Baked Salmon" },
  //   { id:2, name: "Grilled Salmon" },
  // ];
  const { name } = useParams();

  const result = data.find((product) => product.name === name);
  console.log( data.find((product) => product.id === name))
  // data.fi
  //   console.log(result);
  const imageContainerCss = null;
  const imageCss = null;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

  return (
    <Container>
      <ContentWithPaddingXl style={{ padding: "0.1rem" }}>
        <Heading>
          {" "}
          <HighlightedText>{name}</HighlightedText>
        </Heading>
        <Heading style={{ fontSize: "1.8rem", marginTop: "5px" }}>
          {result.type}
        </Heading>

        <MainFeature
          subheading=" Products Overview"
          description={
            <ul>
              {result.overview.map((product) => (
                <li
                  style={{
                    display: "flex",
                    margin: "0.5rem 0rem",
                    borderBottom: "none",
                    textAlign:"left"
                  }}
                >
                  {product}
                </li>
              ))}
            </ul>
          }
          buttonRounded={false}
          textOnLeft={false}
          primaryButtonText="Latest Offers"
          imageSrc={
            "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
          }
          imageCss={imageCss}
          imageDecoratorBlob={true}
          imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
        />
        {console.log(result)}
        <Subheading style={{ fontSize: "2rem" }}>Applications</Subheading>
        <ThreeColumnContainer>
          {result.Applications.map((s) => (
            <Column>
              <Card1 href="#">
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={s.image} alt="" css={imageCss} />
                </span>
                <span className="title">{s.title}</span>
              </Card1>
            </Column>
          ))}
        </ThreeColumnContainer>
        <Subheading style={{ fontSize: "2rem", marginBottom: "2rem" }}>
          Specifications
        </Subheading>
        <Container>
          <table class="table table-striped">
            <tbody>
              {result.specifications.map((product) => (
                <tr>
                  <td>{product.title}</td>
                  <td>{product.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </ContentWithPaddingXl>
    </Container>
  );
}

export default SingleProduct;
