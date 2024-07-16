import type { HeadFC } from "gatsby";
import React from "react";

import ButtonStyledLink from "../components/button-styled-link";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <>
      <header className="font-raleway relative tracking-wider">
        <ButtonStyledLink className="absolute right-5 top-5" to="/rsvp">
          RSVP
        </ButtonStyledLink>
        <h1 className="absolute bg-elephant-lighter py-7 px-10 text-3xl top-2/3 w-screen md:left-1/2 md:-translate-x-1/2 md:text-4xl md:w-auto">
          Angela & Zou
        </h1>
        <picture>
          <source
            srcSet="http://via.placeholder.com/1920x1080"
            media="(min-width: 768px)"
          />
          <img
            src="http://via.placeholder.com/640x960"
            alt="Placeholder"
            className="w-screen"
          />
        </picture>
      </header>
      <main className="flex flex-col font-lato max-w-xs mt-5 mx-auto p-5 md:max-w-lg">
        <section className="text-lg">
          <h2 className="sr-only">Invitation & Overview</h2>
          <p className="mt-3">
            We would be honoured if you could join us at our wedding.
          </p>
          <p className="mt-3">
            The wedding will take place on Saturday, 23rd November 2024, in Hong
            Kong.
          </p>
          <p className="mt-3">
            The ceremony will be held in a Catholic church in Angela’s home town
            of Tsuen Wan. We will then move to a hotel in Tsim Sha Tsui by coach
            for the reception.
          </p>
          <p className="mt-3">Please wear whatever you feel comfortable in.</p>
        </section>
        <section className="mt-5">
          <h2 className="sr-only">Schedule & Addresses</h2>
          <section className="mt-10">
            <h3 className="font-raleway text-3xl tracking-wider">Ceremony</h3>
            <dl className="mt-5 text-lg">
              <dt className="sr-only">Time</dt>
              <dd>
                <time>15:00</time>
              </dd>
              <dt className="sr-only">Address</dt>
              <dd className="mt-3">
                <address>
                  SS. Cosmas & Damian Catholic Church
                  <br />
                  Tsuen Wan Catholic Primary School
                  <br />
                  37-41 Tak Wah St
                  <br />
                  Tsuen Wan
                  <br />
                  Hong Kong
                </address>
              </dd>
            </dl>
          </section>
          <section className="mt-10">
            <h3 className="font-raleway text-3xl tracking-wider">Reception</h3>
            <dl className="mt-5 text-lg">
              <dt className="sr-only">Time</dt>
              <dd>
                <time>18:00</time>
              </dd>
              <dt className="sr-only">Address</dt>
              <dd className="mt-3">
                <address>
                  Kowloon Shangri-La Hotel
                  <br />
                  64 Mody Rd
                  <br />
                  Tsim Sha Tsui
                  <br />
                  Hong Kong
                </address>
              </dd>
            </dl>
          </section>
        </section>
      </main>
      <footer className="mt-20">
        <p className="font-lato">
          &copy; 2024 Zou Minowa. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;
