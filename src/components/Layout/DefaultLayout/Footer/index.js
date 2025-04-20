import classNames from 'classnames/bind';
import styles from './Footer.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    const navigate = useNavigate();

    const handleSubscribe = (e) => {
        e.preventDefault();
        navigate('/subscribe');
    };

    return (
        <footer className={cx('footer')}>
            <div className={cx('footer-content')}>
                <div className={cx('footer-section')}>
                    <h3 className={cx('footer-title')}>News Odyssey</h3>
                    <p className={cx('footer-description')}>
                        Discover the world through our lens. Your trusted source for news, stories, and insights.
                    </p>
                    <div className={cx('social-links')}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>

                <div className={cx('footer-section')}>
                    <h4 className={cx('footer-subtitle')}>Categories</h4>
                    <ul className={cx('footer-links')}>
                        <li><Link to="/animal">Animal</Link></li>
                        <li><Link to="/nature">Nature</Link></li>
                        <li><Link to="/travel">Travel</Link></li>
                        <li><Link to="/health">Health</Link></li>
                        <li><Link to="/science">Science</Link></li>
                        <li><Link to="/environment">Environment</Link></li>
                        <li><Link to="/history-culture">History & Culture</Link></li>
                    </ul>
                </div>

                <div className={cx('footer-section')}>
                    <h4 className={cx('footer-subtitle')}>About Us</h4>
                    <ul className={cx('footer-links')}>
                        <li><Link to="/about">About News Odyssey</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                    </ul>
                </div>

                <div className={cx('footer-section')}>
                    <h4 className={cx('footer-subtitle')}>Newsletter</h4>
                    <p className={cx('newsletter-text')}>
                        Subscribe to our newsletter for the latest updates and stories.
                    </p>
                    <form className={cx('newsletter-form')} onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={cx('newsletter-input')}
                        />
                        <button type="submit" className={cx('newsletter-button')}>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className={cx('footer-bottom')}>
                <p className={cx('copyright')}>
                    © {new Date().getFullYear()} News Odyssey. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;