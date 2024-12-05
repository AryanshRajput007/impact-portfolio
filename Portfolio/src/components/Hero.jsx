import { useEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {

    useEffect(() => {
        const typed = new Typed('.auto-typing', {
            strings: ['Web Developer', 'Mobile Developer',  'Java Full Stack Developer'],
            typeSpeed: 100,
            backSpeed: 80,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="w-full h-[90vh] bg-gradient-to-r from-gray-900 via-gray-800 to-black grid md:grid-cols-2 text-white">
            <div className="flex justify-center items-center">
                <div className="rounded-full overflow-hidden shadow-lg w-[300px] h-[300px]">
                    <img
                        src="https://pics.craiyon.com/2023-07-13/45e7c3603e9e4e8cb4abb6880783c4a2.webp"
                        alt="Aryansh Rajput"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center px-8 space-y-4">
                <h1 className="text-4xl font-extrabold">I am Aryansh Rajput</h1>
                <span className="auto-typing text-xl font-medium"></span>
                <p className="text-lg leading-7">
                    I'm a passionate developer with expertise in web and mobile application development. 
                    I love exploring technology, reading manhwa, and contributing to innovative projects.
                </p>
            </div>
        </div>
    );
}


export default Hero
