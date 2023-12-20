"use client"
import styles from "./coursesPage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import Container from "@/components/Container";
import DisplayCourses from "./displayCourses";

export default function Courses() {
    return (
        <Container className="flex gap-x-8 flex-col mt-16 pt-16">
            <CategoryList/>
            <h1 className={styles.title}> All Courses</h1>
            <hr className="pb-8" />
            <DisplayCourses numberOfCourses={3} withImage={true} loadmore={true} />         
        </Container>
    );
};

