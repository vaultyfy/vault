import { SelectProps } from "@components/ui/date-picker";
import { FormikProps } from "formik";
import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

interface FilterSelectProps extends Omit<SelectProps, "onChange"> {
  formik: FormikProps<any>;
  fieldName: string;
}

export const FilterSelect = ({
  options,
  formik,
  fieldName,
  placeholder,
}: FilterSelectProps) => {
  const handleChange = (selectedOption: Option | null) => {
    formik.setFieldValue(fieldName, selectedOption ? selectedOption.value : "");
  };

  const value =
    options?.find((option) => option.value === formik.values[fieldName]) ||
    null;

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
      styles={{
        control: (baseStyle) => ({
          ...baseStyle,
          border: "none",
          boxShadow: "none",
          background: "#fff",
        }),
        placeholder: (baseStyle) => ({
          ...baseStyle,
          color: "#000",
          fontWeight: "500",
        }),
        singleValue: (baseStyle) => ({
          ...baseStyle,
          color: "#000",
          fontWeight: "500",
        }),
        indicatorSeparator: (baseStyle) => ({
          ...baseStyle,
          display: "none",
        }),
        container: (baseStyle) => ({
          ...baseStyle,
          fontSize: "12px",
          height: "100%",
          width: "100%",
        }),
        option: (baseStyle, state) => ({
          ...baseStyle,
          color: state.isSelected ? "#fff" : "#04040499",
          backgroundColor: state.isSelected ? "var(--primary)" : "transparent",
          "&:hover": {
            backgroundColor: state.isSelected
              ? "var(--primary)"
              : "var(--pale)",
            color: state.isSelected ? "#fff" : "#04040499",
          },
          padding: ".2em .8em",
          margin: ".3em 0",
          height: "fit-content",
          borderRadius: "6px",
        }),
        menu: (baseStyle) => ({
          ...baseStyle,
          width: "100%",
          backgroundColor: "#fff",
        }),
      }}
    />
  );
};
