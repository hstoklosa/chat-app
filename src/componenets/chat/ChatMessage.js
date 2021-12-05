const ChatMessage = ({ text, messageClass, userPhoto }) => {
    return (
        <div className={`chat-message ${messageClass}`}>
            <img src={userPhoto} alt="User PFP" />
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage;