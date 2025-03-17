import ReactDOM from "react-dom";

function Modal({ children }){
    return ReactDOM.createPortal(
        <div className="">
            { children }
        </div>,
        document.getElementById('modal')
    )
}
export { Modal };