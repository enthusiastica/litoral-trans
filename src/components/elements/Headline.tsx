import * as React from "react"

export type HeadlineType = { children: React.ReactNode | React.ReactNode[], className?: string }

const headline = (tag: string, props: HeadlineType) => React.createElement(tag, { className: `text-center break-word max-w-prose m-auto ${props.className || ""}` }, props.children)

export const H1 = (props: HeadlineType) => headline("h1", props)
export const H2 = (props: HeadlineType) => headline("h2", props)
export const H3 = (props: HeadlineType) => headline("h3", props)
