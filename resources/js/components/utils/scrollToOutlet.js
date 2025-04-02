export const scrollToOutlet = () => {
    // Görgessünk le az Outlet-hez
    const outletElement = document.getElementById('outlet');
    if (outletElement) {
      outletElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  