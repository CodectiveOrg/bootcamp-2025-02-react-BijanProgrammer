import { ReactElement, useContext } from "react";

import { Bounce, ToastContainer, ToastContainerProps } from "react-toastify";

import { ThemeContext } from "../../context/theme-context.ts";

type Props = Partial<ToastContainerProps>;

function Toaster(props: Props): ReactElement {
  const { theme } = useContext(ThemeContext);

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
      transition={Bounce}
      aria-label={undefined}
      {...props}
    />
  );
}

export default Toaster;
