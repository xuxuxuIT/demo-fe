import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Subscribe.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Subscribe() {
    const [selectedPlan, setSelectedPlan] = useState('monthly');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle subscription logic here
        console.log('Subscription attempt with:', { ...formData, plan: selectedPlan });
    };

    return (
        <div className={cx('subscribe-container')}>
            <div className={cx('subscribe-content')}>
                <div className={cx('subscribe-header')}>
                    <h1>Subscribe to News Odyssey</h1>
                    <p>Get unlimited access to our content and exclusive features</p>
                </div>

                <div className={cx('plan-selection')}>
                    <div
                        className={cx('plan-option', { active: selectedPlan === 'monthly' })}
                        onClick={() => setSelectedPlan('monthly')}
                    >
                        <h3>Monthly Plan</h3>
                        <div className={cx('price')}>$9.99<span>/month</span></div>
                        <ul className={cx('features')}>
                            <li><FontAwesomeIcon icon={faCheck} /> Unlimited access to all articles</li>
                            <li><FontAwesomeIcon icon={faCheck} /> Ad-free experience</li>
                            <li><FontAwesomeIcon icon={faCheck} /> Monthly magazine</li>
                            <li><FontAwesomeIcon icon={faCheck} /> Cancel anytime</li>
                        </ul>
                    </div>

                    <div
                        className={cx('plan-option', { active: selectedPlan === 'yearly' })}
                        onClick={() => setSelectedPlan('yearly')}
                    >
                        <div className={cx('best-value')}>Best Value</div>
                        <h3>Yearly Plan</h3>
                        <div className={cx('price')}>$89.99<span>/year</span></div>
                        <div className={cx('savings')}>Save 25%</div>
                        <ul className={cx('features')}>
                            <li><FontAwesomeIcon icon={faCheck} /> All monthly features</li>
                            <li><FontAwesomeIcon icon={faCheck} /> Exclusive content</li>
                            <li><FontAwesomeIcon icon={faCheck} /> Digital archive access</li>
                            <li><FontAwesomeIcon icon={faCheck} /> Priority support</li>
                        </ul>
                    </div>
                </div>

                <form className={cx('subscribe-form')} onSubmit={handleSubmit}>
                    <div className={cx('form-row')}>
                        <div className={cx('form-group')}>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={cx('terms')}>
                        <label className={cx('checkbox-container')}>
                            <input type="checkbox" required />
                            <span>I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link></span>
                        </label>
                    </div>

                    <button type="submit" className={cx('subscribe-button')}>
                        Subscribe Now
                    </button>
                </form>

                <div className={cx('subscribe-footer')}>
                    <p>Already have an account? <Link to="/login">Sign in</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;