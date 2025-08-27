import { useState } from 'react';
import Link from 'next/link';
import { Menu, Paper, Stack, Typography } from '@mui/material';
import { NavigateNext, KeyboardArrowDown } from '@mui/icons-material';

interface IMenu {
  title?: string;
  items: IMenuItems[];
}

export interface IMenuItems {
  icon?: React.ReactNode; // FC<{ fill: string }>;
  label: string;
  subLabel?: string;
  href?: string;
  onClick?: () => void;
}

// const StyledLeftItemContainer = styled(Stack)(({ theme }) => ({
//   "&:hover": {
//     "*": {
//       [theme.breakpoints.up(768)]: {
//         color: `${theme.palette.primary.main} !important`,
//       },
//     },
//   },
// }));

export const ProductMenuItem = ({ label, subLabel, icon: AppIcon, href, onClick }: IMenuItems) => {
  return (
    <Link href={href ?? ''} onClick={onClick} className="w-full group  hover:text-blue-400">
      <Stack className="flex-row gap-4 md:items-center">
        {AppIcon}
        <Stack className="justify-start">
          <Typography className={subLabel ? 'font-semibold' : ''}>{label}</Typography>
          {subLabel && (
            <Typography className="text-[#626262] group-hover:text-blue-400 text-sm font-medium">
              {subLabel}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Link>
  );
};

export const ProductMenu = ({
  title,
  leftMenu,
  rightMenu,
  footerMenu,
}: {
  title: string;
  leftMenu: IMenu[];
  rightMenu?: IMenu[];
  footerMenu?: IMenuItems;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Stack
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        className="flex-row cursor-pointer items-center"
        onClick={handleClick}
      >
        <Typography className="text-base font-medium">{title}</Typography>
        <KeyboardArrowDown
          className="text-sm"
          sx={{
            fontSize: '20px !important',
            fontVariationSettings: "'FILL' 1, 'wght' 500, 'GRAD' 200, 'opsz' 48",
          }}
        />
      </Stack>
      <Menu
        id="composition-menu"
        classes={{
          paper: 'mt-3',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'composition-button',
        }}
      >
        <Stack
          component={Paper}
          className="light gap-6 justify-between rounded-xl"
          onClick={handleClose}
        >
          <Stack className="flex-row p-6 ">
            <Stack className="w-[270px] mr-4">
              {leftMenu.map((menu, index) => (
                <Stack key={index} className="mb-8 last:mb-0">
                  {menu.title && (
                    <Typography className="font-semibold mb-4">{menu.title}</Typography>
                  )}
                  <Stack gap={menu.title ? 1.5 : 3}>
                    {menu.items.map((item) => (
                      <ProductMenuItem key={item.label} {...item} />
                    ))}
                  </Stack>
                </Stack>
              ))}
            </Stack>
            {rightMenu && (
              <Stack className="w-[170px] pl-4 border-l border-gray-200">
                {rightMenu.map((menu, index) => (
                  <Stack key={index} className="mb-8 last:mb-0">
                    {menu.title && (
                      <Typography className="font-semibold mb-4">{menu.title}</Typography>
                    )}
                    <Stack gap={menu.title ? 1.5 : 3}>
                      {menu.items.map((item) => (
                        <ProductMenuItem key={item.label} {...item} />
                      ))}
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            )}
          </Stack>

          {footerMenu && (
            <Link href={footerMenu.href ?? ''}>
              <Stack className="py-3 px-6 flex-row gap-4 justify-between cursor-pointer bg-[#e3e3e3]">
                <Typography className="text-sm font-medium">{footerMenu.label}</Typography>
                <NavigateNext />
              </Stack>
            </Link>
          )}
        </Stack>
      </Menu>
    </>
  );
};
