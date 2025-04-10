import React, { useEffect, useState } from 'react'
import axios from 'axios';

const a = axios;
const LongPolling = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');

    const subscribe = async () => {
        try {
            const {data} = await a.get('http://localhost:5000/get-messages');
            setMessages(prev => [data, ...prev]);
            await subscribe()
        } catch (e) {
            console.log(e)
            setTimeout(() => {
                subscribe()
            }, 500)
        }
    }

    useEffect(() => {
        subscribe();
    }, [])


    const sendMessage = async () => {
        await a.post('http://localhost:5000/new-messages', {
            message: value,
            id: Date.now()
        })
    }

  return (
    <div>
        <div>
            <div className="form">
                <input value={value} onChange={e => setValue(e.target.value)} type="text" />
                <button onClick={sendMessage}>Отправить</button>
            </div>
            <div className="messages">
                {messages.map(mess =>
                    <div className='message' key={mess.id}>
                        {mess.message}
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default LongPolling