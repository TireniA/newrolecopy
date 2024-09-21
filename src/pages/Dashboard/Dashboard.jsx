import React, { useRef } from "react";
import "./Dashboard.css";
import { FcGoogle } from "react-icons/fc";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { profile } from "../../utils/data";
import logo from "../../assets/logo.png";
import { recommended } from "../../utils/data";
import { job } from "../../utils/data";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
    const slideRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        slideRef.current.slickNext();
    };
    const slideLeft = () => {
        slideRef.current.slickPrev();
    };

    return (
        <div className="container-fluid p-0 dashb">
            {/* <Navbar /> */}
            <div className="p-md-5 px-3 py-5">
                <div className="dbwlcm d-flex justify-content-between">
                    <div className="dbwlcml">
                        <h5 className="my-1">Welcome Back James,</h5>
                        <p>Check out your top matches and saved jobs below!</p>
                    </div>
                    <div className="dbwlcmr d-flex align-items-center gap-2">
                        <FcGoogle />
                        <span>Download Chrome Extension</span>
                    </div>
                </div>

                <div className="dbwlcmf mt-sm-2 mt-5 p-4 px-5 rounded-3">
                    <div className="dbwlcm d-flex align-item-center justify-content-between">
                        <div className="dbwlcml">
                            <h6 className="my-1">Get your Dream Job</h6>
                            <p>Check out your top matches</p>
                        </div>
                        <div className="dbwlcmrt d-flex mb-md-0 mb-4 flex-column gap-2">
                            <p className="m-0">Profile Completion : 70%</p>
                            <div className="dbwlcmrt-hr">
                                <div className="dbwlcmrthrt"></div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="r arrow" onClick={slideRight}>
                        <span><FaChevronRight /></span>
                    </div>
                    <div className="l arrow" onClick={slideLeft}>
                        <span><FaChevronLeft /></span>
                    </div> */}

                    <Slider ref={slideRef} {...settings} className="slid">
                        {profile.map((item) => (
                            <div key={item.id} className="dbgriditemdj rounded-3 shadow p-3 ">
                                <div className="circ"></div>
                                <h6>{item.heading}</h6>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="dbwlcm mt-4 d-flex justify-content-between">
                    <div className="dbwlcml">
                        <h6 className="my-1">Recommended Matches</h6>
                        <p>Check out your top matches</p>
                    </div>
                    <div className="dbwlcmrt d-flex align-items-center mb-4 mb-md-0 gap-2">
                        <button>More Recommendations</button>
                    </div>
                </div>

                <div className="dbgrid mt-4 mt-lg-0">
                    {recommended.map((item) => (
                        <DashboardCard key={item.id} pfp={item.pfp} logo={logo} section='dash' title={item.title} match={item.match} />
                    ))}
                </div>

                <div className="dbwlcm mt-4 d-flex justify-content-between mt-4">
                    <div className="dbwlcml">
                        <h6 className="my-1">Saved Jobs</h6>
                        <p>Check out your top matches</p>
                    </div>
                    <div className="dbwlcmrt d-flex align-items-center mb-4 mb-md-0  gap-2">
                        <button>View Jobs</button>
                    </div>
                </div>

                <div className="dbgrid mt-4 mt-lg-0">
                    {job.map((item) => (
                        <DashboardCard key={item.id} pfp={item.pfp} logo={logo} section='job' title={item.title} match={item.match} />
                    ))}
                </div>

                <div className="dbwlcm mt-4 d-flex justify-content-between mt-4">
                    <div className="dbwlcml">
                        <h6 className="my-1">Applications</h6>
                        <p>Check out your top matches</p>
                    </div>
                    <div className="dbwlcmrt d-flex align-items-center mb-4 mb-md-0  gap-2">
                        <button>View Applications</button>
                    </div>
                </div>

                <div className="dbgrid mt-4 mt-lg-0">
                    <div className="dbgriditem rounded-3 shadow"></div>
                    <div className="dbgriditem rounded-3 shadow"></div>
                    <div className="dbgriditem rounded-3 shadow"></div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
