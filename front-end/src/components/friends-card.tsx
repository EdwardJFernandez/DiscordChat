type Props = {
    Username: string
}

function FriendCard(props: Props) {
    return (
        <div className="h-[50px] bg-blue-500 m-1">{props.Username}</div>
    )

}

export default FriendCard;