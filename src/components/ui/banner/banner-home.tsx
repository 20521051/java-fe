import React from "react";
import TextCustomUnderline from "./text-custom-underline";
import BedsideCabinet from "../../../../public/bedside_cabinet.png";
import Button from "../../form/button/button";

export default function BannerHome() {
  return (
    <div className="grid grid-cols-2 px-[75px] gap-x-28 bg-scarlet">
      <div className="flex flex-col justify-center">
        <p className="capitalize text-body-1">Interior Needs</p>
        <h3 className="text-heading-3 mt-5 leading-[60px] mb-[30px] font-bold">
          Various
          <TextCustomUnderline text=" new collections " />
          of furniture to decorate the corner of your house.
        </h3>
        <Button
          title="Shop now"
          variant="secondary"
          className="px-[60px] w-fit py-5 capitalize text-heading-6"
        />
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 600 600"
          opacity="1"
        >
          <defs>
            <clipPath id="shape">
              <path
                d="M294.61077880859375,107.78443145751953C259.7305374145508,117.36526997884114,226.49700673421225,132.93413416544595,207.4850311279297,164.3712615966797C188.47305552164713,195.80838902791342,167.96407318115234,259.88025156656903,180.53892517089844,296.4071960449219C193.11377716064453,332.9341405232747,240.26947275797525,380.53892008463544,282.93414306640625,383.5329284667969C325.5988133748372,386.5269368489583,416.9161682128906,343.4131622314453,436.5269470214844,314.3712463378906C456.1377258300781,285.32933044433594,403.89222717285156,243.86226908365884,400.59881591796875,209.28143310546875C397.30540466308594,174.70059712727866,434.43115234375,123.80239741007487,416.7664794921875,106.88623046875C399.101806640625,89.97006352742513,329.4910202026367,98.20359293619792,294.61077880859375,107.78443145751953C259.7305374145508,117.36526997884114,226.49700673421225,132.93413416544595,207.4850311279297,164.3712615966797"
                fill="hsl(340, 45%, 50%)"
                transform="matrix(1.782421047822822,0,0,1.782421047822822,-250.40259540839082,-128.49267633581894)"
                strokeWidth="0"
                stroke="hsl(340, 45%, 30%)"
                fillOpacity="0.05"
              ></path>
            </clipPath>
          </defs>
          <path
            d="M271.93422336600804 110.30404665787057C237.05398197196507 119.88488517919218 203.82045129162654 135.453749365797 184.80847568534398 166.89087679703073C165.79650007906142 198.32800422826446 145.28751773856663 262.39986676692007 157.86236972831273 298.9268112452729C170.43722171805882 335.45375572362576 217.59291731538954 383.0585352849865 260.25758762382054 386.0525436671479C302.9222579322515 389.04655204930935 394.2396127703049 345.93277743179635 413.85039157889867 316.89086153824167C433.4611703874924 287.848945644687 381.21567173026585 246.38188428400989 377.92226047538304 211.8010483058198C374.62884922050023 177.2202123276297 411.7545969011643 126.32201261042592 394.0899240496018 109.40584566910104C376.4252511980393 92.48967872777617 306.814464760051 100.72320813654896 271.93422336600804 110.30404665787057C237.05398197196507 119.88488517919218 203.82045129162654 135.453749365797 184.80847568534398 166.89087679703073 "
            fillOpacity="0.8"
            fill="hsl(170, 42%, 26%)"
            opacity="1"
            strokeOpacity="1"
            strokeWidth="0"
            stroke="hsl(170, 42%, 26%)"
            transform="matrix(1.7824210478228228,-2.220446049250313e-16,2.220446049250313e-16,1.7824210478228228,-166.6076582746016,-113.09343011999908)"
          ></path>
          <image xlinkHref="/vase.jpg" clipPath="url(#shape)" />
        </svg>

        {/* <svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					xmlns:svgjs="http://svgjs.dev/svgjs"
					viewBox="0 0 600 600"
					opacity="1"
				>
					<path
						d="M294.1068536455309 108.28835662058236C259.22661225148795 117.86919514190397 225.99308157114942 133.43805932850879 206.98110596486686 164.87518675974252C187.9691303585843 196.31231419097625 167.4601480180895 260.38417672963186 180.0350000078356 296.9111212079847C192.6098519975817 333.43806568633755 239.76554759491242 381.04284524769827 282.4302179033434 384.0368536298597C325.0948882117744 387.03086201202115 416.4122430498278 343.91708739450814 436.02302185842154 314.87517150095346C455.6338006670153 285.83325560739877 403.38830200978873 244.36619424672168 400.0948907549059 209.78535826853158C396.8014795000231 175.2045222903415 433.92722718068717 124.3063225731377 416.26255432912467 107.39015563181283C398.59788147756217 90.47398869048796 328.9870950395739 98.70751809926075 294.1068536455309 108.28835662058236C259.22661225148795 117.86919514190397 225.99308157114942 133.43805932850879 206.98110596486686 164.87518675974252 "
						fill="hsl(340, 45%, 50%)"
						transform="matrix(1.782421047822822,0,0,1.782421047822822,-250.40259540839077,-128.492676335819)"
						stroke-width="0"
						stroke="hsl(340, 45%, 30%)"
						fill-opacity="1"
					></path>
					
					<defs></defs>
				</svg> */}
      </div>
    </div>
  );
}
