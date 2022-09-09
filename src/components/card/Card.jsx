import React, { useState } from 'react'
import styles from './Card.module.css'
import { Popover } from '@mui/material';

const Card = ({course}) => {
    const {headline:title, visible_instructors, image_304x171:image, rating} = course;
    const instructors = visible_instructors.map(instructor => instructor.title).join(', ');

    const [anchorEl, setAnchorEl] = useState(null);

    
    const openPopover = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const closePopover = () => {
        setAnchorEl(null);
    }
    const open = Boolean(anchorEl);

    return (
        <>
            <div 
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true" 
                onMouseEnter={openPopover} 
                onMouseLeave={closePopover} 
                className={styles.courseWrapper}>
                <article className={styles.card}>
                    <figure className={styles.wrapper}>
                        <img src={image} alt="" />
                    </figure>
                    <section className={styles.body}>
                        <p className={styles.title}>
                            {title}
                        </p>
                        <p className={styles.instructors}>
                            {instructors}
                        </p>
                        <section>
                            <p className={styles.rating}>{rating.toPrecision(2)}</p>
                            <div className={styles.starsOuter}>
                                <div className={styles.starsInner} style={{width:`${rating / 5 * 100}%`}}></div>
                            </div>
                        </section>
                        <p className={styles.price}>
                            $15
                        </p>
                    </section>
                </article>
            </div>

            <Popover 
                id="mouse-over-popover"
                open={open}
                anchorEl={anchorEl}
                onClose={closePopover}
                onMouseLeave={closePopover}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                // disableRestoreFocus
                sx={{
                    pointerEvents: 'none'
                }}
                PaperProps={{
                    onMouseEnter: openPopover,
                    onMouseLeave: closePopover,
                    sx: {
                        pointerEvents: 'auto'
                    }
                }}
                >
                
            </Popover>

        </>
    );
}

export default Card
