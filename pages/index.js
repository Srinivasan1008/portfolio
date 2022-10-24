import Head from 'next/head'
import { VscColorMode } from 'react-icons/vsc'
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaInstagramSquare, FaPhoneSquareAlt } from 'react-icons/fa'
import Image from 'next/image'
import profilePic from '../public/profilePic.png'
import { useEffect, useState } from 'react'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import toast from "../components/Toast";
import download from '../public/download.png';
import axios from "axios";
import { IoMdMail } from "react-icons/io";


import portrait1 from '../public/images/portraits/portrait1.png';
import portrait2 from '../public/images/portraits/portrait2.jpg';
import portrait3 from '../public/images/portraits/portrait3.jpg';
import portrait6 from '../public/images/portraits/portrait6.jpg';
import portrait7 from '../public/images/portraits/portrait7.jpg';
import portrait8 from '../public/images/portraits/portrait8.jpg';

import pixelArt1 from '../public/images/pixelArt/pixelArt1.png';
import pixelArt2 from '../public/images/pixelArt/pixelArt2.png';
import pixelArt3 from '../public/images/pixelArt/pixelArt3.png';
import pixelArt4 from '../public/images/pixelArt/pixelArt4.png';
import pixelArt5 from '../public/images/pixelArt/pixelArt5.png';
import pixelArt6 from '../public/images/pixelArt/pixelArt6.png';
import pixelArt7 from '../public/images/pixelArt/pixelArt7.jpg';

import sketch1 from '../public/images/Sketching/sketch1.jpg';
import sketch2 from '../public/images/Sketching/sketch2.jpg';

import stipplingArt1 from '../public/images/StipplingArt/stipplingArt1.jpg';
import stipplingArt2 from '../public/images/StipplingArt/stipplingArt2.jpg';
import stipplingArt3 from '../public/images/StipplingArt/stipplingArt3.jpg';
import stipplingArt4 from '../public/images/StipplingArt/stipplingArt4.jpg';
import stipplingArt5 from '../public/images/StipplingArt/stipplingArt5.jpg';

import origami1 from '../public/images/origami/origami1.jpg';
import origami2 from '../public/images/origami/origami2.png';
import origami3 from '../public/images/origami/origami3.jpg';
import origami4 from '../public/images/origami/origami4.jpg';
import origami5 from '../public/images/origami/origami5.jpg';
import origami6 from '../public/images/origami/origami6.jpg';
import origami7 from '../public/images/origami/origami7.jpg';
import origami8 from '../public/images/origami/origami8.jpg';
import origami9 from '../public/images/origami/origami9.jpg';
import origami10 from '../public/images/origami/origami10.jpg';
import origami11 from '../public/images/origami/origami11.jpg';
import origami12 from '../public/images/origami/origami12.jpg';
import origami13 from '../public/images/origami/origami13.jpg';
import origami14 from '../public/images/origami/origami14.jpg';
import origami15 from '../public/images/origami/origami15.jpg';
import origami16 from '../public/images/origami/origami16.jpg';
import origami17 from '../public/images/origami/origami17.jpg';
import origami18 from '../public/images/origami/origami18.jpg';
import origami19 from '../public/images/origami/origami19.jpg';
import origami20 from '../public/images/origami/origami20.jpg';
import origami21 from '../public/images/origami/origami21.jpg';
import origami22 from '../public/images/origami/origami22.jpg';
import origami23 from '../public/images/origami/origami23.jpg';
import origami24 from '../public/images/origami/origami24.jpg';
import origami25 from '../public/images/origami/origami25.jpg';
import origami26 from '../public/images/origami/origami26.png';
import origami27 from '../public/images/origami/origami27.png';
import origami28 from '../public/images/origami/origami28.png';

import ballPenArt1 from '../public/images/ballPenArt/ballPenArt1.jpg';
import ballPenArt2 from '../public/images/ballPenArt/ballPenArt2.jpg';
import ballPenArt3 from '../public/images/ballPenArt/ballPenArt3.jpg';
import ballPenArt4 from '../public/images/ballPenArt/ballPenArt4.jpg';
import ballPenArt5 from '../public/images/ballPenArt/ballPenArt5.jpg';
import ballPenArt6 from '../public/images/ballPenArt/ballPenArt6.jpg';
import ballPenArt7 from '../public/images/ballPenArt/ballPenArt7.jpg';
import ballPenArt8 from '../public/images/ballPenArt/ballPenArt8.jpg';
import ballPenArt9 from '../public/images/ballPenArt/ballPenArt9.jpg';
import ballPenArt10 from '../public/images/ballPenArt/ballPenArt10.jpg';
import ballPenArt11 from '../public/images/ballPenArt/ballPenArt11.jpg';
import ballPenArt12 from '../public/images/ballPenArt/ballPenArt12.jpg';
import ballPenArt13 from '../public/images/ballPenArt/ballPenArt13.jpg';
import ballPenArt14 from '../public/images/ballPenArt/ballPenArt14.jpg';
import ballPenArt15 from '../public/images/ballPenArt/ballPenArt15.jpg';
import ballPenArt16 from '../public/images/ballPenArt/ballPenArt16.jpg';

