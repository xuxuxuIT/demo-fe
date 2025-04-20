import { Link, useNavigate } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Header.module.css'
import images from '../../../../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'
import { useState, useEffect, useRef } from 'react'
import { Wrapper as PopperWrapper } from '../../../../components/Popper'
import ImgHeader from '../ImgHeader'

const cx = classNames.bind(styles)

function Header() {
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([])
            return
        }

        setLoading(true)

        const fetchApi = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await fetch(`/api/search?q=${encodeURIComponent(searchValue)}`)
                const data = await response.json()
                setSearchResult(data)
            } catch (error) {
                console.error('Search error:', error)
                setSearchResult([])
            } finally {
                setLoading(false)
            }
        }

        const timeoutId = setTimeout(() => {
            fetchApi()
        }, 500)

        return () => clearTimeout(timeoutId)
    }, [searchValue])

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleSearch = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }

    const handleLogin = () => {
        navigate('/login')
    }

    const handleSubscribe = () => {
        navigate('/subscribe')
    }

    const handleLogoClick = () => {
        navigate('/')
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                    <img src={images} alt="logo" />
                    <h2>News Odeyssey</h2>
                </div>
                <nav className={cx('nav-menu')}>
                    <Tippy
                        interactive
                        placement="bottom"
                        render={attrs => (
                            <div className={cx('tippy-content')} tabIndex="-1" {...attrs}>
                                <div className={cx('tippy-menu')}>
                                    <Link to="/animal/pets" className={cx('tippy-item')}>Pets</Link>
                                    <Link to="/animal/wildlife" className={cx('tippy-item')}>Endangered Species</Link>
                                    <Link to="/animal/animal-behaviors" className={cx('tippy-item')}>Animal Behaviors</Link>
                                    <Link to="/animal/animal-discoveries" className={cx('tippy-item')}>Animal Discoveries</Link>
                                </div>
                            </div>
                        )}
                    >
                        <Link to="/animal" className={cx('nav-link')}>Animal</Link>
                    </Tippy>

                    <Tippy
                        interactive
                        placement="bottom"
                        render={attrs => (
                            <div className={cx('tippy-content')} tabIndex="-1" {...attrs}>
                                <div className={cx('tippy-menu')}>
                                    <Link to="/nature/plants" className={cx('tippy-item')}>Plants</Link>
                                    <Link to="/nature/flowers" className={cx('tippy-item')}>Flowers</Link>
                                    <Link to="/nature/mushrooms" className={cx('tippy-item')}>Mushroom</Link>
                                    <Link to="/nature/trees" className={cx('tippy-item')}>Tree</Link>
                                </div>
                            </div>
                        )}
                    >
                        <Link to="/nature" className={cx('nav-link')}>Nature</Link>
                    </Tippy>

                    <Tippy
                        interactive
                        placement="bottom"
                        render={attrs => (
                            <div className={cx('tippy-content')} tabIndex="-1" {...attrs}>
                                <div className={cx('tippy-menu')}>
                                    <Link to="/travel/national-parks" className={cx('tippy-item')}>National Parks</Link>
                                    <Link to="/travel/destination-guides" className={cx('tippy-item')}>Nutrition Exercise</Link>
                                    <Link to="/travel/Longevity" className={cx('tippy-item')}>Longevity</Link>
                                    <Link to="/travel/diseases-conditions" className={cx('tippy-item')}>Diseases & Conditions</Link>
                                    <Link to="/travel/medical-breakthroughs" className={cx('tippy-item')}>Medical Breakthroughs</Link>
                                </div>
                            </div>
                        )}
                    >
                        <Link to="/travel" className={cx('nav-link')}>Travel</Link>
                    </Tippy>

                    <Tippy
                        interactive
                        placement="bottom"
                        render={attrs => (
                            <div className={cx('tippy-content')} tabIndex="-1" {...attrs}>
                                <div className={cx('tippy-menu')}>
                                    <Link to="/health/wellness" className={cx('tippy-item')}>Wellness</Link>
                                    <Link to="/health/nutrition-exercise" className={cx('tippy-item')}>Destination Guides</Link>
                                    <Link to="/health/health-tips" className={cx('tippy-item')}>health Tips</Link>
                                    <Link to="/health/world-heritage" className={cx('tippy-item')}>World Heritage</Link>
                                </div>
                            </div>
                        )}
                    >
                        <Link to="/health" className={cx('nav-link')}>Health</Link>
                    </Tippy>

                    <Tippy
                        interactive
                        placement="bottom"
                        render={attrs => (
                            <div className={cx('tippy-content')} tabIndex="-1" {...attrs}>
                                <div className={cx('tippy-menu')}>
                                    <Link to="/science/space-astronomy" className={cx('tippy-item')}>Space Astronomy</Link>
                                    <Link to="/science/dinosaurs-fossils" className={cx('tippy-item')}>Dinosaurs & Fossils</Link>
                                    <Link to="/science/conservation" className={cx('tippy-item')}>Conservation</Link>
                                    <Link to="/science/tech-innovation" className={cx('tippy-item')}>Tech & Innovation</Link>
                                </div>
                            </div>
                        )}
                    >
                        <Link to="/science" className={cx('nav-link')}>Science</Link>
                    </Tippy>

                    <Tippy
                        interactive
                        placement="bottom"
                        render={attrs => (
                            <div className={cx('tippy-content')} tabIndex="-1" {...attrs}>
                                <div className={cx('tippy-menu')}>
                                    <Link to="/environment/air-pollution" className={cx('tippy-item')}>Air Pollution</Link>
                                    <Link to="/environment/water-pollution" className={cx('tippy-item')}>Water Pollution</Link>
                                    <Link to="/environment/land-pollution" className={cx('tippy-item')}>Land Pollution</Link>
                                    <Link to="/environment/noisy-pollution" className={cx('tippy-item')}>Noisy Pollution</Link>
                                </div>
                            </div>
                        )}
                    >
                        <Link to="/environment" className={cx('nav-link')}>Environment</Link>
                    </Tippy>

                    <Tippy
                        interactive
                        placement="bottom"
                        render={attrs => (
                            <div className={cx('tippy-content')} tabIndex="-1" {...attrs}>
                                <div className={cx('tippy-menu')}>
                                    <Link to="/history-culture/historic-sites" className={cx('tippy-item')}>Historic Sites</Link>
                                    <Link to="/history-culture/archaeology" className={cx('tippy-item')}>Archaeology</Link>
                                    <Link to="/history-culture/ancient-history" className={cx('tippy-item')}>Ancient History</Link>
                                    <Link to="/history-culture/historical-history" className={cx('tippy-item')}>Historical History</Link>
                                    <Link to="/history-culture/religion" className={cx('tippy-item')}>Religion</Link>
                                </div>
                            </div>
                        )}
                    >
                        <Link to="/history-culture" className={cx('nav-link')}>History & Culture</Link>
                    </Tippy>
                </nav>

                <Tippy
                    interactive
                    visible={showResult && searchResult.length > 0}
                    onClickOutside={handleHideResult}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                {searchResult.map((result) => (
                                    <div key={result.id} className={cx('result-item')}>
                                        {result.title}
                                    </div>
                                ))}
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            ref={inputRef}
                            value={searchValue}
                            placeholder="Search"
                            spellCheck={false}
                            onChange={handleSearch}
                            onFocus={() => setShowResult(true)}
                        />
                        {!!searchValue && !loading && (
                            <button className={cx('clear-btn')} onClick={handleClear}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <button className={cx('action-btn', 'login-btn')} onClick={handleLogin}>
                        <i className="fas fa-user"></i>
                        Login
                    </button>
                    <button className={cx('action-btn', 'subscribe-btn')} onClick={handleSubscribe}>
                        Subscribe
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header