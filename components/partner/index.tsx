import React from "react";

export default function Animation() {
    const slideData = [
        "https://api.lorem.space/image/game",
        "https://api.lorem.space/image/game",
        "https://api.lorem.space/image/game",
        "https://api.lorem.space/image/game",
        "https://api.lorem.space/image/game",
        "https://api.lorem.space/image/game",
        "https://api.lorem.space/image/game",
        "https://api.lorem.space/image/game",
        "https://api.lorem.space/image/game",
        "https://api.lorem.space/image/game",
        "https://api.lorem.space/image/game",
        "https://api.lorem.space/image/game",
        "https://api.lorem.space/image/game",
        "https://api.lorem.space/image/game",
    ];

    return (
        <div className="slider">
            <div className="slide-track">
                {slideData.map((item: string, index: number) => (
                    <div className="slide" key={index}>
                        <img src={item} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}
