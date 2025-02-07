import Faq from "@/components/Faq";
import LandingPage from "@/components/LandingPage";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from "@/components/Section5";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10">

     <LandingPage/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Faq/>
    </div>
  );
}
