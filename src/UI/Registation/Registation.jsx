import { useState } from "react";
import { NavLink } from "react-router-dom";

import RegCard from "../Card/RegCard";
import Form from "../Shared/Form";

function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className={`flex items-center `}>
      <div className={`flex flex-col w-[640px] pl-[64px]`}>
        <div className={`flex items-center gap-[156px]`}>
          <NavLink
            to="/"
            className={`font-semibold text-xs flex items-center gap-3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="8"
              viewBox="0 0 5 8"
              fill="none"
            >
              <path
                d="M0.449438 4.32435C0.228214 4.1647 0.228214 3.8353 0.449438 3.67565L4.16592 0.993507C4.43046 0.802588 4.8 0.991618 4.8 1.31786V6.68214C4.8 7.00838 4.43046 7.19741 4.16592 7.00649L0.449438 4.32435Z"
                fill="black"
              />
            </svg>{" "}
            back
          </NavLink>
          <h1 className={`font-extrabold text-[32px]`}>IOWS</h1>
        </div>
        <div className="flex flex-row items-center justify-evenly gap-[18px] w-[493px] mt-[52px]">
          <Form step={"Personal info"} />
          <Form step={"Professional info"} />
          <Form step={"Finish up"} />
        </div>
        <div>
          <form
            className="w-[397px] mt-[60px] pl-[48px]"
            onSubmit={handleSubmit}
          >
            <h1 className="text-[20px] font-semibold">Personal Info</h1>
            <div className="mb-4 mt-[28px]">
              <input
                type="text"
                name="fullName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-[397px] h-[64px]  rounded-[16px] border pl-5"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-[397px] h-[64px]  rounded-[16px] border pl-5"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-[397px] h-[64px]  rounded-[16px] border pl-5"
              />
            </div>
            <div className="mb-4 flex justify-center items-center flex-col ml-[50px]">
              <button
                type="submit"
                className="w-[397px] h-[54px] p-2 bg-[#C85BF1] text-white rounded-[40px] hover:bg-blue-700 mt-[16px]"
              >
                Continue
              </button>
              <p className={`w-[394px] text-center mt-5`}>
                if you already have an account{" "}
                <a href="#" className={`text-[#C85BF1]`}>
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-14 w-[640px] h-[100vh] bg-regBg">
        <div className={`flex gap-14`}>
          <RegCard
            Image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="125"
                viewBox="0 0 126 125"
                fill="none"
              >
                <rect
                  opacity="0.1"
                  x="0.5"
                  width="125"
                  height="125"
                  rx="40"
                  fill="url(#paint0_linear_375_263)"
                />
                <path
                  d="M41.1292 29.0003C40.7861 28.9957 40.4456 29.0599 40.1278 29.1891C39.81 29.3183 39.5213 29.5099 39.2787 29.7525C38.7973 30.234 38.5269 30.887 38.5269 31.5678C38.5269 32.2487 38.7973 32.9017 39.2787 33.3832C39.7602 33.8646 40.4132 34.135 41.094 34.135C41.7749 34.135 42.4279 33.8646 42.9094 33.3832C43.3908 32.9017 43.6612 32.2487 43.6612 31.5678C43.6612 30.887 43.3908 30.234 42.9094 29.7525C42.4366 29.2795 41.7979 29.0096 41.1292 29.0003ZM84.7021 29.0003C84.3582 28.995 84.0168 29.0589 83.6981 29.1881C83.3793 29.3173 83.0898 29.5093 82.8467 29.7525C82.3653 30.234 82.0948 30.887 82.0948 31.5678C82.0948 32.2487 82.3653 32.9017 82.8467 33.3832C83.3282 33.8646 83.9811 34.135 84.662 34.135C85.3429 34.135 85.9958 33.8646 86.4773 33.3832C86.9587 32.9017 87.2292 32.2487 87.2292 31.5678C87.2292 30.887 86.9587 30.234 86.4773 29.7525C86.0058 29.2807 85.3691 29.0109 84.7021 29.0003ZM62.878 30.244C50.1148 30.244 39.7702 40.5886 39.7702 53.3518C39.7702 66.1895 50.0403 71.3246 55.1754 81.5948H70.5806C75.7157 71.3246 85.9859 66.1895 85.9859 53.3518C85.9859 40.5886 75.6413 30.244 62.878 30.244ZM62.878 37.9466V50.7843H73.1482L62.878 68.7571V55.9194H52.6079L62.878 37.9466ZM32.0675 50.7843C31.3866 50.7843 30.7335 51.0548 30.252 51.5363C29.7705 52.0178 29.5 52.6709 29.5 53.3518C29.5 54.0328 29.7705 54.6858 30.252 55.1673C30.7335 55.6488 31.3866 55.9194 32.0675 55.9194C32.7485 55.9194 33.4016 55.6488 33.8831 55.1673C34.3646 54.6858 34.6351 54.0328 34.6351 53.3518C34.6351 52.6709 34.3646 52.0178 33.8831 51.5363C33.4016 51.0548 32.7485 50.7843 32.0675 50.7843ZM93.6885 50.7843C93.0076 50.7843 92.3545 51.0548 91.873 51.5363C91.3915 52.0178 91.121 52.6709 91.121 53.3518C91.121 54.0328 91.3915 54.6858 91.873 55.1673C92.3545 55.6488 93.0076 55.9194 93.6885 55.9194C94.3695 55.9194 95.0225 55.6488 95.504 55.1673C95.9855 54.6858 96.2561 54.0328 96.2561 53.3518C96.2561 52.6709 95.9855 52.0178 95.504 51.5363C95.0225 51.0548 94.3695 50.7843 93.6885 50.7843ZM41.1292 72.5683C40.7853 72.563 40.4438 72.6268 40.1251 72.7561C39.8064 72.8853 39.5168 73.0772 39.2737 73.3205C38.7923 73.802 38.5219 74.4549 38.5219 75.1358C38.5219 75.8167 38.7923 76.4696 39.2737 76.9511C39.5122 77.1902 39.7955 77.3799 40.1075 77.5094C40.4194 77.6388 40.7538 77.7055 41.0915 77.7055C41.4293 77.7055 41.7637 77.6388 42.0756 77.5094C42.3875 77.3799 42.6709 77.1902 42.9094 76.9511C43.3908 76.4696 43.6612 75.8167 43.6612 75.1358C43.6612 74.4549 43.3908 73.802 42.9094 73.3205C42.4366 72.8474 41.7979 72.5776 41.1292 72.5683ZM84.6971 72.5733C84.3544 72.568 84.0141 72.6314 83.6963 72.7597C83.3785 72.8881 83.0896 73.0787 82.8467 73.3205C82.6076 73.559 82.4179 73.8423 82.2884 74.1542C82.159 74.4662 82.0923 74.8006 82.0923 75.1383C82.0923 75.476 82.159 75.8104 82.2884 76.1224C82.4179 76.4343 82.6076 76.7176 82.8467 76.9561C83.3282 77.4375 83.9811 77.708 84.662 77.708C85.3429 77.708 85.9958 77.4375 86.4773 76.9561C86.7164 76.7176 86.9062 76.4343 87.0356 76.1224C87.165 75.8104 87.2317 75.476 87.2317 75.1383C87.2317 74.8006 87.165 74.4662 87.0356 74.1542C86.9062 73.8423 86.7164 73.559 86.4773 73.3205C86.0037 72.8493 85.3651 72.5812 84.6971 72.5733ZM55.1754 86.7298V89.2974C55.1754 92.1345 57.4734 94.4325 60.3105 94.4325C60.3105 95.1134 60.581 95.7665 61.0625 96.248C61.544 96.7295 62.1971 97 62.878 97C63.559 97 64.212 96.7295 64.6936 96.248C65.1751 95.7665 65.4456 95.1134 65.4456 94.4325C68.2827 94.4325 70.5806 92.1345 70.5806 89.2974V86.7298H55.1754Z"
                  fill="#3380FF"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_375_263"
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
            Title={`Mentorship`}
          />
          <RegCard
            Image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="125"
                viewBox="0 0 126 125"
                fill="none"
              >
                <rect
                  opacity="0.1"
                  x="0.5"
                  width="125"
                  height="125"
                  rx="40"
                  fill="url(#paint0_linear_375_269)"
                />
                <path
                  d="M36.7727 34C33.8595 34 31.5 36.3595 31.5 39.2727C31.5 42.1859 33.8595 44.5455 36.7727 44.5455H39.4091V49.8182L44.6818 44.5455H60.5C63.4132 44.5455 65.7727 42.1859 65.7727 39.2727C65.7727 36.3595 63.4132 34 60.5 34H36.7727ZM69.5779 34C70.4849 35.5581 71.0455 37.3429 71.0455 39.2727C71.0455 41.2025 70.4849 42.9874 69.5779 44.5455H81.5909L86.8636 49.8182V44.5455H89.5C92.4132 44.5455 94.7727 42.1859 94.7727 39.2727C94.7727 36.3595 92.4132 34 89.5 34H69.5779ZM47.3182 52.4597C40.9303 52.4597 35.748 56.3043 35.748 63.1905C35.748 66.1011 37.3855 68.3706 37.3855 68.3706C37.3855 68.3706 36.6388 68.7306 36.6388 70.286C36.6388 73.3073 38.5801 74.0295 38.5801 74.0295C38.7884 75.8644 41.0146 78.3402 42.0455 79.4V82.3659C39.5884 86.1228 34.0151 85.475 31.5 92H63.1364C60.6213 85.475 55.048 86.1201 52.5909 82.3659V79.4052C53.6217 78.3454 55.848 75.8669 56.0563 74.0346C56.0563 74.0346 57.9975 72.6929 57.9975 70.2912C57.9975 68.625 57.2509 68.3706 57.2509 68.3706C57.2509 68.3706 58.5897 65.8373 58.5897 63.4171C58.5897 58.5662 56.1547 54.8335 52.0657 54.8335C52.0657 54.8335 50.3263 52.4597 47.3182 52.4597ZM78.9545 52.4597C72.5666 52.4597 67.3844 56.3043 67.3844 63.1905C67.3844 66.1011 69.0218 68.3706 69.0218 68.3706C69.0218 68.3706 68.2752 68.7306 68.2752 70.286C68.2752 73.3073 70.2164 74.0295 70.2164 74.0295C70.4247 75.8644 72.651 78.3402 73.6818 79.4V82.3659C72.0842 84.8072 69.1713 85.3955 66.6378 87.2937C67.1545 88.1268 67.6425 89.0349 68.0538 90.1L68.7901 92H94.7727C92.2576 85.475 86.6844 86.1201 84.2273 82.3659V79.4052C85.2581 78.3454 87.4844 75.8669 87.6926 74.0346C87.6926 74.0346 89.6339 72.6929 89.6339 70.2912C89.6339 68.625 88.8873 68.3706 88.8873 68.3706C88.8873 68.3706 90.226 65.8373 90.226 63.4171C90.226 58.5662 87.7911 54.8335 83.7021 54.8335C83.7021 54.8335 81.9626 52.4597 78.9545 52.4597Z"
                  fill="#FF4DA2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_375_269"
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
            Title={`Networking`}
          />
        </div>
        <div className={`flex gap-14`}>
          <RegCard
            Image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="125"
                height="125"
                viewBox="0 0 125 125"
                fill="none"
              >
                <rect
                  width="125"
                  height="125"
                  rx="40"
                  fill="url(#paint0_linear_375_275)"
                  fill-opacity="0.1"
                />
                <path
                  d="M63.5 34C59.4467 34 55.5915 34.8448 52.0847 36.3528L54.1935 38.4615C54.6307 38.8988 55.0114 39.3799 55.3438 39.8863C57.9002 38.9806 60.6379 38.4615 63.5 38.4615C77.0296 38.4615 88.0385 49.4704 88.0385 63C88.0385 76.5296 77.0296 87.5385 63.5 87.5385C49.9704 87.5385 38.9615 76.5296 38.9615 63C38.9615 60.1379 39.4806 57.4023 40.3863 54.8481C39.8799 54.5157 39.3988 54.133 38.9615 53.6935L36.8528 51.5847C35.3448 55.0915 34.5 58.9467 34.5 63C34.5 78.9902 47.5098 92 63.5 92C79.4902 92 92.5 78.9902 92.5 63C92.5 47.0098 79.4902 34 63.5 34ZM38.9398 36.209C38.496 36.2091 38.0623 36.3416 37.6942 36.5894C37.3261 36.8373 37.0403 37.1893 36.8733 37.6005C36.7063 38.0116 36.6658 38.4632 36.7568 38.8976C36.8478 39.3319 37.0663 39.7292 37.3843 40.0388L40.2686 42.9231H38.3254C36.9133 42.9231 36.2063 44.6294 37.2057 45.6288L42.116 50.5391C42.9525 51.3756 44.0881 51.8462 45.2704 51.8462H49.1917L61.9228 64.5772C62.1283 64.7913 62.3745 64.9622 62.647 65.08C62.9194 65.1978 63.2126 65.26 63.5094 65.263C63.8062 65.266 64.1006 65.2098 64.3754 65.0976C64.6502 64.9854 64.8998 64.8195 65.1097 64.6097C65.3195 64.3998 65.4854 64.1502 65.5976 63.8754C65.7098 63.6006 65.766 63.3062 65.763 63.0094C65.76 62.7126 65.6978 62.4194 65.58 62.147C65.4622 61.8745 65.2913 61.6283 65.0772 61.4228L52.3462 48.6917V44.7704C52.3462 43.5881 51.8756 42.4525 51.0391 41.616L46.1288 36.7057C45.1294 35.7063 43.4231 36.4133 43.4231 37.8254V39.7686L40.5388 36.8843C40.3309 36.6706 40.0823 36.5008 39.8076 36.3848C39.533 36.2688 39.2379 36.209 38.9398 36.209ZM63.5 42.9231C61.1265 42.9231 58.8571 43.3562 56.7423 44.1169C56.7602 44.3355 56.8077 44.5496 56.8077 44.7704V46.8444L58.2673 48.3039C59.9069 47.7195 61.6641 47.3846 63.5 47.3846C72.1085 47.3846 79.1154 54.3892 79.1154 63C79.1154 71.6108 72.1085 78.6154 63.5 78.6154C54.8915 78.6154 47.8846 71.6108 47.8846 63C47.8846 61.1641 48.2172 59.4069 48.8039 57.7673L47.3444 56.3077H45.2704C45.0496 56.3077 44.8355 56.2602 44.6169 56.2423C43.8584 58.3571 43.4231 60.6265 43.4231 63C43.4231 74.0691 52.4287 83.0769 63.5 83.0769C74.5713 83.0769 83.5769 74.0691 83.5769 63C83.5769 51.9309 74.5713 42.9231 63.5 42.9231ZM63.5 51.8462C62.9735 51.8462 62.4727 51.9316 61.9663 52.003L68.2317 58.2683L68.2273 58.2727C69.4408 59.484 70.1923 61.1552 70.1923 63C70.1923 66.6897 67.1897 69.6923 63.5 69.6923C61.6552 69.6923 59.984 68.9408 58.7727 67.7273L58.7683 67.7317L52.503 61.4663C52.4316 61.9727 52.3462 62.4735 52.3462 63C52.3462 69.1502 57.3498 74.1538 63.5 74.1538C69.6502 74.1538 74.6538 69.1502 74.6538 63C74.6538 56.8498 69.6502 51.8462 63.5 51.8462Z"
                  fill="#FF5433"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_375_275"
                    x1="64.5"
                    y1="13.5"
                    x2="62.5"
                    y2="160"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5433" />
                    <stop offset="1" stop-color="#FF5433" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            }
            Title={`Research & Collaboration`}
          />
          <RegCard
            Image={
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
                  fill="url(#paint0_linear_375_281)"
                  fill-opacity="0.1"
                />
                <path
                  d="M62.165 34.0077C50.074 33.6999 39.2395 42.5421 37.3255 54.4858C35.8933 63.4269 39.2995 71.6393 45.3294 76.9464C47.181 78.5749 48.1528 80.9842 48.1528 83.4514V91.9999H70.4608V88.523C70.4608 86.6023 71.6882 84.8991 73.5107 84.2923L80.7957 81.8655C82.616 81.2565 83.8456 79.5511 83.8456 77.6304V69.1211L88.9042 67.3783C89.3737 67.2479 89.7877 66.9673 90.0828 66.5794C90.3778 66.1915 90.5377 65.7176 90.538 65.2303C90.5365 64.717 90.358 64.22 90.0326 63.823L89.9716 63.7489C89.9504 63.7237 89.9286 63.699 89.9063 63.6748L83.7541 56.3027C82.8601 44.0044 74.614 34.3213 62.165 34.0077ZM68.23 42.9222C69.4636 42.9222 70.4608 43.9194 70.4608 45.153V45.5626C71.2371 45.8392 71.9387 46.2496 72.5522 46.7739L72.9095 46.5691C73.9691 45.9511 75.3415 46.3153 75.9594 47.3838C76.5751 48.4524 76.2066 49.8137 75.1403 50.4294L74.8004 50.6255C74.874 51.0226 74.9224 51.4283 74.9224 51.8455C74.9224 52.2626 74.874 52.6683 74.8004 53.0654L75.1403 53.2615C76.2088 53.8772 76.5773 55.2407 75.9594 56.3071C75.5445 57.0232 74.7967 57.4225 74.0249 57.4225C73.6456 57.4225 73.2597 57.3248 72.9095 57.1218L72.5522 56.9171C71.9387 57.4413 71.2371 57.8517 70.4608 58.1283V58.5379C70.4608 59.7715 69.4636 60.7687 68.23 60.7687C66.9964 60.7687 65.9992 59.7715 65.9992 58.5379V58.1283C65.2229 57.8517 64.5213 57.4413 63.9078 56.9171L63.5505 57.1218C63.2003 57.3248 62.8144 57.4225 62.4351 57.4225C61.6633 57.4225 60.9133 57.0232 60.5006 56.3071C59.8849 55.2385 60.2534 53.8772 61.3197 53.2615L61.6596 53.0654C61.586 52.6683 61.5376 52.2626 61.5376 51.8455C61.5376 51.4283 61.586 51.0226 61.6596 50.6255L61.3197 50.4294C60.2534 49.8137 59.8849 48.4524 60.5006 47.3838C61.1163 46.3153 62.4864 45.9511 63.5505 46.5691L63.9078 46.7739C64.5213 46.2496 65.2229 45.837 65.9992 45.5626V45.153C65.9992 43.9194 66.9964 42.9222 68.23 42.9222ZM68.23 49.6147C67.6384 49.6147 67.0709 49.8497 66.6526 50.268C66.2342 50.6864 65.9992 51.2538 65.9992 51.8455C65.9992 52.4371 66.2342 53.0045 66.6526 53.4229C67.0709 53.8412 67.6384 54.0763 68.23 54.0763C68.8216 54.0763 69.3891 53.8412 69.8074 53.4229C70.2258 53.0045 70.4608 52.4371 70.4608 51.8455C70.4608 51.2538 70.2258 50.6864 69.8074 50.268C69.3891 49.8497 68.8216 49.6147 68.23 49.6147ZM54.8452 56.3071C56.0788 56.3071 57.076 57.3042 57.076 58.5379V58.9474C57.8523 59.2241 58.5539 59.6344 59.1674 60.1587L59.5246 59.9539C60.5887 59.3404 61.9566 59.7001 62.5746 60.7687C63.1903 61.8372 62.8218 63.1985 61.7554 63.8142L61.4156 64.0103C61.4892 64.4074 61.5376 64.8131 61.5376 65.2303C61.5376 65.6474 61.4892 66.0532 61.4156 66.4503L61.7554 66.6463C62.824 67.262 63.1925 68.6256 62.5746 69.6919C62.1596 70.408 61.4119 70.8073 60.64 70.8073C60.2608 70.8073 59.8749 70.7097 59.5246 70.5067L59.1674 70.3019C58.5539 70.8261 57.8523 71.2365 57.076 71.5131V71.9227C57.076 73.1563 56.0788 74.1535 54.8452 74.1535C53.6115 74.1535 52.6144 73.1563 52.6144 71.9227V71.5131C51.838 71.2365 51.1365 70.8261 50.523 70.3019L50.1657 70.5067C49.8155 70.7097 49.4295 70.8073 49.0503 70.8073C48.2785 70.8073 47.5285 70.408 47.1158 69.6919C46.5001 68.6233 46.8686 67.262 47.9349 66.6463L48.2748 66.4503C48.2011 66.0532 48.1528 65.6474 48.1528 65.2303C48.1528 64.8131 48.2011 64.4074 48.2748 64.0103L47.9349 63.8142C46.8686 63.1985 46.5001 61.8372 47.1158 60.7687C47.7315 59.7001 49.0994 59.3382 50.1657 59.9539L50.523 60.1587C51.1365 59.6345 51.838 59.2241 52.6144 58.9474V58.5379C52.6144 57.3042 53.6115 56.3071 54.8452 56.3071ZM54.8452 62.9995C54.2535 62.9995 53.6861 63.2345 53.2678 63.6529C52.8494 64.0712 52.6144 64.6386 52.6144 65.2303C52.6144 65.8219 52.8494 66.3893 53.2678 66.8077C53.6861 67.2261 54.2535 67.4611 54.8452 67.4611C55.4368 67.4611 56.0042 67.2261 56.4226 66.8077C56.8409 66.3893 57.076 65.8219 57.076 65.2303C57.076 64.6386 56.8409 64.0712 56.4226 63.6529C56.0042 63.2345 55.4368 62.9995 54.8452 62.9995Z"
                  fill="#0DB573"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_375_281"
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
            Title={`Professional Development`}
          />
          <RegCard
            Image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="125"
                viewBox="0 0 126 125"
                fill="none"
              >
                <rect
                  opacity="0.1"
                  x="0.5"
                  width="125"
                  height="125"
                  rx="40"
                  fill="url(#paint0_linear_375_287)"
                />
                <path
                  d="M57.1439 34.0041C55.4821 34.0771 53.946 35.1249 53.3277 36.7813C53.1462 37.2729 52.3138 39.5089 51.4516 41.8334C51.8903 41.9443 52.3257 42.0776 52.7417 42.2667L58.4684 44.8913L59.2858 45.2655C60.206 42.7847 61.1352 40.2797 61.3293 39.7604C62.1512 37.5518 61.0266 35.0944 58.818 34.27C58.2659 34.0645 57.6978 33.9797 57.1439 34.0041ZM68.942 34.0041C67.2803 34.0771 65.7441 35.1249 65.1258 36.7813C64.8888 37.4191 63.0112 42.3692 61.5263 46.2946L64.2001 47.5207C66.3355 48.4989 67.7618 50.3642 68.3215 52.4744C69.6956 48.8414 72.8174 40.5948 73.1275 39.7604C73.9519 37.5493 72.8247 35.0919 70.6162 34.27C70.064 34.0645 69.4959 33.9797 68.942 34.0041ZM77.9186 41.5379C76.2569 41.611 74.7207 42.6587 74.1024 44.3151C73.7192 45.3438 69.0642 57.6328 68.681 58.6639C67.8591 60.8724 68.9838 63.3299 71.1923 64.1543C73.4008 64.9762 75.8582 63.8515 76.6826 61.643C77.0633 60.6144 81.7209 48.3254 82.1041 47.2942C82.926 45.0857 81.8013 42.6283 79.5928 41.8038C79.0407 41.5984 78.4725 41.5136 77.9186 41.5379ZM49.738 44.1034C49.5586 44.098 49.3839 44.1242 49.2062 44.1379L49.2013 44.1231C49.0586 44.1285 48.9228 44.1557 48.7827 44.1674H48.7729H48.768C45.8304 44.4168 43.4629 46.0708 41.9973 50.6574C40.3964 55.6669 38.4782 61.1681 37.5706 63.8884C36.3604 66.9112 37.2714 69.6314 38.4815 71.1416C38.948 71.8298 41.8049 74.4675 43.9227 76.5827C45.7354 78.3954 46.3404 80.5127 46.3404 83.5355V86.9578C46.3404 89.7436 48.5968 92 51.3827 92H77.3179V88.8043C77.3179 83.9309 80.421 83.1401 81.9563 79.0004C82.4606 77.6415 83.9168 73.7838 85.3589 69.9844C84.6832 70.2088 83.9703 70.334 83.2366 70.334C82.4273 70.334 81.6295 70.1905 80.8681 69.9056C79.1689 69.2728 77.8181 68.0166 77.0618 66.3652C76.9383 66.098 76.8644 65.8202 76.7762 65.5429C75.6165 66.4228 74.1895 66.9463 72.6794 66.9463C71.8701 66.9463 71.0723 66.8027 70.3109 66.5179C67.5906 65.5044 65.9237 62.9211 65.9137 60.1756C64.5724 61.3026 62.8564 61.9582 61.0437 61.9582C59.9521 61.9582 58.8956 61.7251 57.8972 61.2688L54.2386 59.6438C52.1966 58.707 50.8013 56.9612 50.191 54.9659C53.2749 56.3801 58.0401 58.5671 58.9411 58.9791C61.4724 60.1388 64.4658 59.0335 65.6281 56.5023C66.7878 53.971 65.6775 50.9776 63.1463 49.8153C61.969 49.2733 52.8678 45.1009 51.688 44.5613C51.0552 44.2714 50.3927 44.1229 49.738 44.1034ZM85.9892 51.5683C84.3275 51.641 82.7913 52.6891 82.173 54.3455C81.7898 55.3741 79.6215 61.0231 79.2382 62.0517C78.4164 64.2602 79.541 66.7177 81.7495 67.5421C83.958 68.364 86.4155 67.2393 87.2399 65.0308C87.6206 63.9996 89.7914 58.3532 90.1747 57.3246C90.9965 55.1161 89.8719 52.6586 87.6634 51.8342C87.1112 51.6281 86.5431 51.5441 85.9892 51.5683Z"
                  fill="#C85BF1"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_375_287"
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
            Title={`Advocacy and Support`}
          />
        </div>
      </div>
    </div>
  );
}

export default Registration;
