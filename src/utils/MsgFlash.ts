import { toast, Zoom } from "react-toastify";
export function ErrorRequest(mensagem: string) {
  toast.error(mensagem, {
    transition: Zoom,
    position: toast.POSITION.TOP_CENTER,
  });
  return;
}

export function SucessRequest(mensagem: string) {
  toast.success(mensagem, {
    autoClose: 2000,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}

export function getDateLog(path: string) {
  const today = ` PATH - ${path} \n ${new Date().toLocaleDateString(
    "pt-BR"
  )} - ${new Date().toLocaleTimeString("pt-BR")} `;
  return today;
}
