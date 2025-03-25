import React from "react";
import PlayerCard from "./components/PlayerCard";

const players = [
    { id: 1, name: "John Doe", position: "Striker", club: "FC Lagos", image: "/kkk.jpg" },
    { id: 2, name: "James Smith", position: "Defender", club: "Abuja United", image: "/ball.jpg" },
];

const App = () => {
    return (
        <div className="flex flex-col items-center p-6 bg-white min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Football Scouting App</h1>
            <div className="container max-w-xl">
                {players.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>
        </div>
    );
};

export default App;
