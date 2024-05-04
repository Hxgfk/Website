/**
@Author Hxgfk
 */

function encodeBase64(str){
    return window.btoa(
        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
            }
        )
    );

}

function decodeBase64(str){
    return decodeURIComponent(
        window.atob(str).split('').map(
            function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }
        ).join(''));
}