import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function confirmDeleteAlert(handleDelete, data) {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            MySwal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
            });
            handleDelete(data);
        }
    });
}
