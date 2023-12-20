import Hero from "../components/hero/hero";
import AllCourses from "../components/allCourses/AllCourses";
import TeachSection from "@/components/teachSection/TeachSection";
import Feedback from "@/components/feedbacks/Feedback";
export default function Home() {

  return (
    <>
      <Hero />
      <AllCourses />
      <TeachSection />
      <Feedback />
    </>
  );
}
