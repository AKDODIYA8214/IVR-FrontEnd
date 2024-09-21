"use client";
import { Card, CircularProgress, Icon, IconButton, MenuItem, Pagination, Paper, Select, SelectChangeEvent, SvgIcon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, useTheme } from "@mui/material";
import { Column, ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, PaginationState, RowData, SortingState, TableState, useReactTable } from "@tanstack/react-table";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "@/configs/axiosConfig";
import Link from "next/link";
import useSWR from "swr";
export enum EditType {
  link = "link",
  component = "component",
}
export interface DataTableProps {
  columns: ColumnDef<any>[];
  isSorting: boolean;
  isFilter: boolean;
  api: string;
  idkey: string;
  addType: EditType;
  openComponent: Function;
  editPageLink: string;
  deleteApi: string;
  actionEnable?: boolean;
}
function LoadingLayout() {
  return (
    <div className="h-52 w-full flex justify-center items-center">
      <CircularProgress color="primary" />
    </div>
  );
}
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 2000,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return <TextField inputProps={{ ...props }} value={value} onChange={(e) => setValue(e.target.value)} variant="outlined" size="small"></TextField>;
}
function Filter({ column }: { column: Column<any, unknown> }) {
  const columnFilterValue = column.getFilterValue();
  const filterVariant = (column.columnDef as any)["filterVariant"] ?? "none";
  const [endDateRange, setEndDateRange] = useState<Date | null>(new Date());
  const [startDateRange, setStartDateRange] = useState<Date | null | undefined>(new Date(new Date().setDate(new Date().getDate() - 45)));
  const handleOnChangeRange = (dates: any) => {
    const [start, end] = dates;
    setStartDateRange(start);
    setEndDateRange(end);
    column.setFilterValue({ start, end });
  };
  return filterVariant === "range" ? (
    <div>
      <div className="flex space-x-2">
        <DebouncedInput value={(columnFilterValue as [number, number])?.[0] ?? ""} onChange={(value) => column.setFilterValue((old: [number, number]) => [value, old?.[1]])} placeholder={`Min`} />
        <DebouncedInput value={(columnFilterValue as [number, number])?.[1] ?? ""} onChange={(value) => column.setFilterValue((old: [number, number]) => [old?.[0], value])} placeholder={`Max`} />
      </div>
      <div className="h-1" />
    </div>
  ) : filterVariant === "select" ? (
    <select onChange={(e) => column.setFilterValue(e.target.value)} value={columnFilterValue?.toString()}>
      {/* See faceted column filters example for dynamic select options */}
      <option value="">All</option>
      <option value="complicated">complicated</option>
      <option value="relationship">relationship</option>
      <option value="single">single</option>
    </select>
  ) : filterVariant == "text" ? (
    <DebouncedInput onChange={(value) => column.setFilterValue(value)} placeholder={`Search...`} type="text" value={(columnFilterValue ?? "") as string} />
  ) : (
    <></>
  );
}

