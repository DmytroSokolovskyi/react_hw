import classes from './MyButton.module.css'



export default function MyButton (props) {
    console.log(props);
    return (
        <button {...props} className={classes.myBtn}>
            {props.children}
        </button>
    );
 }
