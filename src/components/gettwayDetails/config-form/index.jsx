// [
//     {
//         "key": "apiKeys",
//         "label": "Private Key"
//     },
//     {
//         "key": "publicKeys",
//         "label": "Client ID"
//     },
//     {
//         "key": "accountId",
//         "label": "Account ID"
//     },
//     {
//         "key": "callbackUrl",
//         "label": "Payment Callback Url"
//     },
//     {
//         "key": "env",
//         "label": "Environment",
//         "options": [
//             "Sandbox",
//             "Production"
//         ]
//     },
//     {
//         "key": "currency",
//         "label": "Allowed Currency",
//         "options": [
//             "NGN"
//         ]
//     },
//     {
//         "key": "bearer",
//         "label": "Who bears gateway charges",
//         "options": [
//             "subaccount",
//             "account"
//         ]
//     }
// ]
import { Select } from "@/components/ui/select.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Label } from "@radix-ui/react-label";

const getFormElement = ({
  formData,
  key,
  label,
  options,
  handleInputChange,
}) => {
  if (options) {
    return (
      <Select
        onChange={handleInputChange}
        defaultValue={formData[key]}
        options={options}
        id={key}
      />
    );
  } else {
    return (
      <Textarea
        id={key}
        value={formData[key]}
        onChange={handleInputChange}
        className="placeholder:text-[#717680] placeholder:text-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
        placeholder={label}
      />
    );
  }
};

const ConfigForm = ({ config, errors, formData = {}, handleInputChange }) => {
  return config.map((entry, idx) => {
    const { key, label, options } = entry;
    return (
      <div className="text-[1.3rem]" key={idx}>
        <Label className="mb-[.5rem] block" htmlFor={key}>
          {label}
        </Label>
        {getFormElement({
          formData,
          key,
          label,
          options: options
            ? options.map((row) => ({ label: row, value: row }))
            : options,
          handleInputChange,
        })}
        {errors[key] && (
          <p className="text-red-500 text-[1.4rem] mt-1">{errors[key]}</p>
        )}
      </div>
    );
  });
};

export default ConfigForm;
