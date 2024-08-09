import React from 'react';

const Tutorial = () => {
    const tutorials = [
        { icon: 'java-icon.png', title: 'JAVA', description: 'Programming' },
        { icon: 'c-icon.png', title: 'C', description: 'Programming' },
        { icon: 'cpp-icon.png', title: 'C++', description: 'Programming' },
        { icon: 'python-icon.png', title: 'PYTHON', description: 'Programming' },
        { icon: 'https://imgs.search.brave.com/1JDEL7PSveTpmP4YfXDCCvdZrSreOSwohciJUEIqhaM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC82Mi8yNS9k/c2EtbG9nby1sZXR0/ZXItZGVzaWduLXZl/Y3Rvci00MjUzNjIy/NS5qcGc', title: 'DSA', description: 'Tutorial' },
        { icon: 'os-icon.png', title: 'OS', description: 'Tutorial' },
        { icon: 'cn-icon.png', title: 'CN', description: 'Tutorial' },
        { icon: 'dbms-icon.png', title: 'DBMS', description: 'Tutorial' },
        { icon: 'https://imgs.search.brave.com/K-eZXxxuYmgWPNQwXnxj6IOf5u8qcqhAsh3yvp2UWpo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGVwcy5jb20vbG9n/by1kb3dubG9hZC9K/L0phdmFTY3JpcHQt/bG9nby12ZWN0b3It/MDEuc3Zn', title: 'JS', description: 'Tutorial' },
        { icon: 'daa-icon.png', title: 'DAA', description: 'Tutorial' },
        { icon: 'sql-icon.png', title: 'SQL', description: 'Tutorial' },
        { icon: 'react-icon.png', title: 'REACT', description: 'Tutorial' },

    ];

    return (
        <div className="bg-black text-white py-8">
            <h2 className="text-4xl font-bold text-pink-500 mb-8 text-center">Tutorials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
                {tutorials.map((tutorial, index) => (
                    <div
                        className="bg-zinc-900 rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
                        key={index}
                    >
                        <div className="mb-4">
                            <img src={tutorial.icon} alt={`${tutorial.title} Icon`} className="w-16 h-16 mx-auto rounded-lg" />
                        </div>
                        <h3 className="text-2xl font-semibold text-blue-400 mb-2">{tutorial.title}</h3>
                        <p className="text-gray-400 mb-6">{tutorial.description}</p>
                        <a
                            href="#"
                            className="bg-pink-500 text-white py-2 px-4 rounded-full font-bold transition duration-300 hover:bg-pink-600"
                        >
                            Explore Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tutorial;
