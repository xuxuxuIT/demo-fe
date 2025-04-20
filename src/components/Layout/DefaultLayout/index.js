// index nay cua default layout
import Header from './Header'
import Footer from './Footer'
import ImgHeader from './ImgHeader'
import styles from './DefaultLayout.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('img-wrapper')}>
                <ImgHeader />
            </div>
            <div className={cx('container')}>
                <div className={('content')}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;