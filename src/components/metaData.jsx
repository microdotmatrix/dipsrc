import { Helmet } from "react-helmet"

const MetaData = () => {
  return (
    <>
      <Helmet>
        {/*  og meta  */}
        <meta property="og:type" value="website" />
        <meta property="og:title" value="Dip Devices Standard Operation Practices and Guidelines" />
        <meta property="og:description" value="An online reference source for employees of DipDevices.com" />
        <meta property="og:url" value="https://dipguide.vercel.app" />
        <meta property="og:image" value="https://dipguide.vercel.app/static/media/dipHex.b27de201bc8e93027b90.png" />
        <meta property="og:image:alt" value="Dip Devices" />

        {/* twitter meta */}
        <meta name="twitter:card" value="summary_large_image" />
        <meta name="twitter:site" value="@dipdevices" />
        <meta name="twitter:creator" value="@dipdevices" />
        <meta name="twitter:title" value="Dip Devices Standard Operation Practices and Guidelines" />
        <meta name="twitter:description" value="An online reference source for employees of DipDevices.com" />
        <meta name="twitter:image" value="https://dipguide.vercel.app/static/media/dipHex.b27de201bc8e93027b90.png" />
        <meta name="twitter:image:alt" value="Dip Devices" />
      </Helmet>
    </>
  )
}

export default MetaData