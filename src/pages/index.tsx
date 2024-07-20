import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
    return (
        <Layout>
            <h1 className="sr-only">Welcome</h1>
            <StaticImage
                alt="Drawing of an elephant and a rabbit"
                className="w-full"
                src="../images/elephant-and-rabbit.png"
            />
            <section className="text-md lg:text-lg">
                <h2 className="sr-only">Invitation & Overview</h2>
                <p className="mt-3">
                    We would be honoured if you could join us at our wedding.
                </p>
                <p className="mt-3">
                    The wedding will take place on Saturday, 23rd November 2024,
                    in Hong Kong.
                </p>
                <p className="mt-3">
                    The ceremony will be held in a Catholic church in Angela’s
                    home town of Tsuen Wan. We will then move to a hotel in Tsim
                    Sha Tsui by coach for the reception.
                </p>
                <p className="mt-3">
                    Please wear whatever you feel comfortable in.
                </p>
            </section>
            <section className="mt-5">
                <h2 className="sr-only">Schedule & Addresses</h2>
                <section className="mt-10">
                    <h3 className="font-raleway text-2xl tracking-wider lg:text-3xl">
                        Ceremony
                    </h3>
                    <dl className="text-md mt-5 lg:text-lg">
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
                    <h3 className="font-raleway text-2xl tracking-wider lg:text-3xl">
                        Reception
                    </h3>
                    <dl className="text-md mt-5 lg:text-lg">
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
        </Layout>
    );
};

export default IndexPage;

export const Head = () => (
    <>
        <body className="bg-elephant-lighter p-5 text-center font-lato font-light text-elephant-darker" />
        <Seo
            title="Welcome"
            description="Welcome to Angela and Zou's wedding website. Enter your unique code to access the site."
        />
    </>
);
