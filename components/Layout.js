import React from "react";
import PropTypes from 'prop-types';
import Head from "next/head";

export default function Layout(props) {
    return (
        <div className="layout">
            <Head>
                <title>{props.title}</title>
                <meta
                    name="Deriv Frontend Visitors Card hackathon"
                    content="A visitor card with a QR code, made with React and NextJS"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>{props.children}</main>
            <footer>
                <div className="container">
                    <p> Made with ❤️ by Hugs For Bugs </p>
                    </div>
            </footer>
        </div>
    )
}

Layout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}