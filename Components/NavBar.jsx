import React from "react";

const NavBar = () => {
  return (
    <div className="nav">
      <div>
        <div className="logo">LOGO</div>
        <ul>
          <li id="first-child">Home</li>
          <li>Services</li>
          <li>About Us</li>
          <img className="navImg" src="\Images\hamburger.png" alt="" />
        </ul>
      </div>

      <button>
        Contact Us{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="11"
          viewBox="0 0 13 11"
          fill="none"
        >
          <g clip-path="url(#clip0_39_30)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.937988 5.5C0.937988 5.31059 1.017 5.12895 1.15763 4.99502C1.29827 4.86109 1.48901 4.78584 1.6879 4.78584H10.3764L7.15629 1.72068C7.01548 1.58658 6.93637 1.4047 6.93637 1.21506C6.93637 1.02541 7.01548 0.843536 7.15629 0.709436C7.29711 0.575337 7.48809 0.5 7.68723 0.5C7.88638 0.5 8.07736 0.575337 8.21817 0.709436L12.7177 4.99438C12.7875 5.06072 12.8429 5.13952 12.8807 5.22629C12.9185 5.31305 12.938 5.40606 12.938 5.5C12.938 5.59394 12.9185 5.68695 12.8807 5.77371C12.8429 5.86048 12.7875 5.93928 12.7177 6.00562L8.21817 10.2906C8.07736 10.4247 7.88638 10.5 7.68723 10.5C7.48809 10.5 7.29711 10.4247 7.15629 10.2906C7.01548 10.1565 6.93637 9.97459 6.93637 9.78494C6.93637 9.5953 7.01548 9.41342 7.15629 9.27932L10.3764 6.21416H1.6879C1.48901 6.21416 1.29827 6.13892 1.15763 6.00499C1.017 5.87106 0.937988 5.68941 0.937988 5.5Z"
              fill="#014C98"
            />
          </g>
          <defs>
            <clipPath id="clip0_39_30">
              <rect
                width="12"
                height="10"
                fill="white"
                transform="translate(0.937988 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default NavBar;
