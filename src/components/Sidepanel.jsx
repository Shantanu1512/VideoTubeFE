import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Sidepanel() {
  return (
    <div className="grid grid-cols-12 grid-rows-2">
      <div className=" col-span-1">
        <Link>
          <div className="border-2 p-1">Home</div>
        </Link>

        <Link>
          <div className="border-2 p-1">Liked Videos</div>
        </Link>

        <Link>
          <div className="border-2 p-1">History</div>
        </Link>

        <Link>
          <div className="border-2 p-1">My Content</div>
        </Link>

        <Link>
          <div className="border-2 p-1">Playlist</div>
        </Link>

        <Link>
          <div className="border-2 p-1">Subscription</div>
        </Link>

        <div className="col-span-1 items-end">
          <Link>
            <div className="border-2 p-1">Logout</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidepanel;
