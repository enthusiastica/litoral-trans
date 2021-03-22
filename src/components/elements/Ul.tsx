import * as React from "react"

export const Ul = (props: { children: JSX.Element | JSX.Element[], className?: string }) => <ul className={`list-reset ${props.className || ""}`}>{props.children}</ul>
