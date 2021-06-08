import { FC } from "react"

type Props = {
  color?: string
  width?: string
  height?: string
}

export const SettingsV2: FC<Props> = ({ color = "#000", width = "14px", height = "14px" }) => (
  <svg width={width} height={height} viewBox="0 0 14 14" version="1.1" fill={color}>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="share" transform="translate(-576.000000, -220.000000)" fill={color} fillRule="nonzero">
        <g id="menu" transform="translate(575.000000, 99.000000)">
          <g id="4" transform="translate(0.000000, 120.000000)">
            <path
              d="M13.5,8.38 C13.5,8.255 13.5,8.13 13.5,8 C13.5,7.87 13.5,7.745 13.5,7.615 L14.46,6.775 C14.8253604,6.45297065 14.9055936,5.91456366 14.65,5.5 L13.47,3.5 C13.2915505,3.19091596 12.9618992,3.00036607 12.605,3 C12.496325,2.99916743 12.3882411,3.01605556 12.285,3.05 L11.07,3.46 C10.86023,3.32060369 10.6414129,3.1953267 10.415,3.085 L10.16,1.825 C10.0656315,1.34988423 9.64430803,1.01071882 9.16,1.02 L6.82,1.02 C6.33569197,1.01071882 5.91436848,1.34988423 5.82,1.825 L5.565,3.085 C5.33696654,3.19530002 5.11648454,3.32057388 4.905,3.46 L3.715,3.03 C3.61064857,3.00281178 3.50258649,2.99268097 3.395,3 C3.03810081,3.00036607 2.7084495,3.19091596 2.53,3.5 L1.35,5.5 C1.10930024,5.91350678 1.19523212,6.43957758 1.555,6.755 L2.5,7.62 C2.5,7.745 2.5,7.87 2.5,8 C2.5,8.13 2.5,8.255 2.5,8.385 L1.555,9.225 C1.18462534,9.54299553 1.0979728,10.081932 1.35,10.5 L2.53,12.5 C2.7084495,12.809084 3.03810081,12.9996339 3.395,13 C3.50367496,13.0008326 3.61175894,12.9839444 3.715,12.95 L4.93,12.54 C5.13976998,12.6793963 5.35858712,12.8046733 5.585,12.915 L5.84,14.175 C5.93436848,14.6501158 6.35569197,14.9892812 6.84,14.98 L9.2,14.98 C9.68430803,14.9892812 10.1056315,14.6501158 10.2,14.175 L10.455,12.915 C10.6830335,12.8047 10.9035155,12.6794261 11.115,12.54 L12.325,12.95 C12.4282411,12.9839444 12.536325,13.0008326 12.645,13 C13.0018992,12.9996339 13.3315505,12.809084 13.51,12.5 L14.65,10.5 C14.8906998,10.0864932 14.8047679,9.56042242 14.445,9.245 L13.5,8.38 Z M12.605,12 L10.89,11.42 C10.4885323,11.760054 10.0296984,12.0258729 9.535,12.205 L9.18,14 L6.82,14 L6.465,12.225 C5.97421082,12.0407889 5.51785894,11.7754287 5.115,11.44 L3.395,12 L2.215,10 L3.575,8.8 C3.48254845,8.28242948 3.48254845,7.75257052 3.575,7.235 L2.215,6 L3.395,4 L5.11,4.58 C5.51146769,4.23994595 5.97030156,3.97412707 6.465,3.795 L6.82,2 L9.18,2 L9.535,3.775 C10.0257892,3.9592111 10.4821411,4.22457127 10.885,4.56 L12.605,4 L13.785,6 L12.425,7.2 C12.5174516,7.71757052 12.5174516,8.24742948 12.425,8.765 L13.785,10 L12.605,12 Z"
              id="Shape"
            ></path>
            <path
              d="M8,11 C6.34314575,11 5,9.65685425 5,8 C5,6.34314575 6.34314575,5 8,5 C9.65685425,5 11,6.34314575 11,8 C11.0081032,8.79810602 10.6946355,9.56588494 10.1302602,10.1302602 C9.56588494,10.6946355 8.79810602,11.0081032 8,11 Z M8,6 C7.46584954,5.98755672 6.94987987,6.19427211 6.57207599,6.57207599 C6.19427211,6.94987987 5.98755672,7.46584954 6,8 C5.98755672,8.53415046 6.19427211,9.05012013 6.57207599,9.42792401 C6.94987987,9.80572789 7.46584954,10.0124433 8,10 C8.53415046,10.0124433 9.05012013,9.80572789 9.42792401,9.42792401 C9.80572789,9.05012013 10.0124433,8.53415046 10,8 C10.0124433,7.46584954 9.80572789,6.94987987 9.42792401,6.57207599 C9.05012013,6.19427211 8.53415046,5.98755672 8,6 Z"
              id="Shape"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default SettingsV2