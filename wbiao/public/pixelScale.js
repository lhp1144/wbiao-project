// 配置scale
(function() {
    let scale = 1 / window.devicePixelRatio;
    document.write(`
        <meta name="viewport" content="width=device-width,initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no">
    `);
    let unit = window.innerWidth / 750;
    document.write(`
        <style>
            * {
                position: relative;
            }

            html, body {
                font-size: ${100 * unit}px;
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;
            }

            body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select,figure,figcaption{
                margin:0;
                padding:0;	
            }
            h1,h2,h3,h4,h5,h6,b,strong{
                font-weight:normal;	
                font-size:100%;
            }
            i,em{
                font-style:normal;	
            }
            input{
                outline:none;
            }
            li{
                list-style:none;
            }
            a{
                text-decoration:none;	
            }
        </style>
    `);
})();


