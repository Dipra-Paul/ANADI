function navigate(page) {
    if (page.startsWith('playlist')) {
        window.location.href = `./${page}/index.html`;
    }
}
