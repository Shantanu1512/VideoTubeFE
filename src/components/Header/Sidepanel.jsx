import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IoHomeOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import { BsCameraVideo } from "react-icons/bs";
import { IoFolderOutline } from "react-icons/io5";
import { TbUserCheck } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

function Sidepanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.auth?.userData?.username);

  const navItems = [
    {
      icon: <IoHomeOutline size={20} />,
      title: "Home",
      url: "/",
    },
    {
      icon: <BiLike size={20} />,
      title: "Liked Videos",
      url: "/liked-videos",
    },
    {
      icon: <LuHistory size={20} />,
      title: "History",
      url: "/history",
    },
    {
      icon: <BsCameraVideo size={20} />,
      title: "My Content",
      url: `/channel/${username}`,
    },
    {
      icon: <IoFolderOutline size={20} />,
      title: "Collections",
      url: "/collections",
    },
    {
      icon: <TbUserCheck size={20} />,
      title: "Subscriptions",
      url: "/subscriptions",
    },
  ];
  return (
    <div className="w-64 border border-slate-600">
      <div className="flex flex-col relative h-screen border border-slate-600 w-64 gap-2 p-2 text-white bg-gray-900">
        {navItems.map((navItem) => (
          <Link to={navItem.url} key={navItem.title}>
            <div
              className="flex items-center gap-2 justify-center sm:justify-start hover:bg-purple-500 cursor-pointer py-1 px-2 border border-slate-600"
              key={navItem.title}
            >
              {navItem.icon}
              <span className="text-base hidden md:block">{navItem.title}</span>
            </div>
          </Link>
        ))}

        <div className="flex absolute bottom-5">
          <div className="flex flex-row gap-2 border border-slate-600 m-4 w-52 p-2 hover:bg-purple-600">
            <IoSettingsOutline size={20} />
            Settings
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidepanel;
