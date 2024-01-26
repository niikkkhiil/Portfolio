import Layout from "@/components/Layout";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AniText from "@/components/AniText";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";


const AnimatedNumbers = ({value}) =>{
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 3000})
const isInView = useInView(ref, {once: true});

useEffect(() =>{
    if(isInView){
        motionValue.set(value);
    }

}, [isInView, value, motionValue])

useEffect(()=>{
    springValue.on("change", (latest) =>{
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
    })
}, [springValue, value])

    return <span ref={ref}>  </span>
}

const about = ()=>{
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name="description" content="any description" />
            </Head>

            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center">
                <Layout classname="pt-16">
                <AniText text="Passion Fuels Purpose!" className="mb-16"/>
                <div className="grid w-full grid-cols-8 gap-16">
                    <div className="col-span-3 flex flex-col items-start justify-start">
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                    <p className="font-medium">
                    Welcome to R S Digital Artistry, where creativity meets technology in a harmonious dance of pixels and imagination. As a passionate digital artist,
                    I weave vibrant narratives and evoke emotions through my digital brushstrokes.
                    With a profound love for the intersection of art and technology, each piece is a unique expression of my vision, bringing together 
                    the ethereal and the digital in a seamless blend.
                     
                    </p> 

                    <p className="my-4font-medium">
                    Explore my portfolio and immerse yourself in a world where every click unveils a new story, a new adventure.
                    Join me on this digital canvas, where art knows no bounds and creativity knows no limits
                     </p>   
                    </div>

                <div className="col-span-3 flex flex-col items-end justify-between">
                    <div className="flex flex-col items-end justify-center">
                        <span className="inline-block text-7xl font-bold">
                            <AnimatedNumbers value ={27} />+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75"> Satisfied clients</h2>
                    </div>

                    <div className="flex flex-col items-end justify-center">
                        <span className="inline-block text-7xl font-bold">
                        <AnimatedNumbers value ={17} />+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75"> Projects completed</h2>
                    </div>

                    <div className="flex flex-col items-end justify-center">
                        <span className="inline-block text-7xl font-bold">
                        <AnimatedNumbers value ={5} />+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75"> Years of experience</h2>
                    </div>
                </div>    

                </div>
                </Layout>
            </main>
        
        </>
    )
}

export default about