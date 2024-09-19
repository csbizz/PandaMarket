const CONSTANTS = Object.freeze({
  BEST_ITEM_PAGE_SIZE: Object.freeze({
    PC: 4,
    TABLET: 2,
    MOBILE: 1,
  }),
  BUNDLE_SIZE: 5,
  ITEM_PAGE_SIZE: Object.freeze({
    PC: 10,
    TABLET: 6,
    MOBILE: 4,
  }),
  SORT_ORDER: Object.freeze({
    RECENT: 'recent',
    // FAVORITE: 'favorite'
  }),
  SORT_ORDER_MSG: Object.freeze({
    [this.SORT_ORDER.RECENT]: '최신순',
    // [this.SORT_ORDER.FAVORITE]: '좋아요순'
  }),
  VIEWPORT: Object.freeze({
    PC: 'PC',
    TABLET: 'TABLET',
    MOBILE: 'MOBILE',
  }),
  BREAKPOINTS: Object.freeze({
    MOBILE: 743,
    TABLET: 1199,
  }),
});

export default CONSTANTS;
