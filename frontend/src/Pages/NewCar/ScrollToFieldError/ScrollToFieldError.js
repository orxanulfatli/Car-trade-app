import { useFormikContext } from "formik";
import React, { useEffect } from "react";

export const ScrollToFieldError = () => {
  const { submitCount, isSubmitting, isValid, errors } = useFormikContext();

  useEffect(() => {
    if (!isValid && isSubmitting && Object.keys(errors).length > 0) {
      document.getElementsByName(Object.keys(errors)[0])[0].focus();
    }
  }, [submitCount, isSubmitting, errors]);

  return null;
};
