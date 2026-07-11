const pages = {
    fallback: `
        <h1>Select a Navigation point.</h1>
        <p>There is currently no Navigation point selected or a error occurred.</p>
    `,
    about: `
        <h1>About.</h1>
        <p>Missed Network is the baise for everything that was branded as lain.onl or currently hosted by me Aqua.</p>
        <p>The main Idea behind the Missed Network was that I wanted to get away from lain.onl as a branding becuase the domain is pretty expensive and i want to have the freedom to change it when i want.</p>
    `,
    collab: `
        <h1>Collabs</h1>
        <p>Collabs are always open if u want ur site linked under the Missed Network.</p>
        <p>There are no real rules for it just hit me up and we cant talk. U have to expect that i will not allow anything tho, like it should be leagal.</p>
    `,
    rules: `
        <p>Keep it small, keep it personal, no trackers, no ads.</p>
        <p>Sites should be hand-built — no site builders or templates.</p>
    `,
    contact: `
        <h1>Contact</h1>
        <p>If u want to reach out every platfrom is open for that but some are slower then others i would suggest</p>
        <p>Via mail: </p><a href="mailto:cat@grisu.app">Aqua</a> <br>
        <p>or over Discord: aquafrostbyte</p>
    `
};

function loadPage(pageId) {
    const body = document.getElementById('content-body');
    body.innerHTML = pages[pageId] || '<p>Page not found.</p>';
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.classList.toggle('active', link.dataset.page === pageId);
    });
}

document.querySelectorAll('.sidebar a[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        loadPage(link.dataset.page);
    });
});

loadPage('fallback');