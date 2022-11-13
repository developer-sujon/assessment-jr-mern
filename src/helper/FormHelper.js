class FormValidaion {
  static IsEmpty(value) {
    if (value.length <= 0) {
      return true;
    } else {
      return false;
    }
  }
}

export default FormValidaion;
