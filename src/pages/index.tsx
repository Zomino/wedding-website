import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="bg-elephant-lighter font-light text-center text-elephant-darker">
      <header className="relative">
          <button className="
              absolute
              bg-elephant-darker
              right-5
              text-elephant-lighter
              top-5
              w-fit
              p-1
          ">
              <div className="border border-elephant-lighter py-2 px-5">RSVP</div>
          </button>
          <h1 className="
              absolute
              bg-elephant-lighter
              font-raleway
              py-7
              px-10
              text-3xl
              top-2/3
              tracking-wider
              w-screen

              md:left-1/2
              md:-translate-x-1/2
              md:w-auto
              md:text-4xl
          ">
              Angela & Zou
          </h1>
          <picture>
              <source srcSet="http://via.placeholder.com/1920x1080" media="(min-width: 768px)" />
              <img src="http://via.placeholder.com/640x960" alt="Placeholder" className="w-screen" />
          </picture>
      </header>
      <main className="flex flex-col mt-5 p-5 max-w-xs md:max-w-lg mx-auto text-center">
        <section className="font-lato text-lg">
          <h2 className="sr-only">Invitation & Overview</h2>
          <p className="mt-3">We would be honoured if you could join us at our wedding.</p>
          <p className="mt-3">The wedding will take place on Saturday, 23rd November 2024, in Hong Kong.</p>
          <p className="mt-3">The ceremony will be held in a Catholic church in Angela’s home town of Tsuen Wan. We will then move to a hotel in Tsim Sha Tsui by coach for the reception.</p>
          <p className="mt-3">Please wear whatever you feel comfortable in.</p>
        </section>
        <section className="mt-5">
          <h2 className="sr-only">Schedule & Addresses</h2>
          <section className="mt-10">
            <h3 className="font-raleway text-3xl tracking-wider">Ceremony</h3>
            <dl className="font-lato mt-5 text-lg">
              <dt className="sr-only">Time</dt>
              <dd>
                <time>15:00</time>
              </dd>
              <dt className="sr-only">Address</dt>
              <dd className="mt-3">
                <address>
                  SS. Cosmas & Damian Catholic Church<br />
                  Tsuen Wan Catholic Primary School<br />
                  37-41 Tak Wah St<br />
                  Tsuen Wan<br />
                  Hong Kong
                </address>
              </dd>
            </dl>
          </section>
          <section className="mt-10">
            <h3 className="font-raleway text-3xl tracking-wider">Reception</h3>
            <dl className="font-lato mt-5 text-lg">
              <dt className="sr-only">Time</dt>
              <dd>
                <time>18:00</time>
              </dd>
              <dt className="sr-only">Address</dt>
              <dd className="mt-3">
                <address>
                  Kowloon Shangri-La Hotel<br />
                  64 Mody Rd<br />
                  Tsim Sha Tsui<br />
                  Hong Kong
                </address>
              </dd>
            </dl>
          </section>
        </section>
      </main>
      <footer className="mt-20">
        <p className="font-lato">&copy; 2024 Zou Minowa. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Angela & Zou</title>
    <meta name="author" content="Zou Minowa" />
    <meta name="description" content="Angela Chan and Zou Minowa's wedding website" />
  </>
)
