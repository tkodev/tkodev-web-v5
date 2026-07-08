import { forwardRef, type SVGAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('text-muted-foreground aspect-1168/896'),
  center: cva('', {
    variants: {
      variant: {
        loading: 'fill-background light'
      }
    }
  }),
  logo: cva(
    [
      'mix-blend-exclusion',
      'svg-origin origin-center transition-all duration-1000 hover:scale-105'
    ],
    {
      variants: {
        position: {
          1: 'animate-slide-down',
          2: 'animate-fade-in',
          3: 'animate-slide-up'
        }
      }
    }
  ),
  lines: cva('mix-blend-exclusion')
}

type ReticleRef = SVGSVGElement
type ReticleProps = SVGAttributes<ReticleRef> &
  VariantProps<typeof styles.root> &
  VariantProps<typeof styles.circle>

const Reticle = forwardRef<ReticleRef, ReticleProps>((props, ref) => {
  // props
  const { className, ...rest } = props

  // render vars
  const opacity = 0.2

  // jsx
  return (
    <svg
      ref={ref}
      className={cn(styles.root({ className }))}
      aria-hidden="true"
      fill="none"
      viewBox="0 0 1168 896"
      xmlns="http://www.w3.org/2000/svg"
      height="896"
      width="1168"
      {...rest}
    >
      <g className={cn(styles.lines())}>
        <g opacity={opacity}>
          <line stroke="currentColor" x1="289.354" x2="879.354" y1="152.646" y2="742.646" />
          <line stroke="currentColor" x1="782.354" x2="386.354" y1="250.354" y2="646.354" />
          <circle cx="584" cy="448" r="447.5" stroke="currentColor" />
          <circle cx="584" cy="448" r="347.5" stroke="currentColor" strokeWidth="25" />
          <rect rx="239.5" stroke="currentColor" x="344.5" y="208.5" height="479" width="479" />
          <rect rx="149.5" stroke="currentColor" x="434.5" y="298.5" height="299" width="299" />
          <line stroke="currentColor" x2="200" y1="447.5" y2="447.5" />
          <line stroke="currentColor" x1="968" x2="1168" y1="447.5" y2="447.5" />
        </g>
      </g>
      <g className={cn(styles.logo({ position: 1 }))}>
        <g opacity={opacity}>
          <path
            d="M847.936 180.988C849.466 185.515 850.258 190.25 850.275 195.02V264.926C850.275 270.932 849.058 276.881 846.692 282.431C844.326 287.982 840.857 293.028 836.482 297.279C832.107 301.53 826.912 304.903 821.193 307.206C815.473 309.508 809.341 310.693 803.149 310.693H755.022C744.094 310.714 733.518 307.026 725.11 300.292L740.793 285.038C744.971 287.849 749.935 289.356 755.024 289.351V289.352H803.047C806.331 289.352 809.583 288.724 812.618 287.503C815.653 286.281 818.413 284.489 820.739 282.229C823.065 279.969 824.911 277.284 826.171 274.327C827.432 271.37 828.081 268.2 828.081 264.998V200.23L847.936 180.988Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M755.024 149.25H803.049C813.977 149.233 824.552 152.922 832.963 159.653L817.362 174.917C813.191 172.106 808.233 170.599 803.149 170.605H755.024C751.731 170.598 748.468 171.223 745.423 172.444C742.377 173.666 739.607 175.461 737.274 177.729C734.941 179.996 733.091 182.691 731.83 185.658C730.57 188.625 729.924 191.805 729.932 195.017V259.785L710.144 279.015C708.659 274.499 707.899 269.786 707.898 265.04V195.017C707.899 182.888 712.857 171.25 721.691 162.665C730.527 154.079 742.517 149.25 755.024 149.25Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M568.495 288.298L568.191 288.004L525.66 246.686L541.229 231.557L583.788 272.928C587.97 276.99 590.373 282.449 590.521 288.167L590.528 288.722V310.75H568.495V288.298Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M470.164 149V234.374L471.86 232.729L558.227 149H589.532L470.468 264.429L470.164 264.724V311H448V149H470.164Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M330.942 149.25V170.605H270.857V310.75H248.809V170.605H188.725V149.25H330.942Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
          />
        </g>
      </g>
      <g className={cn(styles.logo({ position: 2 }))}>
        <g opacity={opacity}>
          <path
            d="M911.936 398.988C913.466 403.515 914.258 408.25 914.275 413.02V482.926C914.275 488.932 913.058 494.881 910.692 500.431C908.326 505.982 904.857 511.028 900.482 515.279C896.107 519.53 890.912 522.903 885.193 525.206C879.473 527.508 873.341 528.693 867.149 528.693H819.022C808.094 528.714 797.518 525.026 789.11 518.292L804.793 503.038C808.971 505.849 813.935 507.356 819.024 507.351V507.352H867.047C870.331 507.352 873.583 506.724 876.618 505.503C879.653 504.281 882.413 502.489 884.739 500.229C887.065 497.969 888.911 495.284 890.171 492.327C891.432 489.37 892.081 486.2 892.081 482.998V418.23L911.936 398.988Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M819.024 367.25H867.049C877.977 367.233 888.552 370.922 896.963 377.653L881.362 392.917C877.191 390.106 872.233 388.599 867.149 388.605H819.024C815.731 388.598 812.468 389.223 809.423 390.444C806.377 391.666 803.607 393.461 801.274 395.729C798.941 397.996 797.091 400.691 795.83 403.658C794.57 406.625 793.924 409.805 793.932 413.017V477.785L774.144 497.015C772.659 492.499 771.899 487.786 771.898 483.04V413.017C771.899 400.888 776.857 389.25 785.691 380.665C794.527 372.079 806.517 367.25 819.024 367.25Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M632.495 506.298L632.191 506.004L589.66 464.686L605.229 449.557L647.788 490.928C651.97 494.99 654.373 500.449 654.521 506.167L654.528 506.722V528.75H632.495V506.298Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M534.164 367V452.374L535.86 450.729L622.227 367H653.532L534.468 482.429L534.164 482.724V529H512V367H534.164Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M394.942 367.25V388.605H334.857V528.75H312.809V388.605H252.725V367.25H394.942Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
          />
        </g>
      </g>
      <g className={cn(styles.logo({ position: 3 }))}>
        <g opacity={opacity}>
          <path
            d="M975.936 616.988C977.466 621.515 978.258 626.25 978.275 631.02V700.926C978.275 706.933 977.058 712.881 974.692 718.431C972.326 723.982 968.857 729.028 964.482 733.279C960.107 737.53 954.912 740.904 949.193 743.206C943.473 745.508 937.341 746.693 931.149 746.693H883.022C872.094 746.714 861.518 743.027 853.11 736.292L868.793 721.038C872.971 723.849 877.935 725.356 883.024 725.351V725.352H931.047C934.331 725.352 937.583 724.724 940.618 723.503C943.653 722.281 946.413 720.489 948.739 718.229C951.065 715.969 952.911 713.284 954.171 710.327C955.432 707.37 956.081 704.2 956.081 700.998V636.23L975.936 616.988Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M883.024 585.25H931.049C941.977 585.233 952.552 588.922 960.963 595.653L945.362 610.917C941.191 608.106 936.233 606.599 931.149 606.605H883.024C879.731 606.598 876.468 607.223 873.423 608.444C870.377 609.666 867.607 611.461 865.274 613.729C862.941 615.996 861.091 618.691 859.83 621.658C858.57 624.625 857.924 627.805 857.932 631.017V695.785L838.144 715.015C836.659 710.499 835.899 705.786 835.898 701.04V631.017C835.899 618.888 840.857 607.25 849.691 598.665C858.527 590.079 870.517 585.25 883.024 585.25Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M696.495 724.298L696.191 724.004L653.66 682.686L669.229 667.557L711.788 708.928C715.97 712.99 718.373 718.449 718.521 724.167L718.528 724.722V746.75H696.495V724.298Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M598.164 585V670.374L599.86 668.729L686.227 585H717.532L598.468 700.429L598.164 700.724V747H576V585H598.164Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M458.942 585.25V606.605H398.857V746.75H376.809V606.605H316.725V585.25H458.942Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
          />
        </g>
      </g>
    </svg>
  )
})
Reticle.displayName = 'Reticle'

export { Reticle }
export type { ReticleProps, ReticleRef }