import movieArt1 from '../public/images/MovieArt/movieArt1.jpg';
import movieArt2 from '../public/images/MovieArt/movieArt2.png';
import movieArt3 from '../public/images/MovieArt/movieArt3.png';
import movieArt4 from '../public/images/MovieArt/movieArt4.jpg';
import movieArt5 from '../public/images/MovieArt/movieArt5.png';
import movieArt6 from '../public/images/MovieArt/movieArt6.jpg';
import movieArt7 from '../public/images/MovieArt/movieArt7.png';
import movieArt8 from '../public/images/MovieArt/movieArt8.jpg';
import movieArt9 from '../public/images/MovieArt/movieArt9.png';
import movieArt10 from '../public/images/MovieArt/movieArt10.jpg';
import movieArt11 from '../public/images/MovieArt/movieArt11.png';
import movieArt12 from '../public/images/MovieArt/movieArt12.jpg';
import movieArt13 from '../public/images/MovieArt/movieArt13.jpg';
import movieArt14 from '../public/images/MovieArt/movieArt14.jpg';




export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [link, setLink] = useState('');
  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  useEffect(() => {
    axios({
      url: "https://getpantry.cloud/apiv1/pantry/ecff2e4b-9f41-4557-8fde-9543d26f788f/basket/resume",
      method: "GET",
    })
      .then((res) => { setLink(res?.data?.value || '') })
      .catch((err) => { console.log(err) });
  }, [])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <main className='px-5 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between gap-4'>
            <h1 className=' text-sm font-AstroSpace dark:text-white'></h1>
            <ul className='flex items-center'>
              <li><VscColorMode onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-2xl dark:fill-white' /></li>
              {link != '' && <li><a className=' bg-gradient-to-r from-teal-400 to-violet-400 text-black px-2 py-2 rounded-md ml-8' href={`data:application/pdf;base64,${link}`} download={'Srinivasn_Resume.pdf'}><span className='px-2' >Resume</span><Image style={{ paddingTop: '0.5rem', minWidth: '80%', minHeight: '80%' }} alt='Image' objectFit='cover' src={download} /></a></li>}
            </ul>
          </nav>
          <div className='text-center p-10 md:text-6xl'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium dark:text-violet-600'>Srinivasan Venkatesan</h2>
            <h3 className=' text-2xl py-2 md:text-3xl dark:text-white'>{"Software Developer & Digital Artist"}</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-violet-400'>{"A software developer with 2 years of experience in frontend development (ReactJS) & a budding digital artist."}</p>
          </div>
          <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='https://www.linkedin.com/in/srinivasan-v-9a08157a/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin className=' dark:fill-gray-300' /></a>
            <a href='https://github.com/Srinivasan1008' target="_blank" rel="noopener noreferrer"><AiFillGithub className=' dark:fill-gray-300' /></a>
            <a href='https://twitter.com/Srinivas_1008' target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle className=' dark:fill-gray-300' /></a>
            <a href='https://www.instagram.com/srinivas_dante/' target="_blank" rel="noopener noreferrer"><FaInstagramSquare className=' dark:fill-gray-300' /></a>
          </div>
          <div className='flex justify-center gap-16 py-3 text-gray-600'>
            <div className='mx-auto flex flex-wrap'>
              <FaPhoneSquareAlt className='text-3xl text-gray-600 dark:fill-gray-300' /><a className='text-xl dark:text-white px-3  '  data-toggle="tooltip" title={'Copy'} onClick={() => { navigator.clipboard.writeText('8754698456'); notify("info", "Copied") }}>{"8754698456"}</a>
              <IoMdMail className='text-3xl text-gray-600 dark:fill-gray-300' /><a className='text-xl dark:text-white px-3 '  data-toggle="tooltip" title={'Copy'} onClick={() => { navigator.clipboard.writeText('nivas65536@gmail.com'); notify("info", "Copied") }}>{"nivas65536@gmail.com"}</a>
            </div>
          </div>
          <div className='relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image alt='Image' src={profilePic} layout='fill' objectFit='cover' />
          </div>
        </section>
        <section>
          <div>
            <div className='mx-auto p-[5%] px-[20%] sm:text-sm'>
              <h3 className='text-2xl py-1 text-center  text-teal-600 font-medium dark:text-violet-600'>About Me</h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-violet-400'>
                {"I'm a software developer(Frontend) & been part of quality assurance team at Verizon for past 2 years. Developed various dashboards for showcasing processed test case, user stories and defect data in various formats.I like to learn new upcoming technologies, have done few personal projects based on Etherium (Hyperleger) & IPFS, Socket.io.And I'm bit of a enthusiast when it comes to security stuffs, have some experience with tools like Metasploit, Burpsuite & basic pentesting techniques."}
              </p>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl  dark:text-violet-400'>
                {"I like to draw and like to experiment with the approaches. I even sold a NFT in polygon blockchain. I have added some of my works below from pixel art to stippling art. I like to watch animes, movies, series and big addict to Kowsa/Atho (Burmese food)."}
              </p>
            </div>
            <div className='flex flex-col bg-slate-100 lg:flex-row'>
              <div className='text-center relative mx-auto w-80 h-80 md:h-96 md:w-96 p-10'>
                <h3 className='text-2xl py-1  text-teal-600 font-medium dark:text-violet-600'>Self Portraits</h3>
                <Carousel showThumbs={false} className='p-5 max-h-100 max-w-100'>
                  <div>
                    <Image alt='Image' objectFit='cover' src={portrait1} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={portrait2} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={portrait3} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={portrait6} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={portrait7} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={portrait8} />
                  </div>
                </Carousel>
              </div>
              <div className='text-center relative mx-auto w-80 h-80 md:h-96 md:w-96 p-10'>
                <h3 className='text-2xl py-1  text-teal-600 font-medium dark:text-violet-600'>Pixel Art</h3>
                <Carousel showThumbs={false} className='p-5 max-h-100 max-w-100'>
                  <div>
                    <Image alt='Image' objectFit='cover' src={pixelArt1} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={pixelArt2} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={pixelArt3} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={pixelArt4} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={pixelArt5} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={pixelArt6} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={pixelArt7} />
                  </div>
                </Carousel>
              </div>
              <div className='text-center relative mx-auto w-80 h-80 md:h-96 md:w-96 p-10'>
                <h3 className='text-2xl py-1  text-teal-600 font-medium dark:text-violet-600'>Movie Art</h3>
                <Carousel showThumbs={false} className='p-5 max-h-100 max-w-100'>
                  <div>
                    <Image alt='Image' objectFit='cover' src={movieArt1} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={movieArt2} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={movieArt3} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={movieArt4} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={movieArt5} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={movieArt6} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={movieArt7} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={movieArt8} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={movieArt9} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={movieArt10} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={movieArt11} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={movieArt12} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={movieArt13} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={movieArt14} />
                  </div>
                </Carousel>
              </div>
            </div>
            <div className='flex flex-col bg-slate-100 lg:flex-row'>
              <div className='text-center relative mx-auto w-80 h-80 md:h-96 md:w-96 p-10'>
                <h3 className='text-2xl py-1  text-teal-600 font-medium dark:text-violet-600'>Origami</h3>
                <Carousel showThumbs={false} className='p-5 max-h-100 max-w-100'>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami1} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami2} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami3} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami4} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami5} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami6} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami7} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami8} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami9} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami10} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami11} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami12} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami13} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami14} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami15} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami16} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami17} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami18} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami19} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami20} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami21} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami22} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami23} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami24} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami25} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami26} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami27} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={origami28} />
                  </div>
                </Carousel>
              </div>
              <div className='text-center relative mx-auto w-80 h-80 md:h-96 md:w-96 p-10'>
                <h3 className='text-2xl py-1  text-teal-600 font-medium dark:text-violet-600'>Ballpen Art</h3>
                <Carousel showThumbs={false} className='p-5 max-h-100 max-w-100'>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt5} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt1} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt2} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt3} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt4} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt6} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt7} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt8} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt9} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt10} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt11} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt12} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt13} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt14} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt15} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={ballPenArt16} />
                  </div>
                </Carousel>
              </div>
              <div className='text-center relative mx-auto w-80 h-80 md:h-96 md:w-96 p-10'>
                <h3 className='text-2xl py-1  text-teal-600 font-medium dark:text-violet-600'>{"Sketches/Stippling Art"}</h3>
                <Carousel showThumbs={false} className='p-5 max-h-100 max-w-100'>
                  <div>
                    <Image alt='Image' objectFit='cover' src={stipplingArt1} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={stipplingArt2} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={stipplingArt3} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={stipplingArt4} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={stipplingArt5} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={sketch1} />
                  </div>
                  <div>
                    <Image alt='Image' objectFit='cover' src={sketch2} />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='text-center p-20'>
            <h3 className='text-xl font-AstroSpace dark:text-white'>Thanks</h3>
          </div>
        </section>
      </main>
    </div>
  )
}
