import React from "react";
import { HeadFC } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import ButtonStyledLink from "../components/button-styled-link";

const RsvpPage = () => {
  return (
    <Layout pageTitle="RSVP">
      <form
        action="https://getform.io/f/bvreymjb"
        className="md:w-72 text-left"
        method="POST"
      >
        <div>
          <label className="block" htmlFor="name">
            Name:
          </label>
          <input
            className="focus:outline-none focus:ring-2 focus:ring-elephant mt-1 px-4 py-2 w-full"
            id="name"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="mt-5">
          <label className="block" htmlFor="email">
            Email:
          </label>
          <input
            className="focus:outline-none focus:ring-2 focus:ring-elephant mt-1 px-4 py-2 w-full"
            id="email"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="mt-5">
          <input
            type="checkbox"
            id="attending"
            name="attending"
            required
            value="yes"
          />
          <label className="ml-2" htmlFor="attending">
            I will attend
          </label>
        </div>
        <div className="mt-5">
          <label className="block" htmlFor="message">
            Message:
          </label>
          <textarea
            className="mt-1 w-full px-4 py-2"
            id="message"
            name="message"
          />
        </div>
        <div className="content-center flex flex-row justify-end mt-7">
          <div className="flex flex-col justify-center">
            <input
              className="cursor-pointer h-fit hover:text-elephant-darker text-elephant-dark"
              type="reset"
              value="Clear"
            />
          </div>
          <button
            className="active:bg-elephant bg-elephant-dark cursor-pointer font-lato hover:bg-elephant-darker ml-7 p-1 text-elephant-lighter w-fit"
            type="submit"
          >
            <div className="border border-elephant-lighter py-1 px-4">Send</div>
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default RsvpPage;

export const Head: HeadFC = () => <Seo title="RSVP" />;
