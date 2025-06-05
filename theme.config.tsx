import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: "bold" }}>Rookedsysc</span>,
  project: {
    link: "https://github.com/rookedsysc",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  chat: {
    link: "https://open.kakao.com/me/rookedsysc",
  },
  docsRepositoryBase: "https://github.com/rookedsysc/nextra-blog/tree/main",
  footer: {
    text: "Rookedsysc",
  },
};

export default config;
