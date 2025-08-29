import {
  PageSection,
  PageSectionBackgroundContainer,
  SectionContainer,
  SectionTitle,
} from "@/components/landing-page";
import { Box } from "@mui/material";

import { Typography } from "@mui/material";

import { Stack } from "@mui/material";
import Image from "next/image";

export default function IntelligenceUseCases() {
  return (
    <PageSection className="py-24">
      <PageSectionBackgroundContainer className="overflow-visible">
        <Box className="relative w-full h-full">
          <div className="absolute bottom-[-150px] right-[0] w-[500px] h-[500px]">
            <Image
              src="/images/features/auditable-intelligence/squigly-line.png"
              alt="donut"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </Box>
      </PageSectionBackgroundContainer>
      <SectionContainer>
        <Stack direction="column" spacing={4}>
          <SectionTitle
            title="Use Cases and Scenarios"
            subtitle="Customize your deployment workflows to match your organization's needs. With advanced Flow Controls"
          />
        </Stack>
        <Stack gap={5} className="my-8 text-left">
          <Stack gap={5} className="flex-row">
            <Box
              flex={1}
              p={5}
              className="border border-[#3D3D3D] rounded-[42px] bg-gradient-[38] from-[#2417413D] from-[-6%] to-[#8A33913D] to-125% backdrop-blur-[14px]"
            >
              <div className="flex">
                <Box className="bg-gradient-to-r from-[#6665D2] to-[#F26E7E] rounded-full p-1">
                  <Box className="bg-black rounded-full w-full h-full p-4">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="troubleshooting" clipPath="url(#clip0_1090_22682)">
                        <g id="Clip path group">
                          <mask
                            id="mask0_1090_22682"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="25"
                            height="25"
                          >
                            <g id="clip0_1412_540">
                              <path
                                id="Vector"
                                d="M24.0117 0.369141H0.0117188V24.3691H24.0117V0.369141Z"
                                fill="white"
                              />
                            </g>
                          </mask>
                          <g mask="url(#mask0_1090_22682)">
                            <g id="Group">
                              <path
                                id="Vector_2"
                                d="M9.62583 1.80134C9.86559 0.954059 10.639 0.369141 11.5195 0.369141H12.5039C13.3845 0.369141 14.1578 0.954059 14.3976 1.80134L14.8177 3.28616C15.3863 3.46161 15.9321 3.68898 16.4496 3.96273L17.7972 3.20951C18.5659 2.77991 19.5263 2.91318 20.149 3.53582L20.8451 4.2319C21.4677 4.85454 21.601 5.81498 21.1714 6.58365L20.4182 7.9313C20.6919 8.44879 20.9193 8.99455 21.0947 9.56316L22.5795 9.98325C23.4268 10.223 24.0117 10.9964 24.0117 11.8769V12.8613C24.0117 13.7419 23.4268 14.5153 22.5795 14.755L21.0947 15.1751C20.9193 15.7437 20.6919 16.2895 20.4182 16.807L21.1714 18.1546C21.5662 18.8612 21.4855 19.7298 20.9863 20.3491L15.8323 10.6299C14.1856 7.5245 9.7322 7.53703 8.10293 10.6516L3.03282 20.3438C2.53744 19.7248 2.45833 18.8592 2.85209 18.1546L3.60531 16.807C3.33156 16.2895 3.10419 15.7437 2.92874 15.1751L1.44391 14.755C0.596637 14.5153 0.0117188 13.7419 0.0117188 12.8613V11.8769C0.0117188 10.9964 0.596637 10.223 1.44391 9.98325L2.92874 9.56316C3.10419 8.99455 3.33156 8.44879 3.60531 7.9313L2.85209 6.58365C2.42249 5.81498 2.55575 4.85454 3.17839 4.23191L3.87448 3.53582C4.49712 2.91318 5.45756 2.77991 6.22623 3.20951L7.57388 3.96273C8.09137 3.68898 8.63713 3.46161 9.20574 3.28616L9.62583 1.80134Z"
                                fill="white"
                              />
                              <path
                                id="Vector_3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.20277 21.7884C4.58366 22.9719 5.44349 24.3896 6.77919 24.3876L17.2364 24.3717C18.2355 24.3701 18.9655 23.5753 19.01 22.6806C19.0102 22.6762 19.0104 22.6717 19.0106 22.6673C19.0116 22.6438 19.0121 22.6201 19.0121 22.5965C19.0122 22.5488 19.0103 22.5008 19.0064 22.4528C18.9879 22.227 18.9248 21.9986 18.8105 21.7784L18.8072 21.772C18.8057 21.7692 18.8042 21.7664 18.8028 21.7636L13.5427 11.8443C12.8732 10.5817 11.0624 10.5868 10.4 11.8532L5.20277 21.7884ZM11.9858 14.4269C12.7016 14.4269 13.2818 15.0072 13.2818 15.7229V17.8774C13.2818 18.5932 12.7016 19.1734 11.9858 19.1734C11.27 19.1734 10.6898 18.5932 10.6898 17.8774V15.7229C10.6898 15.0072 11.27 14.4269 11.9858 14.4269ZM11.9858 22.7382C12.7694 22.7382 13.4046 22.1029 13.4046 21.3193C13.4046 20.5357 12.7694 19.9005 11.9858 19.9005C11.2022 19.9005 10.567 20.5357 10.567 21.3193C10.567 22.1029 11.2022 22.7382 11.9858 22.7382Z"
                                fill="white"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1090_22682">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.0117188 0.369141)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Box>
                </Box>
              </div>
              <Typography fontSize={48}>
                Incident Response and Troubleshooting
              </Typography>
              <Typography fontSize={24} className="text-gray-400 mt-5">
                Rapidly resolve issues with immediate access to change
                histories.
              </Typography>
            </Box>
            <Box
              flex={1}
              p={5}
              className="border border-[#3D3D3D] rounded-[42px] bg-gradient-[38] from-[#2417413D] from-[-6%] to-[#8A33913D] to-125% backdrop-blur-[14px]"
            >
              <div className="flex">
                <Box className="bg-gradient-to-r from-[#4442D9] to-[#03A587] rounded-full p-1">
                  <Box className="bg-black rounded-full w-full h-full p-4">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.76172 17.7691V13.1491C9.76172 11.6591 10.7717 10.3591 12.2217 9.99914L14.9817 9.30914C15.3117 9.21914 15.6617 9.17914 16.0117 9.17914C16.3617 9.17914 16.7117 9.21914 17.0417 9.30914L18.7617 9.73914V5.36914C18.7617 3.84914 17.5317 2.61914 16.0117 2.61914H6.01172C4.49172 2.61914 3.26172 3.84914 3.26172 5.36914V19.3691C3.26172 20.8891 4.49172 22.1191 6.01172 22.1191H12.4817L12.4417 22.0991C10.7917 21.2691 9.76172 19.6091 9.76172 17.7691ZM7.01172 5.61914H15.0117C15.4217 5.61914 15.7617 5.95914 15.7617 6.36914C15.7617 6.77914 15.4217 7.11914 15.0117 7.11914H7.01172C6.60172 7.11914 6.26172 6.77914 6.26172 6.36914C6.26172 5.95914 6.60172 5.61914 7.01172 5.61914ZM7.01172 8.61914H11.0117C11.4217 8.61914 11.7617 8.95914 11.7617 9.36914C11.7617 9.77914 11.4217 10.1191 11.0117 10.1191H7.01172C6.60172 10.1191 6.26172 9.77914 6.26172 9.36914C6.26172 8.95914 6.60172 8.61914 7.01172 8.61914ZM9.01172 13.1191H7.01172C6.60172 13.1191 6.26172 12.7791 6.26172 12.3691C6.26172 11.9591 6.60172 11.6191 7.01172 11.6191H9.01172C9.42172 11.6191 9.76172 11.9591 9.76172 12.3691C9.76172 12.7791 9.42172 13.1191 9.01172 13.1191ZM20.7617 13.1501V17.7641C20.7617 19.0401 20.0527 20.1871 18.9117 20.7581L17.2417 21.5931C16.8567 21.7851 16.4337 21.8821 16.0117 21.8821C15.5897 21.8821 15.1667 21.7851 14.7817 21.5931L13.1117 20.7581C11.9707 20.1871 11.2617 19.0401 11.2617 17.7641V13.1501C11.2617 12.3461 11.8067 11.6481 12.5867 11.4521L15.3447 10.7631C15.7817 10.6541 16.2417 10.6541 16.6787 10.7631L19.4367 11.4521C20.2167 11.6471 20.7617 12.3461 20.7617 13.1501Z"
                        fill="white"
                      />
                    </svg>
                  </Box>
                </Box>
              </div>
              <Typography fontSize={48}>Compliance Audits</Typography>
              <Typography fontSize={24} className="text-gray-400 mt-5">
                Simplify audits with detailed logs that meet regulatory
                requirements.
              </Typography>
            </Box>
          </Stack>
          <Box
            p={5}
            className="border border-[#3D3D3D] rounded-[42px] bg-gradient-[38] from-[#2417413D] from-[-6%] to-[#8A33913D] to-125% backdrop-blur-[14px]"
          >
            <div className="flex">
              <Box className="bg-gradient-to-r from-[#70CA89] to-[#F61EE1] rounded-full p-1">
                <Box className="bg-black rounded-full w-full h-full p-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1090_22701)">
                      <path
                        d="M10.7005 4.8916C7.74887 4.8916 5.34766 7.29257 5.34766 10.2442C5.34766 13.1958 7.74887 15.5972 10.7005 15.5972C13.6521 15.5972 16.0533 13.1958 16.0533 10.2442C16.0533 7.29257 13.6521 4.8916 10.7005 4.8916ZM12.9783 12.1172H9.15681L9.74773 12.7081C9.8929 12.8532 9.8929 13.0884 9.74773 13.2335C9.60257 13.3787 9.36741 13.3787 9.22225 13.2335L7.99684 12.0084C7.85186 11.8635 7.85193 11.6277 7.99684 11.4829L9.22225 10.2577C9.36741 10.1126 9.60257 10.1126 9.74773 10.2577C9.8929 10.4029 9.8929 10.6381 9.74773 10.7832L9.15681 11.374H12.9783C13.1835 11.374 13.3499 11.5405 13.3499 11.7456C13.3499 11.9508 13.1835 12.1172 12.9783 12.1172ZM13.4039 9.00548L12.1787 10.2311C12.1061 10.3037 12.011 10.34 11.916 10.34C11.8209 10.34 11.7258 10.3037 11.6532 10.2311C11.5081 10.086 11.5081 9.8508 11.6532 9.70564L12.2442 9.11434H8.42241C8.21725 9.11434 8.0508 8.94789 8.0508 8.74273C8.0508 8.53757 8.21725 8.37112 8.42241 8.37112H12.244L11.6532 7.78031C11.5081 7.63515 11.5081 7.39999 11.6532 7.25483C11.7984 7.10967 12.0335 7.10967 12.1787 7.25483L13.4039 8.47999C13.5483 8.62446 13.5482 8.86119 13.4039 9.00548Z"
                        fill="white"
                      />
                      <path
                        d="M22.6836 14.3515L20.7693 11.2817C20.4118 10.7083 20.1693 10.0645 20.1057 9.39172C19.6554 4.62037 15.6438 0.849609 10.701 0.849609C5.54626 0.849609 1.26562 5.01512 1.26562 10.2849C1.26562 12.8779 2.31647 15.2424 4.01849 16.9445C5.3893 18.3152 6.10893 20.2115 6.10893 22.1647V23.8896H15.6928V19.7203H18.023C19.1964 19.7203 20.1477 18.769 20.1477 17.5956V15.1282H22.2609C22.6493 15.1283 22.8891 14.6942 22.6836 14.3515ZM10.701 16.3406C7.33954 16.3406 4.60494 13.6057 4.60494 10.2443C4.60494 6.88281 7.33954 4.14846 10.701 4.14846C14.0624 4.14846 16.797 6.88281 16.797 10.2443C16.797 13.6057 14.0624 16.3406 10.701 16.3406Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1090_22701">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.0117188 0.369141)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Box>
              </Box>
            </div>
            <Typography fontSize={48}>
              Onboarding and Knowledge Transfer
            </Typography>
            <Typography fontSize={24} className="text-gray-400 mt-5">
              Help new team members get up to speed by reviewing past changes.
            </Typography>
          </Box>
        </Stack>
      </SectionContainer>
    </PageSection>
  );
}
