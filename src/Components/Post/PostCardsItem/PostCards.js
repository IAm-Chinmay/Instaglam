import React, { useState } from "react";

import "./PostCards.css";

const PostCards = () => {
  const [addClass, setAddClass] = useState(false);

  const likehandler = () => {
    setAddClass(!addClass);
    console.log(1);
  };

  //   ('#like').click(function(){
  //     ('#like').toggleClass("press",1000)
  //   })
  return (
    <>
      <div class="instagram-card">
        <div class="instagram-card-header">
          <a
            class="instagram-card-user-name"
            href="https://i.ytimg.com/vi/V2Qm-IPSQ74/maxresdefault.jpg"
          >
            <img
              src="https://images3.alphacoders.com/114/1149777.jpg"
              class="instagram-card-user-image"
            />
            Chinu_8301
          </a>
          {/* <!--       <div class="instagram-card-time">58 min</div> --> */}
        </div>

        <div class="intagram-card-image">
          <img
            src="https://i.ytimg.com/vi/V2Qm-IPSQ74/maxresdefault.jpg"
            height="600px"
          />
        </div>

        <div class="instagram-card-content">
          <div className="likes">
            <i onClick={likehandler} className={!addClass ? "press" : " "}></i>
          </div>
          <h4>30 Likes</h4>
          <p>
            Are you Yoru? Because your beauty and personality have me outgunned
            and outplayed.
          </p>
        </div>
      </div>
    </>
  );
};

export default PostCards;