export default function TanstakClientTable({ addType, openComponent, columns, isSorting, isFilter, api, idkey, editPageLink, deleteApi, actionEnable = true }: DataTableProps) {
  const theme = useTheme();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [ConfirmDialog, setConfirmDialog] = useState<{ open: boolean; confirmFunction: Function }>({ open: false, confirmFunction: () => {} });

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [search, setSearch] = useState<ColumnFiltersState>([]);

  const {
    data: fetchedData,
    isLoading,
    mutate,
  } = useSWR(
    `${api}?limit=${pagination.pageSize}&offset=${pagination.pageIndex * pagination.pageSize}&search=${JSON.stringify(search)}&sort=${JSON.stringify(sorting)}`,
    async (axiosConfig: any) => {
      const res = await axios(axiosConfig);
      return res.data.data;
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 1000,
    }
  );

  const table = useReactTable({
    data: fetchedData?.data || [],
    columns,
    state: {
      sorting,
      pagination,
      columnFilters: search,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    onColumnFiltersChange: setSearch,
    enableSorting: isSorting,
    enableFilters: isFilter,
    manualPagination: true,
  } as any);
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    table.setPagination({
      ...table.getState().pagination,
      pageIndex: value - 1,
      pageSize: pagination.pageSize,
    });
  };

  const handleRowCountChange = (event: SelectChangeEvent<number>) => {
    table.setPagination({
      ...table.getState().pagination,
      pageIndex: 0,
      pageSize: event.target.value as number,
    });
  };
  // useEffect(()=>{
  //   console.log("rendercount:",pagination,search,sorting,fetchedData)
  // });
  // if(isLoading)return(<>Loading</>)
  return (
    <>
      <div className=" overflow-x-auto">
        <table className="w-full  text-sm text-left rtl:text-right ">
          <thead className="text-xs uppercase  bg-blue-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <>
                <tr key={headerGroup.id}>
                  <th key={"srno"} scope="col" className="px-3 py-3  text-sm capitalize text-white  ">
                    <h4>Serial No</h4>
                  </th>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} scope="col" className="px-3 py-3 text-sm capitalize text-white" onClick={header.column.getToggleSortingHandler()}>
                      {header.isPlaceholder ? null : (
                        <div className="flex  items-center justify-between cursor-pointer text-sm capitalize">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {header.column.getCanSort() && <>{header.column.getIsSorted() == "asc" ? <i className="tabler-chevron-down text-xl" /> : header.column.getIsSorted() == "desc" ? <i className="tabler-chevron-up text-xl" /> : <i className="tabler-chevron-up text-xl opacity-0" />}</>}
                        </div>
                      )}
                    </th>
                  ))}
                  {actionEnable && (
                    <th key={"action"} scope="col" className="px-3 py-3  text-sm capitalize">
                      <h4 className="text-white">Actions</h4>
                    </th>
                  )}
                </tr>
              </>
            ))}
          </thead>
          <tbody className="inset-3 ">
            {isFilter &&
              table.getHeaderGroups().map((headerGroup) => (
                <tr className=" border dark:border-gray-700" key={headerGroup.id}>
                  <td
                    key={"srno"}
                    className="px-3 py-3 border border-s-0 border-t-0 border-e-0 border-[var(--mui-palette-divider);
] border-solid  border-opacity-50 "
                  ></td>
                  {headerGroup.headers.map((header) => {
                    return (
                      <td
                        key={header.id}
                        className="px-3 py-3 border border-s-0 border-t-0 border-e-0 border-[var(--mui-palette-divider);
] border-solid  border-opacity-50"
                      >
                        {header.column.getCanFilter() ? (
                          <div className="flex flex-1 justify-start">
                            <Filter column={header.column} />
                          </div>
                        ) : null}
                      </td>
                    );
                  })}
                  <td
                    key={"action"}
                    className="px-3 py-3 border border-s-0 border-t-0 border-e-0  border-[var(--mui-palette-divider);
] border-solid  border-opacity-50"
                  ></td>
                </tr>
              ))}

            {isLoading ? (
              <tr className="border dark:border-gray-700">
                <td
                  colSpan={columns.length + 2}
                  className="px-3 py-1 border border-s-0 border-t-0 border-e-0 border-[var(--mui-palette-divider);
] border-solid  border-opacity-50"
                >
                  <LoadingLayout />
                </td>
              </tr>
            ) : table.getRowModel().rows.length == 0 ? (
              <tr className="border dark:border-gray-700">
                <td
                  colSpan={columns.length + 2}
                  className="px-3 py-1 border border-s-0 border-t-0 border-e-0 border-[var(--mui-palette-divider);
] border-solid  border-opacity-50"
                >
                  "No data Found"
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row, index) => (
                <tr key={row.id} style={{ borderBottom: "4px solid black" }}>
                  <td
                    key={"srno"}
                    className="px-3 py-1 border border-s-0 border-t-0 border-e-0 border-[var(--mui-palette-divider);
] border-solid  border-opacity-50"
                  >
                    <div className="">{pagination.pageIndex * pagination.pageSize + (index + 1)}</div>
                  </td>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="truncate hover:text-wrap max-w-14 px-3 py-1 border border-s-0 border-t-0 border-e-0 border-[var(--mui-palette-divider);
] border-solid  border-opacity-50"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                  {actionEnable && (
                    <td
                      key={"action" + row.id}
                      className="px-3 py-1   border border-s-0 border-t-0 border-e-0 border-[var(--mui-palette-divider);
] border-solid  border-opacity-50"
                    >
                      <div className="flex w-full h-full flex-row justify-center items-center gap-2">
                        {addType == EditType.link ? (
                          <Link href={editPageLink + "/" + (row.original as any)[idkey]}>
                            <IconButton
                              size="small"
                              onClick={() => {
                                console.log("Edit", (row.original as any)[idkey]);
                              }}
                            >
                              <SvgIcon>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                  <path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z" />
                                </svg>
                              </SvgIcon>
                            </IconButton>
                          </Link>
                        ) : (
                          <IconButton
                            size="small"
                            onClick={() => {
                              console.log("Edit", (row.original as any)[idkey]);
                              openComponent((row.original as any)[idkey]);
                            }}
                          >
                            <SvgIcon>
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z" />
                              </svg>
                            </SvgIcon>
                          </IconButton>
                        )}
                        <IconButton size="small" color="error" onClick={() => {}}>
                          <SvgIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-3 -2 24 24">
                              <path fill="currentColor" d="M6 2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-.133l-.68 10.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.137 7H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm10 2H2v1h14zM4.141 7l.687 10.068a1 1 0 0 0 .998.932h6.368a1 1 0 0 0 .998-.934L13.862 7zM7 8a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1" />
                            </svg>
                          </SvgIcon>
                        </IconButton>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Paper className="w-full rounded-t-none p-2 shadow-none">
        <div className="w-full flex items-center flex-wrap justify-between gap-3">
          <div className="flex-0 min-w-96 justify-self-start ">
            <Typography variant="body1">
              Showing results {table.getState().pagination.pageSize * table.getState().pagination.pageIndex + 1}-{Math.min(table.getState().pagination.pageSize * (table.getState().pagination.pageIndex + 1), fetchedData ? fetchedData.totalCount : 0)} of {fetchedData ? fetchedData.totalCount : 0}
            </Typography>
          </div>
          <Select className="flex-0 justify-self-center" value={pagination.pageSize} onChange={handleRowCountChange} defaultChecked size="small">
            {[5, 10, 20, 30, 40, 50].map((pageSize, index) => (
              <MenuItem key={index} value={pageSize}>
                {pageSize}
              </MenuItem>
            ))}
          </Select>
          <div className="flex-0 flex  min-w-96 justify-start sm:justify-end md:justify-end xl:justify-end">
            <Pagination page={pagination.pageIndex + 1} className="" count={Math.ceil(fetchedData ? fetchedData.totalCount / pagination.pageSize : 0)} variant="outlined" shape="rounded" onChange={handlePageChange} />
          </div>
        </div>
      </Paper>
    </>
  );
}
