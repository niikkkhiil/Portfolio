import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AniText from "@/components/AniText";
import Link from "next/link";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";



const FeaturedProject = (img,link)=>{

    return (
        <article>

            <Link href={link} target="_blank">
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div>
                <span>{type}</span>
                <Link href={link} target="_blank">
                <h2>{title}</h2>
            </Link>
            <p>{summary}</p>

            </div>


        </article>
    )
}

const project = ()=>{
    return (
        <>
        <Head>
                <title>RS | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>

            <TransitionEffect />

        <main className="w-full mb-16 flex flex-col items-center justify-center">
            <Layout classname="pt-16">
                <AniText text =" Into The DigiGlimpse"/>

                <div className="grid grid-cols-12 gap-24">

                    <div className="col-span-12">
                        Featured Projects
                    </div>
                    <div className="col-span-6">
                        Project-1
                    </div>
                    <div className="col-span-6">
                        Project-2
                    </div>

                </div>
            </Layout>
            </main>    
        </>
    )
}

export default project