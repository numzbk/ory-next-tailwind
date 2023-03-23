import { NodeInputProps } from "./helpers"

export function NodeInputDefault<T>(props: NodeInputProps) {
  const { node, attributes, value = "", setValue, disabled } = props

  // Some attributes have dynamic JavaScript - this is for example required for WebAuthn.
  const onClick = () => {
    // This section is only used for WebAuthn. The script is loaded via a <script> node
    // and the functions are available on the global window level. Unfortunately, there
    // is currently no better way than executing eval / function here at this moment.
    if (attributes.onclick) {
      const run = new Function(attributes.onclick)
      run()
    }
  }


  // Render a generic text input field.
  return (
    <div className="block">
      <span className="label-base">
        {node.meta.label?.text}
      </span>
      <input
        type={attributes.type}
        name={attributes.name}
        disabled={attributes.disabled || disabled}
        onClick={onClick}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        value={value}
        className="input-base" placeholder="" />
      {
        node.messages.length > 0 && <>
          {node.messages.map(({ text, id, type }, k) => {
            console.log(type)
            if (type == "error") {
              <span key={`${id}-${k}`} data-testid={`ui/message/${id}`}>
                {text}
              </span>
            }
          })}
        </>
      }
    </div>
  )
}
