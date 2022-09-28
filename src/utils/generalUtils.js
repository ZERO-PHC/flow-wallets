export const handleAction = async (
  type,
  resource,
  router,
  setOpenSearch,
  setSelectedFeatures,
  SelectedFeatures,
  path,
  currentPage
) => {
  if (type === "feature" && currentPage !== "/") {
    await router.push("/");
    scrollToBottom(
      setOpenSearch,
      resource,
      setSelectedFeatures,
      SelectedFeatures
    );
  } else if (type === "feature" && currentPage === "/") {
    scrollToBottom(
      setOpenSearch,
      resource,
      setSelectedFeatures,
      SelectedFeatures
    );
  } else {
    handleNav(type, resource, router, setOpenSearch, path);
  }
};

export const scrollToBottom = (
  setOpenSearch,
  id,
  setSelectedFeatures,
  SelectedFeatures
) => {
  setOpenSearch(false);
  setSelectedFeatures([...SelectedFeatures, id]);

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

export const handleNav = (type, resource, router, setOpenSearch, path) => {
  setOpenSearch(false);
  if (type !== "guide") {
    router.push(`/${type}/${resource}`);
  } else {
    router.push(`/${type}/${path}`);
  }
};
