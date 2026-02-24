document.addEventListener('viewshow', function() {
    setTimeout(function() {
        const bookmarkTab = document.getElementById('customTabButton_1');
        if (bookmarkTab && !bookmarkTab._bookmarkListenerAdded) {
            bookmarkTab._bookmarkListenerAdded = true;
            bookmarkTab.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                Emby.Page.show('/userpluginsettings.html?pageUrl=/JellyfinEnhanced/bookmarksPage');
            });
        }
    }, 1000);
});
