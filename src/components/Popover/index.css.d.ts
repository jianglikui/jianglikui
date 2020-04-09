declare namespace IndexCssModule {
  export interface IIndexCss {
    content: string;
    hide: string;
    hideAnim: string;
    show: string;
    showAnim: string;
  }
}

declare const IndexCssModule: IndexCssModule.IIndexCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexCssModule.IIndexCss;
};

export = IndexCssModule;
