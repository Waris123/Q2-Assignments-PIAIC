"use client"
import Isotope from "isotope-layout";
import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import Image from 'next/image';


const IsotopeReact = () => {
    // init one ref to store the future isotope object
    const isotope : { current: Isotope | undefined } = React.useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('*')

    // initialize an Isotope object with configs
    React.useEffect(() => {

        // button css
        $('.filters ul li').click(function () {
            $('.filters ul li').removeClass('active');
            $(this).addClass('active');

        });


        isotope.current = new Isotope('.filter-container', {
            itemSelector: '.filter-item',
            layoutMode: 'fitRows',
        })
        // cleanup
        return () => isotope.current.destroy()
    }, [])

    // handling filter key change
    React.useEffect(() => {
        filterKey === '*'
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` })
    }, [filterKey])

    const handleFilterKeyChange = key => () => setFilterKey(key)


    return (
        <>
            <section className="card-filter">
                <div className="filters">
                    <ul>
                        <li onClick={handleFilterKeyChange('*')} className="btn-list active">All</li>
                        <li onClick={handleFilterKeyChange('portfolio')} className="btn-list">Personal Website</li>
                        <li onClick={handleFilterKeyChange('todo')} className="btn-list">Todo List</li>
                        <li onClick={handleFilterKeyChange('crud')} className="btn-list">CRUD with MongoDB</li>
                        <li onClick={handleFilterKeyChange('penaverse')} className="btn-list">Panaverse Website/Web App</li>
                    </ul>
                </div>


                <div className="filters-content">
                    <div className="row grid">

                        <div className="filter-container">


                            <div className="card-body filter-item portfolio">
                                <div className="card-image">
                                    <Image
                                        src="/images/portfolio.jpg"
                                        alt="Description of Portfolio"
                                        width={1000}
                                        height={1000}
                                        style={{ borderRadius: '2%' }}
                                    />
                                </div>
                                <div className="card-content">
                                    <div className="card-bio">
                                        <p>Personal Website</p>
                                        <p className="job"></p>
                                    </div>
                                    <p>
                                        This is my Portfolio, developed using Next.js, tailwindcss.
                                    </p>
                                </div>
                                <a href="https://waris-portfolio.vercel.app/" target="_blank">Visit Site</a>
                            </div>


                            <div className="card-body filter-item todo">
                                <div className="card-image">
                                    <Image
                                        src="/images/todo.jpg"
                                        alt="Description of TODO App"
                                        width={1000}
                                        height={1000}
                                        style={{ borderRadius: '2%' }}
                                    />
                                </div>
                                <div className="card-content">
                                    <div className="card-bio">
                                        <p>TODO App</p>
                                        <p className="job"></p>
                                    </div>
                                    <p>
                                        This is TODO List App, developed using Next.js, tailwindcss.
                                    </p>
                                </div>
                                <a href="#" target="_blank">Visit Site</a>
                            </div>


                            <div className="card-body filter-item crud">
                                <div className="card-image">
                                    <Image
                                        src="/images/crud.jpg"
                                        alt="crud image"
                                        width={1000}
                                        height={1000}
                                        style={{ borderRadius: '2%' }}
                                    />
                                </div>
                                <div className="card-content">
                                    <div className="card-bio">
                                        <p>CRUD App</p>
                                        <p className="job"></p>
                                    </div>
                                    <p>
                                        This is CRUD App, developed using Next.js, MongoDB and tailwindcss.
                                    </p>
                                </div>
                                <a href="#" target="_blank">Visit Site</a>
                            </div>

                            <div className="card-body filter-item penaverse">
                                <div className="card-image">
                                    <Image
                                        src="/images/penaverse.jpg"
                                        alt="crud image"
                                        width={1000}
                                        height={1000}
                                        style={{ borderRadius: '2%' }}
                                    />
                                </div>
                                <div className="card-content">
                                    <div className="card-bio">
                                        <p>Penaverse Website</p>
                                        <p className="job"></p>
                                    </div>
                                    <p>
                                        This is Penaverse Website, developed using Next.js and tailwindcss.
                                    </p>
                                </div>
                                <a href="#" target="_blank">Visit Site</a>
                            </div>



                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default IsotopeReact;
