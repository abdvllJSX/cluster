import React from "react";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

const Breadcrumbs = ({ items, className }) => {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  to={item.path}
                  className={`text-[${item.active ? "#000000" : "#717680"}] font-[500] text-[1.65rem] sm:text-[1.4rem]`}
                >
                  {item.label}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < items.length - 1 && (
              <BreadcrumbSeparator className="[&>svg]:w-[2rem] text-[#181D27] mx-[1rem] [&>svg]:h-auto" />
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
