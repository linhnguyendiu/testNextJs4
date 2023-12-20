import DisplayCourses from "@/app/courses/displayCourses";

const AllCourses = () => {
    return (
        <section className="basis-7/12 lg:basis-5/12">
            <div className="flex flex-col items-center my-12 gap-y-6">
                <p className="text-5xl font-bold text-black">
                    Trouvez une carrière adaptée à ce que vous êtes
                </p>
                <p className="text-xl font-medium text-black text-center">
                    Quels que soient vos intérêts ou votre expérience, les Certificats Professionnels sont faits pour vous.
                    <br/>Acquire cryptoassets in a fun and low risk way, by taking lessons and testing your knowledge.
                </p>
                <p className="text-5xl font-bold text-black pt-6">
                    New Courses 
                </p> 
            </div>
            <DisplayCourses numberOfCourses={3} loadmore={true}/>
        </section>
    );
};
export default AllCourses;