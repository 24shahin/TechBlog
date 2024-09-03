import React from "react";
import Banner from "./Banner";
import Articles from "./Articles";

function Blog() {
  return (
    <div>
      <Banner img={"order-1"} text={"order-2"} />

      <div>
        <h2 className="font-bold text-[44px] text-center mb-10">
          All articles
        </h2>
        <Articles width={"w-[648px]"} />
      </div>
    </div>
  );
}

export default Blog;
