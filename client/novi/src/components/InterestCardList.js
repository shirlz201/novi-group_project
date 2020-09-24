import React from "react";
import InterestCard from "./InterestCard.js";

function InterestCardList({ selectedInterests }) {
    return (
        <div className="col-12">
            <div className="row">
                {selectedInterests.map((interest) => (
                    <div className="col-3">
                        <InterestCard key={interest.id} {...interest} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InterestCardList;
