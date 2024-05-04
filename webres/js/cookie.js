/**
 * @Author Hxgfk
 */

function getCookie(cookie_name) {
    const name = cookie_name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function clearCookie(name) {
    setCookie(name, "", -1);
}

function setCookie(cookie_name, cookie_value, remove_days) {
    const d = new Date();
    let expires;
    if (remove_days === null) {
        d.setTime(d.getTime() + (remove_days * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toUTCString();
    } else {
        expires = null;
    }
    document.cookie = cookie_name + "=" + cookie_value + "; " + expires;
}