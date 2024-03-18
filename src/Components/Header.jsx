const Header = () => {
    return (
        <div>
            <div className='px-12'>
        {/* ----Navbar---- */}
                <div className="navbar bg-base-100">
                        <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                        </div>
                        <a className="btn btn-ghost text-3xl font-semibold">Recipe Calories</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                        </div>
                        <div className="navbar-end gap-4">
                            
                            <input type="text" name="" id="" placeholder="Search" className="h-8 rounded-3xl px-8 py-6 bg-[#150B2B0D] pr-8" />

                            <a className="btn bg-[#0BE58A] rounded-[40px]"><svg width="25.000000" height="25.000000" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs/>
                            <path id="Vector" d="M19.97 20.96C19.04 19.73 17.83 18.73 16.45 18.04C15.07 17.35 13.54 16.99 11.99 17C10.45 16.99 8.92 17.35 7.54 18.04C6.16 18.73 4.95 19.73 4.02 20.96M23.65 14.85C24.23 12.49 24.08 10 23.21 7.73C22.35 5.45 20.81 3.5 18.81 2.12C16.8 0.74 14.43 0 11.99 0C9.56 0 7.19 0.74 5.18 2.12C3.18 3.5 1.64 5.45 0.78 7.73C-0.09 10 -0.24 12.49 0.34 14.85C0.92 17.21 2.2 19.34 4.02 20.96C6.21 22.92 9.05 24 11.99 24C14.94 24 17.78 22.92 19.97 20.96C21.79 19.34 23.07 17.21 23.65 14.85ZM14.82 11.82C14.07 12.57 13.06 13 11.99 13C10.93 13 9.92 12.57 9.17 11.82C8.42 11.07 7.99 10.06 7.99 9C7.99 7.93 8.42 6.92 9.17 6.17C9.92 5.42 10.93 5 11.99 5C13.06 5 14.07 5.42 14.82 6.17C15.57 6.92 15.99 7.93 15.99 9C15.99 10.06 15.57 11.07 14.82 11.82Z" stroke="#150B2B" strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinejoin="round"/>
                        </svg>
                        </a>
                    </div>
                </div>

       {/* ----Banner----- */}

        <div className="hero min-h-screen bg-cover bg-center rounded-xl" style={{backgroundImage: "url('https://i.ibb.co/V92MNdm/rectangle.png')"}}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
        <div className="">
            <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className="mb-5">Recipe calories provide essential nutritional information, guiding consumers towards healthier choices when <br />  dining out at restaurants. They offer insight into the energy content of dishes,<br /> aiding individuals in maintaining balanced diets and making informed meal decisions <br /> based on their dietary needs and preferences.</p>
            <div className='flex justify-center gap-8'>
                <button className="btn bg-[#0BE58A] px-8 text-black rounded-[50px]">Explore Now</button>
                <button className="btn btn-outline px-8 text-white border-white rounded-[50px]">Our Feedback</button>
            </div>
          </div>
        </div>
        </div>
        </div>
                <h2 className='text-4xl font-semibold text-center mt-12'>Our Recipes</h2>
                <p className="text-center my-4 text-[#150B2B99]">This Chef prides himself on his meticulously crafted recipes, blending traditional flavors with innovative twists. From <br />signature dishes passed down through generations to contemporary creations inspired by global cuisines.</p>
        </div>

        
    );
};

export default Header;