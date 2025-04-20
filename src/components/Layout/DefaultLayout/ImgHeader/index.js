import styles from './ImgHeader.module.css';
import classNames from 'classnames/bind';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const imageList = [
    require('../../../../../src/assets/images/home.png'),
    require('../../../../../src/assets/images/animal.png'),
    require('../../../../../src/assets/images/nature.png'),
    require('../../../../../src/assets/images/travel.png'),
    require('../../../../../src/assets/images/health.png'),
    require('../../../../../src/assets/images/science.png'),
    require('../../../../../src/assets/images/environment.png'),
    require('../../../../../src/assets/images/culture.png'),
];

const ImgHeader = () => {
    const [[index, direction], setIndex] = useState([0, 1]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(([prevIndex]) => [
                (prevIndex + 1) % imageList.length,
                1,
            ]);
        }, 3000); // đổi ảnh mỗi 3 giây

        return () => clearInterval(interval);
    }, []);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
        }),
    };

    return (
        <header className={cx('img-wrapper')}>
            <div className={cx('img')}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={index}
                        src={imageList[index]}
                        alt={`slide-${index}`}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.5 },
                        }}
                        className={cx('home-logo', `img-${index}`)}
                    />
                </AnimatePresence>
            </div>
        </header>
    );
};

export default ImgHeader;
