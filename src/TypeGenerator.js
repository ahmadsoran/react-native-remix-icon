const fs = require("fs");
const path = require("path");
// node script to generate index.d.ts file
// use "node TypeGenerator.js" to run this script
let icons = [];
// read index.js exports name and add to icons array
fs.readFileSync(path.resolve(__dirname, "./icons/index.js"), "utf8")
  .match(/export \{ default as (\w+) \} from "\.\/(\w+)";/g)
  .map(icon => {
    const name = icon
      .match(/export \{ default as (\w+) \} from "\.\/(\w+)";/)[1]
      .toString();
    icons.push({ name });
  });

// create index.d.ts file add this type
fs.writeFileSync(
  path.resolve(__dirname, "./index.d.ts"),
  `declare interface RemixIconProps {
    name: ${icons.map(icon => '"' + icon.name + '"').join(" | ")};
    size?: number | string;
    color?: string;
    [key: string]: any;
  }
  declare const RemixIcon: React.FC<RemixIconProps>;
  export default RemixIcon;`
);
