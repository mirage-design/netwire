declare module "react-full-page" {
  type ControlComponentsProps = {
    getCurrentSlideIndex: () => number;
    onNext: () => void;
    onPrev: () => void;
    scrollToSlide: (n: number) => void;
    slidesCount: number;
    children?: React.ReactNode;
  };

  type FullPageProps = {
    initialSlide?: number;
    duration?: number;
    controls?: boolean | React.FC<ControlComponentsProps>;
    controlProps?: any;
    beforeChange?: () => void;
    afterChange?: () => void;
    scrollMode?: "full-page" | "normal";
    children?: React.ReactNode;
  };
  export const FullPage: React.FC<FullPageProps>;

  export const Slide: React.FC<{ children?: React.ReactNode }>;
}
