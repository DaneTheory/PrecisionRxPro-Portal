const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 739.90059 744.62525" id="logoIcon">
      <defs/>
      <circle cx="367.665"
              cy="371.586"
              r="141.192"
              fill="#91c971" transform="matrix(1.14282 0 0 1.11952 -47.2755 -48.08322)"
              className="inner_circle"/>
      <path fill="#FFFFFF" d="M569.80865 192.77401999999998a266.86217 269.39197-41.80466 10-397.86241 355.7628 266.86217 269.39197-41.80466 10397.86242-355.7628zM510.72313 245.60745a186.02198 187.60012 48.19962 01-279.69134 250.09594 186.02198 187.60012 48.19962 01279.69134-250.09594z" paint-order="stroke"
      className="center_circle"/>
      <path d="M334.53 0h71.954c.667.224 1.347.404 2.038.539 4.752.628 9.517 1.167 14.263 1.835 22.959 3.234 45.556 8.658 67.482 16.196 132.117 45.482 227.55 161.236 247.004 299.601 1.439 10.292 2.687 20.609 2.628 31.043-.076 13.355-.006 26.711-.028 40.066-.005 3.118.025 6.248-.224 9.351-1.619 21.057-5.11 41.926-10.433 62.363-23.908 90.698-74.864 162.394-152.124 215.297-38.261 26.199-80.325 44.007-125.538 54.289-12.227 2.78-24.553 5.091-37.011 6.639-10.953 1.361-21.947 2.175-32.977 2.512-13.106.42-26.226.135-39.302-.856-10.836-.836-21.582-2.335-32.311-4.155-36.668-6.218-71.759-17.283-104.948-34.058-73.258-37.027-128.351-92.392-165.475-165.535-21.822-42.98-34.887-89.867-38.436-137.939-1.663-21.539-1.426-43.183.711-64.68 1.855-18.864 5.187-37.553 9.966-55.895 17.422-66.733 50.464-124.545 100.043-172.479C172.706 45.26 245.314 10.847 329.635.893c1.644-.196 3.264-.591 4.895-.893zm328.495 369.247c-.368-157.906-126.237-291.149-290.212-292.682-157.49-1.472-293.25 124.089-294.884 290.04-1.555 158.016 124.546 294.318 291.518 294.984 162.052.647 293.577-130.856 293.578-292.342z"
      className="outer_circle"/>
      <path className="arrow_overlay" fill="#fff" d="M98.727 531.676l-42.791 34.277-4.681 3.75c62.855 97.883 188.092 162.938 285.492 174.743 1.391.073 2.779.121 4.169.179l10.514-76.36 25.838-187.663 39.214 18.737-53.622-140.303-.417-1.091-157.662 41.67 37.029 17.443L99.574 530.997"/>



        <style jsx>{
          `
            #logoIcon {
              max-width: 5em;
  margin: 1.5em 3em;
            }

            .inner_circle {
              stroke: rgb(111 167 148);
            stroke-width: 1em;
            fill: #65ff88;
            }

            .outer_circle {
              fill: rgb(255 255 255 / 37%);
    stroke: rgb(58 247 179 / 78%);
    stroke-width: 0.5em;
            }

            .arrow_overlay {
              fill: rgb(0 0 0 / 75%);
          stroke: #e0e0e0;
          stroke-width: 0em;
            }

          `
        }</style>
    </svg>
  )
}


export default Logo
