const smoothScroll = () => {
    const htmlPage = document.querySelector('html');
    htmlPage.style.scrollBehavior = 'smooth';
};

export default smoothScroll;