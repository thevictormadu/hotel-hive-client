import Swal from "sweetalert2";
export const timedAlert = (position, icon, title) => {
  Swal.fire({
    position,
    icon,
    title,
    showConfirmButton: false,
    timer: 1700,
  });
};
