import React from "react";

const PlayerCard = ({ player }) => {
    return (
        <div className="player-card shadow-md p-4 rounded-lg flex items-center bg-white mb-4">
            <img
                src={player.image}
                alt={player.name}
                className="w-20 h-20 rounded-full object-cover mr-4"
            />
            <div className="player-info text-left">
                <h3 className="text-lg font-bold">{player.name}</h3>
                <p className="text-sm">Position: {player.position}</p>
                <p className="text-sm">Club: {player.club}</p>
                <button className="btn mt-2 border border-black px-3 py-1 rounded hover:bg-black hover:text-white">
                    View Profile
                </button>
            </div>
        </div>
    );
};

export default PlayerCard;
