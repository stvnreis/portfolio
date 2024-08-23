import { Button as NextUiButton } from "@nextui-org/react"
import { MouseEvent } from "react"

interface ButtonProps {
  title: string
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Button = (props: ButtonProps) => {
  return <NextUiButton 
    title={props.title}
    
    onClick={props.handleClick}
    size={props.size ?? 'md'}
    color="primary"
    className={props.className}
    radius="md"
  > 
    {props.title}
  </NextUiButton>
}