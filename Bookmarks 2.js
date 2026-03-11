function assignTabClasses() {
    document.querySelectorAll('.emby-tab-button').forEach(btn => {
        const text = btn.textContent.trim().toLowerCase();

        if (text.includes('fernsehsender') || text.includes('live tv')) {
            btn.style.display = 'none';
            return;
        }

        btn.classList.remove(
            'tab-home','tab-favorites','tab-watchlist','tab-bookmarkadd',
            'tab-filme','tab-vorschlaege','tab-favoriten','tab-sammlungen','tab-genres',
            'tab-serien','tab-demnaechst','tab-folgen',
            'tab-musik','tab-alben','tab-kuenstler','tab-playlisten',
            'tab-fotos','tab-buecher','tab-personen','tab-studios','tab-tags','tab-jahre'
        );

        if      (text.includes('start'))                                       btn.classList.add('tab-home');
        else if (text.includes('watch'))                                       btn.classList.add('tab-watchlist');
        else if (text.includes('bookmark'))                                    btn.classList.add('tab-bookmarkadd');
        else if (text.includes('favorit'))                                     btn.classList.add('tab-favorites');
        else if (text.includes('filme')      || text.includes('movies'))      btn.classList.add('tab-filme');
        else if (text.includes('vorschläge') || text.includes('suggestions')) btn.classList.add('tab-vorschlaege');
        else if (text.includes('sammlung')   || text.includes('collection'))  btn.classList.add('tab-sammlungen');
        else if (text.includes('genre'))                                       btn.classList.add('tab-genres');
        else if (text.includes('serien')     || text.includes('shows'))       btn.classList.add('tab-serien');
        else if (text.includes('demnächst')  || text.includes('upcoming'))    btn.classList.add('tab-demnaechst');
        else if (text.includes('folgen')     || text.includes('episodes'))    btn.classList.add('tab-folgen');
        else if (text.includes('musik')      || text.includes('music'))       btn.classList.add('tab-musik');
        else if (text.includes('alben')      || text.includes('albums'))      btn.classList.add('tab-alben');
        else if (text.includes('künstler')   || text.includes('artists'))     btn.classList.add('tab-kuenstler');
        else if (text.includes('playlist'))                                    btn.classList.add('tab-playlisten');
        else if (text.includes('foto')       || text.includes('photo'))       btn.classList.add('tab-fotos');
        else if (text.includes('buch')       || text.includes('book'))        btn.classList.add('tab-buecher');
        else if (text.includes('person')     || text.includes('people'))      btn.classList.add('tab-personen');
        else if (text.includes('studio'))                                      btn.classList.add('tab-studios');
        else if (text.includes('tag'))                                         btn.classList.add('tab-tags');
        else if (text.includes('jahr')       || text.includes('year'))        btn.classList.add('tab-jahre');
    });
}

const observer = new MutationObserver(assignTabClasses);
observer.observe(document.body, { childList: true, subtree: true });
assignTabClasses();
