const Header = () => {
    return (
        <div className="w-full h-[100px] bg-gradient-to-r from-blue-600 to-indigo-800 text-white flex justify-between items-center px-8 shadow-md">
            <h1 className="text-3xl font-bold">Aryansh Rajput</h1>
            <nav className="flex space-x-6 text-lg">
                <a href="#home" className="hover:text-yellow-300 transition">Home</a>
                <a href="#about" className="hover:text-yellow-300 transition">About</a>
                <a href="#projects" className="hover:text-yellow-300 transition">Projects</a>
                <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
            </nav>
        </div>
    );
}

export default Header;