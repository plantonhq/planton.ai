import { FC, ImgHTMLAttributes, ReactNode } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '@/components/common';

interface IBannerBox {
  title: string;
  imgSrc?: string;
  desc?: ReactNode;
  className?: string;
}

export const BannerBox: FC<IBannerBox> = ({ imgSrc, title, desc = '', className }) => {
  return (
    <Box className={`rounded-3xl md:rounded-[42px] grow ${className}`}>
      {imgSrc && <img src={imgSrc} />}
      <Stack className="gap-2 md:gap-5 p-4 md:p-8">
        <TypoH3>{title}</TypoH3>
        {desc}
      </Stack>
    </Box>
  );
};

const TorusImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/auditable-intelligence/torus-2.svg"
    className={`absolute top-0 left-0 transform -translate-x-[70%] -translate-y-[50%] ${className}`}
    {...props}
  />
);

const BurgerImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/auditable-intelligence/burger.svg"
    className={`absolute bottom-0 left-1/2 transform -translate-x-[250%] ${className}`}
    {...props}
  />
);

const BurgerImgSmall: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/auditable-intelligence/burger-small.svg"
    className={`absolute top-0 right-0 transform translate-y-[180%] ${className}`}
    {...props}
  />
);
const BurgerImgSmallBlur: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/auditable-intelligence/burger-bg.png"
    className={`w-[700px] absolute bottom-0 right-1/2 transform -translate-y-[20%] translate-x-[70%] ${className}`}
    {...props}
  />
);

export const CrudWithCommitMsgs: FC = () => {
  return (
    <Stack className="w-full relative overflow-hidden items-center p-5 md:py-16 bg-black">
      <TorusImg className="md:hidden w-[500px] aspect-square blur-[200px] z-0" />
      <BurgerImg className="hidden md:block blur-[250px] z-0" />
      <BurgerImg className="hidden md:block z-10" />
      <BurgerImgSmall className="md:hidden z-10" />
      <BurgerImgSmallBlur className="md:hidden blur-[150px] z-0" />
      <Box className="hidden md:block w-[1700px] aspect-[0.97] absolute top-0 right-1/2 transform translate-x-[90%] -translate-y-[40%] rounded-full blur-[3.5px] bg-[linear-gradient(45deg,_rgba(138,_51,_145,_0.16)_10.55%,_rgba(6,_5,_18,_0.16)_74.21%)]" />
      <Stack className="max-w-[500px] md:max-w-[1350px] items-center gap-0 md:gap-8 z-10">
        <TypoH2 className="text-center">Create, Update, Delete & Restore</TypoH2>
        <TypoH2 className="mt-1 md:mt-0 text-center">All With Commit Messages</TypoH2>
        <TypoP1 className="mt-3 md:mt-0 text-center text-text-secondary max-w-[1230px]">
          Developers frequently perform four critical operations on their resources: create, update,
          delete, and restore. With Auditable Intelligence, each operation requires a commit message
          and is fully audited. Here’s how it all fits together in a single flow
        </TypoP1>
        <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-6">
          <BannerBox
            title="Create"
            desc={
              <TypoP1 component="span" className="text-text-secondary">
                A developer (e.g., Bala) spins up a new Redis instance, specifying CPU/memory
                requests and adding a commit message:
                <br />
                <TypoP1 color="text.primary" component="span">
                  “Creating a new Redis instance for dev environment.”
                </TypoP1>
              </TypoP1>
            }
            imgSrc="/images/features/auditable-intelligence/grid-img-1.svg"
            className="bg-[linear-gradient(241.28deg,_#0A0A0A_-1.64%,_#6C00FF_442.91%)]"
          />
          <BannerBox
            title="Update"
            desc={
              <TypoP1 component="span" className="text-text-secondary">
                Another team member (e.g., Bharath) adjusts the resource configuration (e.g., memory
                from 50Mi to 100Mi), again recording a commit message:
                <br />
                <TypoP1 color="text.primary" component="span">
                  “Updating memory to 100Mi.”
                </TypoP1>
              </TypoP1>
            }
            imgSrc="/images/features/auditable-intelligence/grid-img-2.svg"
            className="bg-[linear-gradient(241.28deg,_#0A0A0A_-1.64%,_#6C00FF_442.91%)]"
          />
          <BannerBox
            title="Delete"
            desc={
              <TypoP1 component="span" className="text-text-secondary">
                The same or another user removes the resource when it’s no longer needed, confirming
                the deletion and providing the reason:
                <br />
                <TypoP1 color="text.primary" component="span">
                  “Deleting the Redis instance as it is no longer required.”
                </TypoP1>
              </TypoP1>
            }
            imgSrc="/images/features/auditable-intelligence/grid-img-3.svg"
            className="bg-[linear-gradient(241.28deg,_#0A0A0A_-1.64%,_#6C00FF_442.91%)]"
          />
          <BannerBox
            title="Restore"
            desc={
              <TypoP1 component="span" className="text-text-secondary">
                Should the team require the resource again, they can quickly restore it with yet
                another commit message:
                <br />
                <TypoP1 color="text.primary" component="span">
                  “Restoring the instance to continue with implementation.”
                </TypoP1>
              </TypoP1>
            }
            imgSrc="/images/features/auditable-intelligence/grid-img-4.svg"
            className="bg-[linear-gradient(241.28deg,_#0A0A0A_-1.64%,_#6C00FF_442.91%)]"
          />
        </Box>
      </Stack>
    </Stack>
  );
};
