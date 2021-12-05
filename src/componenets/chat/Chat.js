import { collection, query, orderBy, limitToLast, doc, onSnapshot } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { firestore, auth } from '../../database/useDB';
import ChatMessage from './ChatMessage';

const Chat = () => {
    const msgRef = collection(firestore, 'messages');
    const msgQuery = query(msgRef, orderBy('createdAt'), limitToLast(25))
    const [messages, loading, error] = useCollectionData(msgQuery);
    const [user, userLoading, userError] = useAuthState(auth);


    if (loading) {
        return <></>
    }
    return (
        <section>
            {messages.map((message, idx) => {
                const { text, userID, userPhoto } = message;
                const messageClass = user.uid == message.userID ? 'sent' : 'received';

                return <ChatMessage key={idx} text={text} messageClass={messageClass} userPhoto={userPhoto} />
            })}
        </section >
    )
}

export default Chat;