import React from "react";
import { HeaderBar } from "./HeaderBar";
import { OurMission } from "./ourMission";
import { Trading } from "./Trading";
import { RwaToken } from "./RwaToken";
import { OurRoadmap } from "./OurRoadmap";
import { ETFSwap } from "./ETFSwap";
import { SwapToken } from "./ETFSwapToken";

import { LastestBlog } from "./LastestBlog";
import { Footer } from "./Footer";
import { MainCover } from "./MainCover";
import FAQ from "./Faq";

function Website() {
  return (
    <div>
      {/* <HeaderBar /> */}
      <MainCover />
      <OurMission />
      <Trading />
      <RwaToken />
      <OurRoadmap />
      <ETFSwap />
      <SwapToken />
      <FAQ />
      <LastestBlog />
      {/* <Footer /> */}
    </div>
  );
}

export default Website;
