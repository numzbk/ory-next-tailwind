import { getNodeLabel } from "@ory/integrations/ui"

import { NodeInputProps } from "./helpers"

export function NodeInputSubmit<T>({
  node,
  attributes,
  disabled,
}: NodeInputProps) {
  console.log(attributes.disabled)
  return (
    <div className="flex flex-col">
      <input
        type='hidden'
        name={attributes.name}
        value={attributes.value || ""}
        disabled={attributes.disabled || disabled}
      />
      <input
        type="submit"
        className="button-base my-4 bg-blue-500 active:bg-blue-600"
        value={getNodeLabel(node)}

      />
    </div>
  )
}
