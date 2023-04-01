import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="font-semibold">{title}</h1>
        <div className={"mt-3 space-y-3"}>
          {Links.map((link) => (
            <li key={link.name}>
                <span>
                    <i aria-hidden="true" className="fas fa-angle-right mr-2.5 text-darkgreenVariant"></i>
                      <a className="text-gray-400 hover:text-darkgreenVariant duration-300 cursor-pointer leading-6"
                        href={link.link}>
                        {link.name}
                      </a>
                </span>
            </li>
          ))}
        </div>
    </ul>
  );
};

export default Item;