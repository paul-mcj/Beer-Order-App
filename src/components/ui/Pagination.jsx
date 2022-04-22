import React from "react";

const Pagination = () => {
    return (
        <div className="justify-center btn-group">
            {/* btn-active */}
            <button className="btn btn-ghost hover:text-accent">1</button>
            <button className="btn btn-ghost hover:text-accent">2</button>
            <button className="btn btn-ghost hover:text-accent">3</button>
        </div>
    );
};

export default Pagination;
