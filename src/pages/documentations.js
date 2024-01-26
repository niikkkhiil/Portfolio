import React from "react";
import Head from "next/head";
import AniText from "@/components/AniText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
// import lottie from "react-lottie";
// import data from "../../public/images/data";

// const defaultOption ={
//     loop: true,
//     autoplay: true,
//     animationData: Date,
//     rendererSetting: {
//         preserveAspectRatio: "xMidYMid slice",
//     },
// };

const documentations = ()=> {
    return (
        <>
        <Head>
                <title> RS | Documentations Page</title>
                <meta name="description" content="any description" />
            </Head>

            <TransitionEffect />

            <main>
                <Layout classname="pt-16" >
                <AniText text = " Words Can Change The World!" className="mb-16" />

                {/* <div>
                    <lottie options={defaultOption} height={400} width={400} />
                </div> */}

                </Layout>
            </main>
        </>
    )
}

export default documentations