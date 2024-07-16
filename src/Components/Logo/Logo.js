import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css"

export const Logo = () => {
  return (
    <Navbar.Brand as={NavLink} to="/" className={styles.logo}>

      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.855 19.29L30 17.145L27.855 15L22.5 20.355L9.645 7.5L15 2.145L12.855 0L10.71 2.145L8.565 0L5.355 3.21L3.21 1.065L1.065 3.21L3.21 5.355L0 8.565L2.145 10.71L0 12.855L2.145 15L7.5 9.645L20.355 22.5L15 27.855L17.145 30L19.29 27.855L21.435 30L24.645 26.79L26.79 28.935L28.935 26.79L26.79 24.645L30 21.435L27.855 19.29Z"
          fill="white"
        />
      </svg>

      <svg
        className="px-2"
        width="165"
        height="20"
        viewBox="0 0 165 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.91741 7.28H0V5.84H1.91741V5.46667C1.91741 4.80889 2.01506 4.16 2.21035 3.52C2.40564 2.88 2.69858 2.29333 3.08916 1.76C3.4975 1.22667 4.00348 0.799999 4.60711 0.479999C5.2285 0.16 5.96528 0 6.81746 0C7.47435 0 8.06023 0.0711107 8.57509 0.213332C9.1077 0.355555 9.5693 0.524444 9.95988 0.719999C10.3505 0.915555 10.6434 1.09333 10.8387 1.25333L10.0131 2.56C9.72908 2.29333 9.30299 2.07111 8.73487 1.89333C8.1845 1.69778 7.58087 1.6 6.92398 1.6C6.17832 1.6 5.56582 1.79556 5.08646 2.18667C4.62487 2.56 4.27867 3.04 4.04787 3.62667C3.83482 4.21333 3.7283 4.80889 3.7283 5.41333V5.84H10.6789V19.7333H8.86802V7.28H3.7283V19.7333H1.91741V7.28Z"
          fill="white"
        />
        <path
          d="M21.3287 19.0667C21.1867 19.12 20.9647 19.2178 20.6629 19.36C20.3611 19.5022 19.9972 19.6267 19.5711 19.7333C19.145 19.84 18.6834 19.8933 18.1863 19.8933C17.6714 19.8933 17.1832 19.7956 16.7216 19.6C16.2777 19.4044 15.9227 19.1111 15.6564 18.72C15.39 18.3111 15.2569 17.8133 15.2569 17.2267V7.28H13.3395V5.84H15.2569V1.14667H17.0678V5.84H20.2635V7.28H17.0678V16.72C17.1033 17.2178 17.2808 17.5911 17.6004 17.84C17.9377 18.0889 18.3194 18.2133 18.7455 18.2133C19.2426 18.2133 19.6953 18.1333 20.1037 17.9733C20.512 17.7956 20.7606 17.6711 20.8493 17.6L21.3287 19.0667Z"
          fill="white"
        />
        <path
          d="M35.2555 19.7333H33.4446V11.9733C33.4446 10.3378 33.2049 9.14667 32.7256 8.4C32.2462 7.63556 31.4917 7.25333 30.462 7.25333C29.7518 7.25333 29.0506 7.43111 28.3582 7.78667C27.6658 8.12444 27.0533 8.59556 26.5206 9.2C26.0058 9.78667 25.6329 10.4622 25.4022 11.2267V19.7333H23.5913V5.84H25.2424V8.98667C25.6152 8.31111 26.1034 7.72444 26.7071 7.22667C27.3107 6.71111 27.9942 6.31111 28.7576 6.02667C29.521 5.74222 30.3111 5.6 31.1278 5.6C31.8912 5.6 32.5392 5.74222 33.0718 6.02667C33.6044 6.31111 34.0305 6.72 34.3501 7.25333C34.6696 7.76889 34.9004 8.4 35.0425 9.14667C35.1845 9.87556 35.2555 10.6933 35.2555 11.6V19.7333Z"
          fill="white"
        />
        <path
          d="M45.1091 20C44.1149 20 43.1917 19.8133 42.3395 19.44C41.4873 19.0489 40.7505 18.5244 40.1291 17.8667C39.5078 17.1911 39.0195 16.4178 38.6644 15.5467C38.3271 14.6756 38.1585 13.7422 38.1585 12.7467C38.1585 11.4489 38.4514 10.2578 39.0373 9.17333C39.6409 8.08889 40.4665 7.22667 41.5139 6.58667C42.5614 5.92889 43.7509 5.6 45.0825 5.6C46.4495 5.6 47.639 5.92889 48.651 6.58667C49.6807 7.24444 50.4885 8.11556 51.0744 9.2C51.6602 10.2667 51.9532 11.44 51.9532 12.72C51.9532 12.8622 51.9532 13.0044 51.9532 13.1467C51.9532 13.2711 51.9443 13.3689 51.9265 13.44H40.0492C40.138 14.4356 40.4132 15.3244 40.8748 16.1067C41.3541 16.8711 41.9667 17.4844 42.7123 17.9467C43.4757 18.3911 44.3013 18.6133 45.189 18.6133C46.0944 18.6133 46.9466 18.3822 47.7455 17.92C48.5622 17.4578 49.1303 16.8533 49.4499 16.1067L51.0211 16.5333C50.737 17.1911 50.3021 17.7867 49.7162 18.32C49.1303 18.8533 48.4379 19.2711 47.639 19.5733C46.8578 19.8578 46.0145 20 45.1091 20ZM39.996 12.1333H50.2488C50.1778 11.12 49.9026 10.2311 49.4233 9.46667C48.9617 8.70222 48.3491 8.10667 47.5857 7.68C46.8401 7.23556 46.0145 7.01333 45.1091 7.01333C44.2036 7.01333 43.3781 7.23556 42.6324 7.68C41.8868 8.10667 41.2743 8.71111 40.7949 9.49333C40.3333 10.2578 40.067 11.1378 39.996 12.1333Z"
          fill="white"
        />
        <path
          d="M59.301 20C58.1647 20 57.1084 19.8133 56.1319 19.44C55.1554 19.0667 54.3121 18.4978 53.602 17.7333L54.3476 16.4533C55.1288 17.1822 55.91 17.7156 56.6911 18.0533C57.4901 18.3733 58.3334 18.5333 59.2211 18.5333C60.304 18.5333 61.1829 18.32 61.8575 17.8933C62.5321 17.4489 62.8695 16.8178 62.8695 16C62.8695 15.4489 62.7008 15.0311 62.3635 14.7467C62.0439 14.4444 61.5734 14.2044 60.9521 14.0267C60.3484 13.8311 59.6205 13.6267 58.7683 13.4133C57.8096 13.1467 57.0018 12.8711 56.3449 12.5867C55.7058 12.2844 55.2176 11.9111 54.8803 11.4667C54.5607 11.0044 54.4009 10.4089 54.4009 9.68C54.4009 8.77333 54.6228 8.02667 55.0667 7.44C55.5283 6.83555 56.1497 6.38222 56.9308 6.08C57.7297 5.76 58.6174 5.6 59.5939 5.6C60.6591 5.6 61.6001 5.76889 62.4167 6.10667C63.2334 6.44444 63.8992 6.91556 64.414 7.52L63.5352 8.74667C63.0381 8.17778 62.4434 7.76 61.751 7.49333C61.0763 7.20889 60.3218 7.06667 59.4874 7.06667C58.9192 7.06667 58.3778 7.14667 57.8629 7.30667C57.348 7.44889 56.9219 7.69778 56.5846 8.05333C56.2651 8.39111 56.1053 8.86222 56.1053 9.46667C56.1053 9.96444 56.2295 10.3556 56.4781 10.64C56.7267 10.9067 57.0995 11.1378 57.5966 11.3333C58.0937 11.5111 58.7062 11.7067 59.4341 11.92C60.4816 12.2044 61.3959 12.4978 62.1771 12.8C62.9582 13.0844 63.5619 13.4578 63.988 13.92C64.4141 14.3822 64.6271 15.0311 64.6271 15.8667C64.6271 17.1644 64.1389 18.1778 63.1624 18.9067C62.186 19.6356 60.8988 20 59.301 20Z"
          fill="white"
        />
        <path
          d="M72.1742 20C71.038 20 69.9816 19.8133 69.0051 19.44C68.0287 19.0667 67.1854 18.4978 66.4752 17.7333L67.2209 16.4533C68.0021 17.1822 68.7832 17.7156 69.5644 18.0533C70.3633 18.3733 71.2066 18.5333 72.0943 18.5333C73.1773 18.5333 74.0561 18.32 74.7307 17.8933C75.4054 17.4489 75.7427 16.8178 75.7427 16C75.7427 15.4489 75.5741 15.0311 75.2367 14.7467C74.9172 14.4444 74.4467 14.2044 73.8253 14.0267C73.2217 13.8311 72.4938 13.6267 71.6416 13.4133C70.6829 13.1467 69.8751 12.8711 69.2182 12.5867C68.579 12.2844 68.0908 11.9111 67.7535 11.4667C67.4339 11.0044 67.2741 10.4089 67.2741 9.68C67.2741 8.77333 67.4961 8.02667 67.9399 7.44C68.4015 6.83555 69.0229 6.38222 69.8041 6.08C70.603 5.76 71.4907 5.6 72.4671 5.6C73.5324 5.6 74.4733 5.76889 75.29 6.10667C76.1067 6.44444 76.7724 6.91556 77.2873 7.52L76.4085 8.74667C75.9114 8.17778 75.3166 7.76 74.6242 7.49333C73.9496 7.20889 73.195 7.06667 72.3606 7.06667C71.7925 7.06667 71.251 7.14667 70.7361 7.30667C70.2213 7.44889 69.7952 7.69778 69.4579 8.05333C69.1383 8.39111 68.9785 8.86222 68.9785 9.46667C68.9785 9.96444 69.1028 10.3556 69.3513 10.64C69.5999 10.9067 69.9727 11.1378 70.4698 11.3333C70.9669 11.5111 71.5795 11.7067 72.3074 11.92C73.3548 12.2044 74.2691 12.4978 75.0503 12.8C75.8315 13.0844 76.4351 13.4578 76.8612 13.92C77.2873 14.3822 77.5003 15.0311 77.5003 15.8667C77.5003 17.1644 77.0121 18.1778 76.0357 18.9067C75.0592 19.6356 73.772 20 72.1742 20Z"
          fill="white"
        />
        <path
          d="M93.3531 20C92.2169 20 91.196 19.8133 90.2906 19.44C89.3851 19.0489 88.6128 18.5156 87.9737 17.84C87.3523 17.1644 86.873 16.3911 86.5356 15.52C86.1983 14.6489 86.0296 13.7333 86.0296 12.7733C86.0296 11.7956 86.1983 10.8711 86.5356 10C86.873 9.12889 87.3523 8.35556 87.9737 7.68C88.6128 7.00444 89.3851 6.48 90.2906 6.10667C91.196 5.71555 92.2169 5.52 93.3531 5.52C94.4893 5.52 95.5013 5.71555 96.389 6.10667C97.2944 6.48 98.0667 7.00444 98.7059 7.68C99.345 8.35556 99.8244 9.12889 100.144 10C100.481 10.8711 100.65 11.7956 100.65 12.7733C100.65 13.7333 100.481 14.6489 100.144 15.52C99.8244 16.3911 99.345 17.1644 98.7059 17.84C98.0845 18.5156 97.3211 19.0489 96.4156 19.44C95.5102 19.8133 94.4893 20 93.3531 20ZM89.7047 12.7733C89.7047 13.5911 89.8645 14.32 90.184 14.96C90.5036 15.5822 90.9386 16.0711 91.489 16.4267C92.0393 16.7822 92.6607 16.96 93.3531 16.96C94.0277 16.96 94.6403 16.7822 95.1906 16.4267C95.741 16.0533 96.176 15.5556 96.4955 14.9333C96.8328 14.2933 97.0015 13.5644 97.0015 12.7467C97.0015 11.9467 96.8328 11.2267 96.4955 10.5867C96.176 9.94667 95.741 9.44889 95.1906 9.09333C94.6403 8.73778 94.0277 8.56 93.3531 8.56C92.6607 8.56 92.0393 8.74667 91.489 9.12C90.9386 9.47556 90.5036 9.97333 90.184 10.6133C89.8645 11.2356 89.7047 11.9556 89.7047 12.7733Z"
          fill="white"
        />
        <path
          d="M116.028 19.7333H112.459V11.8933C112.459 10.7733 112.264 9.95556 111.873 9.44C111.483 8.92445 110.941 8.66667 110.249 8.66667C109.769 8.66667 109.281 8.79111 108.784 9.04C108.305 9.28889 107.87 9.63556 107.479 10.08C107.089 10.5067 106.805 11.0044 106.627 11.5733V19.7333H103.059V5.76H106.281V8.34667C106.636 7.74222 107.089 7.23556 107.639 6.82667C108.189 6.4 108.82 6.08 109.53 5.86667C110.258 5.63555 111.021 5.52 111.82 5.52C112.69 5.52 113.4 5.68 113.95 6C114.519 6.30222 114.945 6.72 115.229 7.25333C115.531 7.76889 115.735 8.35556 115.841 9.01333C115.966 9.67111 116.028 10.3378 116.028 11.0133V19.7333Z"
          fill="white"
        />
        <path
          d="M119.104 0.266666H122.672V15.2533C122.672 15.8933 122.779 16.3289 122.992 16.56C123.205 16.7733 123.498 16.88 123.871 16.88C124.155 16.88 124.448 16.8444 124.75 16.7733C125.051 16.7022 125.318 16.6133 125.549 16.5067L126.028 19.2267C125.549 19.4578 124.989 19.6356 124.35 19.76C123.711 19.8844 123.134 19.9467 122.619 19.9467C121.501 19.9467 120.631 19.6533 120.009 19.0667C119.406 18.4622 119.104 17.6089 119.104 16.5067V0.266666Z"
          fill="white"
        />
        <path
          d="M127.583 19.7333V5.76H131.151V19.7333H127.583ZM127.583 3.81333V0.266666H131.151V3.81333H127.583Z"
          fill="white"
        />
        <path
          d="M147.34 19.7333H143.771V11.8933C143.771 10.7733 143.576 9.95556 143.185 9.44C142.795 8.92445 142.253 8.66667 141.561 8.66667C141.081 8.66667 140.593 8.79111 140.096 9.04C139.617 9.28889 139.182 9.63556 138.791 10.08C138.401 10.5067 138.116 11.0044 137.939 11.5733V19.7333H134.37V5.76H137.593V8.34667C137.948 7.74222 138.401 7.23556 138.951 6.82667C139.501 6.4 140.132 6.08 140.842 5.86667C141.57 5.63555 142.333 5.52 143.132 5.52C144.002 5.52 144.712 5.68 145.262 6C145.83 6.30222 146.257 6.72 146.541 7.25333C146.842 7.76889 147.047 8.35556 147.153 9.01333C147.277 9.67111 147.34 10.3378 147.34 11.0133V19.7333Z"
          fill="white"
        />
        <path
          d="M156.914 20C155.795 20 154.783 19.8133 153.878 19.44C152.972 19.0489 152.2 18.5244 151.561 17.8667C150.922 17.1911 150.425 16.4267 150.07 15.5733C149.732 14.7022 149.564 13.7867 149.564 12.8267C149.564 11.4933 149.857 10.2756 150.442 9.17333C151.046 8.07111 151.898 7.19111 152.999 6.53333C154.117 5.85778 155.431 5.52 156.94 5.52C158.467 5.52 159.772 5.85778 160.855 6.53333C161.938 7.19111 162.764 8.07111 163.332 9.17333C163.918 10.2578 164.211 11.4311 164.211 12.6933C164.211 12.9067 164.202 13.1289 164.184 13.36C164.166 13.5733 164.148 13.7511 164.131 13.8933H153.345C153.416 14.6044 153.62 15.2267 153.958 15.76C154.313 16.2933 154.757 16.7022 155.289 16.9867C155.84 17.2533 156.425 17.3867 157.047 17.3867C157.757 17.3867 158.423 17.2178 159.044 16.88C159.683 16.5244 160.118 16.0622 160.349 15.4933L163.412 16.3467C163.074 17.0578 162.586 17.6889 161.947 18.24C161.326 18.7911 160.589 19.2267 159.737 19.5467C158.884 19.8489 157.943 20 156.914 20ZM153.265 11.6267H160.562C160.491 10.9156 160.287 10.3022 159.95 9.78667C159.63 9.25333 159.204 8.84444 158.671 8.56C158.139 8.25778 157.544 8.10667 156.887 8.10667C156.248 8.10667 155.662 8.25778 155.129 8.56C154.615 8.84444 154.189 9.25333 153.851 9.78667C153.532 10.3022 153.336 10.9156 153.265 11.6267Z"
          fill="white"
        />
      </svg>
    </Navbar.Brand>
  );
};