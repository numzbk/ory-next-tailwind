import {

  Card,
  Button,
  LinkButton,
  typographyH2Styles,
  typographyLinkStyles,
} from "@ory/themes"
import cn from "classnames"

export const MarginCard = Card

export const ActionCard = Card

export const CenterLink = Button

export const TextLeftButton = Button

export interface DocsButtonProps {
  title: string
  href?: string
  onClick?: () => void
  testid: string
  disabled?: boolean
  unresponsive?: boolean
}

export const DocsButton = ({
  title,
  href,
  onClick,
  testid,
  disabled,
  unresponsive,
}: DocsButtonProps) => (
  <div className={cn("col-xs-4", { "col-md-12": !unresponsive })}>
    <div className="box">
      {/* <TextLeftButton
        onClick={onClick}
        disabled={disabled}
        data-testid={testid}
        href={href}
      >
        {title}
      </TextLeftButton> */}
    </div>
  </div>
)
