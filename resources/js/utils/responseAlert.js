import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function responseAlert(title, message, icon) {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
        title: title,
        text: message,
        icon: icon,
    });
}
