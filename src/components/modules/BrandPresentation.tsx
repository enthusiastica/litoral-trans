import * as React from "react"

import { FaShippingFast } from "react-icons/fa"

import Paragraph from "../elements/Paragraph"

class BrandPresentation extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center font-primary">
        <div className="lg:border-b lg:border-secondary-light font-bold text-xl sm:text-2xl md:text-3xl flex items-center lg:pb-2">
          <FaShippingFast className="inline-block mr-2" />
          {process.env.name}
        </div>
        <Paragraph className="hidden lg:block font-normal text-md pt-1">{process.env.slogan}</Paragraph>
      </div>
    )
  }
}

export default BrandPresentation