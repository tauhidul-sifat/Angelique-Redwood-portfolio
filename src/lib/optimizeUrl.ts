import url from "url";

export function optimizeUrl(inputUrl: string) {
  const { protocol, pathname } = url.parse(inputUrl, true);
  if (protocol === "https:" || protocol === "http:") {
    return inputUrl;
  } else {
    if (protocol === "wix:") {
      const targetPath = pathname!.split("/")[3];
      return `https://static.wixstatic.com/media/${targetPath}`;
    }
    throw new Error(
      "Error ocurrying from Image URL optimization module: " +
        "error base on " +
        inputUrl
    );
  }
}
