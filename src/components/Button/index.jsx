import './styles.css';

export default function Button(props) {
    return (
        <button className="Button" type='submit'>
            {props.text}
        </button>
    )
}