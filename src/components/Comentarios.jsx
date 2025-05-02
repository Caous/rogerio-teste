"use client";

import { useEffect } from "react";

const DisqusComments = ({ shortname, identifier, title, url }) => {
  useEffect(() => {
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = identifier;
          this.page.title = title;
          this.page.url = url;
          this.language = "pt_BR";
        },
      });
    } else {
      var d = document,
        s = d.createElement("script");
      s.src = `https://${shortname}.disqus.com/embed.js`;
      s.setAttribute("data-timestamp", +new Date());
      s.async = true;
      d.body.appendChild(s);
    }
  }, [identifier, title, url]);

  return <div id="disqus_thread" className="mt-10 w-full"></div>;
};

export default DisqusComments;
