import React from "react";
import dataImage1 from "../../public/img/dataImg1.png";
import dataImage2 from "../../public/img/dataImg2.jpg";

import Image from "next/image";

const data = [
  {
    title: "Wise Commerce",
    labelOne: "Label 1",
    labelTwo: "Label 1",
    image: <Image src={dataImage1} alt="Projects One" />,
  },
  {
    title: "Kinaya Interior Design",
    labelOne: "Label 1",
    labelTwo: "Label 1",
    image: <Image src={dataImage2} alt="Projects Two" />,
  },
];

export default ProjectData;
