"use client"
import { useState, useEffect, Children } from "react";
import styles from "./coursesPage.module.css";
import Card from "../../components/card/Card";

export default function DisplayCourses({ numberOfCourses, withImage, loadmore }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/getCourses');
                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                const data = await response.json();
                setCourses(data.courses);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchData();
    }, []);
    const sortedCourses = courses?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const startIndex = numberOfCourses * (currentPage - 1);
    const endIndex = startIndex + numberOfCourses;
    const visibleCourses = sortedCourses.slice(0, endIndex);
    const hasNext = endIndex < sortedCourses.length;
    const loadMoreCourses = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
    return (
        <>
            {visibleCourses.length > 0 ? (
                <>
                    {
                        visibleCourses.map((item) => (
                            <Card item={item} key={item._id} withImage={withImage} />
                        ))
                    }
                    {
                        loadmore &&
                        (
                            <div className={styles.content}>
                                <button onClick={loadMoreCourses} disabled={!hasNext} className="px-12 py-4 font-bold text-center text-main-color disabled:text-slate-500 bg-button-bg disabled:bg-slate-200 w-auto rounded-md ">
                                    Load More
                                </button>
                            </div>
                        )
                    }
                </>

            ) : (
                <h2 className="courses-body-heading">Ooops! No courses added so far</h2>
            )
            }
        </>
    );
};

