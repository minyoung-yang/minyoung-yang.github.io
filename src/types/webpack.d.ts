type WebpackContext = {
  keys: () => string[];
  <T = unknown>(_id: string): T;
};

type WebpackRequire = {
  context: (
    _directory: string,
    _useSubdirectories: boolean,
    _regExp: RegExp,
  ) => WebpackContext;
};

declare const require: WebpackRequire;
