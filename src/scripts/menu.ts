export {};
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton: HTMLElement | null =
    document.querySelector(".nav__button");
  const mobileNav: HTMLElement | null = document.querySelector(".mobile-nav");

  mobileMenuButton?.addEventListener("click", () => {
    mobileNav?.classList.toggle("active");
    mobileMenuButton?.classList.toggle("nav__button--active");
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileNav &&
      !mobileNav.contains(event.target as Node) &&
      !mobileMenuButton?.contains(event.target as Node)
    ) {
      mobileNav.classList.remove("active");
      mobileMenuButton?.classList.remove("nav__button--active");
    }
  };

  mobileNav?.addEventListener("click", (event: MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains("mobile-nav__link")) {
      mobileNav.classList.remove("active");
      mobileMenuButton?.classList.remove("nav__button--active");
    }
  });

  document.addEventListener("click", handleClickOutside);
});
