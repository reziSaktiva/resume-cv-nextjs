import React from "react";
import './index.css'

function Profile() {
    return (
        <div className="border-r-[6px] w-full inline-block">
            <div className="p-5 grid">
                <span className="uppercase font-bold">Naruto</span>
                <span className="text-xs text-[#777]">Hokage</span>
            </div>

            <div className="profile_image mt-[-10px]">
                <img className="w-full" src='https://i.pinimg.com/originals/83/29/da/8329dac4d41bdc84d72609aa8b1a5a47.png' alt="Profile" />
            </div>

            <div className="p-5">
                timeline
                <br />
                <button>my button</button>
            </div>
        </div>
    );
}

export default Profile;
