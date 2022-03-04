import styles from '../componentsStyles/Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react';

export default function Header() {

    const searchFieldRef = useRef(null);
    const [serachIsActive, setSearchIsActive] = useState(false)

    const toogleSearchField = () => {
        setSearchIsActive(!serachIsActive)
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo} >
                <Link href="/">
                    <a><h1>xyz</h1></a>
                </Link>
            </div>
            < div className={styles.icons} >
                <div className={styles.search} onClick={toogleSearchField}>
                    <SearchIcon style={{
                        fontSize: 50,
                        color: 'red'
                    }} />
                </div>
                <div className={styles.whatsBtn}>
                    <Link href={`${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} >
                        <a target="_blank">
                            <div className="fa-brands fa-whatsapp" />
                        </a>
                    </Link>
                </div>
            </div>

            {
                serachIsActive &&
                <div className={styles.searchFieldActive} >
                    <label
                        htmlFor="searchFieldRef"
                    >
                        <SearchIcon style={{ fontSize: 25 }} />
                    </label>
                    <input
                        ref={searchFieldRef}
                        type="search"
                        id="searchField"
                        placeholder="Anel xyz"
                    />
                </div>
            }
        </header>

    )
}