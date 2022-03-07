import HeadMeta from './headMeta'
import Header from './header'
export default function Layout({children}){
    return(
        <>
            <HeadMeta />
            <Header />
            {children}
        </>
    )
}