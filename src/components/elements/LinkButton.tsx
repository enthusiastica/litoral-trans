import * as React from "react"

import Route from "./Route"

interface LinkButtonProps {
  href: string;
  icon: React.ComponentType<{ className?: string, fill?: string }>;
  description: string;
  className?: string;
}

class LinkButton extends React.Component<LinkButtonProps> {
  render() {
    return (
      <Route
        href={this.props.href}
        className={`bg-primary-semi-dark hover:bg-primary-dark border-b-4 break-all border-primary-darker rounded-lg shadow-lg flex items-center justify-center w-full max-w-prose p-2 ${
          this.props.className || ""
        }`}
      >
        <this.props.icon className="mr-1" />
        {this.props.description}
      </Route>
    )
  }
}

export default LinkButton
