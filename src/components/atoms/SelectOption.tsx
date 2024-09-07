/**
 * A React component that renders a select dropdown with options.
 *
 * @param data - An array of objects with `value` and `label` properties, representing the options to display in the dropdown.
 * @param onSelect - A function that is called when the user selects an option, with the name of the select and the selected value as arguments.
 * @param name - The name of the select element.
 * @param activeSelection - An optional object that maps select names to their currently active values.
 */
import { memo, useEffect, useState } from "react";

function SelectOption({
  data,
  onSelect,
  name,
  activeSelection = {}
}: {
  data: Array<{ value: string; label: string }>,
  onSelect: (queryKey: string, value: string) => void,
  name: string,
  activeSelection?: { [key: string]: string }
}) {
  const [activeItem, setActiveItem] = useState<string>(activeSelection[name] || "");

  useEffect(() => {
    setActiveItem(activeSelection[name] || "");
  }, [activeSelection, name]);

  return (
    data.length > 0 && (
      <>
        <div className="flex flex-col">
        </div>
        <select
          name={name}
          className="bg-black border border-gray-50 p-2 ml-2 mb-2 md:w-4/12 w-5/12 text-white"
          onChange={(e) => onSelect(name, e.target.value)}
          value={activeItem}
        >
          <option value="">Select an option</option>
          {data.map((option) => (
            <option 
            key={option.value} 
            value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </>
    )
  );
}

export default memo(SelectOption);
