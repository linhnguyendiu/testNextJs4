import Container from "../Container";
import Image from "next/image";
const heroBg = {
  backgroundColor:'var(--variable-collection-pink-1)',
  minHeight: 720
};

const Hero = () => {
  return (
    <section style={heroBg} className="flex items-center px-8 pt-16 text-black">
      <Container >
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className=" flex flex-col gap-x-8 ">
            <h1 className="text-black capitalize mb-3 text-4xl font-bold leading-snug sm:text-[40px] lg:text-[42px] xl:text-[48px]">
              Learn a New Skill Everyday, Anytime, and Anywhere.
            </h1>
            <p className="mb-8 max-w-6/12 text-base text-white">
              1000+ Courses covering all tech domains for you to learn and explore new oppurtunities. Learn from Industry Experts and land your Dream Job.
            </p>
            <div className="grid grid-cols-3 gap-x-8">
              <div>
                <div className="text-4xl font-bold  text-pink-500 sm:text-[40px] lg:text-[42px] xl:text-[48px]">1000+</div>
                  <div className="font-bold">
                    Courses to <br />choose from
                  </div>
              </div>
              <div>
                <div className="text-4xl font-bold  text-purple-500 sm:text-[40px] lg:text-[42px] xl:text-[48px]">5000+</div>
                  <div className="font-bold">
                    Students <br /> Trained
                  </div>
              </div>
              <div>
                <div className="text-4xl font-bold  text-blue-500 sm:text-[40px] lg:text-[42px] xl:text-[48px]">200+</div>
                  <div className="font-bold">
                    Professional <br /> Traners
                  </div>
              </div>
            </div>
            <div className="flex flex-col items-center py-3 space-y-3 mt-12 bg-transparent sm:space-x-2 lg:space-y-0 md:flex-row justify-center ">
              <button href={"/courses"} className="px-16 py-3 text-pink-50 font-bold bg-pink-500 focus:bg-pink-600 focus:outline-none rounded-full">
                Explore courses 
              </button>
            </div>
          </div>
          <Image src="/Icon hero.png" alt="N" width="590" height="794" className="m-auto"/>
        </div>
      </Container>
    </section>
  );
}
export default Hero;