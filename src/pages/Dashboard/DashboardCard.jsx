import React from "react";

const DashboardCard = ({ pfp, logo, section, title, match }) => {
    if (section === 'dash') {
        return (
            <div className="dbgriditem rounded-3 shadow px-4 py-2">
                <div className="d-flex align-items-center justify-content-between">
                    <img src={pfp} alt="" className="img-fluid img1" />
                    <div className="d-flex align-items-center gap-2">
                        <img src={logo} alt="" className="img-fluid logo" />
                        <span>{match}</span>
                    </div>
                </div>
                <h6>{title}</h6>
                <p>Dropbox . Paris, France</p>
                <div>
                    <small>Full-Time</small>
                    <small>Marketing</small>
                    <small>Design</small>
                </div>
            </div>
        );
    }

    return (
        <div className="dbgriditem rounded-3 shadow px-4 py-2">
            <div className="d-flex align-items-center justify-content-between">
                <img src={pfp} alt="" className="img-fluid img1" />
                <div className="d-flex align-items-center gap-2">
                    <h6>{match}</h6>
                </div>
            </div>
            <h6>{title}</h6>
            <p>Dropbox . Paris, France</p>
            <div className="">
                <small>Full-Time</small>
                <small>Marketing</small>
                <small>Design</small>
            </div>
        </div>
    );
};

export default DashboardCard;

