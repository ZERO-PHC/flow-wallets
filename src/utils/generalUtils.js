export const handleAction = (type, resource, router, setOpenSearch, setSelectedFeatures, SelectedFeatures) => {
    type === "feature" ? scrollToBottom(setOpenSearch, resource, setSelectedFeatures, SelectedFeatures) : handleNav(type,resource, router, setOpenSearch);
  };
  
export const scrollToBottom = (setOpenSearch, id, setSelectedFeatures, SelectedFeatures) => {
      setOpenSearch(false);
      setSelectedFeatures([...SelectedFeatures, id]);
      // scroll to bottom of page
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    };
    

export const handleNav = (type, resource, router, setOpenSearch) => {
  // if it isnt 3 or 4 close the search
  (resource !== 3 || resource !== 4 ) && setOpenSearch(false);
  router.push(`/${type}/${resource}`);
}
  