"use client";
import React, { useEffect } from "react";
import DataTable, { EditType } from "@/componets/DataTable";
import { Card, CardHeader, CardContent, IconButton, SvgIcon } from "@mui/material";
import Link from "next/link";

function IVRMain() {
  const columns = [
    {
      accessorKey: "ivrNmae",
      header: "IVR Name",
      filterVariant: "none",
    },
  ];
  return (
    <Card>
      <CardHeader
        title="List Of IVRS"
        action={
          <div className="h-full w-full flex justify-center items-center">
            <Link href={"/ADDIVR"}>
              <IconButton>
                <SvgIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                  </svg>
                </SvgIcon>
              </IconButton>
            </Link>
          </div>
        }
      ></CardHeader>
      <CardContent>
        <DataTable addType={EditType.link} api="/getallivr" columns={columns} deleteApi="/deleteIvr" editPageLink="/ADDIVR" idkey="id" isFilter={false} isSorting={false} openComponent={() => {}} />
      </CardContent>
    </Card>
  );
}

export default IVRMain;
