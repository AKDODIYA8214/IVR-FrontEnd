import { drawerProps } from "@/views/IVRAddEditView";
import { Drawer, Typography, SvgIcon, IconButton, Divider } from "@mui/material";
import React from "react";

export interface props {
  drawer: drawerProps;
}
export default function CustomDrawer({ drawer }: props) {
  const { node, onClose, open, setData } = drawer;
  console.log(node);
  return (
    <Drawer anchor="right" variant="temporary" open={open} onClose={() => onClose()} ModalProps={{ keepMounted: true }} className="sm:p-2" sx={{ "& .MuiDrawer-paper": { width: { xs: 300, sm: 400 } } }}>
      <div className="h-full w-full flex flex-col">
        <div className=" p-5 h-[70px] w-full flex justify-around items-center">
          <Typography variant="h6">Properties</Typography>
          <div className="w-full h-full flex justify-end items-center">
            <IconButton
              onClick={() => {
                onClose();
              }}
            >
              <SvgIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
                </svg>
              </SvgIcon>
            </IconButton>
          </div>
        </div>
        <Divider />
        <div></div>
      </div>
    </Drawer>
  );
}
