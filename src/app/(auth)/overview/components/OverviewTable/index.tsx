import React from "react";

import { Table } from "@/components";
import { overviewFetchList } from "@/fetch";

/**
 * OverviewTable Component
 */
const OverviewTable = async ({ page = "1" }: Params) => {
  const columns = [{ accessor: "title", header: "Title" }];
  const overviewList = await overviewFetchList({ limit: "10", page });

  return (
    <Table
      totalPage={overviewList.length}
      data={overviewList}
      columns={columns}
    />
  );
};

export default OverviewTable;
