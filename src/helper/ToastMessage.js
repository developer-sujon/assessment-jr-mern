import cogoToast from "cogo-toast";

class ToastMessage {
  static ErrorToast(message) {
    cogoToast.error(message);
  }

  static SuccessToast(message) {
    cogoToast.success(message);
  }
}

export default ToastMessage;
