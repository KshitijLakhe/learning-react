import { UserCardDestructured, UserCardProps } from "./01.props-receive";


function PropsBasics(){
    let username = "Kedar Mane"
    return (
        <>
        <UserCardProps name="Aniket Patil" isActive={true} />
        <UserCardDestructured name={username} isActive={true} />
        </>
    )
}

export default PropsBasics