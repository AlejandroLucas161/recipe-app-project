import style from './message.module.css';

const Message = ({ message }) => {
  return (
    <div>
      <h1 className={style.message}>{message}</h1>
    </div>
  )
}

export default Message;
