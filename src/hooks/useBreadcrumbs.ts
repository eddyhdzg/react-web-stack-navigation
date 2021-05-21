import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

type TBreadcrumb = {
  breadcrumb: string;
  href: string;
}[];

export default function useBreadcrumbs() {
  const { pathname } = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<TBreadcrumb>([]);

  useEffect(() => {
    const linkPath = pathname.split("/");
    linkPath.shift();
    const pathArray = linkPath.map((path, i) => {
      return {
        breadcrumb: path,
        href: "/" + linkPath.slice(0, i + 1).join("/"),
      };
    });
    setBreadcrumbs(pathArray);
  }, [pathname]);

  return breadcrumbs;
}
