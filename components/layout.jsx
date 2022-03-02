import HeadMeta from "./headMeta"

export default function Layout({ children }) {
    return (
        <>
            <HeadMeta />
            
            <main>{children}</main>
        </>
    )
}