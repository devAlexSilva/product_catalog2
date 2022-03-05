import HeadMeta from "./headMeta"

export default function Layout({children}){
    return(
        <>
            <HeadMeta />
            <Header />
            
            <main>{children}</main>
        </>
    )
}