import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
        // Handle login logic here
        console.log('Login attempt with:', formData);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={cx('login-container')}>
            <div className={cx('login-content')}>
                <div className={cx('login-header')}>
                    <h1>Sign In</h1>
                    <p>Access your News Odeyssey account</p>
                </div>

                <form className={cx('login-form')} onSubmit={handleSubmit}>
                    <div className={cx('form-group')}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="password">Password</label>
                        <div className={cx('password-input')}>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                className={cx('toggle-password')}
                                onClick={togglePasswordVisibility}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </div>

                    <div className={cx('form-options')}>
                        <label className={cx('remember-me')}>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <Link to="/forgot-password" className={cx('forgot-password')}>
                            Forgot password?
                        </Link>
                    </div>

                    <button type="submit" className={cx('login-button')}>
                        Sign In
                    </button>
                </form>

                <div className={cx('login-footer')}>
                    <p>Don't have an account? <Link to="/subscribe">Subscribe now</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;