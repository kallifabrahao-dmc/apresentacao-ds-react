import { applyPureVueInReact } from "veaury";
import { CeDataTable } from "@comerc-teste/vue-components";
import type { FC } from "react";

const DataTable = applyPureVueInReact(CeDataTable);

export default DataTable;
