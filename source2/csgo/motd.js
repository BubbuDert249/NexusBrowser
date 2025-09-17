"use strict";

function OpenURL(url) {
    SteamOverlay.OpenWebPage(url);
}

function OnLoad() {
}

$.RegisterEventHandler("PanoramaComponentReady", $.GetContextPanel(), OnLoad);
