function pxToRem(pxValue) {
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const remValue = pxValue / rootFontSize;
    return remValue;
}

function pxToEm(pxValue) {
    const parentFontSize = parseFloat(getComputedStyle(document.body).fontSize);
    const emValue = pxValue / parentFontSize;
    return emValue;
  }

function startAnimation() {
    // Run Vanta
    var effect = VANTA.NET({
        el: "#sidebar_vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x74AFC7,
        backgroundColor: 0x6A9FB5,
        spacing: 16.00
    });


    // Size listener
    function observer() {
        const w = sidebar_container.offsetWidth;
        const h = sidebar_container.offsetHeight;
        const items = ['sidebar_vanta', 'sidebar_back'];
        items.forEach((element) => {
            document.getElementById(element).setAttribute("style", `width:${w}px`);
            document.getElementById(element).setAttribute("style", `height:${h}px`);
        });
        
        effect.resize();
    }

    new ResizeObserver(observer).observe(sidebar_container);

}