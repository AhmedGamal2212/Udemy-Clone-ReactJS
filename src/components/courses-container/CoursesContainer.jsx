import React, {useContext} from 'react'
import Card from '../card/Card';
import styles from './CoursesContainer.module.css'
import { SearchTermContext } from '../../App';

const CoursesContainer = ({courses}) => {
    const searchTerm = useContext(SearchTermContext).toLowerCase();

    const coursesCards = courses.filter(course => course.headline.toLowerCase().includes(searchTerm)).map((course) => {
        return <Card key={course.id} course={course}></Card>;
    });
    return (
        <section className={styles.container}>
            {coursesCards}
        </section>
    );
}

export default CoursesContainer
