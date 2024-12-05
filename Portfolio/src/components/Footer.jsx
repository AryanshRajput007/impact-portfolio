const Footer = () => {
    const inputStyle = "w-full h-[50px] p-3 border-2 border-gray-300 bg-gray-800 text-white rounded-lg focus:outline-none focus:border-yellow-400 transition";

    return (
        <footer className="bg-gray-900 text-white py-8 px-6">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                    <p className="text-lg">Feel free to get in touch to discuss projects, collaborations, or just to say hi!</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <form className="space-y-4">
                        <input className={inputStyle} type="text" placeholder="Name" />
                        <input className={inputStyle} type="email" placeholder="Email" />
                        <textarea className={inputStyle} placeholder="Message" rows="4"></textarea>
                        <button className="w-full h-[50px] bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition font-semibold" type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
}


export default Footer
