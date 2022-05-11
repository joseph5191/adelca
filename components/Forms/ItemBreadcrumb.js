import React from "react";
import Link from "next/link";
export default function ItemBreadcrumb({ url = null, text }) {
  return (
    <>
      {url ? (
        <li className="breadcrumb-item">
          <Link href={url}>
            <a className="black-text">{text}</a>
          </Link>
          <i className="fa fa-angle-right mx-2" aria-hidden="true" />
        </li>
      ) : (
        <li className="breadcrumb-item active">{text}</li>
      )}
    </>
  );
}
