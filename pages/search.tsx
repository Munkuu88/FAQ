import { Search } from "../domain/Search";
import { withRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function SearchPage() {
  const SortRouter = withRouter((props: any) => {
    return <Search sortLink={props.router.query.sort} />;
  });

  return <SortRouter />;
}
