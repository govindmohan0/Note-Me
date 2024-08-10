import React from 'react';

const Tutorial = () => {
    const tutorials = [
        { icon: 'https://imgs.search.brave.com/Q--MjQmzhJDTZDFvE-IIVOPn43ZvWusW1XgMpBKbYZ8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9qYXZhLWxvZ28t/MS5wbmc', title: 'JAVA', description: 'Programming' },
        { icon: 'https://imgs.search.brave.com/SDGwL0jFyliEFLCRQEoP0UzezkpKKk9PFPeorfuzmwQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzU5LzYxLzM5/LzM2MF9GXzc1OTYx/Mzk2NV9oVkQ0MEJ2/T1dMb3BRMDMyQ1V4/ck9zbkpMSmZoOURB/bi5qcGc', title: 'C', description: 'Programming' },
        { icon: 'https://imgs.search.brave.com/Xk1pyP04KeHg_i40G1iObqpfVjpIeZtP6jSBxZ3FSRM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9jLWxvZ28ucG5n', title: 'C++', description: 'Programming' },
        { icon: 'https://imgs.search.brave.com/NtsSi2wdXR4qRbu9ohucZ-DXhDMW9Bq8z3MLi_Ya0hg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zMy5k/dWFsc3RhY2sudXMt/ZWFzdC0yLmFtYXpv/bmF3cy5jb20vcHl0/aG9uZG90b3JnLWFz/c2V0cy9tZWRpYS9j/b21tdW5pdHkvbG9n/b3MvcHl0aG9uLWxv/Z28tb25seS5wbmc', title: 'PYTHON', description: 'Programming' },
        { icon: 'https://imgs.search.brave.com/1JDEL7PSveTpmP4YfXDCCvdZrSreOSwohciJUEIqhaM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC82Mi8yNS9k/c2EtbG9nby1sZXR0/ZXItZGVzaWduLXZl/Y3Rvci00MjUzNjIy/NS5qcGc', title: 'DSA', description: 'Tutorial' },
        { icon: 'https://as2.ftcdn.net/v2/jpg/03/55/09/43/1000_F_355094378_de5U378syT6d3Oo6KoVMpDQiaVf5afx4.jpg', title: 'OS', description: 'Tutorial' },
        { icon: 'https://imgs.search.brave.com/0FqKfxqU8c4HIMxjL_U4R-e8op3y-dP0J7-pfVVO3m4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9DYW5hZGlh/bl9OYXRpb25hbF9S/YWlsd2F5L0NhbmFk/aWFuX05hdGlvbmFs/X1JhaWx3YXktTG9n/by53aW5lLnN2Zw', title: 'CN', description: 'Tutorial' },
        { icon: 'https://imgs.search.brave.com/-CTiMuO6LO2r29PTGV02i9xdAyUEeAGOAMu5n5ugrhg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8wMS8wNi9k/Ym1zLWRhdGFiYXNl/LW1hbmFnZW1lbnQt/c3lzdGVtLWNvbmNl/cHQtd2l0aC1pY29u/LXZlY3Rvci0zNjA2/MDEwNi5qcGc', title: 'DBMS', description: 'Tutorial' },
        { icon: 'https://imgs.search.brave.com/K-eZXxxuYmgWPNQwXnxj6IOf5u8qcqhAsh3yvp2UWpo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGVwcy5jb20vbG9n/by1kb3dubG9hZC9K/L0phdmFTY3JpcHQt/bG9nby12ZWN0b3It/MDEuc3Zn', title: 'JS', description: 'Tutorial' },
        { icon: 'https://imgs.search.brave.com/CA2yuWbgBFi5V3WpvRk3h6zAhyyxiJ96WkMY65wr5xQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuamF2YXRwb2lu/dC5jb20vZHMvaW1h/Z2VzL3RyZWUzLnBu/Zw', title: 'DAA', description: 'Tutorial' },
        { icon: 'https://imgs.search.brave.com/iFScTRKbWbvN_j5rO1L5slKob2IFxkCQ9az2IV5pMcE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/L015U1FMLUxvZ28t/NTAweDMxMy5wbmc', title: 'SQL', description: 'Tutorial' },
        { icon: 'https://imgs.search.brave.com/CQbryDwdAyF7tzJAkmgUm2GiqjquFjxuCYJeDI9GRJI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n', title: 'REACT', description: 'Tutorial' },

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
