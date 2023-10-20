import ValueCard from "../Card/ValueCard";

const OurValues = () => {
  return (
    <div
      className={`bg-mission w-auto h-auto flex justify-start items-center flex-col mt-[147px] 3xl:mt-[-300px]`}
    >
      <div>
        <h1 className={`text-center font-extrabold text-5xl`}>Our Values</h1>
        <p className={`text-center font-light text-base w-[968px] mt-[40px]`}>
          Through our collaborative efforts, we aim to promote gender equality,
          diversity, and inclusion in the field of surgery. We believe that by
          connecting women surgeons from different backgrounds and experiences,
          we can foster innovation, enhance patient care, and drive positive
          change in healthcare systems worldwide.
        </p>
      </div>
      <div className={`mt-[100px]`}>
        <div className={`flex flex-row gap-[60px]`}>
          <ValueCard
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="125"
                viewBox="0 0 126 125"
                fill="none"
              >
                <rect
                  x="0.5"
                  width="125"
                  height="125"
                  rx="40"
                  fill="url(#paint0_linear_8_928)"
                  fill-opacity="0.1"
                />
                <path
                  d="M31 47C31 38.1634 38.1634 31 47 31H67C71.9706 31 76 35.0294 76 40V67C76 71.9706 71.9706 76 67 76H40C35.0294 76 31 71.9706 31 67V47Z"
                  fill="#FF5433"
                />
                <rect
                  x="38"
                  y="38"
                  width="57"
                  height="57"
                  rx="16"
                  fill="#FFF3F1"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M78.9753 43.8889L53.9136 43.8889C48.3772 43.8889 43.889 48.3771 43.889 53.9135L43.889 78.9753C43.889 84.5117 48.3772 88.9999 53.9136 88.9999L78.9753 88.9999C81.634 88.9999 84.1839 87.9437 86.0639 86.0638C87.9438 84.1837 89 81.6339 89 78.9753L89 53.9135C89 48.3771 84.5118 43.8889 78.9753 43.8889Z"
                  fill="#FF5433"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_8_928"
                    x1="65"
                    y1="13.5"
                    x2="63"
                    y2="160"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5433" />
                    <stop offset="1" stop-color="#FF5433" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            }
            altTitle={`Collaboration`}
            title={`Collaboration`}
            description={`We actively encourage networking, knowledge-sharing, and mentorship to enhance professional growth of women in surgery.`}
          />
          <ValueCard
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="125"
                viewBox="0 0 126 125"
                fill="none"
              >
                <rect
                  x="0.5"
                  width="125"
                  height="125"
                  rx="40"
                  fill="url(#paint0_linear_8_938)"
                  fill-opacity="0.1"
                />
                <path
                  d="M65.3015 34C64.8626 33.9998 64.4334 34.1291 64.0676 34.3716C63.7018 34.6142 63.4157 34.9593 63.2451 35.3637L47.9869 63.793C47.7844 64.0321 47.6344 64.3112 47.5469 64.6121L47.5338 64.6339L47.5382 64.6382C47.4841 64.8311 47.4563 65.0304 47.4554 65.2308C47.4554 65.8224 47.6904 66.3898 48.1088 66.8082C48.5271 67.2265 49.0945 67.4615 49.6862 67.4615H61.9554L58.6528 89.3248C58.6235 89.4711 58.6089 89.62 58.6092 89.7692C58.6092 90.3609 58.8443 90.9283 59.2626 91.3466C59.681 91.765 60.2484 92 60.84 92C61.2454 91.9994 61.6429 91.8883 61.9899 91.6787C62.3368 91.4692 62.6201 91.169 62.8094 90.8105H62.8137L62.8268 90.78L78.2548 62.085C78.5345 61.7033 78.6856 61.2425 78.6862 60.7692C78.6862 60.1776 78.4511 59.6102 78.0328 59.1918C77.6144 58.7735 77.047 58.5385 76.4554 58.5385H64.1862L67.48 36.7057C67.5144 36.5497 67.5319 36.3905 67.5323 36.2308C67.5323 35.6391 67.2973 35.0717 66.8789 34.6534C66.4606 34.235 65.8932 34 65.3015 34ZM40.7413 38.4398C40.2975 38.4399 39.8639 38.5723 39.4958 38.8202C39.1277 39.0681 38.8419 39.4201 38.6749 39.8312C38.5079 40.2424 38.4673 40.694 38.5583 41.1284C38.6494 41.5627 38.8678 41.96 39.1859 42.2695L43.6474 46.7311C43.853 46.9452 44.0992 47.1161 44.3716 47.2338C44.644 47.3516 44.9372 47.4138 45.234 47.4168C45.5308 47.4198 45.8252 47.3636 46.1 47.2514C46.3748 47.1392 46.6244 46.9733 46.8343 46.7635C47.0441 46.5536 47.21 46.304 47.3222 46.0292C47.4344 45.7544 47.4906 45.46 47.4876 45.1632C47.4846 44.8665 47.4224 44.5733 47.3046 44.3008C47.1869 44.0284 47.0159 43.7822 46.8019 43.5766L42.3403 39.1151C42.1324 38.9014 41.8838 38.7315 41.6092 38.6155C41.3345 38.4995 41.0394 38.4398 40.7413 38.4398ZM85.3349 38.4398C84.7554 38.457 84.2053 38.6992 83.8013 39.1151L79.3397 43.5766C79.1256 43.7822 78.9547 44.0284 78.8369 44.3008C78.7192 44.5733 78.657 44.8665 78.654 45.1632C78.6509 45.46 78.7072 45.7544 78.8194 46.0292C78.9315 46.304 79.0974 46.5536 79.3073 46.7635C79.5172 46.9734 79.7668 47.1392 80.0416 47.2514C80.3163 47.3636 80.6108 47.4198 80.9075 47.4168C81.2043 47.4138 81.4975 47.3516 81.77 47.2338C82.0424 47.1161 82.2886 46.9452 82.4942 46.7311L86.9557 42.2695C87.278 41.9562 87.4982 41.5528 87.5874 41.1122C87.6765 40.6715 87.6304 40.2143 87.4552 39.8003C87.28 39.3863 86.9838 39.0349 86.6055 38.7921C86.2271 38.5493 85.7843 38.4265 85.3349 38.4398ZM45.1811 78.5936C44.6015 78.6109 44.0514 78.8531 43.6474 79.2689L39.1859 83.7305C38.9718 83.936 38.8008 84.1822 38.6831 84.4547C38.5653 84.7271 38.5031 85.0203 38.5001 85.3171C38.4971 85.6139 38.5533 85.9083 38.6655 86.1831C38.7777 86.4578 38.9436 86.7075 39.1534 86.9173C39.3633 87.1272 39.6129 87.2931 39.8877 87.4053C40.1625 87.5175 40.4569 87.5737 40.7537 87.5707C41.0505 87.5676 41.3437 87.5054 41.6161 87.3877C41.8886 87.2699 42.1348 87.099 42.3403 86.8849L46.8019 82.4234C47.1242 82.11 47.3444 81.7066 47.4335 81.266C47.5227 80.8254 47.4766 80.3681 47.3014 79.9541C47.1262 79.5401 46.83 79.1887 46.4516 78.9459C46.0733 78.7032 45.6304 78.5803 45.1811 78.5936ZM80.8951 78.5936C80.4514 78.5937 80.0177 78.7262 79.6496 78.974C79.2815 79.2219 78.9957 79.5739 78.8287 79.9851C78.6617 80.3962 78.6212 80.8479 78.7122 81.2822C78.8032 81.7165 79.0217 82.1139 79.3397 82.4234L83.8013 86.8849C84.0068 87.099 84.253 87.2699 84.5255 87.3877C84.7979 87.5054 85.0911 87.5677 85.3879 87.5707C85.6847 87.5737 85.9791 87.5175 86.2538 87.4053C86.5286 87.2931 86.7783 87.1272 86.9881 86.9174C87.198 86.7075 87.3639 86.4578 87.4761 86.1831C87.5882 85.9083 87.6445 85.6139 87.6415 85.3171C87.6384 85.0203 87.5762 84.7271 87.4585 84.4547C87.3407 84.1822 87.1698 83.936 86.9557 83.7305L82.4942 79.2689C82.2863 79.0552 82.0377 78.8854 81.763 78.7694C81.4884 78.6534 81.1933 78.5936 80.8951 78.5936Z"
                  fill="#3380FF"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_8_938"
                    x1="63"
                    y1="0"
                    x2="63"
                    y2="164"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3380FF" />
                    <stop offset="1" stop-color="#3380FF" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            }
            altTitle={`Empowerment`}
            title={`Empowerment`}
            description={`We promote self-confidence, leadership development, and the cultivation of essential skills to drive positive change in the field of surgery.`}
          />
          <ValueCard
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="125"
                viewBox="0 0 126 125"
                fill="none"
              >
                <rect
                  x="0.5"
                  width="125"
                  height="125"
                  rx="40"
                  fill="url(#paint0_linear_8_946)"
                  fill-opacity="0.1"
                />
                <path
                  d="M50.188 33.2573C52.0664 33.3163 53.8852 33.6549 55.6473 34.2736H55.8233C55.9425 34.3321 56.032 34.3967 56.0916 34.4552C56.7505 34.6738 57.3737 34.92 57.97 35.2586L59.103 35.7819C59.5503 36.0282 60.087 36.4868 60.3851 36.6746C60.6833 36.8562 61.0113 37.044 61.2796 37.2563C64.5922 34.643 68.6144 33.227 72.7589 33.2573C74.6403 33.2573 76.5187 33.5318 78.3047 34.1505C89.3098 37.8443 93.2754 50.3109 89.9628 61.2076C88.0844 66.776 85.0133 71.8581 80.9911 76.0105C75.2336 81.7667 68.9156 86.8765 62.1145 91.2783L61.3691 91.7431L60.5939 91.2475C53.7689 86.8765 47.4151 81.7667 41.6039 75.9798C37.6085 71.8273 34.5345 66.776 32.6263 61.2076C29.257 50.3109 33.2226 37.8443 44.347 34.0858C45.2117 33.778 46.1032 33.5625 46.9977 33.4425H47.3555C48.1933 33.3163 49.0252 33.2573 49.86 33.2573H50.188Z"
                  fill="#C85BF1"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_8_946"
                    x1="63"
                    y1="0"
                    x2="63"
                    y2="177.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C85BF1" />
                    <stop offset="1" stop-color="#C85BF1" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            }
            altTitle={`Equality`}
            title={`Equality`}
            description={`We believe in equal opportunities and recognition for all women surgeons, promoting fairness and inclusivity in all aspects of the surgical profession.`}
          />
        </div>
        <div
          className={`flex flex-row justify-center items-center gap-[60px] mt-[60px] mb-[180px]`}
        >
          <ValueCard
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="125"
                viewBox="0 0 126 125"
                fill="none"
              >
                <rect
                  x="0.5"
                  width="125"
                  height="125"
                  rx="40"
                  fill="url(#paint0_linear_8_955)"
                  fill-opacity="0.1"
                />
                <path
                  d="M62.6008 34C62.0311 34 61.4847 34.2263 61.0819 34.6292C60.679 35.032 60.4527 35.5784 60.4527 36.1481C60.4527 36.7179 60.679 37.2643 61.0819 37.6671C61.4847 38.07 62.0311 38.2963 62.6008 38.2963C63.1706 38.2963 63.7169 38.07 64.1198 37.6671C64.5227 37.2643 64.749 36.7179 64.749 36.1481C64.749 35.5784 64.5227 35.032 64.1198 34.6292C63.7169 34.2263 63.1706 34 62.6008 34ZM49.712 36.1481C49.1423 36.1481 48.5959 36.3745 48.193 36.7773C47.7902 37.1802 47.5638 37.7266 47.5638 38.2963C47.5638 38.866 47.7902 39.4124 48.193 39.8152C48.5959 40.2181 49.1423 40.4444 49.712 40.4444C50.2817 40.4444 50.8281 40.2181 51.2309 39.8152C51.6338 39.4124 51.8601 38.866 51.8601 38.2963C51.8601 37.7266 51.6338 37.1802 51.2309 36.7773C50.8281 36.3745 50.2817 36.1481 49.712 36.1481ZM75.4897 36.1481C74.92 36.1481 74.3736 36.3745 73.9707 36.7773C73.5679 37.1802 73.3415 37.7266 73.3415 38.2963C73.3415 38.866 73.5679 39.4124 73.9707 39.8152C74.3736 40.2181 74.92 40.4444 75.4897 40.4444C76.0594 40.4444 76.6058 40.2181 77.0087 39.8152C77.4115 39.4124 77.6378 38.866 77.6378 38.2963C77.6378 37.7266 77.4115 37.1802 77.0087 36.7773C76.6058 36.3745 76.0594 36.1481 75.4897 36.1481ZM36.8231 40.4444C36.2534 40.4444 35.707 40.6707 35.3042 41.0736C34.9013 41.4765 34.675 42.0228 34.675 42.5926C34.675 43.1623 34.9013 43.7087 35.3042 44.1115C35.707 44.5144 36.2534 44.7407 36.8231 44.7407C37.3929 44.7407 37.9392 44.5144 38.3421 44.1115C38.7449 43.7087 38.9713 43.1623 38.9713 42.5926C38.9713 42.0228 38.7449 41.4765 38.3421 41.0736C37.9392 40.6707 37.3929 40.4444 36.8231 40.4444ZM88.3785 40.4444C87.8088 40.4444 87.2624 40.6707 86.8596 41.0736C86.4567 41.4765 86.2304 42.0228 86.2304 42.5926C86.2304 43.1623 86.4567 43.7087 86.8596 44.1115C87.2624 44.5144 87.8088 44.7407 88.3785 44.7407C88.9483 44.7407 89.4947 44.5144 89.8975 44.1115C90.3004 43.7087 90.5267 43.1623 90.5267 42.5926C90.5267 42.0228 90.3004 41.4765 89.8975 41.0736C89.4947 40.6707 88.9483 40.4444 88.3785 40.4444ZM77.6169 44.6778C77.457 44.681 77.2979 44.7022 77.1427 44.7407H47.8911C47.7843 44.7228 47.6763 44.713 47.568 44.7113C47.2031 44.7093 46.8436 44.8003 46.5235 44.9758C46.2035 45.1512 45.9334 45.4053 45.7388 45.7141L33.2233 60.3189C32.9856 60.5296 32.7976 60.7904 32.6728 61.0825C32.548 61.3745 32.4895 61.6907 32.5015 62.0081C32.5136 62.3254 32.5958 62.6362 32.7424 62.918C32.889 63.1998 33.0962 63.4456 33.3492 63.6376L61.0317 91.3202C61.0386 91.3286 61.0456 91.337 61.0527 91.3453L61.082 91.3705C61.1831 91.4722 61.2942 91.5636 61.4135 91.6432C61.4191 91.646 61.4247 91.6488 61.4303 91.6516C61.482 91.6861 61.5352 91.7183 61.5897 91.7481C61.6009 91.7524 61.612 91.7566 61.6233 91.7607C61.8702 91.8882 62.1395 91.9665 62.4162 91.9914C62.4888 91.9979 62.5616 92.0007 62.6344 91.9998C62.6624 91.999 62.6904 91.9976 62.7183 91.9956C62.7547 91.9938 62.7911 91.991 62.8274 91.9873C62.8344 91.9873 62.8414 91.9873 62.8484 91.9873C62.861 91.9846 62.8736 91.9818 62.8861 91.9789C62.9438 91.9714 63.0012 91.9616 63.0582 91.9495C63.1146 91.9378 63.1706 91.9238 63.226 91.9075C63.24 91.9035 63.254 91.8993 63.2679 91.8949C63.2834 91.8895 63.2988 91.8839 63.3141 91.8782C63.4331 91.8366 63.5482 91.7847 63.6581 91.7229C63.6595 91.7215 63.6609 91.7201 63.6623 91.7187C63.711 91.6912 63.7586 91.6618 63.805 91.6306C63.8162 91.6223 63.8274 91.614 63.8385 91.6054C63.9388 91.5353 64.0328 91.4567 64.1196 91.3705L64.1364 91.3579C64.1463 91.3468 64.1561 91.3356 64.1658 91.3243L91.8567 63.6335C92.1087 63.441 92.3149 63.1952 92.4606 62.9136C92.6064 62.6321 92.688 62.3217 92.6996 62.0049C92.7112 61.6881 92.6526 61.3726 92.5279 61.0811C92.4032 60.7896 92.2155 60.5293 91.9784 60.3189L79.5552 45.8274C79.3703 45.475 79.0911 45.181 78.7489 44.978C78.4066 44.775 78.0147 44.6711 77.6169 44.6778ZM62.6008 50.5894L69.1627 59.7777H56.0389L62.6008 50.5894ZM78.607 51.3152L85.857 59.7777H76.1903L78.607 51.3152ZM46.5947 51.3194L49.0113 59.7777H39.3447L46.5947 51.3194ZM54.99 64.074H70.2116L62.6008 83.8646L54.99 64.074Z"
                  fill="#0DB573"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_8_955"
                    x1="63"
                    y1="0"
                    x2="63"
                    y2="183"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0DB573" />
                    <stop offset="1" stop-color="#0DB573" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            }
            altTitle={`Excellence`}
            title={`Excellence`}
            description={`We inspire and recognize outstanding achievements among women surgeons, promoting a culture of excellence and improvement.`}
          />
          <ValueCard
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="125"
                viewBox="0 0 126 125"
                fill="none"
              >
                <rect
                  x="0.5"
                  width="125"
                  height="125"
                  rx="40"
                  fill="url(#paint0_linear_8_963)"
                  fill-opacity="0.1"
                />
                <path
                  d="M36.7727 34C33.8595 34 31.5 36.3595 31.5 39.2727C31.5 42.1859 33.8595 44.5455 36.7727 44.5455H39.4091V49.8182L44.6818 44.5455H60.5C63.4132 44.5455 65.7727 42.1859 65.7727 39.2727C65.7727 36.3595 63.4132 34 60.5 34H36.7727ZM69.5779 34C70.4849 35.5581 71.0455 37.3429 71.0455 39.2727C71.0455 41.2025 70.4849 42.9874 69.5779 44.5455H81.5909L86.8636 49.8182V44.5455H89.5C92.4132 44.5455 94.7727 42.1859 94.7727 39.2727C94.7727 36.3595 92.4132 34 89.5 34H69.5779ZM47.3182 52.4597C40.9303 52.4597 35.748 56.3043 35.748 63.1905C35.748 66.1011 37.3855 68.3706 37.3855 68.3706C37.3855 68.3706 36.6388 68.7306 36.6388 70.286C36.6388 73.3073 38.5801 74.0295 38.5801 74.0295C38.7884 75.8644 41.0146 78.3402 42.0455 79.4V82.3659C39.5884 86.1228 34.0151 85.475 31.5 92H63.1364C60.6213 85.475 55.048 86.1201 52.5909 82.3659V79.4052C53.6217 78.3454 55.848 75.8669 56.0563 74.0346C56.0563 74.0346 57.9975 72.6929 57.9975 70.2912C57.9975 68.625 57.2509 68.3706 57.2509 68.3706C57.2509 68.3706 58.5897 65.8373 58.5897 63.4171C58.5897 58.5662 56.1547 54.8335 52.0657 54.8335C52.0657 54.8335 50.3263 52.4597 47.3182 52.4597ZM78.9545 52.4597C72.5666 52.4597 67.3844 56.3043 67.3844 63.1905C67.3844 66.1011 69.0218 68.3706 69.0218 68.3706C69.0218 68.3706 68.2752 68.7306 68.2752 70.286C68.2752 73.3073 70.2164 74.0295 70.2164 74.0295C70.4247 75.8644 72.651 78.3402 73.6818 79.4V82.3659C72.0842 84.8072 69.1713 85.3955 66.6378 87.2937C67.1545 88.1268 67.6425 89.0349 68.0538 90.1L68.7901 92H94.7727C92.2576 85.475 86.6844 86.1201 84.2273 82.3659V79.4052C85.2581 78.3454 87.4844 75.8669 87.6926 74.0346C87.6926 74.0346 89.6339 72.6929 89.6339 70.2912C89.6339 68.625 88.8873 68.3706 88.8873 68.3706C88.8873 68.3706 90.226 65.8373 90.226 63.4171C90.226 58.5662 87.7911 54.8335 83.7021 54.8335C83.7021 54.8335 81.9626 52.4597 78.9545 52.4597Z"
                  fill="#FF4DA2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_8_963"
                    x1="63"
                    y1="0"
                    x2="63"
                    y2="212"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF4DA2" />
                    <stop offset="1" stop-color="#FF4DA2" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            }
            altTitle={`Diversity`}
            title={`Diversity`}
            description={`We champion inclusivity across all backgrounds, cultures, and perspectives, fostering an environment that values and respects individual differences.`}
          />
        </div>
      </div>
    </div>
  );
};

export default OurValues;
