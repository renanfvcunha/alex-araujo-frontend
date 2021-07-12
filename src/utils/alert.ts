import Swal, { SweetAlertResult } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const mySwal = withReactContent(Swal);

const swAlert = (
  icon: 'warning' | 'error' | 'success' | 'info' | 'question',
  title = '',
  text = '',
  confirmButtonText = 'OK',
  showCancelButton = false,
  cancelButtonText = 'CANCELAR',
  confirmButtonColor = '#2196f3'
): Promise<SweetAlertResult> => {
  return mySwal.fire({
    icon,
    title,
    text,
    confirmButtonText,
    showCancelButton,
    cancelButtonText,
    allowOutsideClick: false,
    reverseButtons: true,
    confirmButtonColor,
  });
};

export default swAlert;
