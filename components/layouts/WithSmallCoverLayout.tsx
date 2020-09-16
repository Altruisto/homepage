import { StandardLayout } from "./StandardLayout"
import { ReactNode } from "react"
import { LayoutComponent } from "."

type Props = {
  title?: string
  coverContent?: ReactNode
  withMenu?: boolean
  backgroundImage?: string
  noCta?: boolean
}

export const WithSmallCoverLayout: LayoutComponent<Props> = ({
  title = "",
  coverContent = null,
  backgroundImage = "url(/images/default-small-cover.jpg)",
  withMenu,
  noCta = false,
  seoMetaTags,
  ogMetaTags,
  twitterMetaTags,
  children
}) => (
  <StandardLayout
    seoMetaTags={seoMetaTags}
    ogMetaTags={ogMetaTags}
    twitterMetaTags={twitterMetaTags}
    withMenu={withMenu}
    noCta={noCta}
  >
    <div className="cover cover--small with-overlay" style={{ backgroundImage }}>
      {coverContent ? coverContent : <h1>{title}</h1>}
    </div>
    <div className="container pt-4 fill-height">{children}</div>
  </StandardLayout>
)
