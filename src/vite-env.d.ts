// eslint-disable-next-line
// TypeScript ambient module declaration for SVG imports

declare module '*.svg' {
  const content: string;
  export default content;
}
