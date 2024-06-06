import PropTypes from 'prop-types';

const SectionTitle = ({ text }) => {
  return (
    <div className='container-subtitles'>
        <svg viewBox="0 0 60 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.94713 24.9931C3.24361 24.6952 2.13947 23.5156 2.18352 22.6217C2.25429 21.1787 3.32268 20.4535 5.62593 20.4444H5.65554C5.77929 20.4446 5.89876 20.4002 5.99099 20.3197C6.08323 20.2393 6.14173 20.1285 6.15526 20.0085C6.16173 19.9518 6.15627 19.8943 6.13921 19.8397C6.12216 19.785 6.09386 19.7344 6.05605 19.6908C6.01824 19.6471 5.97171 19.6115 5.9193 19.586C5.86689 19.5605 5.8097 19.5457 5.75122 19.5424L5.66746 19.5375C4.98215 19.4953 4.22463 19.4706 3.8159 19.565C2.11166 19.9589 1.16567 20.9608 1.08623 22.5703C1.02304 23.8503 1.99973 25.1015 3.37432 26.0907C3.38756 26.1003 3.40092 26.1097 3.4144 26.1189C3.14829 26.573 2.97823 27.08 2.90348 27.6404C2.64424 29.2626 2.88543 30.2716 2.70057 30.9397C2.51534 31.6083 1.67297 31.9747 1.34042 32.7214C1.00824 33.4678 1.06962 33.7951 1.16711 34.3831C1.22452 34.7316 1.35451 35.2413 1.55634 35.9116C1.57865 35.9856 1.62493 36.0506 1.68826 36.0968C1.75159 36.143 1.82857 36.1679 1.90766 36.1679H3.12482C3.32702 36.1679 3.49094 36.0081 3.49094 35.8109V35.6314C3.49094 35.5842 3.48134 35.5375 3.4627 35.4939C3.44405 35.4503 3.41673 35.4108 3.38231 35.3776C3.34789 35.3444 3.30706 35.3182 3.26218 35.3005C3.2173 35.2828 3.16926 35.2739 3.12085 35.2744C2.95656 35.2765 2.81647 35.2343 2.70057 35.1477C2.40774 34.9294 2.38355 34.8076 2.38355 34.3831C2.38355 34.1 2.48898 33.8152 2.70057 33.5287C3.54907 32.9907 4.25857 32.5704 4.88466 32.2613C4.94893 32.8816 5.07603 33.4456 5.26487 33.9532C5.46345 34.4869 5.80863 35.166 6.30005 35.9901C6.33224 36.0442 6.37843 36.0891 6.434 36.1203C6.48957 36.1515 6.55258 36.1679 6.6167 36.1679H7.58003C7.77862 36.1679 7.9411 36.0137 7.94579 35.8201L7.95013 35.6581C7.95269 35.5648 7.9176 35.4741 7.85239 35.4057C7.78718 35.3372 7.69705 35.2964 7.60133 35.292L7.09765 35.2688C6.94889 35.2618 6.81926 35.1678 6.7698 35.0308C6.60298 34.5689 6.53438 34.1152 6.56399 33.6691C6.59793 33.1661 6.76943 32.4803 7.07887 31.6111C8.36427 31.5998 10.9719 32.1437 11.5724 32.1923C11.7139 32.2039 11.8594 32.2029 12.0085 32.1902C12.129 32.5603 12.2045 32.9429 12.2335 33.3301C12.2707 33.7987 12.2739 34.6228 12.2436 35.8021C12.2424 35.8497 12.251 35.8971 12.2688 35.9414C12.2867 35.9858 12.3135 36.0262 12.3476 36.0603C12.3817 36.0943 12.4225 36.1214 12.4675 36.1399C12.5125 36.1584 12.5609 36.1679 12.6097 36.1679H13.6102C13.8124 36.1679 13.9763 36.0081 13.9763 35.8109V35.5659C13.9763 35.3688 13.8124 35.2089 13.6102 35.2089H13.456C13.3989 35.2089 13.3426 35.1955 13.2919 35.1697C13.2412 35.144 13.1976 35.1067 13.1649 35.061C13.1321 35.0153 13.1112 34.9626 13.1038 34.9073C13.0964 34.8521 13.1028 34.7959 13.1224 34.7435C13.3121 34.2434 13.4595 33.729 13.5633 33.2055L14.7664 35.9514C14.8241 36.0827 14.9566 36.1679 15.1032 36.1679H16.432C16.6342 36.1679 16.7984 36.0081 16.7984 35.8109V35.6286C16.7984 35.4554 16.671 35.3072 16.4962 35.2772L15.8636 35.1678C15.7842 35.1537 15.7113 35.115 15.6568 35.0565C15.3997 34.7809 15.2343 34.4373 15.1599 34.0261C14.9765 33.0119 14.8602 32.902 15.1599 31.9269C15.2574 31.6083 15.973 31.2978 16.4309 29.8864C16.7244 28.9831 16.9844 27.4486 17.2115 25.2828C17.2197 25.2047 17.254 25.1314 17.3093 25.0742C17.3645 25.0171 17.4375 24.9793 17.517 24.9667L18.2203 24.8558C18.3286 24.8385 18.4236 24.7748 18.4789 24.6822L19.0356 23.7444C19.0404 23.7363 19.0454 23.7285 19.0508 23.7208C19.1053 23.6479 19.1353 23.5603 19.1367 23.4701C19.1367 23.4011 19.1183 23.33 19.0815 23.2565C19.062 23.2177 19.0356 23.1825 19.0031 23.153L18.2756 22.4865C18.225 22.4397 18.1886 22.3799 18.1712 22.314L18.1301 22.1546C18.0932 22.0127 18.0124 21.8849 17.899 21.7892C17.6802 21.6054 17.5188 21.4822 17.4144 21.4195C17.2844 21.3417 17.0144 21.2481 16.6049 21.1393C16.8129 20.8555 16.927 20.6073 16.9472 20.3944C16.9779 20.0751 17.0039 19.7589 16.8714 19.7466C16.7826 19.7385 16.558 19.9765 16.1973 20.4605C16.2254 19.8491 16.1622 19.5787 16.007 19.6502C15.8517 19.7213 15.5116 20.1335 14.9852 20.8869L14.4717 21.4572C14.2223 21.7342 14.0388 22.0615 13.9345 22.4158C13.6752 23.2959 13.4282 23.9292 13.1943 24.3165C12.7758 25.0072 12.2627 25.8577 10.5953 25.7317C8.92826 25.606 8.36752 25.2768 7.25688 25.1064C6.6884 25.0219 6.11562 24.9677 5.54108 24.9441C5.34176 24.9351 5.14208 24.9516 4.94713 24.9931Z" fill="#0B0A0A"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M33.4595 13.5586C32.4581 13.0834 31.6985 12.2784 30.986 11.4706C30.1738 10.5497 30.1632 9.39557 30.1632 8.79149C30.1632 7.83102 30.9953 7.07359 32.3479 7.03831C33.0644 7.01959 33.502 7.21327 34.099 7.68487C34.5266 8.02182 35.5287 9.12485 35.0818 10.027C35.0585 10.0738 35.0207 10.1307 34.9669 10.1976C34.9139 10.2643 34.8844 10.3491 34.8834 10.4371C34.8824 10.525 34.9101 10.6106 34.9616 10.6786C35.0132 10.7466 35.0872 10.7902 35.1679 10.8C35.2486 10.8098 35.3297 10.7851 35.3939 10.7312L35.4643 10.6721C36.3474 9.9406 36.8282 9.66845 36.8282 8.58486C36.8282 6.54584 34.3467 4.58674 31.9502 4.64938C29.5563 4.71202 27.6923 6.58616 27.6923 8.77133C27.6923 9.96652 28.3949 11.6621 29.5437 12.9653C30.2781 13.7988 31.1649 14.457 32.1474 14.8977C32.085 15.0093 32.0205 15.1296 31.9548 15.2599C31.304 16.5458 31.389 16.7021 31.306 18.3084C31.2237 19.9154 31.662 22.7881 31.494 24.2036C31.3253 25.6184 30.4826 25.7761 30.2973 26.7956C30.1798 27.4415 29.8883 30.2451 29.4228 35.2051C29.4132 35.3055 29.4232 35.407 29.4521 35.5029C29.481 35.5988 29.5281 35.6871 29.5904 35.7621C29.6528 35.837 29.729 35.8969 29.814 35.9379C29.8991 35.9789 29.9911 36 30.0842 36H31.4501C31.6259 36 31.7945 35.9243 31.9187 35.7895C32.043 35.6548 32.1128 35.472 32.1128 35.2815V34.9236C32.1128 34.6968 32.0146 34.483 31.8472 34.3476L31.6361 34.1755C31.5367 34.0948 31.4602 33.9855 31.4152 33.86C31.3703 33.7345 31.3587 33.5979 31.3817 33.4656C31.745 31.369 32.0644 30.1069 32.3393 29.6792C32.5425 29.3624 33.4602 28.8462 34.6435 27.8454C34.8553 27.6654 35.2365 27.2838 35.7857 26.6991C35.8298 26.6518 35.8854 26.6188 35.946 26.604C36.0066 26.5891 36.0699 26.593 36.1285 26.6152C36.1872 26.6374 36.2389 26.6771 36.2779 26.7296C36.3168 26.7821 36.3414 26.8454 36.3488 26.9123C36.4484 27.7784 36.5732 28.5085 36.7213 29.1025C36.9006 29.8181 37.4518 31.6851 38.3741 34.7019C38.418 34.8457 38.5026 34.9708 38.6158 35.0595C38.7291 35.1482 38.8652 35.1959 39.0049 35.1958H40.7434C40.9008 35.1956 41.0517 35.1277 41.163 35.007C41.2743 34.8864 41.3369 34.7228 41.3371 34.5521V34.5089C41.3372 34.3402 41.2828 34.1767 41.1831 34.0471C41.0835 33.9175 40.945 33.8299 40.7919 33.7997L40.0462 33.6514C39.5109 31.5317 39.2779 29.9794 39.3456 28.9938C39.3934 28.2968 39.8277 27.4861 40.2653 26.0749C40.3563 25.7812 40.4844 25.1821 40.6491 24.2749C40.6579 24.2267 40.6757 24.181 40.7013 24.1405C40.727 24.1001 40.7601 24.0657 40.7984 24.0396C40.8368 24.0135 40.8797 23.9962 40.9245 23.9888C40.9693 23.9813 41.015 23.9839 41.0588 23.9963L45.4834 25.239C45.532 25.2526 45.5772 25.278 45.6155 25.3134C45.6538 25.3487 45.6842 25.393 45.7045 25.4429C45.7247 25.4928 45.7341 25.5471 45.7322 25.6016C45.7302 25.656 45.7169 25.7093 45.6932 25.7574L45.5889 25.9705C45.3897 26.3751 45.2861 26.8273 45.2861 27.2859V34.0251C45.2861 34.249 45.3824 34.4607 45.5464 34.5975L46.4741 35.3678C46.5903 35.4646 46.7327 35.517 46.8792 35.5169H47.5452C47.7214 35.5167 47.8903 35.4407 48.0148 35.3055C48.1393 35.1704 48.2092 34.9872 48.2092 34.7962V34.429C48.2092 34.1676 48.0798 33.9264 47.8693 33.799L47.3911 33.5095C47.2795 33.4421 47.1881 33.3412 47.128 33.2188C47.0679 33.0965 47.0417 32.9579 47.0525 32.8198C47.1282 31.8471 47.2212 31.1069 47.3327 30.6001C47.4469 30.0773 47.7245 29.1442 48.1648 27.8022C48.1829 27.7469 48.2131 27.6973 48.253 27.6577C48.2928 27.618 48.3409 27.5895 48.3932 27.5746C48.4455 27.5597 48.5003 27.5589 48.553 27.5722C48.6057 27.5855 48.6545 27.6125 48.6953 27.651L48.8248 27.7719C49.1495 28.0765 49.546 28.2759 49.9696 28.3501L54.1212 29.0701C54.1803 29.0803 54.2357 29.1077 54.2817 29.1493C54.3276 29.1909 54.3623 29.2452 54.3821 29.3064C54.4019 29.3677 54.406 29.4336 54.3941 29.4972C54.3822 29.5607 54.3547 29.6197 54.3145 29.6677L53.8729 30.1947C53.7613 30.3272 53.7002 30.5 53.7002 30.6793V31.1501C53.7003 31.2465 53.7181 31.3419 53.7528 31.4306C53.7874 31.5194 53.8381 31.5997 53.9019 31.6668C53.9657 31.7339 54.0412 31.7865 54.1241 31.8214C54.2069 31.8564 54.2953 31.8729 54.3842 31.8701L54.9287 31.8528C55.0277 31.8497 55.1249 31.8226 55.213 31.7735C55.3011 31.7244 55.378 31.6546 55.438 31.5692L56.1246 30.5943C56.213 30.4687 56.2608 30.3152 56.2608 30.1573V28.7259C56.2608 28.4761 56.1412 28.2435 55.9454 28.1125C53.1092 26.2117 51.5713 25.1612 51.3316 24.9589C51.0832 24.7501 50.9796 24.4009 51.0208 23.9121C51.483 22.4238 52.2234 21.8968 52.5561 21.0155C52.8881 20.135 53.5057 17.394 53.8111 16.3413C54.4254 14.2246 54.9646 13.105 55.11 12.7702C55.4367 12.0185 56.0131 11.9119 56.622 11.6527C57.2309 11.3928 58.3884 11.4324 59.1414 10.716C59.8938 9.99892 59.8247 9.25013 60 8.4351V7.43791C60 7.03975 59.7018 6.7172 59.3346 6.7172H57.5311C57.2874 6.7172 57.0636 6.5732 56.9467 6.34064C56.7409 5.93096 56.4122 5.53929 55.96 5.16633C55.3581 4.67317 54.6723 4.31374 53.9419 4.10866C54.1079 1.86661 54.1079 0.600142 53.9419 0.309266C53.7759 0.0183887 53.3144 0.473424 52.5561 1.67437C52.4478 0.260306 52.2367 -0.258088 51.9219 0.119188C51.6284 0.471984 51.1217 1.75357 50.4026 3.96395C50.3083 4.25194 50.1722 4.5241 49.9995 4.76674C49.6974 5.19009 49.4251 5.69697 49.1814 6.28592C48.7186 7.40623 48.178 10.3323 47.2212 11.7715C46.2649 13.2108 45.7065 13.3289 44.3253 13.5953C43.4076 13.7724 40.2434 13.2065 37.6516 13.097C35.6555 13.0121 34.0499 13.3764 33.7603 13.457C33.6561 13.4866 33.5565 13.5197 33.4595 13.5586Z" fill="#0B0A0A"/>
        </svg>
        <h1>{text}</h1>
    </div>
  );
}

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionTitle;
